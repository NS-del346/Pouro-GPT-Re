# Pourō UI/UX Correction Directive

- document_name: `18_UI_UX_CORRECTION_DIRECTIVE.md`
- status: `CANONICAL_UI_UX_CORRECTION`
- adopted_at: `2026-07-01`
- source: owner-supplied UI/UX correction integration directive

> この文書は、過去の一般的UI案・Figma探索案より優先されるUI/UX是正指示である。ただし、Owner Decisions、Recipe Truth、Data Safety、Accessibility、No Hostage Data、Release Approval Rulesには従う。

## 1. Authority

```yaml
priority:
  higher_than:
    - previous_visual_exploration
    - generic_ui_suggestions
    - old_figma_exploration
  lower_than:
    - owner_decisions
    - recipe_truth
    - data_safety
    - accessibility
    - no_hostage_data_policy
    - release_approval_rules
```

This directive is canonical for UI/UX, motion, screen behavior, Figma exploration, and related implementation/QA decisions.

### Canonical Directive Set

To avoid duplicating every detailed rule in one file, this directive and the following derived documents form one canonical UI/UX correction set. A change to a derived document must remain consistent with this file and the higher authorities listed above.

```text
docs/design/motion-system.md
docs/design/home-redesign.md
docs/design/active-brew-state-model.md
docs/design/setup-preview-guidelines.md
docs/design/copywriting-guidelines.md
docs/design/iconoir-system.md
docs/design/figma-workflow.md
docs/qa/ui-ux-release-gate.md
docs/implementation/ui-ux-correction-roadmap.md
```

## 2. Current Status and Gates

```yaml
progress:
  overall_percent: 40
  status: provisional
  basis: specification_and_design_context_only
  excluded_from_confirmation:
    - current_GitHub_implementation_state
    - physical_iPhone_QA
    - VoiceOver_QA

blockers:
  - app_icon_redesign_on_hold
  - brew_advice_research_required
  - physical_iPhone_QA_not_complete
  - Figma_re_LOCK_not_approved
  - main_merge_not_approved
  - production_deploy_not_approved
```

No unexecuted physical-device, accessibility, merge, deployment, or Figma lock item may be reported as PASS or complete.

## 3. Setup, Preview, Finish, History, Tools, and Settings

Temperature and grind are not direct Setup controls.

```yaml
grinder_temperature_policy:
  setup:
    role: recommended_display_only
    editable: false
  preview:
    role: fixed_recommendation_display
  finish:
    role: actual_values_optional_input
  history_detail:
    role: edit_or_append_actual_values
  tools:
    role: grinder_converter_and_reference
  settings:
    role: default_profiles_and_preferences
```

Consequences:

- Setup shows method recommendations but does not ask users to tune temperature or grind.
- Preview presents the selected recipe's recommendation clearly and without implying it is a user-edited Setup input.
- Actual temperature, grind, grinder model, and click/setting values may be recorded after brewing in Finish or History Detail.
- Grinder equivalency belongs in Tools; persistent defaults and profiles belong in Settings.
- Existing plans to place an editable grinder converter directly in Setup are superseded.

## 4. Active Brew State Model

The prior behavior in which a pour automatically becomes waiting based only on elapsed time is prohibited.

```yaml
active_brew:
  previous_problem: pour_completion_was_inferred_from_time_only
  corrected_policy: pour_completion_is_confirmed_by_user_action
  states:
    - READY
    - POURING
    - WAITING
    - READY_FOR_NEXT
    - DRAWDOWN
    - FINISH
  pause:
    rule: preserve_current_state_and_stop_progression
  resume:
    rule: return_to_the_same_state
```

### Required Semantics

- `READY`: The next action is prepared but has not begun.
- `POURING`: The user is actively pouring. Time may continue, but elapsed time alone must not complete the pour.
- The user explicitly selects an action equivalent to **注ぎ終えた** to leave `POURING`.
- `WAITING`: A recipe-directed wait/rest period after a confirmed pour.
- `READY_FOR_NEXT`: The next step may begin.
- `DRAWDOWN`: A separate, explicitly explained state for final or between-pour drawdown behavior.
- `FINISH`: The brew has ended and may be evaluated/saved.
- Pause is an overlay/control state, not an alias for Waiting.
- Resume returns to the exact state and step that was paused.
- Event-confirmed recipes such as Drawdown Five must not auto-advance from target times alone.

This is a Brew Runner specification correction and a release blocker, not cosmetic polish.

```yaml
critical_release_blocker:
  no_time_only_pouring_to_waiting: true
  user_confirms_pour_done: true
  pause_is_not_waiting: true
  drawdown_is_independent: true
  event_confirmed_recipe_does_not_advance_from_target_time_only: true
```

## 5. Home Direction

- Maintain the selected direction described as **Home C + Home B**.
- Use this as the basis for the recommended Home design rather than reopening generic exploration.
- Begin candidate evaluation at `393×852` with two or three focused variants.
- Only the selected candidate is expanded to `375×667`, `393×852`, and `430×932`.
- A method card or flow must not hide unexplained steps. For example, a five-pour method must not visually appear to contain only three pours without explicit progressive disclosure.

### Canonical Home Method Descriptions

- **4:6:** 前半で味わい、後半で濃さを調整。好みに合わせて注ぎ方を変えられる基本メソッド。
- **New Hybrid:** 前半は透過、後半は浸漬。抽出方式を切り替えて整えます。
- **10 Pour:** 少量の注湯を10回繰り返します。一定のリズムで細かく抽出を管理します。
- **Ice Brew:** 氷で急冷するアイスコーヒー向け。HOTとICEの配分を自動計算します。

## 6. Motion Foundation

Motion must communicate physical response and state without becoming decorative or game-like.

### Canonical Timing Summary

```yaml
press:
  scale: 0.98
  duration: 100ms
selection:
  duration: 240ms
cta_crossfade:
  duration: 180ms
page_transition:
  duration: 280ms
step_transition:
  duration: 320ms
toast:
  enter: 260ms
  visible: 3200ms
  exit: 180ms
```

Required:

- quiet, restrained motion
- perceived mass and tactile response
- reduced-motion alternative
- motion that does not imply false timing precision
- clear feedback for pause/resume and state changes

Prohibited:

- exaggerated spring motion
- glow-driven emphasis
- game-like celebration
- motion-only status communication
- automatic transition that contradicts user-confirmed pour completion

## 6A. Typography Targets

```yaml
helper_label: 13-14px
body: approximately_16px
card_description: 15-16px
primary_button: 17-18px
screen_title: 26-30px
primary_number: 44-72px
```

Monospaced numbers and short English status labels may appear optically smaller and require size/weight adjustment. Physical-device legibility takes precedence over nominal token size.

## 7. Icon System

- Use **Iconoir Regular** as the standard common-interface icon direction.
- Keep stroke weight, optical size, and button geometry consistent.
- Icons must not replace essential labels where ambiguity would result.
- App Icon redesign is `DEFERRED`; keep the current icon temporarily.
- Do not restart App Icon exploration or implementation without explicit owner instruction.

## 8. Copywriting

- Preserve source/Recipe Truth terminology, especially for 4:6, rather than rewriting it into generic marketing language.
- Instructions must distinguish current action, next action, and wait/drawdown states.
- Do not imply a step is complete when completion has not been confirmed.
- Brew Advice must not present unsupported causal guidance as fact.
- Brew Advice status is `RESEARCH_REQUIRED`.
- Research-backed advice may be introduced only after its sources, confidence, scope, and exceptions are documented.
- Until then, implementation may provide a clearly labeled placeholder or omit the advice.

## 9. Finish, Toast, and History

After a successful save:

1. Return to Home.
2. Show a non-blocking confirmation Toast.
3. Selecting the Toast opens the most recently saved History Detail.
4. The saved session retains its recipe snapshot and actual-value metadata.

The Toast must not obscure critical controls, trap focus, or become the only confirmation channel.

## 10. Tools and Settings Separation

```yaml
tools:
  includes:
    - grinder_converter
    - grinder_reference
    - other_on_demand_utilities
settings:
  includes:
    - default_profiles
    - preferences
    - sound_and_haptics_preferences
    - persistent_app_behavior
```

Do not overload Setup with persistent preferences or utility workflows.

## 11. Figma Workflow

Use the following lifecycle labels:

- `EXPLORATION`
- `RECOMMENDED`
- `SELECTED`
- `IMPLEMENTED`
- `ARCHIVED`

Rules:

- Design exploration does not become canonical automatically.
- Owner review is required for design-critical selections.
- Figma re-LOCK requires explicit owner approval.
- App Icon frames are out of scope while the redesign hold remains active.
- Candidate boards should cover Motion Foundation, Home, Active Brew states, Preview clarity, Finish/Toast/History Detail, and Tools/Settings separation.

## 12. Implementation Order

```text
01 Motion Foundation
02 Iconoir Common Icons
03 Home Redesign
04 Setup Source Alignment
05 Preview Clarity
06 Active Brew State Model
07 Finish / History Metadata
08 Tools / Settings Separation
09 Research-backed Brew Advice placeholder only
10 Final QA
```

Implementation must preserve Recipe Truth, source metadata, local-first data safety, accessibility, and No Hostage Data policy.

## 13. QA and Release Blockers

The following are FAIL/release-blocking unless explicitly resolved:

- a pour completes or moves to Waiting from elapsed time alone
- Pause is represented as Waiting
- Drawdown is only an unexplained running timer
- a five-pour method appears to contain only three pours without explanation
- Setup allows direct temperature or grind editing
- text is too small or clipped on physical iPhone
- notification/sound controls are clipped
- Bottom Navigation interferes with the Home indicator or safe area
- untested physical-iPhone behavior is reported as PASS
- untested VoiceOver behavior is reported as PASS
- Brew Advice makes unsupported claims
- App Icon redesign restarts without owner instruction
- Figma is re-LOCKed without explicit approval
- main is merged without explicit approval
- production is deployed without explicit approval

Required evidence fields:

- PASS / FAIL / NOT_RUN
- screenshot or recording evidence where applicable
- device and viewport
- browser and standalone/PWA mode
- Reduced Motion status
- VoiceOver status

## 14. Required Documentation Integration

This directive must be reflected in:

- `00_CONTEXT_INDEX.md`
- `02_OWNER_DECISIONS.md`
- `06_DESIGN_APPROVAL_PROTOCOL.md`
- `11_ACCEPTANCE_QA.md`
- `13_IMPLEMENTATION_PLAN.md`

Repository implementation should additionally maintain these derived documents when work begins:

```text
docs/design/motion-system.md
docs/design/home-redesign.md
docs/design/active-brew-state-model.md
docs/design/setup-preview-guidelines.md
docs/design/copywriting-guidelines.md
docs/design/iconoir-system.md
docs/design/figma-workflow.md
docs/qa/ui-ux-release-gate.md
docs/implementation/ui-ux-correction-roadmap.md
```

## 15. Role-Specific Handoff Requirements

Every handoff prompt should include:

```text
Recommended model:
Reason:
Task:
Inputs:
Expected output:
Save output to:
Acceptance criteria:
```

### Management / Integration

Produce:

- context diffs
- conflict resolution table
- Owner Decision additions
- implementation issues
- Figma sprints
- QA gate updates

### Design

Create focused boards for:

- Motion Foundation
- Home Redesign
- Active Brew State Model
- Preview Clarity
- Finish / Toast / History Detail
- Tools / Settings Separation

### Implementation

Implement the ordered correction slices, prioritizing Active Brew semantics and accessibility over cosmetic polish.

### QA / Red Team

Report every relevant item as PASS, FAIL, or NOT_RUN and require evidence. Never infer device or assistive-technology results from desktop screenshots.
