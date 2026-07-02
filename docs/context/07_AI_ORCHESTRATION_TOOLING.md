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

## Executor Capability Routing

Implementation executorは作業開始前に、taskに必要なcapabilityを一度確認する。

- GitHub repository read/write
- feature branch、commit、push
- Draft PR作成／更新
- filesystem write
- exact diff取得
- package registry（必要時）
- approved Node／package manager（必要時）
- Playwright／browser binary download（必要時）

capability不足runtimeでは実装を開始しない。同じ不適合runtimeでtaskを再実行せず、利用可能な承認済みexecutorへroutingする。Local cloneが不要なdocs-only変更では、branch、file update、commit、Draft PR、exact diff capabilityを持つGitHub Connectorをexecutorとして使用できる。

## Fast Track Low-Risk PR

1回のbounded Owner approvalは、capability preflightからDraft PR作成・独立read-only監査までを含められる。Fast TrackはReady for Review前で停止する。

Transient retryはDNS timeout、HTTP 429／5xx、registry timeout、browser download timeoutに限定し、同一scope・同一方式で最大2回とする。別transport、別package manager、別APIへのsilent fallbackは禁止する。

Ready、merge、deploy、force push、destructive migration、branch deletion、user-data deletion、secret追加、ruleset／security、protected repository、Recipe Truth意味変更、重要Owner Decision変更は個別Owner承認とする。

実装担当と独立監査担当は可能な限り別session／別AIとし、Ownerの通常操作を原則としてmerge判断へ集約する。
