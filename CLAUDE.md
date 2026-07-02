# CLAUDE.md — Pourō-GPT Re Root Instructions

status: ACTIVE
approved_by: owner
scope: repository_root

このファイルは実装補助のための要約であり、下記の正本を上書き・複製しない。
矛盾がある場合は常に正本が優先される。

## 0. 権限順位(絶対)

1. 現在のOwner指示(このチャットでの直接指示)
2. `docs/context/02_OWNER_DECISIONS.md`
3. `docs/context/03_RECIPE_TRUTH_V1.md`
4. Data Safety / No Hostage Data
   (`docs/context/10_DATA_STORAGE_PRIVACY.md`, `docs/context/16_NO_HOSTAGE_DATA_POLICY.md`)
5. Accessibility / Acceptance QA / Release Gates
   (`docs/context/11_ACCEPTANCE_QA.md`, `docs/qa/ui-ux-release-gate.md`)
6. `docs/context/18_UI_UX_CORRECTION_DIRECTIVE.md`
7. このCLAUDE.md
8. 現在のリポジトリ実装
9. GitHub Issue / PR
10. 選択済みFigmaディレクション
11. Research報告(出典明記のもの)
12. 過去の会話・レガシー資産

**このCLAUDE.mdは上記1〜6を上書きしない。矛盾時は上位の正本を読み直して従うこと。**

## 1. Repository Boundary

| Role | Repository | Rule |
|---|---|---|
| 主対象 | `NS-del346/Pouro-GPT-Re` | 実装対象。作業前に現状を確認する |
| 参照専用 | `NS-del346/Pouro-Figma` | 読み取り専用。Owner明示なく変更しない |
| 保護対象 | `NS-del346/Pouro-GPT` | Owner明示承認なしに変更しない |

## 2. モデル方針とEffort運用

- 既定: Claude Sonnet 5 / High(repository調査・実装・テスト・技術監査)。Claude Fable 5はOwner確認済みで利用可能。UI/UX設計・情報階層・interaction・motion・copy・visual hierarchyは Fable 5 / High、重要画面の最終判断・複数案統合・リリース前視覚品質監査は Fable 5 / 実環境で利用可能な最高Effortを推奨する
- 許可モデルの恒久拡張は先に `docs/context/02_OWNER_DECISIONS.md` / `docs/context/07_AI_ORCHESTRATION_TOOLING.md` を更新してから行う。Ownerが個別タスクで別モデルを明示承認した場合、そのタスクに限り現在のOwner指示を優先できる
- Active Brew状態機械、Recipe Truth統合、data migration、Import/Export、No Hostage Data、accessibility release gate、UIと状態遷移の両方を変更する作業は、Sonnet 5で仕様・コード・テストを実装または監査し、UI/UX要素がある場合は別セッションのFable 5で独立レビューする。同一セッションの自己レビューだけで完了扱いにしない
- 各タスク開始前と主要工程報告時に、現在使用中・推奨・最高成果時のモデルとEffort、選定理由、開始前の切替要否を明記する。モデル切替は提案までとし、Owner未承認で自動切替しない。利用不能または未確認のモデル・Effortを使用済みとして報告しない

## 3. 作業開始前 Preflight(必須)

- read-only確認(状態把握・正本読了・git status確認など)は `main` 上でも実施可能
- ファイル変更、実装、commitを伴う作業は `main` 以外の feature branch で行う
- feature branch作成を含むmutationは、現在のOwner承認scopeに限定して行う
- bounded Fast Track low-risk PR承認では、capability preflightからDraft PR作成・独立read-only監査まで連続実行できる

実装作業を始める前に必ず確認し、報告すること。

- [ ] Git root
- [ ] origin
- [ ] current branch
- [ ] HEAD SHA
- [ ] git status --short(未追跡・未コミット差分の把握。勝手に削除・stash・上書きしない)
- [ ] 対象作業に関連する正本(`docs/context/*.md` の該当ファイル)を読了したか
- [ ] npm scripts(`npm run ci` 等)が実在するか。存在しない/実行不可なら `NOT_RUN` として理由を記録し、代替の推測をしない

## 4. Fast Trackと個別Owner承認

### 4.1 Fast Track low-risk PR

通常の低リスクPRでは、1回の限定Owner承認に次を含められる。

- executor capability preflight
- feature branch作成または承認済みbranch checkout
- repository clone／environment setup／package install
- 承認scope内のファイル作成・編集
- format／lint／typecheck／test／build／E2E
- stage／commit／push
- Draft PR作成・本文更新
- remote diff監査と独立read-only監査

Fast TrackはDraft PRと独立監査で停止する。`main`はread-onlyとし、clean worktree、expected branch／HEAD、限定scopeをmutation前に確認する。capability不足runtimeでは実装を開始しない。

### 4.2 個別Owner承認を維持する操作

- Ready for Reviewへの変更
- PR mergeまたはclose
- production deploy／release
- branch deletion
- force push
- destructive migration
- user data deletion
- secret／credential追加
- repository visibility変更
- ruleset／security settings変更
- protected repository `NS-del346/Pouro-GPT`の変更
- Recipe Truthの意味変更
- Owner Decisionsの重要変更
- Figma final re-LOCK／library publish
- App Icon redesign再開

既にOwnerが確定したDecisionを意味変更なしでcanonical文書へ記録するだけの変更は、scopeが限定されている場合にFast Trackへ含められる。

## 5. Active Brew — Release Blocker(絶対厳守)

詳細は `docs/context/17_BREW_RUNNER_RELIABILITY.md` と `docs/context/18_UI_UX_CORRECTION_DIRECTIVE.md` を正本とする。要点:

- `POURING`から`WAITING`へ経過時間だけで自動遷移させない
- 注湯完了は `注ぎ終えた` などユーザーの明示操作で確定する
- Pause は Waiting ではない(オーバーレイ的な一時停止状態)
- Resume は停止前と同じ underlying state・step へ戻す(進捗を捏造しない)
- Drawdown は独立した状態として扱う
- event-confirmed recipe(例: Drawdown Five / R-13)は target time だけで進行させない
- 主表示は current action または next pour timing。elapsed time は補助表示にとどめる

## 6. Recipe Truth(`docs/context/03_RECIPE_TRUTH_V1.md` が正本)

- コード都合でRecipe Truthを変更しない
- `round0_1g()` 規則(0.1g丸め、誤差は最終注湯へ吸収)を維持する
- 内蔵基準レシピは `reference_water` と表記載の step 値を正とする。表示用ratioで再計算しない
- **R-13 正値**: `50 / 70 / 60 / 60 / 60 g`
- **R-13 禁止旧値**: `50 / 70 / 30 / 90 / 60 g`
  - production code、recipe data、通常のfixtureおよびUI表示への混入を禁止する
  - 例外として、旧値を拒否することを確認する明示的なnegative/regression testでのみ使用可能とする
  - その場合はテスト名とコメントで、これが禁止された旧値であることを明示すること
- **R-14 bloom量は unresolved のまま**。30gは家庭再現値と明示し、競技一次値と混同しない
- 4:6の原本用語(ベーシック/より甘く/より明るく/薄く/より濃く/さらに濃く 等)を勝手に言い換えない

## 7. Data / Monetization

- History、My Recipe、LAB Compare v1、JSON Import/Exportは無料範囲を維持
- ユーザーデータを課金で拘束しない(No Hostage Data)。プレミアム失効後もローカルデータは閲覧・書き出し可能なままとする
- Active Brew、Pause、Manual Override、Drawdown、保存前Finish、LAB評価中、Import/Export中は広告を表示しない
- storageは local-first。破壊的migrationを行わず、schemaVersion検証・プレビュー・rollbackを用意する

## 8. UI / Accessibility / QA

- 確認対象ビューポート: `375×667` / `393×852` / `430×932`
- Dynamic Type、VoiceOver、Reduced Motionを考慮する。動作確認していないものを結果として報告しない
- 操作領域は最低 `44×44px`
- 横方向のoverflowを禁止する
- 物理iPhoneでの未確認事項を PASS としない
- Brew Advice は `RESEARCH_REQUIRED`(根拠のない因果主張をしない)
- App Icon redesign は `DEFERRED`(Owner指示なく再開しない)
- 共通アイコンは Iconoir Regular 方針を維持する

### 判定語彙

- テスト・監査結果: `PASS` / `FAIL` / `NOT_RUN`
- 未実行(コマンド不在・実行不能・未着手を含む): `NOT_RUN`
- 未確認の現在状態・外部事実(GitHub現状、PR依存、Figma現状、第三者情報など): `UNVERIFIED`
- `UNVERIFIED` はテスト合否の代用にしない。テストは必ず `PASS` / `FAIL` / `NOT_RUN` のいずれかで報告する

## 9. Git運用

- `main` 上で直接実装・commitしない。書込みは承認されたfeature branchだけで行う
- bounded Fast Track承認では、branch作成、edit、validation、stage、commit、push、Draft PR、独立監査を1つの承認scopeとして連続実行できる
- Fast TrackはReady for Review前で停止する。merge、deploy、branch deletion等へ自動進行しない
- 一つのPR / 一つの変更単位で一つの明確な責務のみを扱う
- 変更前にrepository、branch、base SHA、対象ファイル、validation、rollbackを確認する
- 変更後は関連検証を実行し、未実行は`NOT_RUN`として理由を記録する
- DNS timeout、HTTP 429／5xx、registry timeout、browser download timeoutのみ、同一scope・同一方式で最大2回再試行できる
- 別transport、別package manager、別API、別repository、別branchへのsilent fallbackを行わない
- permission denial、authority conflict、dirty worktree、unexpected branch／HEAD、secret要求、scope外変更、destructive operationでは即時停止する
- 既存の未コミット差分を勝手に削除・上書き・stashしない

## 10. 人間向け操作(ユーザーはCLI専門家ではない)

- GUIで完結できる操作はGUIを優先して案内する
- CLIが必要な場合は、Windows向けに一度に1コマンドずつ提示する
- 実行場所、正常時の結果、異常時に停止すべき条件を説明してから実行する
- 複雑な複数行スクリプトをいきなり提示しない
- 通常の低リスクPRではOwner操作を原則としてDraft PR監査後のmerge判断へ集約する

## 11. 作業報告フォーマット

各主要工程の完了時・区切り時に以下を含めて報告する。

- 全体進捗率
- 工程上の現在位置
- 完了したこと
- ブロッカー
- 次の3アクション
- 使用モデルとEffort(現在使用中・推奨・最高成果時のモデルとEffort、選定理由、開始前の切替要否。最高成果時の指定は実環境で利用可能な範囲に限る)
- branch
- HEAD
- worktree status(git status --short 相当)
- テスト結果(PASS/FAIL/NOT_RUNの内訳)
- 成果物パス
- 判断理由

## 12. 参照専用の詳細(このファイルでは複製しない)

| トピック | 正本 |
|---|---|
| 全体の権限順位・文書一覧 | `docs/context/00_CONTEXT_INDEX.md` |
| プロダクト定義 | `docs/context/01_PROJECT_BRIEF.md` |
| Owner決定事項全文 | `docs/context/02_OWNER_DECISIONS.md` |
| レシピ仕様全文(R-01〜R-14、丸め規則、グラインダー換算) | `docs/context/03_RECIPE_TRUTH_V1.md` |
| LAB Compare仕様 | `docs/context/04_LAB_COMPARE_MODE_V1.md` |
| テーマ/トークン | `docs/context/05_THEME_DARK_LAB_TOKENS.md` |
| デザイン承認フロー | `docs/context/06_DESIGN_APPROVAL_PROTOCOL.md` |
| AIオーケストレーション/モデル方針 | `docs/context/07_AI_ORCHESTRATION_TOOLING.md` |
| 人間操作プロトコル詳細 | `docs/context/08_HUMAN_OPERATION_PROTOCOL.md` |
| 広告/マネタイズ詳細 | `docs/context/09_MONETIZATION_AD_POLICY.md` |
| データ/ストレージ/プライバシー詳細 | `docs/context/10_DATA_STORAGE_PRIVACY.md` |
| 受け入れ/QAゲート詳細 | `docs/context/11_ACCEPTANCE_QA.md` |
| アイコン方針 | `docs/context/12_ASSET_ICON_POLICY.md` |
| 実装計画/依存関係 | `docs/context/13_IMPLEMENTATION_PLAN.md` |
| 競合戦略 | `docs/context/14_COMPETITIVE_STRATEGY.md` |
| ネイティブ移行計画 | `docs/context/15_NATIVE_ROADMAP.md` |
| No Hostage Dataポリシー全文 | `docs/context/16_NO_HOSTAGE_DATA_POLICY.md` |
| Brew Runner信頼性仕様全文 | `docs/context/17_BREW_RUNNER_RELIABILITY.md` |
| UI/UX是正指令全文 | `docs/context/18_UI_UX_CORRECTION_DIRECTIVE.md` |
| モーション/Home/Active Brew等の派生デザイン仕様 | `docs/design/*.md` |
| UI/UXリリースゲート詳細 | `docs/qa/ui-ux-release-gate.md` |
| UI/UX是正ロードマップ詳細 | `docs/implementation/ui-ux-correction-roadmap.md` |
| Claude Code向け役割プロンプト | `docs/prompts/CLAUDE_CODE_SONNET5_FABLE5.md` |
| パッチ履歴 | `docs/context/PATCH_REPORT_JA.md` |

## 13. 禁止事項の再確認

- 保護対象リポジトリ(`Pouro-GPT`)への変更
- Owner承認なしのmain merge / production deploy / Figma re-LOCK
- R-13禁止旧値のproduction code・recipe data・通常fixture・UI表示への混入(negative/regression testでの明示的使用を除く)
- Recipe Truthのコード都合での変更
- 未実行のQA/物理端末確認をPASSと報告すること
- App Icon redesignの無断再開
- 既存の未コミット差分・他者の作業の無断削除
