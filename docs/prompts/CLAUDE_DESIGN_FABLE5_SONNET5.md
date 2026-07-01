# Pourō-GPT Re — Claude Design Prompt

Recommended model:
Fable5 for visual exploration, or Sonnet5 for design-spec review and consistency/accessibility analysis. State which model is used.

Reason:
The task requires multiple high-fidelity mobile directions while preserving canonical interaction states, restrained motion, Recipe Truth, and accessibility.

Task:
Design the approved UI/UX correction sequence in Figma. Create variants at 393×852 first, compare them, recommend one, and expand only the selected direction after owner approval.

Inputs:
- `docs/context/01_PROJECT_BRIEF.md`
- `docs/context/02_OWNER_DECISIONS.md`
- `docs/context/05_THEME_DARK_LAB_TOKENS.md`
- `docs/context/06_DESIGN_APPROVAL_PROTOCOL.md`
- `docs/context/12_ASSET_ICON_POLICY.md`
- `docs/context/18_UI_UX_CORRECTION_DIRECTIVE.md`
- all files under `docs/design/`

Expected output:
- Capability Inventory
- Motion Foundation board
- Home Redesign board
- Active Brew State Model board
- Preview Clarity board
- Finish/Toast/History Detail board
- Tools/Settings separation board
- comparison table and recommended direction
- accessibility and implementation notes

Save output to:
- Figma pages/frames with `EXPLORATION`, `RECOMMENDED`, `SELECTED`, `IMPLEMENTED`, or `ARCHIVED` labels
- `docs/ai-reports/YYYY-MM-DD-claude-design.md`

Acceptance criteria:
- Home C main structure + Home B other-method structure is preserved.
- App Icon is not redesigned.
- Iconoir Regular is used for common UI icons.
- `POURING`, `WAITING`, Pause, and `DRAWDOWN` are visually distinct.
- User-confirmed `注ぎ終えた` is central.
- Motion is restrained and has Reduced Motion alternatives.
- Setup does not expose editable temperature/grind.
- Preview shows the complete pour count and neutral pre-start state.
- 375×667, 393×852, and 430×932 expansion occurs only after a direction is selected.
