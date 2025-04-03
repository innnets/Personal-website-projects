import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'

const title = '我的项目'
const description =
  '多年来，我持续关注并筛选各类优秀项目，涵盖开源佳作、实验性探索以及趣味性应用。以下是我精心挑选的推荐项目合集，它们不仅是我技术视野的缩影，更是我在系统运维领域中不断学习与进取的有力见证。'
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
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          我过去的项目冒险之旅。
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          多年来，我持续关注并筛选各类优秀项目，有<b>开源</b>的，有<b>实验性探索</b>
          的，也有 <b>趣味性应用 </b>
          的，以下是我精心挑选的推荐项目合集，它们不仅是我技术视野的缩影，更是我在系统运维领域中不断学习与进取的有力见证。
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Projects />
      </div>
    </Container>
  )
}

export const revalidate = 3600
