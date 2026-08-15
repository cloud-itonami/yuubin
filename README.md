# yuubin — 日本郵便 Web ゆうびん 投函 actor（**現在どこにも配信されていない**）

**名乗り**: `yuubin`（郵便）は、裁判所申立書・差押命令申立書・内容証明郵便といった
司法・行政文書を、日本郵便の **Web ゆうびん** から自前で投函するために起こされた actor
である。`fax`（新件申立書は FAX 不可）と `mailer`（電子メール）の間を埋める位置に居る。

**この README が先に言っておくこと** — 名前と `CLAUDE.md` は「投函する actor」を指すが、
**この repo が今日その動作をすることはない。**

| | |
|---|---|
| `yuubin.etzhayyim.com` / `y00b1nx9.etzhayyim.com` | **DNS に無い**（1.1.1.1 / 8.8.8.8 / ローカル resolver で確認、2026-08-16） |
| 配信される handler | `svelte/src/routes/xrpc/[...path]/+server.ts` — NSID を MCP router へ転送する **素の proxy** |
| その router `mcp.etzhayyim.com` | **DNS に無い**。deploy しても全 XRPC が 500 になる |
| `src/app.ts`（44,602 b、投函・前処理の実装本体） | **build 入力ではない。** アップロードされる bundle への寄与は 0 シンボル |
| 今日そのまま使えるもの | `scripts/normalize-a4-docx.sh`（ローカル A4 正規化）。deploy 不要 |

**まず [`docs/operator-quickstart.md`](docs/operator-quickstart.md) を読むこと。**
20 分で、上の各行を自分の手で確かめられるように書いてある（コマンドと実出力はすべて
実行済み）。

---

## 何がここに在り、何が無いか

```
etzhayyim-wasm-yuubin-y00b1nx9/
  ├── src/app.ts        投函フロー・XRPC 4 種・puppeteer 自動化・A4 前処理
  │                     → 読める。だが clean clone では install も build もできない
  │                       （`@etzhayyim/kotodama-host-sdk@workspace:*` がこの
  │                        workspace のどこにも無い）
  ├── src/cdn-s3.ts     B2/S3 SigV4 content-addressed blob 面 — 同上
  ├── scripts/*.sh      A4 正規化 / PDF レンダリング（ローカル、deploy 非依存）
  └── svelte/           **配信されるのはこちら。** proxy 1 本と scaffold ランディング
```

`CLAUDE.md` は 2026-04 時点の設計と現地調査を記録した文書で、**今の artifact の記述では
ない**。特に XRPC 表と Bindings 表は、`wrangler.jsonc` と build 出力に一致しない
（差分は quickstart §4 に表で置いた）。歴史的記録として読み、動作の根拠にしない。

## この actor の一番重要な調査結果

`CLAUDE.md` の ⚠CRITICAL 節が本体である: **Web ゆうびん の自動投函は 2026-04-20 に断念
された。** F5 BIG-IP ASM が puppeteer の fingerprint を検出して login POST を静かに
拒否し（HTTP 200 + top page が返る）、ファイル添付が ThickBox iframe 内の同期 XHR で
行われるため CDP `Runtime.evaluate` が 45 秒超で timeout する（real Chrome でも固まるので
CF Browser Rendering 固有ではない）。

したがって残った価値は**前処理**であり、`CLAUDE.md` もそう書いている。quickstart §6 は
その主張を検証して、**片方は本当・片方は欠陥がある**と結論した:

- `normalizeDocxToA4` / `normalize-a4-docx.sh` — **本当に動く。** pandoc 3.8.3 の .docx は
  `w:pgSz` を持たず、両実装とも A4（`11906 × 16838` twip = 210×297mm）を注入する。
  結果は zip 整合・pandoc 読み返しとも通る。
- `parsePdfA4Status` / `validatePdf` — **A4 の PDF を「A4 でない」と答えることがある。**
  `/MediaBox` を生バイトの正規表現で探すので、page object が圧縮された PDF では
  見つからず `isA4: false` を返す。「測れなかった」と「A4 でない」が同じ値になる。
  operator に届く warning は区別せず断定する。回避と根拠は quickstart §6.3。

## 次の 4 手

quickstart §8 に、この repo を読む人が最初に踏む順で置いてある。1 番目は
「docs と実体を合わせる」— コードではなく文書である。
