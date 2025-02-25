FROM node:18-alpine AS base

# 安装依赖
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# 构建应用
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1

# 设置环境变量
ENV CLERK_SECRET_KEY sk_test_MJFLI2GdO6NQ2WrwuNqBTPJtputiAuWcSxMtjVVmYh
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY pk_test_cmVsYXhpbmctYm9iY2F0LTk2LmNsZXJrLmFjY291bnRzLmRldiQ
ENV DATABASE_URL postgresql://neondb_owner:npg_6wy2fnhcLqob@ep-divine-base-a1og2qq2-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
ENV NEXT_PUBLIC_SANITY_DATASET production
ENV NEXT_PUBLIC_SANITY_PROJECT_ID lmexk0c1
ENV NEXT_PUBLIC_SANITY_USE_CDN false
ENV RESEND_API_KEY re_KDxn5SaH_PfD7vhVyf7cQsjEt8q13TmLe
ENV SITE_NOTIFICATION_EMAIL_TO hi@innnets.com
ENV NEXT_PUBLIC_SITE_EMAIL_FROM hi@innnets.me
ENV NEXT_PUBLIC_SITE_URL https://innnets.me
ENV UPSTASH_REDIS_REST_TOKEN AT-BAAIjcDE0YmFkYTFkODQ2ZGI0OTUzYjI0YWQ4NjIyZGFjM2E0M3AxMA
ENV UPSTASH_REDIS_REST_URL https://first-squirrel-16257.upstash.io

RUN npm run build

# 生产环境
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"] 