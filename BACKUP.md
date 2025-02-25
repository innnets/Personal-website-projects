# 备份和恢复说明

## 自动备份
系统每周日凌晨自动执行备份，包含：
- 所有配置文件
  - Dockerfile
  - next.config.js
  - middleware.ts
  - env.mjs
  - .env.example
  - .eslintrc.cjs
  - .gitignore
- 数据库数据
- GitHub Actions 配置 (docker-build.yml)

## 手动备份
1. 访问 GitHub Actions
2. 选择 "自动备份" 工作流
3. 点击 "Run workflow"
4. 选择分支
5. 点击 "Run workflow" 按钮

## 恢复备份
1. 访问 GitHub Actions
2. 选择 "恢复备份" 工作流
3. 点击 "Run workflow"
4. 输入备份文件 URL (从 GitHub Releases 或 Artifacts 获取)
5. 点击 "Run workflow" 按钮

## 重要文件
- Dockerfile
- next.config.js
- middleware.ts
- env.mjs
- .env.example
- .eslintrc.cjs
- .gitignore
- .github/workflows/*

## 环境变量
请确保以下环境变量在 GitHub Secrets 中正确设置：
- DATABASE_URL
- CLERK_SECRET_KEY
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
- NEXT_PUBLIC_SANITY_DATASET
- NEXT_PUBLIC_SANITY_PROJECT_ID
- RESEND_API_KEY
- UPSTASH_REDIS_REST_TOKEN
- UPSTASH_REDIS_REST_URL
- 其他必要的环境变量

## 注意事项
1. 备份文件保留30天
2. 手动触发备份时会创建 GitHub Release
3. 建议定期验证备份的完整性
4. 重要数据变更时建议手动触发备份 