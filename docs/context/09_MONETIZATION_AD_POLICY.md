# Monetization and Ad Policy

## Principle

Pourō is a quiet tool.  
Ads must never break brewing concentration or unsaved records.

## Future iOS

Support:

- ads for free users
- paid remove ads
- restore purchases
- entitlement abstraction

PWA stage:
- no SDK required
- design abstraction only

## Forbidden Ad Moments

- Active Brew
- Pause / Resume
- Manual Override
- Background recovery
- Before Finish save
- During LAB creation
- During LAB evaluation
- Before LAB result save
- JSON import/export
- Error recovery

## Allowed Candidates

- after brew record saved
- after LAB result saved
- Home static sponsor slot
- Recipe Library static sponsor slot
- optional rewarded support

## Frequency

- never first brew
- max 1 per session
- max 1-2 per day
- premium removes all ads

## Architecture

src/app/monetization/
- adPolicy.ts
- adPlacements.ts
- entitlement.ts
- providers/noopAdProvider.ts
- providers/nativeAdProvider.future.ts

## Updated Monetization Decision

v1 direction:

- Freemium foundation
- optional future remove-ads purchase
- no forced video ads
- no interstitial ads
- no data lockout
- LAB Compare v1 free
- PWA v1 may launch without an ad SDK

### Free Features

- core brew timer
- built-in recipes
- basic My Recipe use
- local history
- JSON backup/export
- JSON restore/import
- LAB Compare v1
- accessibility features
- basic offline use

### Future Paid Candidates

- remove ads
- cloud sync
- LAB Studio
- advanced analysis
- high-resolution Share Cards
- additional themes
- AI-assisted review, if later approved

Do not monetize by blocking access to user-created history, recipes, LAB records, or backups.

