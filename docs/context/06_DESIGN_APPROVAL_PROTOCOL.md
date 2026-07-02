# Design Approval Protocol

## Authority

Design work must obey Owner Decisions, Recipe Truth, data safety, accessibility, No Hostage Data, release gates, and the canonical UI/UX Correction Directive.

## Figma Workflow

`Requirements → 2–3 variants → compare → recommend → owner select → responsive expansion → motion definition → implementation → browser/device comparison → sync`

### State Labels

- `EXPLORATION`
- `RECOMMENDED`
- `SELECTED`
- `IMPLEMENTED`
- `ARCHIVED`

Exploration is not canonical. Only owner-selected direction may be treated as locked.

## Variant Rules

- Major experience: 3 variants where practical.
- Secondary screen: 2 variants where practical.
- Compare first at 393×852.
- Expand only the selected direction to 375×667, 393×852, and 430×932.

## Required Owner Review

- Home final direction
- Active Brew state presentation and central CTA
- LAB entry/result direction
- Dark and LAB Dark direction
- Finish/Toast/History Detail
- Ad placement
- Figma final re-LOCK/library publish
- App Icon, when that separate wave is explicitly reopened

## Locked Current Direction

- Home: Home C main structure + Home B other-method tiles.
- Common icons: Iconoir Regular.
- App Icon: `DEFERRED`; retain current temporary icon.
- Active Brew: user-confirmed pour completion, explicit Waiting and Drawdown.

## Motion Review

Evaluate:

- press response
- selection expansion
- CTA crossfade
- page transition
- step transition
- waiting breath
- completion feedback
- Reduced Motion equivalent

Reject strong bounce, excessive glow, game-like effects, or long blocking animation.

## Approval Boundary

Implementation may proceed on selected/approved directions. Final Figma re-LOCK or publish must not occur without explicit owner approval.
