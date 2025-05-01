# Dev Container for Next.js Cloudflare Template

このディレクトリには、Visual Studio Code Dev Containersを使用して開発環境を標準化するための設定が含まれています。

## 前提条件

- [Visual Studio Code](https://code.visualstudio.com/)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Visual Studio Code Remote - Containers拡張機能](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

## 使用方法

1. Visual Studio Codeでこのリポジトリを開きます
2. Visual Studio Codeがコンテナを検出し、コンテナで開くかどうか尋ねる通知が表示されます。「Reopen in Container」をクリックします
3. または、コマンドパレット（F1またはCtrl+Shift+P）を開き、「Remote-Containers: Reopen in Container」を選択します
4. コンテナがビルドされ、VSCodeがコンテナ内でリポジトリを開きます
5. これで、標準化された開発環境でNext.jsアプリケーションを開発できます

## 含まれる機能

- Node.js 20
- 必要なVS Code拡張機能（ESLint、Prettier、Tailwind CSS、TypeScript等）
- Cloudflare Wrangler CLI
