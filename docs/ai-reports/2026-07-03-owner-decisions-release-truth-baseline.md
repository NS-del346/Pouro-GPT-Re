# Owner Decisions and Release Truth Baseline Report

## Task Scope

- Scope: docs-only Fast Track PR to record already-approved Gate 1 Owner Decisions, OD-05 Recovery selection A, and PR-C merge evidence.
- Repository: `NS-del346/Pouro-GPT-Re`.
- Fixed base SHA: `bf105230c94386189ae179d24cce2421484cd2af`.
- Branch: `docs/owner-decisions-release-truth-baseline`.
- Runtime code unchanged: yes.
- Recipe Truth unchanged: yes.
- Dependencies unchanged: yes.
- HG-036A started: no.

## Owner Decisions Exact Mapping

| ID             | Status                  | Decision                                                                                                                                    |
| -------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| OD-01          | OWNER_APPROVED          | `water_amount`: POURING primary value is water amount.                                                                                      |
| OD-02          | OWNER_APPROVED          | `context_expandable`: route rail may expand for needed context.                                                                             |
| OD-03          | OWNER_APPROVED          | `limited_decorative_tags`: secondary English only for limited decorative tags.                                                              |
| OD-04          | OWNER_APPROVED          | `waiting_skip_with_confirmation`: WAITING skip requires confirmation, logs an event, and does not authorize general manual step navigation. |
| OD-05          | OWNER_APPROVED          | `no_partial_record`: no incomplete History record, no resumable incomplete session, no later-resume partial record.                         |
| OD-05-RECOVERY | OWNER_APPROVED          | Selection `A`, `no_crash_or_reload_restoration`.                                                                                            |
| OD-06          | OWNER_APPROVED          | `journal_prompt_after_summary`: Drawdown summary before Journal prompt.                                                                     |
| OD-07          | OWNER_APPROVED_REFRAMED | `progression_mode_policy`: normal automatic progression, no permanent manual controls; LAB manual controls allowed.                         |

## OD-05-RECOVERY=A

- Incomplete brew persistent auto-snapshot: prohibited.
- Reload/crash/process termination incomplete-brew restoration: prohibited.
- Prior incomplete session recovery choice UI: prohibited.
- Incomplete brew History save: prohibited.
- Incomplete brew silent completion: prohibited.

Preserved behavior:

- Same-live-session Pause resumes the same underlying state and step.
- Same-process background return may preserve in-memory session state.
- Same-process background return may recalculate elapsed fields from in-memory timestamps.
- Completed History snapshots and Brew Again from completed records remain allowed.

## Superseded Recovery Requirements

The following earlier interpretations are superseded by Owner decision:

- incomplete brew auto-snapshot requirement
- reload/crash incomplete-brew restoration requirement
- prior incomplete session recovery choice requirement
- incomplete session resumability requirement
- background/crash recovery as a release-required incomplete-brew restoration feature

## PR-C Merge Evidence

```yaml
PR_C:
  PR_number: 7
  merge_method: squash
  approved_head_SHA: b39d5214b71bb1a6d8263001a643ab85fc569a1c
  merge_commit_SHA: bf105230c94386189ae179d24cce2421484cd2af
  main_SHA: bf105230c94386189ae179d24cce2421484cd2af
  merged_at: 2026-07-03T12:58:22Z
  changed_files: 5
  independent_audit: PASS_WITH_NOTES
implemented_verified_on_main:
  - BrewState exact six-value vocabulary
  - BrewEventType internal vocabulary
  - minimum BrewEvent interface
  - authority invariant tests
not_implemented:
  - reducer
  - transition engine
  - timer／countdown engine
  - Pause engine
  - persistent incomplete brew snapshot
  - reload／crash restoration
  - History runtime behavior
  - React Active Brew UI
  - vertical slice UI
  - Japanese copy registry
evidence_limitation:
  - remote CI status checks were absent
  - implementer local validation was reported PASS
  - independent validation rerun was NOT_RUN
  - physical iPhone was NOT_RUN
  - VoiceOver was NOT_RUN
  - Dynamic Type was NOT_RUN
  - Reduced Motion was NOT_RUN
  - subjective UI acceptance was NOT_RUN
```

## Release Truth Matrix

- Maturity: `OWNER_BOUND_BASELINE`.
- Repository canonical effect: `PENDING_MAIN_MERGE`.
- Baseline date: `2026-07-03`.
- Base SHA: `bf105230c94386189ae179d24cce2421484cd2af`.
- Vertical slice baseline: 4:6 / ベーシック / より濃く / 4 pours / 20 g dose / 300 g water / 45 sec interval / step water `60, 60, 90, 90 g` / cumulative `60, 120, 210, 300 g`.
- Vertical slice implementation status: `NOT_IMPLEMENTED`.

## Exact Changed Files

1. `docs/context/02_OWNER_DECISIONS.md`
2. `docs/context/11_ACCEPTANCE_QA.md`
3. `docs/context/17_BREW_RUNNER_RELIABILITY.md`
4. `docs/design/active-brew-state-model.md`
5. `docs/qa/ui-ux-release-gate.md`
6. `docs/implementation/ui-ux-correction-roadmap.md`
7. `docs/ai-reports/2026-07-03-owner-decisions-release-truth-baseline.md`

## Unchanged Files and Areas

- `docs/context/03_RECIPE_TRUTH_V1.md`: unchanged.
- `package.json`: unchanged.
- `pnpm-lock.yaml`: unchanged.
- `src/**`: unchanged.
- `tests/**`: unchanged.
- `public/**`: unchanged.
- `AGENTS.md`: unchanged.
- `CLAUDE.md`: unchanged.
- Runtime code: unchanged.
- Recipe Truth: unchanged.
- Dependencies: unchanged.

## Validation Results

| Check                   | Result  | Evidence                                                      |
| ----------------------- | ------- | ------------------------------------------------------------- |
| `pnpm format:check`     | PASS    | Prettier reported all matched files use Prettier code style.  |
| `pnpm lint`             | PASS    | ESLint completed with `--max-warnings=0`.                     |
| `pnpm typecheck`        | PASS    | `tsc -b --pretty false` completed.                            |
| `pnpm test`             | PASS    | Vitest: 5 test files passed, 26 tests passed.                 |
| `pnpm build`            | PASS    | TypeScript build and Vite production build completed.         |
| `pnpm test:e2e`         | PASS    | Playwright Chromium: 1 test passed.                           |
| `pnpm run ci`           | PASS    | Aggregate format, lint, typecheck, test, and build completed. |
| `pnpm validate`         | PASS    | Aggregate `ci` plus Playwright e2e completed.                 |
| `pnpm test:e2e:offline` | NOT_RUN | Script absent from `package.json`.                            |
| `git diff --check`      | PASS    | No whitespace errors reported.                                |

## Scans

| Scan                       | Result | Evidence                                                                                  |
| -------------------------- | ------ | ----------------------------------------------------------------------------------------- |
| Exact changed-file scope   | PASS   | Worktree contains only the six modified approved docs plus this new approved report.      |
| Secret-like token scan     | PASS   | No matches for GitHub/OpenAI/AWS/private-key token patterns in the seven changed files.   |
| Credential assignment scan | PASS   | No credential-assignment pattern matches in the seven changed files.                      |
| Private Drive ID scan      | PASS   | No Google Drive, Docs, Sheets, Slides, or folder URL patterns in the seven changed files. |
| Authenticated email scan   | PASS   | No email-like identifiers in the seven changed files.                                     |
| Local absolute path scan   | PASS   | No unrelated local absolute paths in the seven changed files.                             |
| Dependency diff            | PASS   | No `package.json` or `pnpm-lock.yaml` diff.                                               |
| Recipe Truth diff          | PASS   | No `docs/context/03_RECIPE_TRUTH_V1.md` diff.                                             |
| Runtime source diff        | PASS   | No `src/**`, `tests/**`, or `public/**` diff.                                             |
| Prohibited repository diff | PASS   | No `AGENTS.md`, `CLAUDE.md`, Recipe Truth, dependency, runtime, test, or public diff.     |
| Whitespace diff scan       | PASS   | `git diff --check` reported no issues.                                                    |

## NOT_RUN Items

- Physical iPhone: `NOT_RUN`.
- VoiceOver: `NOT_RUN`.
- Dynamic Type: `NOT_RUN`.
- Reduced Motion: `NOT_RUN`.
- Subjective UI acceptance: `NOT_RUN`.
- `test:e2e:offline`: `NOT_RUN` if the repository script remains absent.

## Rollback Method

- Revert the PR branch commit or close the Draft PR before merge.
- Do not merge this PR without separate Owner approval.

## Approval Boundary

- Ready for Review requires separate Owner approval.
- Merge requires separate Owner approval.
- Deploy/release requires separate Owner approval.
