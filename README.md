# cfp-test2

GitHub 連携ありで Cloudflare Pages の練習。

Vite の React の SPA。SPA なので"Assets only"(スタティック)なコンテンツのみ。

```sh
pnpm create vite cfp-test2 --template react-ts
```

で作って、ちょっとだけ修正 & リフォーマットしたもの。

いまだに GitHub 連携で、`wrangler pages`ではないけど、
GitHub 連携の方が楽なような気がしてきた。

## Cloudflare Pages の設定で普通でない点

ビルドコマンドは `pnpm install --frozen-lockfile && pnpm run build`
(`npm ci`に相当)

ビルド出力は dist (普通)

Nodejs と
pnpm のバージョン指定用に
ビルドの環境変数を指定した。

参照: [Build image · Cloudflare Pages docs](https://developers.cloudflare.com/pages/configuration/build-image/?utm_source=chatgpt.com#languages-and-runtime)

今回は自分の環境に合わせて

- NODE_VERSION に 22.14.0 (22.14 や 22 のようにも指定可能)
- PNPM_VERSION に 10.8.0 (同上)

**注意:** 環境はプロダクションとプレビューの複数ある。

## functions を追加してみた

wrangler を追加。 `pnpm install -D wrangler @cloudflare/workers-types`

run-scripts を修正。

"wrangler pages dev --local -- vite" が

> ▲ [WARNING] Specifying a -- <command> or --proxy is deprecated and will be removed in a future version of Wrangler.
> Build your application to a directory and run the wrangler pages dev <directory> instead.

ということで使えなくなるらしい。

vite 側の proxy を使う。[vite.config.ts](vite.config.ts)参照。

run-scripts の"dev"と"dev:0" 参照。
concurrently を使ってちょっとカッコよくする。
`pnpm install -D concurrently`

[wrangler.toml](wrangler.toml)と functions/ 以下を追加。
wrangler.toml の main=は必要なんだかわからないけど、無いとうるさいのでダミー置いた。

あとは React 側を修正。

GitHub にあげてプルリクつくって、プレビュービルドで確認して、あとで main にマージ。

Cloudflare 側でビルドするとき wrangler v3 なのがちょっとイヤかも。

で、これだと vite が先に立ってるので、\_redirect のテストなんかは出来ない、と思う。

> A wrangler.toml file was found but it does not appear to be valid. Did you mean to use wrangler.toml to configure Pages? If so, then make sure the file is valid and contains the `pages_build_output_dir` property. Skipping file and continuing.

とか出てるけど、pages_build_output_dir を付け加えると Workers と判断されてビルドエラーになるので、この警告は無視すること。

functions で使うモジュールを記述する package.json の場所はプロジェクトルートに固定。
もしどうしてもフロントエンド(この場合 Vite+React)と混在させたくない場合は、フロントエンドの方を別ディレクトリにする。
ただ「どうしても」という状況はどんな状況? バンドラが優秀なので、いらんモジュールは適時切り落としてると思う。
