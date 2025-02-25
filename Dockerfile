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

FROM node:18-alpine AS base

# 安装依赖
FROM base AS deps
WORKDIR /app

# 安装系统依赖
RUN apk add --no-cache python3 make g++ git

# 复制项目文件
COPY . .

# 一次性安装所有依赖
RUN npm install --force

# 构建应用
FROM base AS builder
WORKDIR /app

# 复制所有文件
COPY --from=deps /app ./

# 设置环境变量
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS="--max-old-space-size=4096"

# 构建应用
RUN npm run build

# 生产环境
FROM base AS runner
WORKDIR /app

# 创建用户和组
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

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