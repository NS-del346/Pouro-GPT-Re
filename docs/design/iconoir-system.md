# Iconoir System

## Standard

- Iconoir Regular
- 24×24 grid
- 1.5 px stroke
- round caps and joins
- minimum 44×44 hit target

## Mapping

Use mappings defined in `docs/context/12_ASSET_ICON_POLICY.md`.

## Implementation Rules

- centralize icons behind a shared component
- do not mix stroke widths casually
- accessible labels are required for icon-only actions
- decorative icons are hidden from assistive technology
- selected state must not depend on icon color alone

## Custom Icons

Method icons and brand assets remain custom. Their geometry should be normalized in Figma and tested at small size.

## Prohibited

- excessive custom SVGs for standard UI actions
- unreviewed AI-generated SVG in production
- mixing Dynamic/Solid/Regular without approval
- shrinking the visual icon while leaving an unclear touch target
