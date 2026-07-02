# Theme / Dark / LAB Tokens

Status: canonical semantic-token contract; token-name normalization patched in v1.1 on 2026-07-01.

Dark mode design is required. Components must consume semantic tokens rather than direct color values.

## Modes

```ts
type AppearanceMode = 'system' | 'light' | 'dark';
type WorkspaceMode = 'brew' | 'lab';
type EffectiveTheme = 'pouroLight' | 'pouroDark' | 'labLight' | 'labDark';
```

## Visual Direction

### Pourō Dark

Warm charcoal, ink, and ceramic shadow. Avoid pure black everywhere, pure white text everywhere, neon overload, mechanical inversion, and color-only state.

### LAB Dark

Graphite instrument / research-console direction with restrained amber and cyan accents. Avoid direct imitation of a specific brand, excessive gamification, and color-only A/B distinction.

## Canonical Semantic Tokens

Only the following token names are canonical for implementation:

```yaml
bg.canvas:
bg.surface:
bg.elevated:
text.primary:
text.secondary:
text.tertiary:
border.subtle:
accent.primary:
accent.secondary:
warning:
danger:
success:
focus:
chart.a:
chart.b:
lab.baseline:
lab.candidate:
```

Direct color use inside components is prohibited. Theme definitions may contain raw values; components may not.

## Candidate Values

These values are design-authority candidates. Contrast must be validated before final lock.

| Token | Pourō Light | Pourō Dark | LAB Light | LAB Dark |
|---|---|---|---|---|
| `bg.canvas` | `#FDFBF7` | `#0F0F10` | `#F0F4F8` | `#0B0E14` |
| `bg.surface` | `#F4F1EA` | `#1E1F21` | `#E1E8F0` | `#161B22` |
| `bg.elevated` | `#EAE6DC` | `#2C2D30` | `#D2DCED` | `#21262D` |
| `text.primary` | `#1C1B1A` | `#F5F5F7` | `#1F2937` | `#C9D1D9` |
| `text.secondary` | `#5C5954` | `#A1A1A6` | `#4B5563` | `#8B949E` |
| `text.tertiary` | `#8C8881` | `#757579` | `#9CA3AF` | `#6E7681` |
| `border.subtle` | `#D2CDBF` | `#3A3A3C` | `#CBD5E1` | `#30363D` |
| `accent.primary` | `#C5A880` | `#D4AF37` | `#007AFF` | `#0D9488` |
| `accent.secondary` | `#9E7C55` | `#B88A5A` | `#64748B` | `#58A6FF` |
| `warning` | `#D48B27` | `#FF9F0A` | `#F59E0B` | `#D97706` |
| `danger` | `#B22222` | `#FF453A` | `#EF4444` | `#F43F5E` |
| `success` | `#4A7A56` | `#30D158` | `#10B981` | `#10B981` |
| `focus` | `#C5A880` | `#D4AF37` | `#007AFF` | `#58A6FF` |
| `chart.a` | `#1C1B1A` | `#F5F5F7` | `#1F2937` | `#C9D1D9` |
| `chart.b` | `#C5A880` | `#D4AF37` | `#007AFF` | `#0D9488` |
| `lab.baseline` | `#1C1B1A` | `#F5F5F7` | `#1F2937` | `#C9D1D9` |
| `lab.candidate` | `#C5A880` | `#D4AF37` | `#007AFF` | `#0D9488` |

## A/B Non-Color Encoding

```yaml
baseline:
  label: A 基準
  shape: filled_circle
  line: solid
candidate:
  label: B 比較
  shape: outline_triangle
  line: dashed
```

Label, shape, line pattern, and text remain available in monochrome and color-vision-deficiency modes. Color alone must never carry the comparison meaning.

## Accessibility

- WCAG AA target.
- Keyboard focus must remain visible through the `focus` token.
- Reduced Motion must be supported.
- Text and controls must remain legible under enlarged text settings.

## Deprecated Aliases

The following names are retained only for migration/reference. They are **not permitted in new implementation code**.

```yaml
deprecated_aliases:
  background: bg.canvas
  surface: bg.surface
  elevatedSurface: bg.elevated
  accent: accent.primary
  border: border.subtle
  focusRing: focus
```

Migrate aliases at the theme-adapter boundary; do not propagate them into components.
