# Recipe Authority Rebind Report

Task: POURO-GPT-RE-RECIPE-AUTHORITY-REBIND-DOCS-FAST-TRACK-HG-020 / HG-021 continuation

Date: 2026-07-03

## Purpose

Record the Owner-designated Pourō-Figma Recipe Truth extraction package as the current canonical Recipe Truth authority for Pourō-GPT Re, without changing runtime recipe data, source metadata TypeScript definitions, tests, dependencies, Product UI, PR #4, deploy, or release state.

## Source Package Provenance

```yaml
source_project: NS-del346/Pouro-Figma
source_integration_head: a69775bbbda15d98ffa5aa747de5e37e86efc630
package_filename: POURO_FIGMA_LATEST_FINAL_RECIPE_TRUTH_HG001.zip
package_sha256: dd1fd736652669952214995cd003e347401013f2dc6584da945e0201020d178f
extraction_timestamp: 2026-07-02T23:29:36+00:00
external_research_performed: false
repository_mutation_in_package: none
automatic_implementation_authorized: false
```

Package integrity preflight verified the outer ZIP SHA-256, all entries in `SHA256SUMS.txt`, YAML/JSON semantic equality, the migration manifest, conflict register, and Recipe Truth body.

## Owner Decision

- The current final/latest Recipe Truth is the Owner-provided Pourō-Figma extraction package.
- Recipe value external web research is not required.
- Primary materials will be supplied by the Owner when needed.
- Values not stored in the package remain unresolved and must not be inferred or completed.
- If Owner-supplied values differ from general public materials, do not auto-correct to the public value.
- Real-device confirmation and correction after implementation remain Owner-run.
- Planned recipes in the package do not authorize runtime implementation.

## R-13 Reversal

Current canonical R-13 Drawdown Five sequence:

```text
50 / 70 / 30 / 90 / 60 g
```

Current obsolete R-13 sequence:

```text
50 / 70 / 60 / 60 / 60 g
```

R-13 cumulative scaling:

```text
c1 = round0_1g(total x 1/6)
c2 = round0_1g(total x 2/5)
c3 = round0_1g(total x 1/2)
c4 = round0_1g(total x 4/5)
c5 = total
```

R-13 remains event-confirmed:

- Do not advance from elapsed time alone.
- Check previous-pour drawdown condition.
- Require user confirmation.
- Treat target times as guidance.
- Prohibit silent completion.

The numeric sequence `50 / 70 / 60 / 60 / 60 g` remains valid only where it is explicitly scoped to the 4:6 generated `より甘く` x `さらに濃く` combination or to an R-13 obsolete-value guard. It is not R-13 migration authority.

## New Hybrid

Current New Hybrid values:

- Pours: `40 / 80 / 80 / 100 g`
- Workflow cues: `0 / 40 / 80 / 120 / 160 / 200 seconds`

Obsolete New Hybrid values:

- Pours: `64 / 64 / 172 g`
- Workflow cues: `0 / 40 / 90 / 130 / 165 / 210 seconds`

Legacy fixed modules from the source package are evidence only and must not be used as migration authority.

## Ice Brew

Ice Brew ratio applies to beverage-water-equivalent mass, not hot water alone.

Current reference:

- Dose: `20 g`
- Hot water: `150 g`
- Ice: `80 g`
- Beverage-water-equivalent: `230 g`
- Ratio: `1:11.5`

Active Brew cumulative gram display is hot-water-only. The final non-pour action must not display `0 g`.

## 4:6 Model

4:6 remains one two-axis generated method:

- Do not split R-01, R-02, and R-03 into independent Home methods.
- Keep taste axis.
- Keep strength axis.
- Keep 3 / 4 / 5 pour generation.
- Keep final-pour residual absorption.

## Ratio Guardrail

The ratio input range `10.0` to `20.0` with `0.5` step is classified as:

```text
UX_GUARDRAIL_NOT_RECIPE_TRUTH
```

It must not override built-in reference dose, water, or listed step values.

## Planned Recipes

R-11 through R-14 are Owner project input, not runtime implementation approval.

- Missing primary-source registration remains explicit.
- Do not fill missing values from general public materials.
- Product-facing UI must not imply official affiliation, endorsement, supervision, or complete reproduction.
- Update only when Owner-provided material or explicit implementation approval is added.

## Excluded Recipes

Do not add these recipes to runtime:

- R-04: unconfirmed placeholder
- R-05: unconfirmed placeholder
- R-06: unconfirmed placeholder
- R-07: unverified

Do not infer or generate values for them.

## Source Metadata Boundary

Package evidence includes verbose values:

- `OWNER_DECISION_AND_CURRENT_CANONICAL`
- `PRODUCT_OWNER_SUPPLIED_NOTES`
- `OWNER_CONFIRMED`
- `OWNER_CONFIRMED_AS_PROJECT_INPUT_PRIMARY_RECIPE_SOURCE_NOT_REGISTERED_FOR_COMPLETE_PARAMETERS`

These are extraction/provenance evidence, not runtime enum literals.

```yaml
runtime_source_metadata_mapping:
  status: FUTURE_MAPPING_DECISION
  current_generic_types_changed: false
  runtime_recipe_records_created: false
```

This PR does not change `src/domain/recipe/source-metadata.ts`.

## Legacy Module Guard

The source package lists these legacy files:

- `src/app/data/ft03RecipeTruth.ts`
- `src/app/recipeBinding.ts`

They are not migration authority for Pourō-GPT Re.

## Scope

Authorized changed files:

- `AGENTS.md`
- `CLAUDE.md`
- `docs/context/02_OWNER_DECISIONS.md`
- `docs/context/03_RECIPE_TRUTH_V1.md`
- `docs/ai-reports/2026-07-03-recipe-authority-rebind.md`

Explicitly unchanged:

- `src/**`
- test files
- `package.json`
- `pnpm-lock.yaml`
- PR #4 branch, body, and state
- runtime recipe data
- source metadata TypeScript definitions
- GitHub Actions
- assets
- service worker

## Validation Requirements

Final validation must include:

- `pnpm format:check`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`
- `pnpm test:e2e`
- `pnpm run ci`
- `pnpm validate`
- `git diff --check`

Semantic audits must confirm the five-file scope, no source changes, no dependency changes, current R-13 direction, obsolete Hybrid boundary, unresolved values preserved, excluded recipes not filled, runtime source metadata enum unchanged, no external recipe research, no runtime recipe data added, and no PR #4 mutation.
