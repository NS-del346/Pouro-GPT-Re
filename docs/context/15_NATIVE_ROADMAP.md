# Pourō-GPT Re Native Roadmap

## Principle

Pourō should launch fast as a PWA / web app, while keeping the architecture ready for future iOS-native capabilities.

## Current Priority

Phase 1 should not depend on native hardware integrations.

Initial priority:

- fast usable PWA
- local-first storage
- responsive mobile layout
- reliable Brew Runner
- Recipe Truth
- My Recipe
- LAB Compare v1
- JSON backup/restore
- dark mode token foundation

## Native Candidate Features

Future iOS-native features may include:

- Live Activities
- Dynamic Island
- Apple Watch haptic guidance
- native notification scheduling
- stronger background behavior
- keep screen awake
- CoreBluetooth scale integration
- StoreKit 2
- Restore Purchases
- ad SDK integration
- native haptics
- native file export/share sheet

## Technology Decision

If the current repository is primarily Web/PWA, evaluate:

- Capacitor
- Expo / React Native migration
- keeping PWA and building separate native shell
- hybrid bridge strategy

Do not decide without inspecting the current repository.

The decision must be documented in:

- docs/architecture/native-stack-decision.md

## Bluetooth Policy

Bluetooth scale integration is future-phase only.

Allowed:

- official SDKs
- public APIs
- standard BLE profiles
- explicitly permitted integration methods

Not allowed as a planning assumption:

- undocumented protocol reverse engineering
- private SDK use without permission
- integration that violates device vendor terms

## PWA Constraints to Research

Before relying on PWA for brew-critical behavior, research:

- iOS Safari background timer behavior
- PWA standalone background behavior
- wake lock support
- notification support
- audio / vibration limitations
- offline cache behavior
- localStorage reliability
- IndexedDB migration need

## Future Native Priority

Recommended future order:

1. Keep screen awake / background recovery
2. Live Activities / Dynamic Island
3. native haptics and notifications
4. StoreKit / Remove Ads
5. Apple Watch
6. Bluetooth scale integrations
7. advanced telemetry
