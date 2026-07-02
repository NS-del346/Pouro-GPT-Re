# Home Redesign

## Selected Direction

- Main structure: Home C
- Other-method structure: Home B
- Selected method: large guided hero
- Other methods: three comparison tiles
- Bottom navigation: Home, History, Tools, Settings

## Information Hierarchy

1. compact `pourō` brand anchor
2. selected method hero with large custom method icon
3. concise practical description
4. key attributes such as pours/time/adjustability
5. primary CTA reflecting selected method
6. three alternate method tiles
7. fixed bottom navigation with safe-area clearance

## Interaction

`tap → press 0.98 → selected hero expands → icon scales slightly → description/attributes fade in → CTA crossfades`

## Copy

Use the canonical method descriptions in `18_UI_UX_CORRECTION_DIRECTIVE.md`. Keep practical copy dominant.

## Sizing

- selected method icon: 64–82 px
- unselected icon: 44–52 px
- touch target: at least 44×44 px

## Responsive QA

At 375×667:

- CTA remains reachable
- all four methods remain discoverable
- no horizontal overflow
- bottom tabs do not cover the home indicator
- descriptions may shorten but must not become ambiguous

## Exclusions

- no LAB bottom tab in v1
- no App Icon redesign
- no generic card-for-everything layout
