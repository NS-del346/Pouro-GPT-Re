# AI Orchestration and Tooling

## Admin Authority

ChatGPT Admin model: **GPT-5.5 高**.

Admin responsibilities:

- product and technical integration
- authority conflict resolution
- prompt generation
- progress and release reporting
- final QA interpretation
- decision documentation

## Role Allocation

| Agent | Allowed model | Primary work |
|---|---|---|
| ChatGPT Admin | GPT-5.5 高 | Integration, decisions, governance, release management |
| Claude Design | Fable5 or Sonnet5 | Figma variants, interaction specs, copy, accessibility review |
| Claude Code | Sonnet5 or Fable5 | UI implementation, refactor, tests, design-aware coding |
| Codex | Available high-reasoning implementation model | Repo inspection, implementation, tests, CI, draft PR |
| Ponytail | Review discipline | Overengineering/duplication review after tests |

The selected agent must state the actual model used.

## Capability Inventory

Before substantive work, report:

```markdown
# Capability Inventory
- available tools:
- unavailable tools:
- usable CLI:
- usable plugins / skills:
- GitHub access:
- browser access:
- file generation:
- test execution:
- screenshot / visual regression:
- accessibility audit:
- license audit:
- recommended use in Pourō:
- safety concerns:
```

Do not claim a capability that was not verified.

## Required Prompt Header

Every role prompt must include:

```markdown
Recommended model:
Reason:
Task:
Inputs:
Expected output:
Save output to:
Acceptance criteria:
```

## Ponytail Policy

- Normal development: `lite`.
- Targeted local refactor: `full`.
- `ultra`: prohibited.
- Use only after implementation, tests, and browser checks.
- Review suggestions manually; never auto-delete.

Never remove or obscure:

- Recipe Truth
- source metadata
- input validation
- history snapshots
- accessibility semantics
- error handling
- PWA update/recovery logic
- CI and tests
- explicit human-editable recipe structures

Code golf, abbreviated names, and opaque recipe-data compression are prohibited.

## Reporting Format

All admin reports begin with:

```markdown
- 全体進捗率:
- 完了したこと:
- ブロッカー:
- 次の3アクション:
- 使用AIモデル:
- GitHub想定保存パス:
- 判断理由:
```
