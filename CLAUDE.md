# API Automation Frameworks

Portfolio repository: the same API test automation architecture implemented in several stacks. Each top-level
directory is an **independent** framework with its own dependencies, config, docs and CI workflow.

| Directory | Stack |
|---|---|
| [`typescript-jest/`](typescript-jest) | TypeScript · Jest · Zod · Axios (see its [CLAUDE.md](typescript-jest/CLAUDE.md)) |
| [`java-rest-assured/`](java-rest-assured) | Java 21 · Maven · JUnit 5 · Rest Assured · Allure (see its [README](java-rest-assured/README.md)) |

## Rules

- **Never** share code, config or dependencies between frameworks — a framework must build and run on its own
- **Never** commit or push directly to `main` — branch as `task/{ticketId}-{description}`
- **Never** commit `.env`, `Certs/` or `.auth-sessions.json`
- Commit format: `{emoji} {type}({scope}): {ticketPrefix}{id} {description}` (see [typescript-jest/CLAUDE.md](typescript-jest/CLAUDE.md#git-and-commits))
- A new stack goes in a new `<language>-<library>/` directory with its own README and a
  `.github/workflows/<directory>.yml` filtered by `paths:` to that directory
- Shared layers across stacks: config → HTTP client → endpoint enums → domain API classes (static) →
  types/schemas → payload factories → tests by taxonomy (contract / actions / download / upload)
