# PR-B Recipe Truth Foundations Report

## Scope

PR-B adds Recipe Truth foundation types and rounding guards only. It does not add runtime recipe data, recipe scaling, pour distribution, UI, state machine, storage, PWA, assets, GitHub Actions, deploy, or release behavior.

## Canonical References

- `docs/context/02_OWNER_DECISIONS.md`
- `docs/context/03_RECIPE_TRUTH_V1.md`
- `docs/context/13_IMPLEMENTATION_PLAN.md`

## Current Authority Rebind

PR-B now follows the authority rebind merged from PR #5:

- Source project: `NS-del346/Pouro-Figma`
- Source integration head: `a69775bbbda15d98ffa5aa747de5e37e86efc630`
- Package: `POURO_FIGMA_LATEST_FINAL_RECIPE_TRUTH_HG001.zip`
- Package SHA-256: `dd1fd736652669952214995cd003e347401013f2dc6584da945e0201020d178f`
- Extraction timestamp: `2026-07-02T23:29:36+00:00`
- `external_research_performed=false`
- `automatic_implementation_authorized=false`

Runtime source metadata mapping remains a future decision:

```yaml
runtime_source_metadata_mapping:
  status: FUTURE_MAPPING_DECISION
  current_generic_types_changed: false
  runtime_recipe_records_created: false
```

## Added Files

- `src/domain/recipe/source-metadata.ts`
- `src/domain/recipe/rounding.ts`
- `src/domain/recipe/rounding.test.ts`
- `src/domain/recipe/r13-obsolete-regression.test.ts`
- `docs/ai-reports/2026-07-02-pr-b-recipe-truth-foundations.md`

## Recipe Source Metadata

`RecipeSourceType` is limited to `primary`, `secondary`, `owner_supplied`, `home_adaptation`, and `unresolved`.

`SourceConfidence` is limited to `confirmed`, `supported`, `experimental`, and `unresolved`.

`RecipeSourceMetadata` contains only the minimum future metadata fields requested for recipe data. PR-B does not create source URLs, person values, competition values, brand values, or R-11 through R-14 metadata records.

## Rounding

`round0_1g()` accepts only non-negative finite numbers, rounds to the 0.1g grid with non-negative half-up semantics, rejects non-finite values with `TypeError`, rejects negative values with `RangeError`, and avoids returning negative zero.

HG-015 clarifies that accepted inputs must also produce rounded integer tenths within `Number.MAX_SAFE_INTEGER`. Finite values outside that safe tenths range, including `Number.MAX_VALUE`, are rejected with `RangeError`.

Final-pour rounding-delta absorption remains out of scope.

## R-13 Regression Guard

Current canonical R-13 sequence: `50 / 70 / 30 / 90 / 60 g`.

Current obsolete R-13 sequence: `50 / 70 / 60 / 60 / 60 g`.

The obsolete sequence appears only as an explicit negative regression fixture in `src/domain/recipe/r13-obsolete-regression.test.ts`. The production source scan is scoped to R-13 context so the same numeric sequence can remain valid in a 4:6 recipe context without being falsely treated as an R-13 obsolete-value violation.

R-13 cumulative authority:

```text
c1 = round0_1g(total x 1/6)
c2 = round0_1g(total x 2/5)
c3 = round0_1g(total x 1/2)
c4 = round0_1g(total x 4/5)
c5 = total
```

Runtime recipe data, a scaling engine, and Active Brew UI remain unimplemented in PR-B.

## Validation Status

- `pnpm install --frozen-lockfile --strict-peer-dependencies`: PASS
- `pnpm format:check`: PASS after formatting only authorized PR-B files
- `pnpm lint`: PASS
- `pnpm typecheck`: PASS
- `pnpm test`: PASS
- `pnpm build`: PASS
- `pnpm test:e2e`: PASS
- `pnpm run ci`: PASS
- `pnpm validate`: PASS
- `git diff --check`: PASS

## HG-015 Safe Range Remediation

- Changed files are limited to `src/domain/recipe/rounding.ts`, `src/domain/recipe/rounding.test.ts`, and `docs/ai-reports/2026-07-02-pr-b-recipe-truth-foundations.md`.
- Safe integer tenths contract: non-negative finite inputs are accepted only when the scaled and half-up rounded integer tenths remain within `Number.MAX_SAFE_INTEGER`.
- Unsafe finite range behavior: `RangeError`.
- `Number.MAX_VALUE` regression test: added.
- Safe-boundary regression test: added.
- Final-pour rounding-delta absorption remains unimplemented and out of scope.
- GitHub Actions checks: none reported for Draft PR #4 at remediation time.

HG-015 validation:

- `pnpm format:check`: PASS
- `pnpm lint`: PASS
- `pnpm typecheck`: PASS
- `pnpm test`: PASS
- `pnpm build`: PASS
- `pnpm test:e2e`: PASS
- `pnpm run ci`: PASS
- `pnpm validate`: PASS
- Focused `round0_1g` tests: PASS
- `Number.MAX_VALUE` regression: PASS
- Safe-boundary regression: PASS

## HG-016 Exact Boundary Correction

- HG-015 exact-boundary follow-up: `MAX_SAFE_GRAMS_FOR_TENTHS` itself is accepted.
- Reason: avoid `scaledTenths + 0.5` large-number rounding overflow at the exported maximum boundary.
- Above-boundary values and `Number.MAX_VALUE` remain rejected with `RangeError`.
- Changed files are limited to `src/domain/recipe/rounding.ts`, `src/domain/recipe/rounding.test.ts`, and `docs/ai-reports/2026-07-02-pr-b-recipe-truth-foundations.md`.
- GitHub checks: `NOT_RUN / absent` when checked for Draft PR #4.
- Physical iPhone, VoiceOver, Dynamic Type, Reduced Motion, and subjective UI QA remain `NOT_RUN`.

HG-016 validation:

- `pnpm format:check`: PASS
- `pnpm lint`: PASS
- `pnpm typecheck`: PASS
- `pnpm test`: PASS
- `pnpm build`: PASS
- `pnpm test:e2e`: PASS
- `pnpm run ci`: PASS
- `pnpm validate`: PASS
- `git diff --check`: PASS
- Focused `round0_1g` tests: PASS
- Exact maximum boundary test: PASS
- Above-boundary rejection test: PASS
- `Number.MAX_VALUE` rejection test: PASS
- Half-up regressions: PASS
- Obsolete R-13 regression: PASS
- Production obsolete-sequence scan: PASS
- Changed-file scope audit: PASS
- Secret, credential, and private identifier scan: PASS

Physical iPhone, VoiceOver, Dynamic Type, Reduced Motion, and subjective UI QA are `NOT_RUN` because they are outside PR-B scope.

## HG-025 Authority Rebind Correction

- Merged current main authority from PR #5 into `feature/pr-b-recipe-truth-foundations` with a normal merge commit.
- Corrected the R-13 regression guard to the new canonical/obsolete direction.
- Preserved `src/domain/recipe/source-metadata.ts` generic types; no verbose package evidence strings were adopted as runtime enum literals.
- Preserved the `round0_1g()` contract from HG-015/HG-016.
- Runtime recipe data, recipe scaling, Active Brew UI, source metadata runtime mapping, deploy, release, and PR-C remain out of scope.
- Ready for Review and PR #4 squash merge are authorized only after full validation, remote audit, and independent read-only audit pass under HG-025.

HG-025 validation for the corrected PR #4 branch head:

- `pnpm install --frozen-lockfile --strict-peer-dependencies`: PASS
- `pnpm format:check`: PASS
- `pnpm lint`: PASS
- `pnpm typecheck`: PASS
- `pnpm test`: PASS
- `pnpm build`: PASS
- `pnpm test:e2e`: PASS
- `pnpm run ci`: PASS
- `pnpm validate`: PASS
- `git diff --check`: PASS
- Focused R-13 regression test: PASS
- Production obsolete-sequence scan: PASS
- Changed-file scope audit: PASS
- Secret, credential, and private identifier scan: PASS

GitHub checks and workflow runs are recorded from remote state after push.
