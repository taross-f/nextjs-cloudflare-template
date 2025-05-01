FROM node:20

# 基本的なツールをインストール
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    && rm -rf /var/lib/apt/lists/*

# 作業ディレクトリの設定
WORKDIR /workspace

# 非rootユーザーを使用（セキュリティのため）
ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# devcontainer内のユーザー設定
RUN groupmod --gid $USER_GID $USERNAME \
    && usermod --uid $USER_UID --gid $USER_GID $USERNAME \
    && chown -R $USER_UID:$USER_GID /workspace

# Node.jsのグローバル設定
RUN npm config set fund false

# Cloudflare Wranglerのインストール（Cloudflare開発のため）
RUN npm install -g wrangler
