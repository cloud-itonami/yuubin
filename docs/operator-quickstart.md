# operator quickstart — yuubin

clean checkout から 20 分。**書いてあるコマンドは全部そのまま実行して出力を確認した**
（2026-08-16、macOS 25.3 / node v26.3.0 / npm 11.16.0 / pnpm 10.26.2 / wrangler 4.69.0 /
pandoc 3.8.3 / Ghostscript）。確認していないものは §7 に分けて置いた。

**walk は 2 回、独立した clean worktree で行った** —— 本文を書いた側と、`cloud-itonami/main`
から切り直した側。§0 §2 §3 §4 §6 は両方で同じ結果になっている（差が出たのは build 所要
時間と gzip 数十バイトだけで、該当箇所に注記した）。

---

## 0. 最初に読むこと — この actor は今どこにも居ない

`CLAUDE.md` は `https://yuubin.etzhayyim.com/xrpc/…` に POST する手順を書いているが、
**そのホストは DNS に存在しない。** 3 つのリゾルバで確かめた:

```bash
for h in yuubin.etzhayyim.com y00b1nx9.etzhayyim.com mcp.etzhayyim.com etzhayyim.com; do
  printf '%-26s ' "$h"; dig +short @1.1.1.1 "$h" | tr '\n' ' '; echo
done
```

```
yuubin.etzhayyim.com
y00b1nx9.etzhayyim.com
mcp.etzhayyim.com
etzhayyim.com              104.21.51.111 172.67.179.128
```

apex だけが応答する。**サブドメイン 3 つは空**（ローカル resolver / 1.1.1.1 / 8.8.8.8 で同じ）。
`curl` は 200 でも 404 でもなく `curl: (6) Could not resolve host` で終わる。

つまり **§3 の XRPC 呼び出しは、この repo をどう直しても今日は通らない。** 動かしたければ
まず deploy が要る（§5）。それより先に、**deploy しても何が動くのかが `CLAUDE.md` の記述と
違う**ことを知っておく必要がある（§4）。

いま操作可能なのは **§6 のローカル前処理だけ**である。

---

## 1. 取得

```bash
git clone git@github.com:cloud-itonami/yuubin.git
cd yuubin
```

west 管理下なら `orgs/cloud-itonami/yuubin`。共有 checkout を直接編集せず worktree を
切ること（superproject の CLAUDE.md「並行エージェント運用」）。

ツリーは 19 ファイル。**入口は 2 つあり、片方は build されない**:

```
etzhayyim-wasm-yuubin-y00b1nx9/
  ├── src/app.ts          44,602 b  ← 読むのはここ。だが deploy されない（§4）
  ├── src/cdn-s3.ts        5,141 b  ← 同上
  ├── scripts/*.sh                  ← ここだけ今日そのまま使える（§6）
  └── svelte/                       ← 配信されるのはこちら
       └── src/routes/xrpc/[...path]/+server.ts   2,803 b
```

---

## 2. build する

### 2.1 worker root の `pnpm install` は通らない（repo の欠陥、環境ではない）

```bash
cd etzhayyim-wasm-yuubin-y00b1nx9
pnpm install
```

```
ERR_PNPM_WORKSPACE_PKG_NOT_FOUND  In : "@etzhayyim/kotodama-host-sdk@workspace:*" is in
the dependencies but no package named "@etzhayyim/kotodama-host-sdk" is present in the workspace

Packages found in the workspace:
```

`package.json` が `workspace:*` を宣言しているのに、この repo は **workspace の root では
ない**（`pnpm-workspace.yaml` が無い）。抽出元の etzhayyim monorepo にしか居ない依存で、
このワークスペース全体を検索しても出てこない:

```bash
kbb --backend sci scripts/repo-search.cljk kotodama host-sdk   # superproject から。該当パッケージ無し
```

**`src/app.ts` を型検査・実行・bundle する経路は、clean clone には存在しない。**
`CLAUDE.md` §Bootstrap Steps の `pnpm install` はここで止まる。

### 2.2 `svelte/` は素で通る

```bash
cd svelte
npm install --no-audit --no-fund
npm run build
npm run check
```

```
added 92 packages in 9s
...
✓ built in 660ms      (client)
✓ built in 4.53s      (server)
> Using @sveltejs/adapter-cloudflare
  ✔ done
...
COMPLETED 142 FILES 0 ERRORS 0 WARNINGS 0 FILES_WITH_PROBLEMS
```

**安定して比べてよいのは `92 packages` と `142 FILES 0 ERRORS 0 WARNINGS` だけ。**
所要時間は負荷で動く（2 回の walk で client 660ms / 303ms、server 4.53s / 2.89s）。
違う数字が出たことを失敗と読まないこと。

install 時に `npm warn allow-scripts`（esbuild / workerd の postinstall 保留）が出るが
**失敗ではない** — build も check も通る。

生成物（`node_modules/` `package-lock.json` `.svelte-kit/` `.wrangler/`）は `.gitignore`
に入れてあるので、この節を実行しても `git status` は clean のままになる。

### 2.3 deploy 可能性の確認（実際には出荷しない）

```bash
cd ..                      # worker root
npx wrangler@4.69.0 deploy --dry-run --outdir=/tmp/yuubin-dryrun
```

```
Total Upload: 422.18 KiB / gzip: 94.79 KiB
Your Worker has access to the following bindings:
env.ASSETS                        Assets
env.APP_CAPABILITIES              Environment Variable
… （vars が 12 個）
--dry-run: exiting now.
```

（gzip 値は build ごとに数十バイト動く。2 回の walk で 94.79 / 94.78 KiB。）

**bindings は `ASSETS` と vars だけ。** `CLAUDE.md` の Bindings 表が挙げる
`HEADLESS_BROWSER`（browser）/ `B2_KEY_ID`・`B2_APPLICATION_KEY`（b2）/ `HYPERDRIVE` /
`PDS_SERVICE`・`PDS_RPC`（service）/ `SS_WEBYUBIN_*`（secret）は **`wrangler.jsonc` に
1 つも無い**。表は現行 manifest を記述していない。

---

## 3. ローカルで実際に叩く

```bash
npx wrangler@4.69.0 dev --port 8799 --inspector-port 9799
```

別シェルから。**実測した応答**:

| リクエスト | 応答 | 中身 |
|---|---|---|
| `GET /` | **200** (約 2.3 KB) | scaffold のランディング（`<title>etzhayyim-wasm-yuubin-y00b1nx9</title>`、routes 0 件） |
| `OPTIONS /xrpc/<nsid>` | **204** | CORS preflight |
| `GET /xrpc/<nsid>` | **405** | POST ハンドラしか無い |
| `POST /xrpc/<nsid>` | **500** | `{"message":"Internal Error"}` |
| `GET /nope` | **404** | SvelteKit 既定 |

```bash
curl -sS -X POST -H 'content-type: application/json' -d '{"blobKey":"deadbeef"}' \
  http://127.0.0.1:8799/xrpc/com.etzhayyim.apps.yuubin.validatePdf
# → {"message":"Internal Error"}   HTTP 500
```

**この 500 は blobKey が悪いからではない。** §0 の DNS が原因であることを、router を
解決するホストへ差し替えて確かめた:

```bash
npx wrangler@4.69.0 dev --port 8801 --inspector-port 9801 \
  --var AGENTGATEWAY_MCP_ROUTER_URL:https://example.com/
```

```
{"error":"MCP router request failed","upstream":"<!doctype html><html lang=\"en\">…Example Domain…"}
HTTP 405
```

500 → 405、本文が `Internal Error` → 診断付きに変わった。**500 は upstream fetch の
reject が catch されずに漏れている**（`+server.ts` は body の JSON parse だけ
`.catch(() => ({}))` していて、`fetch` は素通し）。upstream が DNS で落ちる限り、
呼び出し側は原因を教えられない。

> ⚠ この workstation では `wrangler dev` のログが `EMFILE: too many open files, watch` で
> 埋まる。並行セッションが多い環境の file watcher の問題で、**worker の挙動とは無関係**
> （上の応答は全部その状態で取っている）。

---

## 4. 配信されるのは `src/app.ts` ではない

`wrangler.jsonc` の `main` は `svelte/.svelte-kit/cloudflare/_worker.js` で、これは
`svelte/src/routes/` から build される。**`src/app.ts` はどの入力にもならない。**

```bash
for s in normalizeDocxToA4 parsePdfA4Status browserAutomateWebyubin cmdComposeAndPost webyubin; do
  printf '%-26s ' "$s"; grep -rl "$s" /tmp/yuubin-dryrun | wc -l
done
```

```
normalizeDocxToA4          0
parsePdfA4Status           0
browserAutomateWebyubin    0
cmdComposeAndPost          0
webyubin                   0
```

**44,602 バイトの `src/app.ts` は、アップロードされる bundle に 1 シンボルも寄与しない。**
`_worker.js` は 4,838 バイトである。

では deploy された `/xrpc/*` は何をするのか。`svelte/src/routes/xrpc/[...path]/+server.ts`
の全体がこれ:

```
POST /xrpc/<nsid>
  → fetch(AGENTGATEWAY_MCP_ROUTER_URL, {
        method: 'POST',
        body: { jsonrpc:'2.0', method:'tools/call', params:{ name:<nsid>, arguments:<body> } }
    })
  → result.structuredContent をそのまま返す
```

**素の proxy である。** `normalizeDocx` も `validatePdf` も `composeAndPost` も、
ここでは実行されない — NSID 文字列が MCP router へ転送されるだけで、その tool を
router が持っているかどうかは**この repo の外の問題**。router のホストは §0 のとおり
今は存在しない。

`patch-worker.mjs` も同じ向きの証拠で、`YuubinPostDO` に **410 Gone** を返す stub を
足している（本文: `"YuubinPostDO has moved behind the agentgateway MCP router"`）。

| `CLAUDE.md` が書いていること | 実際 |
|---|---|
| XRPC 4 種を yuubin が実行する | NSID を MCP router へ転送するだけ |
| Bindings 表（browser / b2 / hyperdrive / service / secret） | `wrangler.jsonc` に無い。ASSETS + vars のみ |
| `YuubinPostDO` が投函を駆動する | build 後は 410 を返す stub |
| `https://yuubin.etzhayyim.com` | NXDOMAIN |

---

## 5. deploy に足りないもの

この repo からは出荷できない。順に:

1. **DNS** — `yuubin.etzhayyim.com` / `y00b1nx9.etzhayyim.com` のレコードが無い
   （`wrangler.jsonc` の `routes` は `zone_name: etzhayyim.com` の 2 パターンを要求する）
2. **MCP router** — `mcp.etzhayyim.com` が無い。deploy しても全 XRPC が §3 の 500 になる
3. **Cloudflare account / zone 権限** — `etzhayyim.com` zone への route 登録
4. `CLAUDE.md` §Bootstrap 2–3 の Web ゆうびん 認証情報。ただし **§4 のとおり、
   認証情報を消費するコードは deploy 対象に入っていない**ので、これは今の manifest では
   deploy の前提条件ではない

**superproject の deploy ガード**（`wrangler-deploy-main-sync-guard.cljs`）は
`--dry-run` を通し、素の `wrangler deploy` は checkout が `origin/main` より遅れていれば
deny する。§2.3 は dry-run なのでガードに触れない。

---

## 6. 今日そのまま使えるもの — A4 前処理

`CLAUDE.md` は「preprocessing として他 actor でも使える」と書いており、**これは本当**。
ただし XRPC 経由ではなく、**ローカルで**である。

### 6.1 なぜ要るか

Web ゆうびん は A4 以外の .docx を
`ファイルのページサイズがA4(210x297,297x210)ではなかった` で拒否する。A4 は twip
（1/1440 インチ）で `11906 × 16838`:

```bash
python3 -c "print(round(210/25.4*1440,1), round(297/25.4*1440,1))"
# 11905.5 16837.8
```

コードの定数 `w:w="11906" w:h="16838"` はこれと一致する。

そして **pandoc 3.8.3 の .docx は `w:pgSz` を 1 つも持たない**（`CLAUDE.md` は
「pandoc 既定は US Letter」と書くが、実際は *page size が宣言されない*）:

```bash
printf '# 差押命令申立書\n\n本文テスト。\n' > /tmp/sample.md
pandoc /tmp/sample.md -o /tmp/sample.docx
unzip -p /tmp/sample.docx word/document.xml | grep -c 'pgSz'
# → 0
```

### 6.2 直す（deploy 不要）

```bash
bash etzhayyim-wasm-yuubin-y00b1nx9/scripts/normalize-a4-docx.sh /tmp/sample.docx /tmp/sample-a4.docx
unzip -p /tmp/sample-a4.docx word/document.xml | grep -o '<w:pgSz[^/]*/>'
```

```
✓ normalized → /tmp/sample-a4.docx
<w:pgSz w:w="11906" w:h="16838"/>
```

`unzip -t` は `No errors detected`、`pandoc /tmp/sample-a4.docx -t plain` は本文を
そのまま読み返す。**`src/app.ts` の `normalizeDocxToA4()` も同じ結果を出す**
（この節を書くとき関数を逐語で切り出して node で走らせ、`(none)` → `11906×16838`、
`sectPr` 1 個 / `pgSz` 1 個 を確認した）。使えるのは shell 版だけなのは §2.1 の理由。

### 6.3 PDF の A4 判定は「測れなかった」を「A4 でない」と答える ⚠

`validatePdf` / `parsePdfA4Status()` は **PDF を latin1 テキストとして走査して
`/MediaBox` を正規表現で探す**。現代の PDF は page object を圧縮ストリームに入れるので、
**その文字列は生バイトに現れない**。関数は見つからないと `isA4: false` を返す —
測れなかったのか A4 でなかったのかを、返り値で区別しない。

逐語で切り出して両方向を実測した:

| 入力 | `parsePdfA4Status()` | 正しいか |
|---|---|---|
| A4 PDF（pandoc + tectonic、圧縮あり） | `{"pages":1,"isA4":false}` | **✗ 誤り。これは A4** |
| 同じ PDF を `gs -dCompressStreams=false` で展開 | `{"pages":1,"isA4":true,"sampleSize":[595.28,841.89]}` | ✓ |
| Letter PDF を同様に展開 | `{"pages":1,"isA4":false,"sampleSize":[612,792]}` | ✓ |

圧縮された PDF では `/MediaBox` も `/Type /Page` も生バイトに 0 件で、`pages: 1` は
**数えた結果ではなく `|| 1` のフォールバック**である。

これが operator に届く形は `cmdValidatePdf()` の warning で、`isA4` が false のとき
断定する:

```
"PDF is not A4 (595.28x841.89pt). Web ゆうびん will reject. Re-render via pandoc …"
```

**A4 の文書に対してもこの文が返る。** 見分ける手掛かりは `sampleSize` が欠けている
ことだけで、warning 本文はそれを言わない。

**使うなら**: `sampleSize` が無い応答は「A4 でない」ではなく **「判定できていない」**と
読む。確実に知りたければローカルで展開してから測る:

```bash
gs -q -o /tmp/flat.pdf -sDEVICE=pdfwrite -dCompressStreams=false -dCompressPages=false in.pdf
LC_ALL=C grep -ao '/MediaBox[^]]*]' /tmp/flat.pdf | head -1
# A4 なら → /MediaBox [0 0 595.28 841.89]
```

### 6.4 PDF の生成（この機械では未検証）

`scripts/render-a4-pdf.sh` は `xelatex` + `collection-langjapanese` を要求する。
**この workstation には xelatex も weasyprint も入っていないので、2 本の
`render-a4-pdf*.sh` は実行していない。** 上の PDF は `pandoc --pdf-engine=tectonic`
（別途 present）で作ったもので、CJK 埋め込みは検証範囲外。

---

## 7. 確認していないこと

- **投函そのもの**。`CLAUDE.md` の ⚠CRITICAL（F5 BIG-IP ASM が puppeteer を弾き、
  ThickBox iframe の同期 XHR で CDP が固まる）は 2026-04-20 の記録で、**再現していない**。
  §4 のとおりその経路は deploy 対象に無いので、この repo の状態からは再現できない。
- **`src/app.ts` の残り 90%**（`composeAndPost` / `submitNaiyoShomei` /
  `confirmManualPost` / `uploadDocument` / `cdn-s3.ts`）。§2.1 で install できず、
  型検査も実行もしていない。読んだだけ。
- **MCP router が該当 tool を持つか**。`mcp.etzhayyim.com` が無いので確かめようがない。
- **`scripts/render-a4-pdf.sh` / `render-a4-pdf-weasyprint.sh`**（§6.4）。
- **本番 deploy**。していない。§2.3 は `--dry-run`。
- **`orgs/etzhayyim/root/60-apps/etzhayyim-project-yuubin/` に残っている同名ツリー**との
  差分。surface 索引は両方を挙げている。どちらが先に進んでいるかは見ていない。

---

## 8. 直すなら、どれから

1. **`docs` と実体を合わせる** — `CLAUDE.md` の XRPC 表と Bindings 表は、deploy される
   artifact を記述していない（§4）。読む人が最初に踏む。
2. **`+server.ts` の upstream fetch を catch する**（§3）。DNS で落ちたとき 500
   `Internal Error` ではなく理由を返す。1 箇所。
3. **`parsePdfA4Status` に「測れなかった」を持たせる**（§6.3）。`isA4: false` と
   `isA4: null / unmeasured` を分ける。返り値の形を変えるので caller も要る。
4. **`@etzhayyim/kotodama-host-sdk` の所在を決める**（§2.1）。publish するか、
   vendored に落とすか、`src/app.ts` を退役させるか。ここが決まらないと 1〜3 の
   どれをやっても `src/app.ts` は動かないまま。
