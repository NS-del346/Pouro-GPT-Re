# Setup and Preview Guidelines

## Setup

Primary controls:

- dose, with stepper and direct input
- ratio, with stepper and direct input
- roast level: light / medium / dark
- method-specific allowed variables such as 4:6 taste and strength

Recommended summary:

```text
豆量 g
[-] 20.0 [+]

比率
コーヒー豆 : 湯量
[-] 1 : 15 [+]
```

Temperature and grind are not edited in Setup.

```yaml
setup: recommendation_display_only
preview: fixed_recommendation_display
finish: actual_values_optional
history_detail: actual_values_edit_or_append
tools: grinder_converter_and_reference
settings: default_profiles_and_preferences
```

Roast changes recommendation metadata, not 4:6 taste/strength allocation.

## Preview

Preview is neutral and pre-start. Do not visually mark pour 1 as active.

Show:

- method
- dose, ratio, total water
- roast
- recommended temperature/grind
- all steps
- pour amount and cumulative amount
- start conditions/times
- complete pour count, e.g. `5 POURS` and `全5投・目標 3:30`
- source/custom-generated status

When folding steps, disclose hidden count: `残り2投を表示`.

Suggested preparation copy:

```text
端末を置ける場所を確認してください。
開始すると、最初の注湯を案内します。
```
