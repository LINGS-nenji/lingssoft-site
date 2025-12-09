Remaining security note and remediation options

Summary:
- After automated fixes and package overrides, there are 2 remaining moderate vulnerabilities reported by `npm audit`.
- They originate from `webpack-dev-server` (indirect) used by `react-scripts`.

Details:
- Reason: `react-scripts@5.0.1` depends on `webpack-dev-server` (v4.x). The advisories indicate versions <=5.2.0 are affected.
- `react-scripts` (CRA) currently does not have a minor release that upgrades/changes this transitive dependency. Automatic `npm audit fix` cannot non-destructively resolve this.

Mitigation options:
1) Wait for upstream patch: monitor `react-scripts` releases and update when CRA updates `webpack-dev-server` dependency.
2) Replace the build tool: migrate from CRA (`react-scripts`) to an alternative (Vite, Next.js, custom webpack) — longer effort but removes CRA transitive issues.
3) Hard override: add an `overrides` entry forcing a patched `webpack-dev-server` version. This may introduce runtime/builder incompatibilities; test carefully. (We avoided forcing this due to risk.)

Recommended next steps:
- Short-term: keep CI/build isolated (do not expose dev server publicly), ensure production builds occur in a controlled CI environment.
- Mid-term: evaluate moving to Vite or Next.js for faster builds and fewer transitive security surprises.

If you want, I can:
- attempt a conservative `overrides` for `webpack-dev-server` and run full tests, or
- draft a migration plan to Vite and implement a PoC.
