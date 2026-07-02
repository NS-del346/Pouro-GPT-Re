# AGENTS.md — Pourō-GPT Re Codex Instructions
status: ACTIVE
scope: repository_root
target: Codex

このファイルは Codex 向けのリポジトリ固有作業指示である。`CLAUDE.md` は Claude Code 向け指示として維持し、移動・削除・置換しない。

## 1. 指示の優先順位
### 1.1 Codex作業指示
1. system / developer instructions
2. 現在のOwner指示・ユーザー明示指示
3. ユーザーレベル Development Governance
4. この `AGENTS.md`
`AGENTS.md` はCodexの作業方法を制約する。プロダクト正本の値、仕様、Owner決定を再定義しない。
### 1.2 プロダクト正本
プロダクト仕様・値・決定が衝突する場合は、次の正本順位を使う。
1. `docs/context/02_OWNER_DECISIONS.md`
2. `docs/context/03_RECIPE_TRUTH_V1.md`
3. `docs/context/10_DATA_STORAGE_PRIVACY.md` と `docs/context/16_NO_HOSTAGE_DATA_POLICY.md`
4. `docs/context/11_ACCEPTANCE_QA.md` と `docs/qa/ui-ux-release-gate.md`
5. `docs/context/18_UI_UX_CORRECTION_DIRECTIVE.md`
6. 現在のリポジトリ実装
7. GitHub Issue / PR
8. 選択済みFigma方針
9. 出典明記済みResearch
10. 過去会話・レガシー資産
この `AGENTS.md` は上位正本を上書きしない。矛盾を見つけたら作業を止め、該当箇所を報告する。

## 2. Repository Boundary
| Role | Repository | Rule |
|---|---|---|
| 主対象 | `NS-del346/Pouro-GPT-Re` | Codexの実装・検証対象 |
| 参照専用 | `NS-del346/Pouro-Figma` | Owner明示なしに変更しない |
| 保護対象 | `NS-del346/Pouro-GPT` | Owner明示承認なしに変更しない |
remote作業、PR作成、push、release、deployが関係する場合は、対象remoteが `NS-del346/Pouro-GPT-Re` であることを先に確認する。

## 3. 作業開始前 Preflight
作業開始前に、読み取り専用で次を確認して記録する。
- Git root
- origin
- current branch
- HEAD SHA
- `git status --short`
- 既存の `AGENTS.md` と適用範囲
- `CLAUDE.md` の存在
- 関連する正本文書を読んだか
- 対象タスクの許可範囲、禁止範囲、想定branch、想定HEAD、想定worktree
想定と違う場合、書込み前に停止して報告する。既存差分、未追跡ファイル、他者作業を勝手に削除・上書き・stashしない。

実装executorとして使用する前に、必要な範囲でGitHub read/write、branch／commit／push、Draft PR、filesystem write、exact diff、package registry、approved Node/package manager、browser download capabilityを確認する。1項目でも不足するruntimeでは実装を開始しない。

## 4. Branch / Git Mutation
- `main` 上では read-only の確認だけを行う。
- 書込み作業は承認されたfeature branch上でのみ行う。
- bounded Fast Track low-risk PR承認では、capability preflight、branch作成／checkout、environment setup、approved-scope edit、validation、stage、commit、push、Draft PR作成／更新、remote audit、独立read-only監査を1つの承認scopeとして連続実行できる。
- Fast TrackはReady for Review前で停止する。Ready、merge／close、deploy／release、branch deletion、force push、destructive migration、user-data deletion、secret追加、visibility、ruleset／security、protected repository、Recipe Truth意味変更、重要Owner Decision変更は個別Owner承認とする。
- `main` / protected branch へ直接commitまたはpushしない。
- force push、`git reset --hard`、`git clean`、広範囲削除、既存差分の無断stashを行わない。
- DNS timeout、HTTP 429／5xx、registry timeout、browser download timeoutのみ、同一scope・同一方式で最大2回再試行できる。別transport、別package manager、別APIへのsilent fallbackは禁止する。
- capability不足runtimeでは実装を開始せず、利用可能な承認済みexecutorへroutingする。

## 5. Codex権限昇格と安全境界
Codexでsandbox外実行、network、GUI、write範囲外アクセス、外部状態変更が必要な場合は、実行前に次を示して人間承認を求める。
- 目的
- 実行する1コマンド
- 読み取りか書込みか
- 影響範囲
- 失敗時の停止条件
unrestricted / full access への変更をCodexから自動提案しない。必要最小限のコマンド単位の承認を優先する。

## 6. Secret / Local Files
- tokens、credentials、secret stores、`auth.json`、秘密値を読まない。
- 秘密値をログ、patch、PR、report、promptに書かない。
- 現在ローカル専用と確認済みなのは `.claude/hookify.*.local.md` と `.claude/settings.local.json` のみ。
- 将来の `.claude/**` はGit追跡状態を個別確認する。
- hookや安全ルールを回避、削除、無効化しない。
- `--no-verify` 等で安全確認を迂回しない。

## 7. Windows CLI運用
人間にCLI操作を依頼する場合は、Windows向けに一度に1コマンドずつ提示する。
各コマンドについて次を明記する。
- 実行場所
- 期待される結果
- 異常時に止める条件
複数行スクリプト、破壊的コマンド、package install、権限設定変更をいきなり提示しない。

## 8. Active Brew Release Blocker
Active Brew は release blocker として扱う。詳細正本は `docs/context/17_BREW_RUNNER_RELIABILITY.md` と `docs/context/18_UI_UX_CORRECTION_DIRECTIVE.md`。
必ず守ること。
- `POURING` から `WAITING` へ経過時間だけで自動遷移させない。
- 注湯完了は `注ぎ終えた` などユーザー明示操作で確定する。
- Pause は Waiting ではなく overlay/control state。
- Resume は停止前と同じ underlying state と step に戻す。
- Drawdown は独立状態として扱い、ユーザー確認なしに完了しない。
- event-confirmed recipe は target time だけで進行させない。
- 非注湯stepに `0 g`、`null g`、捏造量を表示しない。
- recoveryで負の時間、重複遷移、silent completeを作らない。

## 9. Recipe Truth
Recipe Truth の正本は `docs/context/03_RECIPE_TRUTH_V1.md`。
- コード都合でRecipe Truthを変更しない。
- 4:6は taste × strength を持つ1メソッドとして扱う。
- `round0_1g()`、0.1g丸め、最終注湯への丸め差分吸収を維持する。
- 内蔵基準レシピは `reference_water` と表のstep値を正とし、表示ratioで再計算しない。
- R-13正値は `50 / 70 / 60 / 60 / 60 g`。
- R-13旧値 `50 / 70 / 30 / 90 / 60 g` はproduction data、通常fixture、UI表示へ混入させない。
- R-14 bloomは unresolved。30gは家庭再現値として扱い、競技一次値と混同しない。
- source metadataを捏造しない。URLを作らない。

## 10. No Hostage Data / Privacy
正本は `docs/context/10_DATA_STORAGE_PRIVACY.md` と `docs/context/16_NO_HOSTAGE_DATA_POLICY.md`。
- History、My Recipe、LAB Compare v1、JSON export/import、saved snapshotsは基本アクセスを維持する。
- premium失効後もユーザー作成データは閲覧・書き出し可能にする。
- local-firstを前提とし、破壊的migrationをしない。
- importは schemaVersion、validation、preview、duplicate handling を持つ。
- tasting notes、memo、history、LAB observationsを明示opt-inなしに外部送信しない。
- Active Brew、Pause、Manual Override、Drawdown、保存前Finish、LAB評価中、Import/Export中に広告を表示しない。

## 11. QA / Accessibility
正本は `docs/context/11_ACCEPTANCE_QA.md` と `docs/qa/ui-ux-release-gate.md`。
結果語彙を厳密に使う。
- `PASS`: 証跡ありで確認済み
- `FAIL`: 要件違反
- `NOT_RUN`: 未実行、実行不能、証跡なし
- `UNVERIFIED`: 現在状態や外部事実が未確認
`UNVERIFIED` をテスト合否の代用にしない。実行していない検証を `PASS` と報告しない。
確認対象viewportは `375×667`、`393×852`、`430×932`。物理iPhone、VoiceOver、Reduce Motion、Dynamic Type、主観的UI受入は人間または直接証跡があるまで `NOT_RUN` とする。自動検査とHuman Gateは分けて報告する。

## 12. UI/UX Correction
UI/UX是正の正本は `docs/context/18_UI_UX_CORRECTION_DIRECTIVE.md`。
- Setupはtemperature/grindを直接編集しない。recommendation表示に留める。
- Previewは全注湯回数と非注湯stepを誤解なく表示する。
- Finish save後はHomeへ戻り、Toastから最新History Detailを開ける。
- App Icon redesignは `DEFERRED`。Owner指示なしに再開しない。
- Brew Adviceは `RESEARCH_REQUIRED`。根拠なしの因果診断を出さない。
- Iconoir Regularの共通アイコン方針を維持する。

## 13. 実装範囲とPR単位
実装は承認されたIssueまたはsliceに限定する。1 PRは1目的に近づける。
推奨順序は `docs/context/13_IMPLEMENTATION_PLAN.md` と `docs/implementation/ui-ux-correction-roadmap.md` を参照する。特に Active Brew State Model は見た目のpolishではなくrelease blockerとして扱う。

## 14. 検証と証跡
変更後はリスクに応じた検証を行い、コマンドと結果を記録する。repoに存在しないscriptや実行不能なcheckは代替推測せず `NOT_RUN` と理由を記録する。
代表的な正本上の必須check:
```text
npm run ci
npm run test:e2e
npm run test:e2e:offline
```
存在確認、実行可否、失敗理由を区別する。スクリーンショット、viewport、browser/mode、overflow、CTA到達性、safe-area、44×44 target、text clippingを必要に応じて記録する。

## 15. 作業報告フォーマット
主要工程の完了時と最終報告では次を含める。
- 全体進捗率
- 工程上の現在位置
- 完了したこと
- 次の3アクション
- 判断理由
- branch
- HEAD
- worktree status
- 変更ファイル
- 実行したコマンド
- 検証結果: `PASS` / `FAIL` / `NOT_RUN`
- `UNVERIFIED` な外部事実
- ブロッカー
- rollbackの有無
- 外部状態変更の有無
- 次に必要なOwner承認
- 使用モデルとeffort
- 成果物パス

## 16. PR Prompt生成時の必須ラベル
PR promptまたはCodex promptを生成する場合は、次の2項目を含める。
```text
推奨されるモデル: <model and reasoning level>
最高の成果を期待する場合のモデル: <model and reasoning level>
```
モデル選定はタスクのリスク、必要なrepo検査量、UI/QA証跡の重さに合わせて具体的に書く。

## 17. このファイルで複製しない詳細
長い仕様値、recipe表、state machine詳細、QA matrix、roadmap全文はここへ複製しない。以下の正本を参照する。
- `docs/context/00_CONTEXT_INDEX.md`
- `docs/context/02_OWNER_DECISIONS.md`
- `docs/context/03_RECIPE_TRUTH_V1.md`
- `docs/context/10_DATA_STORAGE_PRIVACY.md`
- `docs/context/11_ACCEPTANCE_QA.md`
- `docs/context/13_IMPLEMENTATION_PLAN.md`
- `docs/context/16_NO_HOSTAGE_DATA_POLICY.md`
- `docs/context/17_BREW_RUNNER_RELIABILITY.md`
- `docs/context/18_UI_UX_CORRECTION_DIRECTIVE.md`
- `docs/prompts/CODEX_IMPLEMENTATION.md`
- `docs/qa/ui-ux-release-gate.md`
- `docs/implementation/ui-ux-correction-roadmap.md`
