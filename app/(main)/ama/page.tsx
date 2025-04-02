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
  emoji?: string
}

const updateLogs: LogItem[] = [
  {
    date: '2025-02-25',
    version: 'v1.2.0',
    emoji: '✨',
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
    emoji: '🛠️',
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
    emoji: '🚀',
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
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-16">
          <div className="inline-block animate-bounce-slow mb-4">
            <span className="text-5xl">📝</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl bg-gradient-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
            更新日志
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            {description}
          </p>
        </header>

        <div className="relative py-6">
          {/* Desktop timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-lime-500 to-teal-500 rounded-full hidden md:block" />
          
          {/* Mobile timeline dots connector */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-700" />
          
          <div className="space-y-16 md:space-y-12">
            {updateLogs.map((log, index) => (
              <div key={index} className="relative group">
                {/* Desktop version */}
                <div className="hidden md:block">
                  <div className="absolute left-8 top-10 -ml-2.5 h-5 w-5 rounded-full border-2 border-zinc-100 bg-gradient-to-br from-lime-500 to-teal-500 shadow-md shadow-lime-500/20 dark:border-zinc-800 transform transition-all duration-300 group-hover:scale-125" />
                  
                  <div className="pl-24">
                    <div className="flex flex-wrap items-baseline gap-x-3 transition-all duration-300 group-hover:translate-x-1">
                      {log.emoji && (
                        <span className="text-3xl transform transition-all duration-300 group-hover:rotate-12">{log.emoji}</span>
                      )}
                      <time className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                        {log.date}
                      </time>
                      {log.version && (
                        <span className="text-lg font-medium py-0.5 px-2 rounded-full bg-gradient-to-r from-lime-500/10 to-teal-500/10 text-lime-600 dark:text-lime-400 border border-lime-200 dark:border-lime-800">
                          {log.version}
                        </span>
                      )}
                    </div>
                    
                    <ul className="mt-5 space-y-5">
                      {log.changes.map((change, changeIndex) => (
                        <li key={changeIndex} className="flex items-start group/item">
                          <span className="mt-2 h-2 w-2 flex-none rounded-full bg-lime-500 mr-3 transition-all duration-300 group-hover/item:bg-teal-500" />
                          <span className="text-base text-zinc-700 dark:text-zinc-300 transition-all duration-300 group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-100">
                            {change}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Mobile version */}
                <div className="md:hidden">
                  <div className="flex items-center mb-4">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-lime-500 to-teal-500 flex items-center justify-center shadow-md shadow-lime-500/20 text-white">
                      {log.emoji || '📌'}
                    </div>
                    <div className="ml-4">
                      <time className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                        {log.date}
                      </time>
                      {log.version && (
                        <span className="ml-2 text-sm font-medium py-0.5 px-2 rounded-full bg-gradient-to-r from-lime-500/10 to-teal-500/10 text-lime-600 dark:text-lime-400 border border-lime-200 dark:border-lime-800">
                          {log.version}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="pl-12 border-l-2 border-zinc-200 dark:border-zinc-700 ml-3.5 pb-8">
                    <ul className="space-y-4">
                      {log.changes.map((change, changeIndex) => (
                        <li key={changeIndex} className="text-sm text-zinc-700 dark:text-zinc-300">
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-zinc-200 pt-10 dark:border-zinc-700 text-center">
          <div className="inline-flex items-center justify-center space-x-2 text-zinc-500 dark:text-zinc-400 text-sm mb-4 animate-pulse">
            <span className="text-xl">⌛</span>
            <span className="italic">持续更新中...</span>
          </div>
          <p className="max-w-md mx-auto text-sm text-zinc-500 dark:text-zinc-400">
            此页面记录网站的主要变更和优化，帮助用户了解网站的发展历程。如有建议，欢迎反馈！
          </p>
        </div>
      </div>
    </Container>
  )
}

// 添加自定义动画
export function StyleSheet() {
  return (
    <style jsx global>{`
      @keyframes bounce-slow {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      .animate-bounce-slow {
        animation: bounce-slow 3s infinite;
      }
    `}</style>
  )
}
