# Pourō-GPT Re Context Index

Status: canonical context-pack index  
Generated: 2026-07-03
Admin model policy: GPT-5.5 高

## 1. Authority Order

When documents conflict, use this order:

1. Current explicit Owner instruction
2. `02_OWNER_DECISIONS.md`
3. `03_RECIPE_TRUTH_V1.md`
4. `10_DATA_STORAGE_PRIVACY.md` and `16_NO_HOSTAGE_DATA_POLICY.md`
5. Accessibility and release gates in `11_ACCEPTANCE_QA.md`
6. `18_UI_UX_CORRECTION_DIRECTIVE.md`
7. Current repository implementation
8. Current GitHub Issues and PRs
9. Selected Figma direction
10. Current canonical research registered in `19_UI_UX_RESEARCH_AUTHORITY.md`
11. Historical research and legacy projects

Unknown or time-sensitive facts must remain `UNVERIFIED`, `RESEARCH_REQUIRED`, or `NOT_RUN` until evidenced.

## 2. Repository Boundaries

| Role | Repository | Rule |
|---|---|---|
| Primary | `NS-del346/Pouro-GPT-Re` | Intended implementation target; verify before action |
| Legacy reference | `NS-del346/Pouro-Figma` | Read-only unless owner explicitly changes scope |
| Protected | `NS-del346/Pouro-GPT` | Do not modify |

Main merge, production deployment, and Figma final re-LOCK require explicit owner approval.

## 3. Context Files

| File | Purpose |
|---|---|
| `01_PROJECT_BRIEF.md` | Product identity and positioning |
| `02_OWNER_DECISIONS.md` | Locked owner decisions and approval gates |
| `03_RECIPE_TRUTH_V1.md` | Recipe values, scaling, terminology, provenance |
| `04_LAB_COMPARE_MODE_V1.md` | One-variable comparison model |
| `05_THEME_DARK_LAB_TOKENS.md` | Semantic theme architecture |
| `06_DESIGN_APPROVAL_PROTOCOL.md` | Figma and owner review workflow |
| `07_AI_ORCHESTRATION_TOOLING.md` | Model roles, tool inventory, Ponytail policy |
| `08_HUMAN_OPERATION_PROTOCOL.md` | GUI-first, beginner-safe operation |
| `09_MONETIZATION_AD_POLICY.md` | Freemium and non-interruptive ads |
| `10_DATA_STORAGE_PRIVACY.md` | Local-first storage and import safety |
| `11_ACCEPTANCE_QA.md` | Evidence-based release gates |
| `12_ASSET_ICON_POLICY.md` | Base Iconoir and custom-asset boundaries |
| `13_IMPLEMENTATION_PLAN.md` | Dependency-aware implementation sequence |
| `14_COMPETITIVE_STRATEGY.md` | Filtru comparison and blue-ocean positioning |
| `15_NATIVE_ROADMAP.md` | PWA-first, native-ready roadmap |
| `16_NO_HOSTAGE_DATA_POLICY.md` | User ownership of records and exports |
| `17_BREW_RUNNER_RELIABILITY.md` | Timing, recovery, event-log contract |
| `18_UI_UX_CORRECTION_DIRECTIVE.md` | Canonical UI/UX correction |
| `19_UI_UX_RESEARCH_AUTHORITY.md` | Current canonical UI/UX research package and limits |
| `20_ICON_SYSTEM_OPERATING_POLICY.md` | Iconify, Iconoir, custom-icon and storage rules |
| `99_CONTEXT_IMPORT_OPERATION_MEMO_JA.md` | Beginner-friendly import and handoff procedure |

## 4. Design Inputs

### Gate 1 three-track refinement

- `../design/gate1/THREE_TRACK_REFINEMENT_PLAN.md`
- Complete plan package and Owner worksheet: Google Drive `03_DESIGN_REFERENCE/Gate1_Three_Track_Refinement`

### Icon system

- `../design/icon-system/README.md`
- Full working package: Google Drive `02_APPROVED_ASSETS_SOURCE/Icon_System`

## 5. AI File Sets

### ChatGPT Admin

Read all context files, then use:

- `../prompts/CHATGPT_ADMIN_GPT55_HIGH.md`
- `../qa/ui-ux-release-gate.md`
- `../implementation/ui-ux-correction-roadmap.md`

### Claude Design

Minimum set:

- `01_PROJECT_BRIEF.md`
- `02_OWNER_DECISIONS.md`
- `05_THEME_DARK_LAB_TOKENS.md`
- `06_DESIGN_APPROVAL_PROTOCOL.md`
- `12_ASSET_ICON_POLICY.md`
- `18_UI_UX_CORRECTION_DIRECTIVE.md`
- `19_UI_UX_RESEARCH_AUTHORITY.md`
- `20_ICON_SYSTEM_OPERATING_POLICY.md`
- all files under `../design/`
- `../prompts/CLAUDE_DESIGN_FABLE5_SONNET5.md`

### Claude Code

Minimum set:

- `02_OWNER_DECISIONS.md`
- `03_RECIPE_TRUTH_V1.md`
- `04_LAB_COMPARE_MODE_V1.md`
- `10_DATA_STORAGE_PRIVACY.md`
- `11_ACCEPTANCE_QA.md`
- `13_IMPLEMENTATION_PLAN.md`
- `16_NO_HOSTAGE_DATA_POLICY.md`
- `17_BREW_RUNNER_RELIABILITY.md`
- `18_UI_UX_CORRECTION_DIRECTIVE.md`
- `20_ICON_SYSTEM_OPERATING_POLICY.md` when asset work is in scope
- `../prompts/CLAUDE_CODE_SONNET5_FABLE5.md`

### Codex

Use all implementation-critical context plus:

- `../prompts/CODEX_IMPLEMENTATION.md`
- `../implementation/ui-ux-correction-roadmap.md`
- `../qa/ui-ux-release-gate.md`

### QA / Red Team

Use:

- all authority and QA context files
- `../prompts/QA_RED_TEAM.md`
- `../qa/ui-ux-release-gate.md`

## 6. Token-Saving Strategy

- Reference canonical files instead of duplicating long directives.
- Use tables for decisions and status.
- Never compress recipe data, source metadata, state machines, accessibility rules, or approval gates.
- Keep research package binaries and screenshots in Google Drive; keep public-safe authority summaries in GitHub.
- Do not use code golf or opaque data structures in implementation.
