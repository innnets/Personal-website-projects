# 全局定义所有ARG变量
ARG CLERK_SECRET_KEY
ARG NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
ARG DATABASE_URL
ARG NEXT_PUBLIC_SANITY_DATASET
ARG NEXT_PUBLIC_SANITY_PROJECT_ID
ARG NEXT_PUBLIC_SANITY_USE_CDN
ARG RESEND_API_KEY
ARG SITE_NOTIFICATION_EMAIL_TO
ARG NEXT_PUBLIC_SITE_EMAIL_FROM
ARG NEXT_PUBLIC_SITE_URL
ARG UPSTASH_REDIS_REST_TOKEN
ARG UPSTASH_REDIS_REST_URL

FROM node:18-slim AS base

# 安装依赖
FROM base AS deps
WORKDIR /app

# 安装系统依赖
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

# 安装 pnpm
RUN npm install -g pnpm

# 复制项目文件
COPY package.json pnpm-lock.yaml* ./

# 安装依赖
RUN pnpm install --frozen-lockfile

# 构建应用
FROM base AS builder
WORKDIR /app

# 安装构建所需的系统依赖
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

# 安装 pnpm
RUN npm install -g pnpm

# 设置环境变量
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS="--max-old-space-size=4096"

# 复制依赖
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 构建应用
RUN pnpm build

# 生产环境
FROM base AS runner
WORKDIR /app

# 创建用户和组
RUN groupadd --system --gid 1001 nodejs && \
    useradd --system --uid 1001 --gid nodejs nextjs

# 设置环境变量
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# 复制构建产物
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"] 