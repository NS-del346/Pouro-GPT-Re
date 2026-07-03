# Icon System Operating Policy

Status: `OWNER_APPROVED_DIRECTION`  
Effective date: `2026-07-03`

## Source and family

```yaml
icon_system:
  import_tool:
    name: Iconify
    figma_community_plugin_id: "735098390272716381"
    role: search_and_editable_vector_import
  default_family:
    name: Iconoir
    variant: Regular
    grid: 24x24
  fallback:
    method: image_generation_then_svg_conversion
    allowed_only_when:
      - no adequate Iconoir Regular icon exists
      - available icons are semantically misleading
      - a Pourō-specific method symbol is required
```

Iconify is the import/search mechanism. It is not the visual family.

## Selection rules

- Search Iconoir Regular first.
- Do not mix libraries by default.
- Record the exact collection, icon name, license, and source.
- Test at 16, 20, 24, and 32 px.
- Keep primary navigation labels visible.
- Provide accessible names for icon-only controls.
- Do not use an icon as the sole carrier of ambiguous state or destructive meaning.

## Custom icon workflow

```text
semantic brief
→ prove existing Iconoir candidates are inadequate
→ image-generation concept
→ human selection
→ SVG conversion
→ path cleanup
→ 24×24 normalization
→ small-size QA
→ family-fit audit
→ provenance registration
→ Owner approval when required
```

AI-generated images and SVG conversions are concept/production candidates only. They are not approved assets before normalization and QA.

## Visual contract

```yaml
visual_contract:
  style: regular_monoline_outline
  cap: round
  join: round
  perspective: flat_2D
  fill: none_by_default
  gradients: prohibited
  shadows: prohibited
  texture: prohibited
  baked_background: prohibited
  text_inside_icon: prohibited
  optical_centering: required
```

## Storage

- Raw packages, Iconify exports, generated concepts, SVG conversion outputs, and QA evidence: Google Drive `02_APPROVED_ASSETS_SOURCE/Icon_System`.
- Canonical public-safe policy: this repository.
- Runtime SVG intake requires a dedicated asset-intake PR.
- Exact icon inventory and provenance are promoted to the repository only when candidates are selected and audited.
- App Icon redesign remains deferred and outside this policy update.

## Working package

```yaml
package: POURO_GPT_RE_ICON_SYSTEM_WORKING_PACKAGE_HG001_20260703.zip
sha256: eb0102ed8c6b79b2202a02586236725c1d5cecdab315f43ed3ab74b9a5189448
storage: Google Drive/02_APPROVED_ASSETS_SOURCE/Icon_System
status: WORKING_PACKAGE_NOT_RUNTIME_ASSET
```
