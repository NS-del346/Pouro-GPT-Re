# Pourō Icon System

Status: `WORKING_SYSTEM_REGISTERED`  
Canonical operating policy: `../../context/20_ICON_SYSTEM_OPERATING_POLICY.md`

## Current direction

- Use Iconify Figma plugin ID `735098390272716381` for search and editable-vector import.
- Use Iconoir Regular as the default common UI family.
- Do not mix icon libraries by default.
- Preserve existing approved product/method assets until a dedicated asset-intake decision.
- Create a custom icon only after an Iconoir search and semantic audit prove that an adequate icon is unavailable.

## Selection workflow

```text
inventory requirement
→ Iconoir-only search
→ up to three candidates
→ semantic and family-fit scoring
→ 16/20/24/32 px test
→ light/dark and selected/disabled test
→ source/license registration
→ selection or custom-required decision
```

## Custom workflow

```text
semantic brief
→ image-generation concept
→ human selection
→ SVG conversion
→ remove raster/filter/gradient artifacts
→ normalize to 24×24
→ set currentColor where applicable
→ small-size QA
→ side-by-side Iconoir audit
→ provenance registration
→ Owner approval when required
```

## Hard failures

- ambiguous destructive meaning
- unreadable at 16 px
- casual mixed-library style
- missing source/license
- raster-only runtime asset
- baked shadow, gradient, texture, or background
- icon-only primary action without an accessible name

## Working evidence storage

The full inventory, scorecard, prompt, SVG checklist, and provenance template are stored in:

```text
Google Drive/02_APPROVED_ASSETS_SOURCE/Icon_System/
POURO_GPT_RE_ICON_SYSTEM_WORKING_PACKAGE_HG001_20260703.zip
```

Runtime SVG files, final inventory, and license records are added only through a dedicated asset-intake PR after candidates are selected and audited.

App Icon redesign remains deferred.
