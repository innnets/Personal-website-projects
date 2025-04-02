import React from 'react'

import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

const title = '更新日志'
const description = '记录网站优化和功能更新的变更历史'

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

interface LogItem {
  date: string
  version?: string
  changes: string[]
}

const updateLogs: LogItem[] = [
  {
    date: '2025-02-25',
    version: 'v1.2.0',
    changes: [
      '增加网站底部备案信息，包括工信部ICP备案和公安备案',
      '优化页脚布局，改善移动端和桌面端的显示效果',
      '更新环境变量配置，提高安全性',
      '优化Docker构建流程，解决ESLint配置问题'
    ]
  },
  {
    date: '2025-02-20',
    version: 'v1.1.5',
    changes: [
      '迁移数据库从第三方服务到自托管PostgreSQL',
      '优化数据库连接配置，增强安全性',
      '修复管理后台认证问题，优化管理体验',
      '增加自动备份功能，确保数据安全'
    ]
  },
  {
    date: '2025-02-15',
    version: 'v1.1.0',
    changes: [
      '从原项目Fork并进行个性化定制',
      '更新网站主题和品牌标识',
      '配置GitHub Actions实现自动化部署',
      '优化移动端响应式设计'
    ]
  }
]

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
        <div className="mt-10 space-y-16">
          {updateLogs.map((log, index) => (
            <div key={index} className="relative">
              <div className="absolute left-0 top-0 -ml-5 h-full w-0.5 bg-zinc-200 dark:bg-zinc-700" />
              <div className="relative">
                <div className="absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900">
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-500 dark:bg-zinc-400" />
                </div>
                <div className="pl-4">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {log.date} {log.version && <span className="text-lime-600 dark:text-lime-400">{log.version}</span>}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {log.changes.map((change, changeIndex) => (
                      <li key={changeIndex} className="flex items-start">
                        <span className="mr-2 mt-1 block h-1.5 w-1.5 rounded-full bg-zinc-600 dark:bg-zinc-400" />
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="italic text-zinc-500 dark:text-zinc-400">
            这个页面记录了网站的主要变更和优化，持续更新中...
          </p>
        </div>
      </article>
    </Container>
  )
}
