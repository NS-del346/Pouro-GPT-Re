# UI/UX Release Gate

## Release Truth Matrix

```yaml
release_truth_matrix:
  maturity: OWNER_BOUND_BASELINE
  repository_canonical_effect: EFFECTIVE_ON_MAIN
  baseline_date: 2026-07-03
  canonical_main_SHA: c7d53038a29d2cc1d2f0b8d084dacf7e5df196db
  merged_via_PR: 8
  merged_at: 2026-07-03T21:14:48Z
  source_base_SHA: bf105230c94386189ae179d24cce2421484cd2af
allowed_status:
  - OWNER_BOUND_NOT_IMPLEMENTED
  - IMPLEMENTED_VERIFIED
  - NOT_IMPLEMENTED
  - NOT_RUN
  - UNRESOLVED
```

| Row                                | Authority      | Requirement / decision                                                                       | Implementation status       | Verification status  | Evidence / source                                            | Limitation / unresolved note                                              |
| ---------------------------------- | -------------- | -------------------------------------------------------------------------------------------- | --------------------------- | -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------- |
| OD-01                              | Owner Gate 1   | POURING primary value is water amount                                                        | OWNER_BOUND_NOT_IMPLEMENTED | NOT_RUN              | Owner instruction 2026-07-03                                 | Runtime UI unchanged                                                      |
| OD-02                              | Owner Gate 1   | Route rail may expand for needed context                                                     | OWNER_BOUND_NOT_IMPLEMENTED | NOT_RUN              | Owner instruction 2026-07-03                                 | Runtime UI unchanged                                                      |
| OD-03                              | Owner Gate 1   | Secondary English limited to decorative tags                                                 | OWNER_BOUND_NOT_IMPLEMENTED | NOT_RUN              | Owner instruction 2026-07-03                                 | Runtime copy unchanged                                                    |
| OD-04                              | Owner Gate 1   | WAITING skip requires confirmation and event logging                                         | OWNER_BOUND_NOT_IMPLEMENTED | NOT_RUN              | Owner instruction 2026-07-03                                 | `WAIT_SKIPPED` vocabulary alone does not authorize UI/transition behavior |
| OD-05                              | Owner Gate 1   | No partial record, no resumable incomplete session, no incomplete History conversion         | OWNER_BOUND_NOT_IMPLEMENTED | NOT_RUN              | Owner instruction 2026-07-03                                 | Runtime persistence unchanged                                             |
| OD-05-RECOVERY                     | Owner Gate 1   | Selection A: no reload/crash/process incomplete-brew restoration                             | OWNER_BOUND_NOT_IMPLEMENTED | NOT_RUN              | Owner instruction 2026-07-03                                 | Same-live-session Pause remains preserved                                 |
| OD-06                              | Owner Gate 1   | Show summary after Drawdown, then prompt Journal                                             | OWNER_BOUND_NOT_IMPLEMENTED | NOT_RUN              | Owner instruction 2026-07-03                                 | Runtime Finish/Journal unchanged                                          |
| OD-07                              | Owner Gate 1   | Normal automatic progression; no permanent manual step controls; LAB manual controls allowed | OWNER_BOUND_NOT_IMPLEMENTED | NOT_RUN              | Owner instruction 2026-07-03                                 | Settings option/copy/schema remain UNRESOLVED                             |
| PR-C BrewState foundation          | PR #7          | Exact six-value `BrewState` vocabulary                                                       | IMPLEMENTED_VERIFIED        | IMPLEMENTED_VERIFIED | PR #7 merged into `bf105230c94386189ae179d24cce2421484cd2af` | Remote CI checks absent; independent validation rerun NOT_RUN             |
| PR-C BrewEvent foundation          | PR #7          | Internal event vocabulary and minimum event interface                                        | IMPLEMENTED_VERIFIED        | IMPLEMENTED_VERIFIED | PR #7 merged into `bf105230c94386189ae179d24cce2421484cd2af` | Runtime behavior not completed by PR #7                                   |
| reducer／transition engine         | Roadmap        | Implement reducer and transition guards                                                      | NOT_IMPLEMENTED             | NOT_RUN              | Current Release Truth baseline                               | Future PR                                                                 |
| timer／countdown engine            | Roadmap        | Implement timer/countdown behavior                                                           | NOT_IMPLEMENTED             | NOT_RUN              | Current Release Truth baseline                               | Future PR                                                                 |
| persistence                        | OD-05          | Completed History persistence only; no incomplete-brew persistence                           | NOT_IMPLEMENTED             | NOT_RUN              | Owner instruction 2026-07-03                                 | Future storage PR                                                         |
| incomplete brew snapshot／recovery | OD-05-RECOVERY | Persistent incomplete snapshot/recovery is prohibited                                        | OWNER_BOUND_NOT_IMPLEMENTED | NOT_RUN              | Owner instruction 2026-07-03                                 | Verify absence in implementation PRs                                      |
| Active Brew UI                     | Roadmap        | Build Active Brew UI from state contract                                                     | NOT_IMPLEMENTED             | NOT_RUN              | Current Release Truth baseline                               | Future PR                                                                 |
| 4:6 vertical slice                 | Owner baseline | 4:6 ベーシック × より濃く, 20 g dose, 300 g water, 4 pours, 45 sec interval                  | NOT_IMPLEMENTED             | NOT_RUN              | Owner instruction 2026-07-03                                 | Baseline only; Recipe Truth unchanged                                     |
| Japanese copy registry             | Roadmap        | Canonical Japanese UI copy registry                                                          | NOT_IMPLEMENTED             | NOT_RUN              | Current Release Truth baseline                               | Future PR                                                                 |
| physical iPhone QA                 | Human Gate     | Physical iPhone verification                                                                 | NOT_RUN                     | NOT_RUN              | Human Gate required                                          | Not automated here                                                        |
| VoiceOver                          | Human Gate     | VoiceOver verification                                                                       | NOT_RUN                     | NOT_RUN              | Human Gate required                                          | Not automated here                                                        |
| Dynamic Type                       | Human Gate     | Dynamic Type/text enlargement verification                                                   | NOT_RUN                     | NOT_RUN              | Human Gate required                                          | Not automated here                                                        |
| Reduced Motion                     | Human Gate     | Reduced Motion verification                                                                  | NOT_RUN                     | NOT_RUN              | Human Gate required                                          | Not automated here                                                        |

## Result Vocabulary

- `PASS`: verified with evidence
- `FAIL`: requirement violated
- `NOT_RUN`: not executed or evidence unavailable

## Gate A — Authority

- Owner Decisions loaded
- Recipe Truth loaded
- protected repository unchanged
- R-13/R-14 policy preserved
- App Icon still deferred

## Gate B — Responsive

For 375×667, 393×852, 430×932:

- no horizontal overflow
- CTA reachable
- four tabs fit
- home indicator safe
- no clipped toggle/text
- 44×44 interaction targets

## Gate C — Core Flow

- Home selection motion
- Setup recommendation-only temperature/grind
- Preview full pour count
- Active Brew state transitions
- Finish save → Home → Toast
- Toast → latest History Detail

## Gate D — Active Brew

- no time-only Pouring completion
- user `注ぎ終えた`
- Waiting countdown
- WAITING skip requires confirmation
- WAITING skip event logged
- Pause/Resume same state
- same-process background continuity does not create negative time
- incomplete brew is not persistently saved
- reload/crash/process termination does not restore incomplete brew
- incomplete brew does not create History
- incomplete brew is not silently completed
- independent Drawdown
- planned vs actual preserved

## Gate E — Accessibility

- semantic names
- focus order
- keyboard where applicable
- text enlargement
- Reduce Motion
- VoiceOver
- color-independent state communication

## Gate F — Offline/Data

- App Shell offline
- local history stable
- completed History snapshot retained
- Brew Again uses completed History snapshot only
- incomplete brew snapshot/recovery prohibited
- JSON schema validation
- import preview
- no silent destructive overwrite

## Gate G — Physical iPhone

- Safari
- standalone PWA
- offline launch
- status bar/safe area
- home indicator
- Dynamic Island/notch
- sound/tick/step notification
- VoiceOver
- Reduce Motion

Unrun physical-device items remain `NOT_RUN` and block a claim of complete release QA.

## Governance

Passing the technical gates does not authorize main merge, production deploy, or Figma re-LOCK.
