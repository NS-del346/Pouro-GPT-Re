# Pourō-GPT Re コンテキスト投入・運用メモ

対象：PC操作、Git、PowerShell、AI連携に詳しくないオーナー向け。

## 1. このZIPの目的

このZIPは、Pourō-GPT Reの仕様を複数AIへ同じ条件で渡すための正本候補です。AIごとに別の説明を手入力せず、必要なファイルだけ添付して使います。

## 2. 最初に行うこと

1. ZIPをダウンロードします。
2. WindowsのエクスプローラーでZIPを右クリックします。
3. 「すべて展開」を選びます。
4. 展開後、`docs`フォルダーが見えることを確認します。

PowerShellは使用しなくて構いません。

## 3. ChatGPT Projectへ投入する順番

最初に次のファイルを添付します。

1. `docs/context/00_CONTEXT_INDEX.md`
2. `docs/context/02_OWNER_DECISIONS.md`
3. `docs/context/03_RECIPE_TRUTH_V1.md`
4. `docs/context/11_ACCEPTANCE_QA.md`
5. `docs/context/18_UI_UX_CORRECTION_DIRECTIVE.md`
6. `docs/prompts/CHATGPT_ADMIN_GPT55_HIGH.md`

その後、必要に応じて残りの`docs/context`を添付します。

ChatGPTへは、次のように指示します。

> 添付したコンテキストを優先順位どおりに読み込み、まずCapability Inventoryと現在の不足資料を報告してください。実装やGit操作は、リポジトリ状態をread-onlyで確認してから開始してください。

## 4. GitHub Web UIへ保存する方法

対象リポジトリが正しいことを確認してから行います。

1. ブラウザで対象GitHubリポジトリを開きます。
2. ブランチ表示を確認します。`main`へ直接追加しないでください。
3. 「Add file」→「Upload files」を選びます。
4. 展開したZIP内の`docs`フォルダーのファイルをドラッグします。
5. 新しいブランチを作る選択肢を選びます。
6. コミットメッセージ例：`docs: add final Pourō context pack`
7. Draft Pull Requestを作成します。
8. mergeは行わず、内容を確認します。

画面表示が異なる場合は、スクリーンショットをChatGPTへ添付してください。

## 5. Claude Designへ渡すファイル

- `01_PROJECT_BRIEF.md`
- `02_OWNER_DECISIONS.md`
- `05_THEME_DARK_LAB_TOKENS.md`
- `06_DESIGN_APPROVAL_PROTOCOL.md`
- `12_ASSET_ICON_POLICY.md`
- `18_UI_UX_CORRECTION_DIRECTIVE.md`
- `docs/design`内の全ファイル
- `docs/prompts/CLAUDE_DESIGN_FABLE5_SONNET5.md`

最初は393×852で比較案を作らせます。選定前に全サイズへ展開させないでください。

## 6. Claude Codeへ渡すファイル

- `02_OWNER_DECISIONS.md`
- `03_RECIPE_TRUTH_V1.md`
- `10_DATA_STORAGE_PRIVACY.md`
- `11_ACCEPTANCE_QA.md`
- `13_IMPLEMENTATION_PLAN.md`
- `16_NO_HOSTAGE_DATA_POLICY.md`
- `17_BREW_RUNNER_RELIABILITY.md`
- `18_UI_UX_CORRECTION_DIRECTIVE.md`
- `docs/prompts/CLAUDE_CODE_SONNET5_FABLE5.md`

実装前に、変更予定ファイルと受入条件を出させます。

## 7. Codexへ渡すファイル

上記の実装ファイルに加えて、次を渡します。

- `docs/prompts/CODEX_IMPLEMENTATION.md`
- `docs/implementation/ui-ux-correction-roadmap.md`
- `docs/qa/ui-ux-release-gate.md`

最初の作業はread-onlyのリポジトリ確認です。いきなりmergeやdeployをさせません。

## 8. デザイン相談の流れ

1. Claude Designが2〜3案を作る
2. 管理者AIが差分表を作る
3. オーナーが1案を選ぶ
4. 選定案だけを3サイズへ展開する
5. Motionを定義する
6. コード実装する
7. ブラウザと実機で比較する
8. Figma re-LOCKはオーナー承認後に行う

## 9. 絶対に自動実行させないこと

- `main`へのmerge
- 公開production deploy
- Figma final re-LOCK / library publish
- `NS-del346/Pouro-GPT`の変更
- App Icon再設計の再開
- データを消すimportや全削除

## 10. PowerShellが必要になった場合

AIへ次の条件を伝えます。

> コマンドは1回につき1つだけ提示してください。貼り付ける場所、実行目的、正常時の表示を説明し、私が結果を返すまで次へ進まないでください。

長いコマンド列を一度に実行しないでください。
