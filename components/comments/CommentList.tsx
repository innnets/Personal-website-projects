import { motion } from 'framer-motion'
import Image from 'next/image'

interface CommentListProps {
  version: string
}

interface Comment {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  createdAt: string
}

// 示例评论数据
const comments: Record<string, Comment[]> = {
  '2.1.0': [
    {
      id: '1',
      author: {
        name: '访客',
        avatar: '/images/default-avatar.png',
      },
      content: '新版本的设计真的很棒！特别喜欢深色模式的改进。',
      createdAt: '2024-03-25',
    },
  ],
}

export function CommentList({ version }: CommentListProps) {
  const versionComments = comments[version] || []

  if (versionComments.length === 0) {
    return (
      <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
        还没有评论，来说点什么吧~
      </p>
    )
  }

  return (
    <div className="space-y-6">
      {versionComments.map((comment, index) => (
        <motion.div
          key={comment.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex gap-4"
        >
          <div className="relative h-10 w-10 flex-shrink-0">
            <Image
              src={comment.author.avatar}
              alt={comment.author.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                {comment.author.name}
              </span>
              <time className="text-sm text-zinc-500 dark:text-zinc-400">
                {comment.createdAt}
              </time>
            </div>
            <p className="mt-1 text-zinc-600 dark:text-zinc-300">
              {comment.content}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 