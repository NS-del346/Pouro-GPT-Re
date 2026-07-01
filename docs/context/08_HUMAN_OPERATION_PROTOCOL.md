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

## Approval-Sensitive Operations

Stop before:

- merge to `main`
- public production deployment
- Figma final re-LOCK/library publish
- destructive import or data deletion
- protected repository modification

## Error Handling

When a command fails:

- read the exact error
- identify the likely cause
- avoid repeating the same command unchanged
- provide the smallest corrective command
- preserve existing uncommitted work
