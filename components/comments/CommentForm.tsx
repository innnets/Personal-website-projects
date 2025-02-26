import React, { useState } from 'react'

import { Button } from '~/components/ui/Button'

interface CommentFormProps {
  version: string
}

export function CommentForm({ version }: CommentFormProps) {
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!comment.trim()) return

    setIsSubmitting(true)
    try {
      // TODO: 实现评论提交逻辑
      await new Promise(resolve => setTimeout(resolve, 1000))
      setComment('')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder="分享你的想法..."
        className="w-full rounded-lg border border-zinc-200 bg-white/50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-100 dark:placeholder-zinc-500"
        rows={3}
      />
      <Button
        type="submit"
        disabled={isSubmitting || !comment.trim()}
        className="flex items-center gap-2"
      >
        {isSubmitting ? '提交中...' : '发表评论'}
      </Button>
    </form>
  )
} 