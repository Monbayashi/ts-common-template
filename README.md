# COMMON Typescript Template

npm でローカルのパッケージをインストールするテンプレート。

<br>

## 注意する点 tsconfig

> "declaration": true, のコメントを外す事。

これを true にすると、コンパイルした ts ファイルの中で export しているもの全ての型定義ファイルをファイルごとに作成する。

<br>

> package.json の main, types, files を以下のように設定しておく事。

```
  "main": "./build/index.js",
  "types": "./build/index.d.ts",
  "files": [
    "build/**/*"
  ],
```

<br>

## ローカルのパッケージをインストールする方法

```
npm install ../common;
```
