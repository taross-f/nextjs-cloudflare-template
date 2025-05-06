FROM node:20

# 基本的なツールをインストール
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    gnupg \
    && rm -rf /var/lib/apt/lists/*

# GitHub CLIのインストール
RUN curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
    && chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
    && apt-get update \
    && apt-get install -y gh \
    && rm -rf /var/lib/apt/lists/*

# bunのインストール
RUN curl -fsSL https://bun.sh/install | bash

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

# bunへのパスを設定
ENV PATH="/root/.bun/bin:$PATH"
ENV PATH="/home/node/.bun/bin:$PATH"
