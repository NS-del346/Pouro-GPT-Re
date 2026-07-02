# PR-B Recipe Truth Foundations Report

## Scope

PR-B adds Recipe Truth foundation types and rounding guards only. It does not add runtime recipe data, recipe scaling, pour distribution, UI, state machine, storage, PWA, assets, GitHub Actions, deploy, or release behavior.

## Canonical References

- `docs/context/02_OWNER_DECISIONS.md`
- `docs/context/03_RECIPE_TRUTH_V1.md`
- `docs/context/13_IMPLEMENTATION_PLAN.md`

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

Canonical R-13 sequence: `50 / 70 / 60 / 60 / 60 g`.

The obsolete sequence appears only as an explicit negative regression fixture in `src/domain/recipe/r13-obsolete-regression.test.ts`. Production recipe data is not implemented in PR-B.

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

Physical iPhone, VoiceOver, Dynamic Type, Reduced Motion, and subjective UI QA are `NOT_RUN` because they are outside PR-B scope.
