import React from 'react'

import { Card } from '@tremor/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { CommentForm } from '~/components/comments/CommentForm'
import { CommentList } from '~/components/comments/CommentList'
import { Container } from '~/components/ui/Container'

const title = '更新日志'
const description = '记录网站的成长历程与每一次的改进优化，见证产品的不断进化。'

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

const updates = [
  {
    version: '2.1.0',
    date: '2024-03-25',
    title: '全新设计与性能优化',
    image: '/images/v2.1-preview.webp',
    highlights: [
      '重新设计了整体用户界面，提供更现代化的视觉体验',
      '优化了页面加载性能，提升了首屏加载速度',
      '增强了移动端适配，提供更好的响应式体验',
      '改进了深色模式的视觉效果',
      '优化了数据库查询性能',
      '更新了依赖包到最新版本',
      '增强了系统安全性',
    ],
  },
  {
    version: '2.0.0',
    date: '2024-03-13',
    title: '技术栈升级',
    image: '/images/v2.0-preview.webp',
    highlights: [
      '升级 Next.js 到 14.1 版本',
      '更新 Sanity 到最新版本',
      '优化了数据库结构',
      '改进了后台管理界面',
      '提升了整体系统稳定性',
    ],
  },
  {
    version: '1.1.0',
    date: '2024-03-10',
    title: '数据库迁移与优化',
    image: '/images/v1.1-preview.webp',
    highlights: [
      '完成数据库迁移工作',
      '优化了数据存储结构',
      '提升了查询性能',
      '增强了数据安全性',
    ],
  },
]

export default function ChangelogPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          更新日志
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      <div className="mt-16 space-y-12">
        {updates.map((update, index) => (
          <motion.div
            key={update.version}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden bg-white/50 shadow-sm dark:bg-zinc-800/50">
              {update.image && (
                <div className="relative h-64 w-full overflow-hidden sm:h-80">
                  <Image
                    src={update.image}
                    alt={`Version ${update.version} preview`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    v{update.version} - {update.title}
                  </h2>
                  <time className="text-sm text-zinc-500 dark:text-zinc-400">
                    {update.date}
                  </time>
                </div>
                <ul className="mt-4 space-y-2">
                  {update.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start text-zinc-600 dark:text-zinc-300"
                    >
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-zinc-100 pt-6 dark:border-zinc-700">
                  <h3 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    用户反馈
                  </h3>
                  <CommentList version={update.version} />
                  <div className="mt-4">
                    <CommentForm version={update.version} />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Container>
  )
}
