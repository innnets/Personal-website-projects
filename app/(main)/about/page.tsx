import { Container } from '~/components/ui/Container'

export const metadata = {
  title: '关于我',
  description: '了解站长innnets以及这个博客的主题和愿景'
}

export default function AboutPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <img
              src="/avatar.jpg"
              alt="innnets"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Hey，我是 innnets 👋
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              ✨ 欢迎来到我的个人网站！我是一名热爱技术的开发者和系统运维工程师。
            </p>
            <p>
              💻 这个博客主要关注以下几个方向：
            </p>
            <ul className="list-inside space-y-3 pl-5">
              <li className="flex items-baseline">
                <span className="mr-2 text-xl">🔧</span>
                <span><strong>系统运维</strong> - 分享服务器管理、Docker容器化、自动化部署等实用技巧</span>
              </li>
              <li className="flex items-baseline">
                <span className="mr-2 text-xl">🚀</span>
                <span><strong>软件分享</strong> - 推荐高效开发工具和实用软件，提升工作效率</span>
              </li>
              <li className="flex items-baseline">
                <span className="mr-2 text-xl">🌐</span>
                <span><strong>网站建设</strong> - 记录网站开发过程，分享前端和后端开发经验</span>
              </li>
              <li className="flex items-baseline">
                <span className="mr-2 text-xl">📝</span>
                <span><strong>个人笔记</strong> - 整理学习心得和技术探索，记录成长历程</span>
              </li>
            </ul>
            <p>
              🌟 我相信技术应该是开放、共享的，希望通过这个博客能够：
            </p>
            <ul className="list-inside space-y-3 pl-5">
              <li className="flex items-baseline">
                <span className="mr-2 text-xl">🤝</span>
                <span>与志同道合的朋友交流学习</span>
              </li>
              <li className="flex items-baseline">
                <span className="mr-2 text-xl">📚</span>
                <span>记录和分享我的技术成长历程</span>
              </li>
              <li className="flex items-baseline">
                <span className="mr-2 text-xl">💡</span>
                <span>帮助更多开发者解决实际问题</span>
              </li>
            </ul>
            <p>
              🏗️ 这个网站基于 Next.js、React 和 TypeScript 构建，采用了现代化的设计和开发理念。网站源码已在 GitHub 开源，欢迎参观和交流！
            </p>
            <p>
              📮 如果你有任何问题或想法，欢迎通过博客留言或社交媒体联系我，期待与你的交流！
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list" className="space-y-4">
            <li className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700/50 bg-white p-1 dark:border-zinc-700/50 dark:bg-zinc-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-zinc-700 dark:text-zinc-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <a href="mailto:contact@innnets.me" className="text-sm font-medium text-zinc-800 hover:text-lime-500 dark:text-zinc-200 dark:hover:text-lime-400">
                contact@innnets.me
              </a>
            </li>
            <li className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700/50 bg-white p-1 dark:border-zinc-700/50 dark:bg-zinc-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-zinc-700 dark:text-zinc-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <a href="https://github.com/innnets" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-800 hover:text-lime-500 dark:text-zinc-200 dark:hover:text-lime-400">
                GitHub (@innnets)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export const revalidate = 3600
