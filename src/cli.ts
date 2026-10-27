import { SwaggerService } from "./services/swaggerService";
import { AuthService } from "./services/authService";

const swaggerPath = process.argv[2];

if (!swaggerPath) {
  console.error("Por favor, informe o caminho do arquivo Swagger.");
  process.exit(1);
}

async function main() {
  //await AuthService.authenticate();
  const swaggerService = new SwaggerService();
  await swaggerService.loadSwagger(swaggerPath);
  swaggerService.generateAllTests();
}

main();
