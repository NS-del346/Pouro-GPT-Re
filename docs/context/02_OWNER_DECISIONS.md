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
