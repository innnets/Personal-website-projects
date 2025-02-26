import React from 'react'
import { BugIcon, AccessibilityIcon, GitPullRequestIcon, RocketIcon } from '@primer/octicons-react'

import { Container } from '~/components/ui/Container'
import { Avatar } from '~/components/ui/Avatar'

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

interface TimelineItem {
  type: 'comment' | 'tag' | 'assign' | 'merge'
  user: {
    name: string
    avatar: string
  }
  date: string
  content?: string
  tags?: Array<{
    name: string
    color: string
    icon?: React.ReactNode
  }>
  assignee?: string
}

const timeline: TimelineItem[] = [
  {
    type: 'comment',
    user: {
      name: 'innnets',
      avatar: '/avatar.jpg'
    },
    date: '2024-03-25',
    content: '优化了 Docker 构建流程，解决了 ESLint 配置问题。更新了 PostgreSQL 客户端版本到 17，确保与数据库版本匹配。'
  },
  {
    type: 'tag',
    user: {
      name: 'innnets',
      avatar: '/avatar.jpg'
    },
    date: '2024-03-25',
    tags: [
      { name: '优化', color: 'bg-green-100 text-green-800', icon: <RocketIcon className="w-4 h-4" /> },
      { name: 'Bug修复', color: 'bg-red-100 text-red-800', icon: <BugIcon className="w-4 h-4" /> }
    ]
  },
  {
    type: 'merge',
    user: {
      name: 'innnets',
      avatar: '/avatar.jpg'
    },
    date: '2024-03-20',
    content: '合并了性能优化分支，升级 Next.js 到 14.1 版本'
  },
  {
    type: 'tag',
    user: {
      name: 'innnets',
      avatar: '/avatar.jpg'
    },
    date: '2024-03-20',
    tags: [
      { name: '可访问性', color: 'bg-purple-100 text-purple-800', icon: <AccessibilityIcon className="w-4 h-4" /> },
      { name: '性能优化', color: 'bg-blue-100 text-blue-800', icon: <RocketIcon className="w-4 h-4" /> }
    ]
  }
]

function TimelineItemComponent({ item }: { item: TimelineItem }) {
  return (
    <div className="flex gap-4 pb-8">
      <div className="flex-shrink-0">
        <Avatar src={item.user.avatar} alt={item.user.name} size={40} />
      </div>
      <div className="flex-grow">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium text-gray-900 dark:text-gray-100">{item.user.name}</span>
          {item.type === 'comment' && <span>发表评论</span>}
          {item.type === 'tag' && <span>添加标签</span>}
          {item.type === 'assign' && <span>分配给 {item.assignee}</span>}
          {item.type === 'merge' && <span>合并了更新</span>}
          <span>· {item.date}</span>
        </div>
        
        {item.content && (
          <div className="mt-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-300">{item.content}</p>
          </div>
        )}
        
        {item.tags && (
          <div className="mt-2 flex gap-2">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className={\`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium \${tag.color}\`}
              >
                {tag.icon}
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
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

      <div className="mt-16 max-w-2xl">
        <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-6">
          {timeline.map((item, index) => (
            <TimelineItemComponent key={index} item={item} />
          ))}
        </div>
      </div>
    </Container>
  )
}
