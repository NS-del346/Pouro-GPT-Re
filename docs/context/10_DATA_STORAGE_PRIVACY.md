# Data, Storage, Privacy

## Principles

- Local-first
- No account required initially
- User records are not held hostage
- JSON export is important
- History snapshots must remain stable
- Imported data must be validated
- Ads/analytics must not leak private notes

## Storage

Initial:
- localStorage acceptable

But use repository abstraction to allow future IndexedDB/iCloud.

## Import Safety

- schemaVersion required
- validate before merge
- preview before import
- reject or quarantine broken data
- handle duplicate IDs
- imported label
- no silent overwrite

## Privacy

Do not send:

- tasting notes
- free text memo
- recipe history
- LAB observations

unless explicitly opted in.

## iOS Future

Research required:

- StoreKit 2
- RevenueCat
- ATT
- Privacy Manifest
- App Store privacy labels
- Restore Purchases
