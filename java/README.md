# API Automation Template — Java

Java port of the TypeScript framework in the repository root: same layers, same conventions
(static API classes, endpoint enums, payload factories, contract/actions/download/upload taxonomy).

**Stack:** JDK 21 · Maven · JUnit 5 · REST Assured · Jackson (records) · networknt JSON Schema Validator ·
dotenv-java · Allure.

## Setup

```bash
cd java
cp .env.example .env     # fill in BASE_URL, AUTH_* and the per-user credentials
mvn test                 # everything, sequential
```

Requires JDK 21+ and Maven 3.9+.

## Commands

```bash
mvn test                                  # all tests → target/surefire-reports, target/allure-results
mvn test -Dgroups=contract                # contract tests only (schema validation)
mvn test -Dgroups=functional              # actions + auth
mvn test -Dgroups=document-files          # download/upload
mvn test -Dgroups=unit                    # offline unit tests (TOTP, helpers)
mvn test -Dtest=DefaultUserActionsTest    # one class
mvn spotless:apply                        # format (google-java-format)
```

Allure report (needs the Allure CLI): `allure serve target/allure-results`.

## TypeScript → Java map

| TypeScript | Java |
|---|---|
| `config/config.ts` | `config/Config` |
| `shared/http-client-adapter.ts` | `http/ApiClient` (+ `http/TlsSupport` for mTLS) |
| `shared/endpoints.ts` | `shared/Endpoints` (one enum per domain, implements `Endpoint`) |
| `shared/helpers.ts` | `shared/Helpers` |
| `shared/schema-validator-adapter.ts` + Zod schemas | `shared/SchemaValidator` + JSON Schema files in `src/main/resources/schemas/<domain>/` |
| Zod-inferred types | records in `domain/<feature>/<Feature>Types` |
| `domain/auth/auth-api.ts` | `auth/AuthApi` (+ `Totp`, `SessionCache`) |
| `global-setup.ts` | `src/test/.../support/GlobalSetup` (JUnit `LauncherSessionListener`, registered in `META-INF/services`) |
| `fixtures/` | `src/test/java/.../fixtures` + `src/test/resources/fixtures` |
| `tests/<feature>/<type>/*.spec.ts` | `src/test/java/.../tests/<feature>/<type>/*Test.java` with `@Tag` |

## Differences worth knowing

- **No exceptions on 4xx/5xx.** axios throws; REST Assured does not. Negative tests assert on `status()`
  (that assertion replaces the `fail('should have failed')` guard).
- **Contract tests validate the raw body** against a JSON Schema, not a parsed record, so missing or extra
  fields are caught.
- **mTLS** takes the same `Certs/` PEM files, but the private key must be unencrypted **PKCS#8**
  (`BEGIN PRIVATE KEY`). Convert with `openssl pkcs8 -topk8 -nocrypt -in key.pem -out key.pk8.pem`.
- **Sequential by design**: `junit-platform.properties` disables parallel execution and surefire uses a
  single fork, because the session cookie is shared state.

## Adding a feature

Copy `domain/example` and the `tests/example` folders: endpoint enum → records → JSON Schemas → API class →
factory → tests. See the root `CLAUDE.md` for the checklist (swagger up to date, real entities from fixtures).

## Not ported yet

`generate:tests` (swagger scaffolding), Artillery load tests (consider Gatling or keep k6/Artillery as-is),
and the Rio pipeline (`pipeline.yaml` still builds the Node project).
