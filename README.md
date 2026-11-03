# API Automation Frameworks

The same API test automation architecture implemented in different stacks, side by side. Each directory is a
self-contained framework: it has its own dependencies, configuration, documentation and CI pipeline, and can
be copied out of this repository as is.

| Framework | Stack | Highlights |
|---|---|---|
| [TypeScript · Jest](typescript-jest) | TypeScript, Jest, Zod, Axios, Artillery | Zod contract validation, multi-step auth cached per run, swagger-driven test generator, load tests |
| [Java · Rest Assured](java-rest-assured) | Java 21, Maven, JUnit 5, Rest Assured, Jackson, Allure | JSON Schema contracts for every endpoint of the target API, Docker runner, GitHub Actions + Allure report |

## Shared architecture

Every framework follows the same layers, so they can be compared one to one:

```
config → HTTP client (auth injected) → endpoint enums → domain API classes (static)
       → types + schemas → payload factories → tests (contract / actions / download / upload)
```

## System under test

The Java framework runs against **Loja QA**, a fictional e-commerce API from
[SantoMarcelo/portifolio](https://github.com/SantoMarcelo/portifolio). Its CI pipeline checks that repository out,
starts the backend with Docker Compose and runs the suite against it.

## Repository layout

```
.
├── .github/workflows/      # one workflow per framework, triggered only by changes to its directory
├── java-rest-assured/
└── typescript-jest/
```
