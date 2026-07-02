# Human Operation Protocol

## User Profile Assumption

The owner should not be expected to understand advanced AI tooling, Git internals, PowerShell, or shell error recovery.

## Default Instruction Style

1. Prefer GUI.
2. Name the exact app or webpage.
3. Say exactly where to click or paste.
4. Describe the expected visible result.
5. Separate safe read-only checks from write operations.
6. Clearly flag owner-approval gates.

Preferred interfaces:

- GitHub Web UI
- GitHub Desktop
- VS Code GUI
- ChatGPT file upload/download
- Claude application
- Codex application

## CLI Exception

When CLI is necessary:

1. Explain why the GUI is insufficient.
2. Provide one command only.
3. State the exact terminal and directory.
4. Explain what the command does.
5. State the expected output.
6. Wait for the owner’s returned output before continuing.

Do not provide destructive chains, hidden substitutions, or commands that merge/deploy without approval.

## Fast Track Owner Interaction Boundary

通常の低リスクPRでは、1回の限定Owner承認でcapability preflightからDraft PR作成・独立監査まで進行できる。Ownerの通常操作は原則としてDraft PR監査後のmerge判断へ集約する。

## Approval-Sensitive Operations

Stop before and obtain separate Owner approval for:

- Ready for Review
- merge or close to `main`
- public production deployment or release
- branch deletion
- force push
- destructive migration, import, or user-data deletion
- secret or credential addition
- repository visibility or ruleset/security changes
- protected repository modification
- Recipe Truth semantic changes
- important Owner Decisions changes
- Figma final re-LOCK/library publish

## Error Handling

When a command or API action fails:

- read and record the exact error
- identify whether any mutation occurred
- preserve existing uncommitted work
- stop immediately for permission denial, authority conflict, dirty worktree, secret request, out-of-scope change, or destructive requirement
- retry only DNS timeout, HTTP 429／5xx, registry timeout, or browser download timeout
- transient retry is limited to two attempts using the same scope and method
- never silently switch transport, package manager, API, repository, or branch
- do not continue implementation in a capability-deficient runtime
