FROM node:18 AS base

# 安装依赖
FROM base AS deps
WORKDIR /app

# 使用 apt-get 而不是 apk (因为我们使用的是 node:18 而不是 alpine 版本)
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json* ./
# 安装所有依赖，包括 styled-components 和 @splinetool/runtime
RUN npm install --legacy-peer-deps
RUN npm install --legacy-peer-deps styled-components @splinetool/runtime

# 构建应用
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1

# 增加内存限制，避免构建过程中内存不足
ENV NODE_OPTIONS="--max-old-space-size=4096"

# 使用更详细的构建命令，以便查看错误
RUN npm run build || (cat /root/.npm/_logs/*-debug.log && exit 1)

# 生产环境
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# 运行时环境变量
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

ENV CLERK_SECRET_KEY=${CLERK_SECRET_KEY}
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=${NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
ENV DATABASE_URL=${DATABASE_URL}
ENV NEXT_PUBLIC_SANITY_DATASET=${NEXT_PUBLIC_SANITY_DATASET}
ENV NEXT_PUBLIC_SANITY_PROJECT_ID=${NEXT_PUBLIC_SANITY_PROJECT_ID}
ENV NEXT_PUBLIC_SANITY_USE_CDN=${NEXT_PUBLIC_SANITY_USE_CDN}
ENV RESEND_API_KEY=${RESEND_API_KEY}
ENV SITE_NOTIFICATION_EMAIL_TO=${SITE_NOTIFICATION_EMAIL_TO}
ENV NEXT_PUBLIC_SITE_EMAIL_FROM=${NEXT_PUBLIC_SITE_EMAIL_FROM}
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}
ENV UPSTASH_REDIS_REST_TOKEN=${UPSTASH_REDIS_REST_TOKEN}
ENV UPSTASH_REDIS_REST_URL=${UPSTASH_REDIS_REST_URL}

# 在 Debian 基础镜像中创建用户和组
RUN groupadd --system --gid 1001 nodejs
RUN useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"] 