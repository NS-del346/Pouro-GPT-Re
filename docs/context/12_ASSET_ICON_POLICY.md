# Asset and Icon Policy

## Common UI Icons

Use Iconoir Regular by default.

```yaml
icon_system:
  source: Iconoir
  style: Regular
  grid: 24x24
  stroke: 1.5px
  cap: round
  join: round
  minimum_hit_area: 44x44px
```

Preferred mappings:

| Purpose | Iconoir icon |
|---|---|
| Home | `home-simple` |
| History | `clock-rotate-right` |
| Tools | `wrench` |
| Settings | `settings` |
| Back/forward | `nav-arrow-left` / `nav-arrow-right` |
| Close | `xmark` |
| Pause/resume | `pause` / `play` |
| Skip wait | `skip-next` |
| Repeat | `repeat` |
| Sound | `sound-high` |
| Help/info | `help-circle` / `info-circle` |
| Export/import | `download` / `upload` |
| Delete | `trash` |
| Favorite | `bookmark` |
| Edit | `edit-pencil` |

Avoid mixing Dynamic, Solid, and Regular styles without explicit design approval.

## Custom Exceptions

Iconoir does not define the product’s branded method symbols or wordmark. Custom assets remain appropriate for:

- App Icon
- `pourō` wordmark
- 4:6 method icon
- New Hybrid icon
- 10 Pour icon
- Ice Brew icon

## AI-Generated Assets

AI-generated images/SVGs are concept sources only. Before production use:

- redraw or clean in Figma
- normalize geometry/strokes
- remove embedded raster artifacts
- check small-size legibility
- verify originality and licensing risk
- retain source prompt and revision history

## App Icon

Status: `DEFERRED`.

Keep the current temporary icon. Do not restart icon exploration without owner instruction. Prior rejected directions are not reopened by default.

## Licensing

Record third-party asset and font licensing under `docs/assets/licenses.md` during repository implementation.
