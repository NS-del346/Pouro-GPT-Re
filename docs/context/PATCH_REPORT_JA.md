# Pourō-GPT Re Context Pack v1.1.1 Patch Report

- patch_version: `v1.1.1`
- applied_at: `2026-07-01`
- base_package: `pouro-gpt-re-context-pack-final-gpt55-high-v1.1`
- output_package: `pouro-gpt-re-context-pack-final-gpt55-high-v1.1.1`
- patch_policy: 全面再生成を避け、R-11/R-12とActive Brew情報階層に関係する最小範囲のみ是正

## 1. 修正したファイル

| ファイル | 修正内容 |
|---|---|
| `03_RECIPE_TRUTH_V1.md` | 内蔵基準レシピ、表示用ratio、exact reference ratio、ユーザー指定ratioの優先規則を追加。R-11/R-12の250 g基準値とstep値を固定。 |
| `14_COMPETITIVE_STRATEGY.md` | Active Brewの情報階層では18番Directiveとstate modelが優先することを明記。現在行動／次注湯を主、Elapsedを従とした。 |
| `SOURCE_PROVENANCE.md` | v1.1.1 owner directiveを追加し、`voiceover_qa: NOT_RUN`を明記。 |
| `README.md` | versionとchecksum説明をv1.1.1へ更新。GitHub実装未検証、手動コピー時のSHA不一致、承認境界は維持。 |
| `MANIFEST.json` | v1.1.1の全登録ファイルについてサイズとSHA-256を再生成。 |
| `SHA256SUMS.txt` | 修正後の実ファイルから再生成。 |
| `PATCH_REPORT_JA.md` | 本レポートへ更新。 |

## 2. Recipe Truth修正

```yaml
reference_recipe_rule:
  built_in_default:
    use_reference_water_exactly: true
    use_reference_steps_exactly: true
  ratio_display:
    may_be_rounded_label: true
  custom_scaling_without_explicit_ratio:
    use_exact_reference_ratio: reference_water / reference_dose
  custom_scaling_with_user_ratio:
    use_user_ratio: true
```

- R-11の`1:15.6`は表示ラベル。内蔵基準は`16 g / 250 g`、stepは`30 g + 220 g`を正とする。
- R-12の`1:16.1`は表示ラベル。内蔵基準は`15.5 g / 250 g`、stepは`50 g × 5`を正とする。
- ratio未変更のカスタム生成は`reference_water / reference_dose`を使う。
- ratioを明示変更した場合のみユーザー指定ratioを使う。

## 3. 維持した重要条件

```yaml
R13_correct: 50 / 70 / 60 / 60 / 60 g
R13_prohibited_old: 50 / 70 / 30 / 90 / 60 g
R14_bloom_issue: unresolved
R14_current_policy: 30g household reproduction value
R14_competition_source: unresolved
critical_release_blocker:
  no_time_only_pouring_to_waiting: true
  user_confirms_pour_done: true
  pause_is_not_waiting: true
  drawdown_is_independent: true
```

## 4. 修正しなかった事項

- その他のcontext、design、prompt、QA、implementation文書。
- GitHub、Issue、branch、PR、CI、main、Pages／production。
- Figma、library publish、re-LOCK。
- App Icon。
- R-13／R-14の既存裁定。
- 物理iPhone、VoiceOver、Brew Advice調査。

## 5. まだ未検証の事項

- GitHub現在状態、PR依存関係、CI、deployment
- Figma現在状態とre-LOCK可否
- 物理iPhone Safari／Home Screen PWA
- VoiceOver／Reduce Motion／text enlargement
- R-14一次資料
- Brew Adviceの研究根拠
- 外部価格、レビュー、SDK、2026年時点のiOS／PWA制約

未実行項目は`PASS`ではなく、`UNVERIFIED`、`RESEARCH_REQUIRED`、または`NOT_RUN`として扱う。
