# UI/UX Research Authority

Status: `OWNER_APPROVED_CURRENT_CANONICAL_RESEARCH_INPUT`
Effective date: `2026-07-03`

## Current canonical package

```yaml
research_authority:
  current_canonical:
    package: POURO_GPT_RE_UIUX_RESEARCH_FINAL_PACKAGE_20260703.zip
    sha256: 2a6bac3bdc6db6bb2e9c5129478d1fe628ce687ecb628fb5976d20e70eff2c97
    storage: Google Drive/03_DESIGN_REFERENCE/UI_UX_Research_Canonical
    reports:
      - REPORT_A_PREMIUM_MOBILE_INSTRUMENT_UI.md
      - REPORT_B_JAPANESE_UI_COPY.md
      - REPORT_C_APP_BENCHMARK.md
      - REPORT_D_THREE_TRACK_SYNTHESIS.md
  previous_reports:
    status: HISTORICAL_PROVENANCE
    active_authority: false
```

## Conflict rule

1. Current Owner decisions remain above research.
2. Recipe Truth and Active Brew contracts remain above research.
3. The current canonical package overrides older Report A–D, R1, and R2 material.
4. Source List, Unverified Register, and Validation limitations apply together with the reports.
5. Content found only in historical research must not be automatically revived.

## Report D Owner decisions

Items in `REPORT_D_OWNER_DECISIONS` are not Owner-approved decisions.

They remain one of:

- `OPEN`
- `OWNER_DECISION_REQUIRED`
- research alternatives
- evidence boundaries
- prototype, device, accessibility, or copy-test questions

A research recommendation becomes an Owner decision only after explicit Owner adoption.

## Three-track boundary

```yaml
refinement_tracks:
  - AB02_REFERENCE_CALIPER
  - AB04_POUR_CARTOGRAPHER
  - POURO_FABLE5_REFERENCE_DIRECTION

rules:
  refine_independently: true
  refine_in_parallel: true
  equal_refinement_depth: true
  winner_from_research: prohibited
  ranking_from_research: prohibited
  hybridization_before_owner_gate: prohibited
```

## Evidence limits

- Provisional copy remains provisional.
- Screenshots are supporting visual evidence only.
- Screenshots do not prove current runtime behavior or accessibility conformance.
- `NOT_FOUND`, `NOT_VERIFIED`, conflicts, and unresolved Owner decisions must remain visible.
- Research must not modify Recipe Truth or create recipe values or timings.

## Gate 1 handoff

The operational plan is `../design/gate1/THREE_TRACK_REFINEMENT_PLAN.md`.

The complete research package and Owner worksheet remain in Google Drive under `03_DESIGN_REFERENCE`.

The process stops at `OWNER_GATE_FOR_CONCEPT_SELECTION`.
