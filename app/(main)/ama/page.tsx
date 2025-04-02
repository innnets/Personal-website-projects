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
      <header className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          更新日志
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </header>

      <div className="prose max-w-none dark:prose-invert">
        <div className="relative py-6">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-700" />
          
          <div className="space-y-12">
            {updateLogs.map((log, index) => (
              <div key={index} className="relative group">
                <div className="absolute left-8 top-10 -ml-1.5 h-3 w-3 rounded-full border-2 border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-900 group-hover:border-lime-500 dark:group-hover:border-lime-400" />
                
                <div className="pl-20">
                  <div className="flex flex-wrap items-baseline gap-x-2 group-hover:text-lime-600 dark:group-hover:text-lime-400">
                    <time className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                      {log.date}
                    </time>
                    {log.version && (
                      <span className="text-lg font-medium text-lime-600 dark:text-lime-400">
                        {log.version}
                      </span>
                    )}
                  </div>
                  
                  <ul className="mt-5 space-y-4">
                    {log.changes.map((change, changeIndex) => (
                      <li key={changeIndex} className="flex items-start gap-x-3">
                        <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-zinc-600 dark:bg-zinc-400" />
                        <span className="text-base text-zinc-700 dark:text-zinc-300">
                          {change}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-zinc-200 pt-8 dark:border-zinc-700">
          <p className="text-center italic text-sm text-zinc-500 dark:text-zinc-400">
            此页面记录网站的主要变更和优化，持续更新中...
          </p>
        </div>
      </div>
    </Container>
  )
}
