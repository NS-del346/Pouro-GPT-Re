# Recipe Truth v1

Status: owner-provided working canon, integrated 2026-06-30; rounding clarification patched in v1.1 and reference-ratio clarification patched in v1.1.1 on 2026-07-01; authority rebound on 2026-07-03 to Owner-provided Pourō-Figma extraction package `POURO_FIGMA_LATEST_FINAL_RECIPE_TRUTH_HG001.zip`.

This document is the highest-authority recipe specification after Owner Decisions. Implementation must not silently simplify, reinterpret, or regenerate historical snapshots from newer rules.

## 0. Authority Provenance

Current explicit Owner Decision date: 2026-07-03.

```yaml
authority_package:
  source_project: NS-del346/Pouro-Figma
  source_integration_head: a69775bbbda15d98ffa5aa747de5e37e86efc630
  package_filename: POURO_FIGMA_LATEST_FINAL_RECIPE_TRUTH_HG001.zip
  package_sha256: dd1fd736652669952214995cd003e347401013f2dc6584da945e0201020d178f
  extraction_timestamp: 2026-07-02T23:29:36+00:00
  external_research_performed: false
  automatic_implementation_authorized: false
```

- The current final/latest Recipe Truth is the Owner-provided Pourō-Figma extraction package above.
- External web research is not required for Recipe values.
- Primary materials will be supplied by the Owner when needed.
- Values not stored in the package remain unresolved and must not be inferred or completed.
- If Owner-supplied values differ from general public materials, do not auto-correct to the public value.
- Planned recipes in the package are Owner project input, not runtime implementation approval.
- Product-facing UI must not imply official affiliation, endorsement, supervision, or complete reproduction.

## 1. Global Rules

### 1.1 Method Set

Core methods:

- `four-six` — 4:6
- `hybrid` — New Hybrid
- `ten-pour` — 10 Pour
- `ice-brew` — Ice Brew

Additional methods:

- `collective-ratio` / R-11 — Collective 15.6
- `medina-five-pour` / R-12 — Five Fifty
- `winton-five-pour` / R-13 — Drawdown Five
- `wang-center-pour` / R-14 — Center Pour

4:6 is one method with a taste × strength matrix. R-01, R-02, and R-03 are not independent Home cards.

Excluded from runtime until explicit Owner revision:

- R-04: unconfirmed placeholder
- R-05: unconfirmed placeholder
- R-06: unconfirmed placeholder
- R-07: unverified

### 1.2 Input and Scaling

```yaml
coffee_dose:
  minimum: 10g
  maximum: 50g
  step: 0.5g
brew_ratio:
  minimum: 10.0
  maximum: 20.0
  step: 0.5
  classification: UX_GUARDRAIL_NOT_RECIPE_TRUTH
output_precision:
  grams: 0.1g
```

### Rounding Definition

この文書内の `round()` は、特に明記がない限り **0.1 g単位への丸め**を意味する。Recipe-specific formulaでは、意味を明確にするため `round0_1g()` と表記する。

- 実装では 0.1 g を整数単位として扱うことを推奨する。
- 各注湯ステップの丸め差分は、原則として最終注湯ステップへ吸収する。
- 非注湯ステップへ丸め差分を割り当ててはならない。
- 最終注湯後の合計は、必ず計算済み総湯量と一致させる。

- Provide steppers and direct numeric input.
- The `10.0` to `20.0` ratio range and `0.5` step are UX guardrails, not Recipe Truth; they must not override built-in reference dose, water, or listed step values.
- Total water = coffee dose × ratio.
- Internal calculation should avoid floating-point drift; a 0.1 g integer representation is preferred.
- Distribute rounding error to the final **pour** so the sum of all pour amounts equals total water.
- When a user changes dose or ratio from the reference recipe, show:

> カスタム生成レシピ  
> 基準レシピからPourōが比例生成した値です

- A scaled recipe must not be described as official, approved, supervised, or an exact competition recipe.

### 1.2.1 Reference Recipe and Display Ratio Rule

```yaml
reference_recipe_rule:
  built_in_default:
    use_reference_water_exactly: true
    use_reference_steps_exactly: true
  ratio_display:
    may_be_rounded_label: true
  custom_scaling_without_explicit_ratio:
    use_exact_reference_ratio: reference_water / reference_dose
  custom_scaling_with_user_ratio:
    use_user_ratio: true
```

- 内蔵基準レシピでは、`reference_water`と表に記載されたstep値を正とする。
- `reference_ratio`や`helper_label`は、読みやすさのために丸められた表示ラベルである場合がある。
- 表示用ratioを再計算に使い、内蔵基準レシピの湯量やstep値を変えてはならない。
- ユーザーがratioを明示変更していないカスタム生成では、`reference_water / reference_dose`をexact reference ratioとして使う。
- ユーザーがratioを明示変更した場合のみユーザー指定ratioを使い、`カスタム生成レシピ`として表示する。
- 基準dose・基準water・表のstep値が揃う場合、それらは表示ratioより優先する。

### 1.3 Source Metadata

```ts
type RecipeSourceType =
  | "primary"
  | "secondary"
  | "owner_supplied"
  | "home_adaptation"
  | "unresolved";

type SourceConfidence =
  | "confirmed"
  | "supported"
  | "experimental"
  | "unresolved";
```

Store person, competition, brand, source URL, and unresolved points in detail metadata. Home cards use neutral technique-oriented names.

Package evidence contains verbose source metadata strings such as `OWNER_DECISION_AND_CURRENT_CANONICAL`, `PRODUCT_OWNER_SUPPLIED_NOTES`, `OWNER_CONFIRMED`, and `OWNER_CONFIRMED_AS_PROJECT_INPUT_PRIMARY_RECIPE_SOURCE_NOT_REGISTERED_FOR_COMPLETE_PARAMETERS`. These are extraction/provenance evidence, not runtime enum literals. Mapping those values to the current generic runtime types remains a future source metadata decision.

### 1.4 Timing Semantics

```yaml
time_prompt:
  - four-six
  - hybrid
  - ten-pour
  - ice-brew
  - collective-ratio
  - medina-five-pour
  - wang-center-pour
event_confirmed:
  - winton-five-pour
```

Drawdown Five must not auto-advance solely from elapsed time.

### 1.5 History Snapshot Rule

Brew Again restores the exact saved generated snapshot. It must not silently regenerate an old brew with current rules.

Minimum saved fields:

```yaml
method_id:
recipe_name:
coffee_dose:
ratio:
total_water:
temperature:
roast:
grind:
grinder_model:
grinder_setting:
generated_steps:
timing_semantics:
ratings:
memo:
created_at:
source_version:
```

### 1.6 Non-pour Steps

- Do not display `0g`, `nullg`, or an invented pour amount for non-pour steps.
- Completion guidance is not a deterministic progress denominator unless the recipe explicitly defines it that way.

---

## 2. 4:6

```yaml
method_id: four-six
default_dose: 20g
default_water: 300g
default_ratio: 1:15
finish_guidance: 3:30
timing_interval: 45s
roast: unresolved
temperature: unresolved
```

### Structure

- First section = 40% of total water; controls taste.
- Second section = 60% of total water; controls strength.

### Taste Axis

| Selection | Pour 1 | Pour 2 |
|---|---:|---:|
| ベーシック | first 40% × 1/2 | first 40% × 1/2 |
| より甘く | first 40% × 5/12 | first 40% × 7/12 |
| より明るく | first 40% × 7/12 | first 40% × 5/12 |

At 20 g / 300 g:

| Selection | Pour 1 | Pour 2 |
|---|---:|---:|
| ベーシック | 60 g | 60 g |
| より甘く | 50 g | 70 g |
| より明るく | 70 g | 50 g |

### Strength Axis

| Selection | Remaining 60% | Total pours |
|---|---|---:|
| 薄く | one pour | 3 |
| より濃く | two equal pours | 4 |
| さらに濃く | three equal pours | 5 |

At 20 g / 300 g:

- 薄く: 180 g
- より濃く: 90 / 90 g
- さらに濃く: 60 / 60 / 60 g

### Nine Combinations at 20 g / 300 g

| Taste | Strength | Pour sequence |
|---|---|---|
| ベーシック | 薄く | 60 / 60 / 180 g |
| ベーシック | より濃く | 60 / 60 / 90 / 90 g |
| ベーシック | さらに濃く | 60 / 60 / 60 / 60 / 60 g |
| より甘く | 薄く | 50 / 70 / 180 g |
| より甘く | より濃く | 50 / 70 / 90 / 90 g |
| より甘く | さらに濃く | 50 / 70 / 60 / 60 / 60 g |
| より明るく | 薄く | 70 / 50 / 180 g |
| より明るく | より濃く | 70 / 50 / 90 / 90 g |
| より明るく | さらに濃く | 70 / 50 / 60 / 60 / 60 g |

The `50 / 70 / 60 / 60 / 60 g` sequence appears in this table only as the 4:6 `より甘く` × `さらに濃く` generated combination. It is not the R-13 Drawdown Five canonical sequence and must not be used as R-13 migration authority.

Each pour begins at 45-second intervals. `3:30` is drawdown guidance, not a guaranteed finish time or progress denominator.

---

## 3. New Hybrid

```yaml
method_id: hybrid
default_dose: 20g
default_water: 300g
default_ratio: 1:15
initial_temperature: approximately 90°C
later_temperature: 70°C
brew_pours: [40g, 80g, 80g, 100g]
completion_step: 3:20
roast: unresolved
```

| Time | Switch | Pour | Cumulative | Instruction |
|---|---|---:|---:|---|
| 0:00 | CLOSED | 40 g | 40 g | 閉じた状態で注ぐ |
| 0:40 | OPEN | 80 g | 120 g | 開いて注ぐ |
| 1:20 | OPEN | 80 g | 200 g | 注湯後、ケトルを70℃へ調整 |
| 2:00 | CLOSED | 100 g | 300 g | 閉じて注ぐ |
| 2:40 | OPEN | — | 300 g | スイッチを開ける |
| 3:20 | OPEN | — | 300 g | 落ち切り・完成 |

Cooling water added to the kettle is not included in total water, ratio, pour amount, cumulative water, or history water. Its amount is unmeasured; show only the instruction.

Obsolete New Hybrid values:

- Pours: `64 / 64 / 172 g`
- Workflow cues: `0 / 40 / 90 / 130 / 165 / 210 seconds`

Do not use obsolete New Hybrid values or Pourō-Figma legacy fixed modules as migration authority.

---

## 4. 10 Pour

```yaml
method_id: ten-pour
default_dose: 20g
default_water: 300g
default_ratio: 1:15
temperature: 95-96°C
grind: extremely coarse
grinder_reference: Comandante C40 40-45 clicks
filter: unresolved
finish_guidance: 3:30
```

| Time | Pour | Cumulative |
|---|---:|---:|
| 0:00 | 30 g | 30 g |
| 0:30 | 30 g | 60 g |
| 0:45 | 30 g | 90 g |
| 1:00 | 30 g | 120 g |
| 1:15 | 30 g | 150 g |
| 1:30 | 30 g | 180 g |
| 1:45 | 30 g | 210 g |
| 2:00 | 30 g | 240 g |
| 2:15 | 30 g | 270 g |
| 2:30 | 30 g | 300 g |

Treat the first pour as bloom. Do not add a separate bloom, agitation, or swirl without source confirmation. Adjust grind toward drawdown near 3:30.

---

## 5. Ice Brew

```yaml
method_id: ice-brew
default_dose: 20g
default_ratio: 1:11.5
beverage_water_equivalent: 230g
hot_water: 150g
ice: 80g
temperature: unresolved
grind: unresolved
final_action: 3:00
```

`HOT : ICE = 150 : 80`. The ratio applies to beverage-water equivalent (`20 g` dose, `150 g` hot water, `80 g` ice, `230 g` beverage-water-equivalent, `1:11.5`), not hot water alone.

| Time | Action | Amount | HOT cumulative |
|---|---|---:|---:|
| before start | サーバーへ氷 | ICE 80 g | — |
| 0:00 | HOT 1投目 | 30 g | 30 g |
| 0:30 | HOT 2投目 | 30 g | 60 g |
| 1:00 | HOT 3投目 | 30 g | 90 g |
| 1:30 | HOT 4投目 | 30 g | 120 g |
| 2:00 | HOT 5投目 | 30 g | 150 g |
| 3:00 | スワール・急冷 | — | 150 g |

Active Brew cumulative display shows hot water only. The final non-pour action must not display `0 g`.

---

## Planned Recipe Boundary

R-11 through R-14 are Owner project input from the authority package. They are not runtime implementation approval.

- Missing primary-source registrations remain explicit.
- Do not complete missing values from public materials or external web research.
- Product-facing UI must not imply official affiliation, endorsement, supervision, or complete reproduction.
- Update these entries only when the Owner provides additional materials or an explicit implementation approval.

## 6. Collective 15.6

```yaml
recipe_id: R-11
method_id: collective-ratio
display_name: Collective 15.6
helper_label: 1:15.6・ワンポア
reference_dose: 16g
reference_water: 250g
reference_ratio: 1:15.6 # rounded display label
exact_reference_ratio: reference_water / reference_dose # 15.625
temperature: 92-95°C
grind: medium / filter
dripper: Kalita Wave
finish_range: 1:45-2:45
```

Do not lock this recipe to a single roast level. KINGrinder K6 75 clicks is a home reference, not an official value.

The displayed ratio `1:15.6` is rounded for readability. The built-in reference recipe uses exactly `250 g` and the listed `30 g + 220 g` steps; it must not be recalculated as `249.6 g`.

| Time | Action | Pour | Cumulative |
|---|---|---:|---:|
| before start | フィルターをリンス | — | — |
| 0:00 | 蒸らし | 30 g | 30 g |
| 0:00-0:30 | 蒸らし待機 | — | 30 g |
| 0:30-about 1:45 | 円を描く連続注湯 | 220 g | 250 g |
| about 1:45-2:45 | 落ち切り | — | 250 g |
| after completion | 軽く混ぜて冷ます | — | 250 g |

The main pour is one continuous pour, not multiple pulses.

Scaling:

```text
if built-in reference recipe:
  total water = 250.0 g
  bloom = 30.0 g
  main pour = 220.0 g
else if user explicitly changed ratio:
  effective ratio = user ratio
  total water = round0_1g(dose × effective ratio)
else:
  effective ratio = reference_water / reference_dose
  total water = round0_1g(dose × effective ratio)

bloom = round0_1g(total water × 0.12)
main pour = total water - bloom
```

---

## 7. Five Fifty

```yaml
recipe_id: R-12
method_id: medina-five-pour
display_name: Five Fifty
helper_label: 50g × 5・30秒間隔
reference_dose: 15.5g
reference_water: 250g
reference_ratio: 1:16.1 # rounded display label
exact_reference_ratio: reference_water / reference_dose # approximately 16.1290322581
temperature: 91°C
grind: medium
dripper: ORIGAMI Dripper Air S
filter: conical
target_finish: 2:40-2:45
target_coffee: light roast where sweetness, acidity and complexity are desired
```

Comandante Red Clix 48-54 clicks is displayed only as a registered home reference.

The displayed ratio `1:16.1` is rounded for readability. The built-in reference recipe uses exactly `250 g` and five `50 g` pours; it must not be recalculated as `249.55 g`.

| Time | Pour | Cumulative |
|---|---:|---:|
| 0:00 | 50 g | 50 g |
| 0:30 | 50 g | 100 g |
| 1:00 | 50 g | 150 g |
| 1:30 | 50 g | 200 g |
| 2:00 | 50 g | 250 g |
| 2:40-2:45 | drawdown | 250 g |

Pour in circles from center outward and back toward center.

Advanced reference:

```yaml
water:
  approximate_ppm: 65
  minerals: calcium and magnesium approximately balanced
finish:
  optional: light agitation after brewing
```

Scaling uses cumulative targets to guarantee the final sum:

```text
if built-in reference recipe:
  total water = 250.0 g
  pours = 50.0 / 50.0 / 50.0 / 50.0 / 50.0 g
else if user explicitly changed ratio:
  effective ratio = user ratio
  total water = round0_1g(dose × effective ratio)
else:
  effective ratio = reference_water / reference_dose
  total water = round0_1g(dose × effective ratio)

cumulative[n] = round0_1g(total water × n / 5)
pour[n] = cumulative[n] - cumulative[n-1]
```

---

## 8. Drawdown Five

```yaml
recipe_id: R-13
method_id: winton-five-pour
display_name: Drawdown Five
helper_label: 落ち切り基準・5投
reference_dose: 20g
reference_water: 300g
reference_ratio: 1:15
roast: light
grind: coarse
dripper: V60 01
dripper_note: metal recommended; resin acceptable
filter: CAFEC normal
finish_guidance: approximately 2:40
```

Comandante Red Clix 62 clicks is a home reference.

**Canonical sequence:** `50 / 70 / 30 / 90 / 60 g`
**Prohibited obsolete sequence:** `50 / 70 / 60 / 60 / 60 g`

| Target time | Start condition | Temperature | Pour | Cumulative |
|---|---|---:|---:|---:|
| 0:00 | start | 93°C | 50 g | 50 g |
| about 0:35 | after previous pour nearly drains | 93°C | 70 g | 120 g |
| about 1:05 | after previous pour nearly drains | 93°C | 30 g | 150 g |
| about 1:35 | after previous pour nearly drains | 88°C | 90 g | 240 g |
| about 2:05 | after previous pour nearly drains | 88°C | 60 g | 300 g |
| about 2:40 | final drawdown | — | — | 300 g |

Active Brew rules:

- Keep measuring elapsed time.
- Do not auto-advance from time alone.
- Check the previous-pour drawdown condition before the next pour.
- Require user confirmation before advancing.
- Target times are guidance.
- Silent completion is prohibited.
- Do not add manual agitation or swirl.
- Pouring itself is the agitation.
- A one-kettle home alternative may suggest opening the lid to cool naturally.

Scaling cumulative targets:

```text
c1 = round0_1g(total × 1/6)
c2 = round0_1g(total × 2/5)
c3 = round0_1g(total × 1/2)
c4 = round0_1g(total × 4/5)
c5 = total
```

---

## 9. Center Pour

```yaml
recipe_id: R-14
method_id: wang-center-pour
display_name: Center Pour
helper_label: 30秒蒸らし・中心1点注ぎ
reference_dose: 15g
reference_water: 250g
reference_ratio_display: 1:16.7
exact_ratio: 250 / 15
kettle_setpoint: 93-94°C
brew_water_temperature: approximately 92°C
dripper: ceramic V60 / Arita ware
filter: V60 paper
finish_guidance: approximately 2:00
```

Coffee and grind:

```yaml
roast:
  value: very light
  agtron_reference: approximately 95
  source_status: secondary / primary verification required
grind:
  canonical: very fine and uniform
  home_reference:
    grinder: TIMEMORE C3
    setting: 13 clicks
    status: home reproduction value
```

Do not generalize C3 13 clicks directly to other grinders.

Setup guidance:

- Rinse with approximately 300 g water.
- Warm the ceramic dripper.
- Discard rinse water.
- Allow the dripper to cool slightly before brewing.

| Time | Action | Pour | Cumulative |
|---|---|---:|---:|
| 0:00 | 蒸らし | 30 g | 30 g |
| 0:00-0:30 | 蒸らし待機 | — | 30 g |
| 0:30 | 中心1点へ連続注湯 | 220 g | 250 g |
| about 2:00 | 落ち切り | — | 250 g |

The main pour is one continuous center pour. Do not convert it to circular pouring or multiple pulses.

Unresolved source issue: public materials contain both 30 g and 40 g bloom values. Initial implementation uses the owner-provided home reproduction value of 30 g and displays:

> 蒸らし30g：家庭再現値  
> 原競技値は出典確認中

Primary material or original footage must be checked before release-candidate lock.

Scaling:

```text
total water = round0_1g(dose × 50 / 3)
bloom = round0_1g(dose × 2)
main pour = total water - bloom
```

---

## 10. Grinder Equivalency Boundary

Supported reference profiles:

- Comandante C40 MK4
- Comandante C40 MK4 Red Clix
- 1Zpresso K-Ultra
- TIMEMORE X Lite
- KINGrinder K6
- TIMEMORE C2
- TIMEMORE C3

Rules:

- Use only measured table mappings.
- Support bidirectional lookup when the table supports it.
- Show ranges for duplicate mappings.
- Do not extrapolate outside the table.
- Label output `実測参考換算 / Experimental`.
- Do not claim particle-size, fines, flow-rate, extraction, or taste equivalence.

## 11. Release-blocking Recipe Items

- R-13 obsolete sequence `50 / 70 / 60 / 60 / 60 g` must not exist as R-13 runtime data, normal fixtures, or UI display. The same numeric sequence remains valid only when clearly scoped to the 4:6 `より甘く` × `さらに濃く` generated combination or to an explicit R-13 obsolete-value guard.
- R-14 30 g / 40 g bloom source conflict remains unresolved and must be visibly labeled.
- R-11 through R-14 require source metadata in code before runtime implementation.
- Unverified roast, temperature, filter, and attribution fields remain unresolved rather than being guessed.
