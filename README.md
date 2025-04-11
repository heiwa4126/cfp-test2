# cfp-test2

GitHub 連携ありで Cloudflare Pages の練習。

Vite の React の SPA。SPA なので"Assets only"(スタティック)なコンテンツのみ。

```sh
pnpm create vite cfp-test2 --template react-ts
```

で作って、ちょっとだけ修正 & リフォーマットしたもの。

## Cloudflare Pages の設定で普通でない点

ビルドコマンドは `pnpm install --frozen-lockfile && pnpm run build`
(`npm ci`に相当)

ビルド出力は dist (普通)

Nodejs と
pnpm のバージョン指定用に
ビルドの環境変数を指定した。

参照: [Build image · Cloudflare Pages docs](https://developers.cloudflare.com/pages/configuration/build-image/?utm_source=chatgpt.com#languages-and-runtime)

今回は自分の環境に合わせて

- NODE_VERSION に 22.14.0
- PNPM_VERSION に 10.8.0

**注意:** 環境はプロダクションとプレビューの複数ある。

## TODO

functions を使ってみたいので、
wrangler を設定する。
C3 でテンプレート作ってコピペすればいいと思う。
