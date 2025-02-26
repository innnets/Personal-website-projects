import React from 'react'

import { Container } from '~/components/ui/Container'

const title = '更新日志'
const description = '记录网站的更新历史、功能优化和技术改进。'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function ChangelogPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          更新日志
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </header>

      <article className="prose dark:prose-invert">
        <section>
          <h2>2024 年 3 月</h2>
          
          <h3>2024-03-25</h3>
          <ul>
            <li>优化了 Docker 构建流程，解决了 ESLint 配置问题</li>
            <li>更新了 PostgreSQL 客户端版本到 17，确保与数据库版本匹配</li>
            <li>改进了自动备份功能，增加了更多文件类型的备份</li>
          </ul>

          <h3>2024-03-20</h3>
          <ul>
            <li>升级 Next.js 到 14.1 版本</li>
            <li>优化了网站性能和加载速度</li>
            <li>改进了管理后台的用户界面</li>
          </ul>
        </section>

        <section>
          <h2>技术栈</h2>
          <ul>
            <li><strong>前端框架：</strong> Next.js 14, React 18, TypeScript</li>
            <li><strong>样式解决方案：</strong> Tailwind CSS, Framer Motion</li>
            <li><strong>后端服务：</strong> PostgreSQL, Drizzle ORM</li>
            <li><strong>部署方案：</strong> Docker, GitHub Actions, GitHub Container Registry</li>
            <li><strong>认证服务：</strong> Clerk Authentication</li>
            <li><strong>内容管理：</strong> Sanity CMS</li>
            <li><strong>邮件服务：</strong> React Email, Resend</li>
          </ul>
        </section>

        <section>
          <h2>性能优化</h2>
          <ul>
            <li>使用 Next.js App Router 实现更好的代码分割</li>
            <li>图片自动优化和响应式处理</li>
            <li>实现了增量静态再生成（ISR）</li>
            <li>Redis 缓存层优化</li>
            <li>Docker 多阶段构建优化</li>
          </ul>
        </section>

        <section>
          <h2>待办事项</h2>
          <ul>
            <li>实现站内搜索功能</li>
            <li>添加文章评论功能</li>
            <li>优化移动端体验</li>
            <li>增加更多数据统计和分析</li>
          </ul>
        </section>
      </article>
    </Container>
  )
}
