# Pourō-GPT Re Competitive Strategy

## Main Competitor

Primary competitor:

- Filtru

Filtru is treated as the most important competitive reference, but Pourō must not compete by simply adding more features.

Pourō wins through:

- Quiet brewing
- No Hostage Data
- LAB Compare
- Recipe Truth
- Human-centered Brew Runner
- Contemporary Japanese Craft UI
- Native-ready PWA architecture

## Market Gap

Most coffee apps are split between:

1. Data-heavy professional tools
2. Simple brew timers
3. General recipe/journal apps

Pourō occupies a different space:

> A quiet brew instrument and comparison journal.

## Strategic Differentiation

### 1. Zero Interruption

No ads, paywalls, upgrade prompts, popups, or unrelated overlays may interrupt:

- Setup just before brew
- Active Brew
- Pause / Resume
- Manual Override
- Finish before save
- LAB setup
- LAB evaluation
- LAB result before save

### 2. No Hostage Data

User-created data must not be locked behind payment.

Basic access to the following must remain available:

- brew history
- saved recipes
- LAB Compare records
- JSON backup/export
- JSON restore/import
- saved snapshots

Paid features may enhance, sync, analyze, or render data, but must not block basic access to data the user created.

### 3. Quiet Precision

Pourō should be quieter than Filtru and less data-heavy than Beanconqueror.

Active Brew default should show only:

- elapsed time
- current step
- current pour amount
- cumulative water
- next step
- Pause
- Back
- Next
- Finish

Telemetry and live flow-rate should be advanced/future views, not the default.

When Active Brew information hierarchy conflicts with this strategic summary, `18_UI_UX_CORRECTION_DIRECTIVE.md` and `docs/design/active-brew-state-model.md` take precedence.

The default Active Brew screen must not present elapsed time, telemetry, current action, next action, controls, and completion status with equal visual weight. The primary display is the current required user action or next-pour timing. Elapsed time is secondary unless the selected recipe explicitly requires it.

### 4. Reactive Brew Runner

Pourō must respect the physical reality of brewing.

It should support:

- Pause / Resume
- Manual Override
- Back / Next
- skipped step logging
- actual pour amount
- actual temperature
- actual drawdown time
- planned vs actual differences
- background recovery
- session snapshot

### 5. LAB Compare

LAB Compare v1 is a free differentiating feature.

It is not a free-form recipe editor.

LAB Compare v1:

- chooses a baseline
- changes one independent variable
- generates a candidate
- runs normal Brew Runner
- records evaluation
- separates observation and interpretation
- stores next hypothesis

### 6. Recipe Truth

Recipe Truth must be honest and source-aware.

Use source confidence labels:

- confirmed
- supported
- experimental
- unresolved

Avoid claims such as:

- 公式
- 公認
- 監修
- 完全再現
- 本人承認
- 競技レシピそのもの

### 7. Grinder Equivalency as Experimental

Grinder equivalency is useful but uncertain.

It must be labeled as:

- 実測参考換算
- Experimental

It must not guarantee:

- particle size equality
- flow rate equality
- extraction equality
- taste equality

### 8. Yohaku UI

Pourō’s visual identity should use:

- whitespace
- fine lines
- warm neutral surfaces
- careful typography
- restrained motion
- precise numerical hierarchy

Normal mode:

- Contemporary Japanese Craft

LAB mode:

- Graphite LAB Console

### 9. Native-Ready PWA

PWA is used for speed.

The architecture should leave room for native iOS features:

- Live Activities
- Apple Watch
- CoreBluetooth
- haptics
- keep screen awake
- StoreKit
- native ads / entitlement

### 10. Shareable Craft

Future opportunity:

- Brew Snapshot Card
- LAB Result Card
- Recipe Card

These can become organic marketing assets, but must not leak private notes unless the user chooses to include them.

## Claims Requiring Verification

The research report includes useful competitive findings, but these must be verified before implementation decisions:

- Filtru current pricing
- Filtru feature restrictions
- Filtru App Store rating and review count
- Android rating
- Live Activities support of competitors
- Apple Watch support of competitors
- Bluetooth scale SDK/API availability
- PWA iOS Wake Lock behavior
- Web Bluetooth behavior on iOS
- App Store monetization requirements
