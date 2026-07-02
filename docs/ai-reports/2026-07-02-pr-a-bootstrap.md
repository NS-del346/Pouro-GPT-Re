# PR-A Bootstrap Report

Status: implemented for Draft PR review, with HG-011 remediation applied and HG-012 documentation correction applied.

## Scope

- Repository bootstrap foundation only.
- Product UI, Recipe Truth, Active Brew, PWA, assets, GitHub Actions, deployment, storage, LAB, monetization, and routing are outside this PR.

## Architecture

- React.
- TypeScript strict mode.
- Vite.
- pnpm through Corepack.
- Vitest with jsdom.
- Testing Library and jest-dom.
- Playwright Chromium against Vite production preview.
- Plain CSS.

## Validation

| Check                                                       | Result  | Evidence                                                          |
| ----------------------------------------------------------- | ------- | ----------------------------------------------------------------- |
| `pnpm install --lockfile-only`                              | PASS    | Lockfile updated after dependency remediation                     |
| `pnpm install --frozen-lockfile --strict-peer-dependencies` | PASS    | Lockfile up to date; peer dependencies accepted under strict mode |
| `pnpm format:check`                                         | PASS    | All matched files use Prettier code style                         |
| `pnpm lint`                                                 | PASS    | ESLint completed with zero warnings                               |
| `pnpm typecheck`                                            | PASS    | `tsc -b --pretty false` completed                                 |
| `pnpm test`                                                 | PASS    | 1 test file, 1 test passed                                        |
| `pnpm build`                                                | PASS    | Vite production build completed                                   |
| `pnpm test:e2e`                                             | PASS    | 1 Chromium test passed against production preview                 |
| `pnpm run ci`                                               | PASS    | package script completed format, lint, typecheck, test, build     |
| `pnpm validate`                                             | PASS    | package validate ran `pnpm run ci && pnpm test:e2e`               |
| `pnpm run test:e2e:offline`                                 | NOT_RUN | Script is not defined in PR-A bootstrap package.json              |

## Command Semantics

- `pnpm ci`: pnpm built-in frozen install command. It is not the `package.json` `ci` script, and standalone `pnpm ci` was not run during HG-011 remediation.
- `pnpm run ci`: package `ci` script that runs format check, lint, typecheck, unit test, and production build.
- `pnpm validate`: package `validate` script that runs `pnpm run ci` followed by production-preview E2E.

## Audit Notes

- Changed files are limited to the HG-011 allowlist.
- HG-012 documentation correction is limited to `README.md` and `docs/ai-reports/2026-07-02-pr-a-bootstrap.md`.
- Dependencies are limited to the HG-011 remediation scope and pinned exactly in `package.json`.
- `validate` now calls the package `ci` script via `pnpm run ci` before E2E.
- ESLint is pinned to `9.39.4` to satisfy `eslint-plugin-jsx-a11y@6.10.2` peer compatibility.
- `@eslint/js` is pinned to `9.39.4` to match ESLint.
- `@types/node` is pinned to `24.13.2`, the latest 24.x registry result observed during this remediation.
- `pnpm-lock.yaml` is the only lockfile.
- Secret prefix scan: PASS.
- Google Drive/Docs URL scan: PASS.
- Product UI, Recipe Truth, Active Brew, PWA, asset intake, deployment, and GitHub Actions changes: not included.
- Physical iPhone, VoiceOver, Dynamic Type, Reduced Motion, and subjective Product UI QA: NOT_RUN.
