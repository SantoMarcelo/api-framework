# Framework de Automação de Testes para APIs

Este framework foi desenvolvido para automatizar a geração de testes de APIs a partir de arquivos Swagger. Ele gera automaticamente testes de health check, contrato e funcionais (positivos e alternativos) utilizando o Jest como framework de testes.

## Estrutura do Projeto

```
api-test-framework/
├── src/                      # Código fonte do framework
│   ├── SwaggerReader.js      # Classe para leitura e parsing do Swagger
│   ├── testGenerator.js      # Gerador de testes automatizados
│   └── payloadGenerator.js   # Gerador de payloads para testes
├── tests/                    # Testes gerados automaticamente
│   ├── health-check/         # Testes de health check
│   ├── contract/             # Testes de contrato
│   └── functional/           # Testes funcionais
│       ├── positive/         # Testes de cenários positivos
│       └── alternative/      # Testes de cenários alternativos
├── payloads/                 # Payloads gerados para testes
├── index.js                  # Ponto de entrada do framework
├── jest.config.js            # Configuração do Jest
└── exemplo-swagger.json      # Exemplo de arquivo Swagger
```

## Requisitos

- Node.js (v14 ou superior)
- NPM (v6 ou superior)

## Instalação

1. Clone o repositório ou extraia os arquivos para o diretório desejado
2. Instale as dependências:

```bash
npm install
```

## Como Usar

### Gerando Testes a partir de um Arquivo Swagger

```bash
node index.js <caminho-do-arquivo-swagger>

Script:
npm run generate:tests
```

Exemplo:

```bash
node index.js exemplo-swagger.json
```

Isso irá:
1. Analisar o arquivo Swagger
2. Gerar testes de health check, contrato e funcionais
3. Gerar payloads para endpoints PUT, PATCH e POST
4. Salvar todos os arquivos nas pastas correspondentes

### Executando os Testes

Para executar todos os testes gerados:

```bash
npm test
```

Para executar os testes e gerar um relatório HTML:

```bash
npm run test:report
```

O relatório HTML será gerado no arquivo `test-report.html` na raiz do projeto.

### Configurando o Ambiente de Testes

Antes de executar os testes, você pode configurar as seguintes variáveis de ambiente:

- `API_BASE_URL`: URL base da API a ser testada (padrão: http://localhost:3000)
- `<PARAM>_TEST_VALUE`: Valor para substituir parâmetros de caminho (ex: ID_TEST_VALUE=123)

Exemplo:

```bash
API_BASE_URL=https://api.exemplo.com ID_TEST_VALUE=123 npm test
```

## Tipos de Testes Gerados

### Testes de Health Check

Verificam se os endpoints estão acessíveis e respondem corretamente. Estes testes são úteis para validar a disponibilidade da API.

### Testes de Contrato

Validam se as respostas da API seguem o contrato definido no Swagger, verificando:
- Estrutura da resposta
- Propriedades obrigatórias
- Tipos de dados

### Testes Funcionais Positivos

Testam cenários de uso normal da API, verificando:
- Status de sucesso
- Dados válidos na resposta
- Consistência entre chamadas consecutivas (para endpoints GET)

### Testes Funcionais Alternativos

Testam cenários alternativos e de erro, como:
- Payloads inválidos
- Parâmetros de caminho inválidos
- Métodos HTTP não permitidos
- Autenticação inválida

## Payloads Gerados

Para endpoints que aceitam corpo na requisição (PUT, PATCH, POST), o framework gera:

- Payloads válidos baseados no esquema do Swagger
- Variações de payloads para testes alternativos:
  - Propriedades obrigatórias ausentes
  - Tipos de dados inválidos
  - Propriedades adicionais não definidas no esquema
  - Payload vazio
  - Payload nulo

## Customização

### Configuração do Jest

Você pode personalizar a configuração do Jest editando o arquivo `jest.config.js`.

### Relatório HTML

O relatório HTML pode ser personalizado modificando as opções no arquivo `jest.config.js`, na seção `reporters`.

## Limitações e Considerações

- O framework assume que a API segue as convenções RESTful
- Para testes completos, a API deve estar em execução
- Alguns testes podem falhar se a API requer autenticação ou autorização
- Os testes são gerados com base no contrato, não na implementação real da API

## Exemplo

Um arquivo Swagger de exemplo (`exemplo-swagger.json`) está incluído no projeto para demonstrar o funcionamento do framework.

## Suporte

Para dúvidas ou problemas, entre em contato com a equipe de qualidade de software.
