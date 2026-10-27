import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";
import { config } from "../config/config";

export class HttpService {
  static async request<T>(
    method: Method,
    endpoint: string,
    data?: any,
    customHeaders?: Record<string, string>
  ): Promise<AxiosResponse<T>> {
    const headers = {
      accept: "application/json, text/plain, */*",
      cookie: config.cookie,
      ...customHeaders,
    };

    const axiosConfig: AxiosRequestConfig = {
      method,
      url: `${endpoint}`,
      headers,
      ...(data &&
        (["POST", "PUT", "PATCH"].includes(method.toUpperCase())
          ? { data }
          : {})),
    };

    try {
      console.log("URL: ", config.baseURL);
      console.log("AXIOS CONFIG: ", axiosConfig);
      const response = await axios.request<T>(axiosConfig);

      return response;
    } catch (error: any) {
      // Pode customizar o erro aqui, logar, etc.
      throw error;
    }
  }

  static get<T>(endpoint: string, headers?: Record<string, string>) {
    return this.request<T>("GET", endpoint, undefined, headers);
  }

  static post<T>(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>
  ) {
    return this.request<T>("POST", endpoint, data, headers);
  }

  static put<T>(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>
  ) {
    return this.request<T>("PUT", endpoint, data, headers);
  }

  static patch<T>(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>
  ) {
    return this.request<T>("PATCH", endpoint, data, headers);
  }

  static delete<T>(endpoint: string, headers?: Record<string, string>) {
    return this.request<T>("DELETE", endpoint, undefined, headers);
  }
}
