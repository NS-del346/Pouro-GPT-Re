# Owner Decisions

Status: locked unless the owner explicitly revises a decision.

## 1. Model and AI Policy

```yaml
chatgpt_admin:
  required_model: GPT-5.5 高
claude_design:
  allowed_models: [Fable5, Sonnet5]
claude_code:
  allowed_models: [Sonnet5, Fable5]
codex:
  role: repository inspection, implementation, tests, CI, draft PR
ponytail:
  default_mode: lite
  targeted_refactor_mode: full
  ultra_mode: prohibited
```

Each AI must state the model used and create a concise Capability Inventory before substantive work.

## 2. Repository Governance

- Primary target: `NS-del346/Pouro-GPT-Re`; verify current state before action.
- Legacy reference: `NS-del346/Pouro-Figma`.
- Protected repository: `NS-del346/Pouro-GPT`; do not modify.
- GitHub is the Single Source of Truth after documents are committed.
- Do not merge to `main` without explicit owner approval.
- Do not deploy publicly without explicit owner approval.
- Do not publish/re-LOCK the final Figma library without explicit owner approval.

## 3. Product Decisions

- PWA first; native features later.
- Home defaults to four methods: 4:6, New Hybrid, 10 Pour, Ice Brew.
- Selected Home direction: Home C main structure + Home B other-method structure.
- Fixed bottom navigation: Home, History, Tools, Settings.
- LAB is not a bottom tab in v1.
- LAB Compare v1 is free and changes exactly one independent variable.
- LAB Studio, AI auto-optimization, multi-variable experiments, and hardware integrations are future scope.
- Dark mode and LAB semantic token foundations are required.
- Iconoir Regular is the common UI icon system.
- App Icon redesign is deferred and must not restart without owner instruction.

## 4. Recipe and Data Decisions

- Recipe Truth overrides generic UX convenience.
- 4:6 remains one method with taste × strength selections.
- Original 4:6 terminology must not be casually rewritten.
- R-13 correct sequence is `50 / 70 / 60 / 60 / 60 g`.
- R-13 old sequence `50 / 70 / 30 / 90 / 60 g` is prohibited except when identifying it as an obsolete value.
- R-14 original bloom amount remains unresolved; current display may identify 30 g as a home-reproduction value.
- Source metadata is mandatory; URLs must not be invented.
- History, My Recipe, LAB Compare v1, JSON export, and JSON import remain free.
- User data must never be held hostage.

## 5. UI/UX Decisions

- `18_UI_UX_CORRECTION_DIRECTIVE.md` is canonical below higher-authority policies.
- Active Brew must not move from `POURING` to `WAITING` based only on elapsed time.
- User action `注ぎ終えた` confirms pour completion.
- Pause freezes and resumes the same state; Pause is not Waiting.
- Drawdown is an independent state.
- Finish save returns to Home and presents a temporary Toast; tapping it opens the latest History Detail.
- Setup shows recommended temperature and grind but does not directly edit them.
- Actual temperature/grind may be added at Finish or History Detail; Tools and Settings own converter/profile functions.
- Motion must be quiet, restrained, reduced-motion compatible, and non-game-like.
- Brew Advice requires research and sufficient data; no data means no advice.

## 6. Monetization Decisions

- No forced video ads.
- No ads during Active Brew, Pause, Manual Override, Drawdown, Finish before save, unsaved LAB flow, Import, or Export.
- A future premium entitlement may remove ads.
- Basic records and export/import cannot be paywalled.

## 7. Human Operation

- GUI-first instructions.
- When CLI is unavoidable: one command at a time, exact paste location, expected result, then wait for confirmation.
- Avoid destructive or multi-command terminal dumps.

## 8. Fast Track Operating Mode

`POURO-GPT-RE-FAST-TRACK-OPERATING-MODE-OWNER-DIRECTIVE-001`を現在の開発運用として採用する。

通常の低リスクPRでは、1回の限定Owner承認に次を含められる。

- executor capability preflight
- feature branch作成またはcheckout
- repository setup、environment setup、package install
- 承認scope内の実装
- formatter、lint、typecheck、unit／component test、build、E2E
- stage、commit、push
- Draft PR作成・本文更新
- remote diff監査と独立read-only監査

Fast TrackはDraft PRと独立監査で停止する。`main`はread-onlyとし、clean worktree、expected branch／HEAD、限定された変更scopeをmutation前に確認する。

次は引き続き個別Owner承認を必須とする。

- Ready for Review
- PR mergeまたはclose
- production deploy／release
- branch deletion
- force push
- destructive migration
- user data deletion
- secret／credential追加
- repository visibility変更
- ruleset／security settings変更
- protected repository変更
- Recipe Truthの意味変更
- Owner Decisionsの重要変更
- Figma final re-LOCK／library publish
- App Icon redesign再開

既にOwnerが確定したDecisionを意味変更なしでcanonical文書へ記録する変更は、明示された限定scope内でFast Trackに含められる。

実装開始前にexecutor capabilityを確認する。GitHub read/write、branch／commit／push、Draft PR、filesystem write、exact diff、およびtaskに必要なpackage registry／Node／package manager／browser download capabilityを満たさないruntimeでは実装を開始しない。

DNS timeout、HTTP 429／5xx、package registry timeout、browser binary download timeoutは、同一scope・同一方式で最大2回再試行できる。別transport、別package manager、別API、別repository、別branchへのsilent fallbackは禁止する。

Ownerの通常操作は原則としてDraft PR監査後のmerge判断へ集約する。

## 9. Application Architecture Baseline

`POURO-GPT-RE-ARCHITECTURE-DECISION-AND-PR-A-FAST-TRACK-IMPLEMENTATION-HG-007`により、Pourō-GPT Reのapplication architecture baselineを次の通り確定する。

```yaml
architecture:
  status: OWNER_APPROVED_AND_EFFECTIVE
  application_type: CLIENT_SIDE_PWA_FIRST_SPA
  frontend_framework: React
  language: TypeScript
  typescript_mode: strict
  build_tool: Vite
  package_manager: pnpm
  package_manager_launcher: Corepack
  node_runtime:
    major: 24
    engines: '>=24 <25'
  lint:
    engine: ESLint
    config: flat
    typescript: type_aware
    plugins:
      - typescript-eslint
      - react-hooks
      - react-refresh
      - jsx-a11y
  formatting: Prettier
  unit_test:
    runner: Vitest
    environment: jsdom
  component_test:
    - Testing Library
    - jest-dom
    - user-event
  e2e:
    runner: Playwright
    browsers:
      - Chromium
    server: Vite production preview
    host: 127.0.0.1
    port: 4173
  css: plain_css
  router: NOT_INCLUDED_IN_PR_A
  state_library: NOT_INCLUDED_IN_PR_A
  pwa_manifest_service_worker: DEFERRED_TO_PR_D
  github_actions: DEFERRED_TO_SEPARATE_PR
```

PR-Aでは、このbaselineを検証可能なrepository bootstrap foundationとして記録する。Product UI、router、state library、PWA manifest/service worker、GitHub ActionsはPR-Aに含めない。
