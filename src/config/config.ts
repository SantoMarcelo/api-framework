import dotenv from "dotenv";
dotenv.config();

// Configurações do ambiente
export const config = {
  baseURL: "http://localhost:3002/api",
  authToken:
    "s%3AhSfJQcHrPkHWYQlJ1c7HgaNg4WALQR0X.5VNjI2R02YOEYztpILgqAwt1gbaIUzfxZb%2FWNhg1MiY", // Atualize aqui o token real
  maxResponseTimeMs: 1000, // 1 segundo por padrão
  cookie: process.env.COOKIE,
};
