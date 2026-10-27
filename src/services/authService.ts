import axios from "axios";
import { config } from "../config/config";
import fs from "fs";
import dotenv from "dotenv";
import path from "path";
import _ from "lodash";

dotenv.config();

export class AuthService {
  static async authenticate() {
    const url = `${process.env.AUTH_API_URL}${process.env.API_AUTH_ENDPOINT}`;
    const method = process.env.API_AUTH_METHOD || "post";
    const payload = process.env.API_AUTH_PAYLOAD || "{}";

    const response = await axios.request({
      url,
      method,
      data: method.toLowerCase() !== "get" ? payload : undefined,
      params: method.toLowerCase() === "get" ? payload : undefined,
    });

    const tokenPath = process.env.API_AUTH_TOKEN_PATH || "token";
    const token = _.get(response.headers, tokenPath);

    if (!token) {
      throw new Error(`Token não encontrado no caminho '${tokenPath}'`);
    }

    AuthService.updateEnvVariable("API_TOKEN", token); // ou API_TOKEN, como preferir
    console.log("Token atualizado no arquivo .env com sucesso.", token);
  }

  static updateEnvVariable(key: string, value: string) {
    const envPath = path.resolve(__dirname, "../../.env");
    const envFile = fs.readFileSync(envPath, "utf-8");
    const updatedEnv = envFile
      .split("\n")
      .map((line) => (line.startsWith(`${key}=`) ? `${key}=${value}` : line))
      .join("\n");

    fs.writeFileSync(envPath, updatedEnv);
    dotenv.config({ path: envPath }); // recarrega variáveis
  }
}
