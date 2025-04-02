import { Container } from '~/components/ui/Container'

export default function AboutPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          关于我 ✨
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Hi，我是 Innnets，一名热爱技术的博客站长 👨‍💻
        </p>
      </header>

      <div className="mt-16 sm:mt-20">
        <div className="prose max-w-none dark:prose-invert">
          <section className="mb-12">
            <h2 className="text-2xl font-bold">🚀 关于本站</h2>
            <p>
              这是我的个人技术博客，记录我在技术探索过程中的所思所想和经验分享。无论你是技术小白还是老手，希望这里的内容能给你带来一些帮助和启发~ 
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold">💡 我的专业领域</h2>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold">🖥️ 系统运维</span> - 
                深耕 Linux/Windows 服务器运维，擅长自动化部署和性能优化，让系统稳如泰山~
              </li>
              <li>
                <span className="font-semibold">🌐 网站建设</span> - 
                从前端到后端，从设计到部署，全栈技能助你打造完美网站体验！
              </li>
              <li>
                <span className="font-semibold">☁️ 云计算</span> - 
                阿里云技术专家，掌握云服务器、数据库、CDN、负载均衡等云产品，让你的业务飞起来~
              </li>
              <li>
                <span className="font-semibold">📱 软件分享</span> - 
                发掘有趣实用的软件工具，提升工作效率，让生活更加智能便捷！
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold">🔥 我的技术栈</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Next.js', 'React', 'TypeScript', 'Node.js', 'Docker', 'Kubernetes', 'MySQL', 'PostgreSQL', 'Redis', 'Nginx', 'Linux', 'Git'].map(tech => (
                <span key={tech} className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-800 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold">📝 博客日常</h2>
            <p>
              ⏰ 每周更新优质技术文章<br />
              📚 分享实用开发经验和踩坑记录<br />
              🔍 深入浅出解析复杂技术概念<br />
              💬 欢迎在评论区交流讨论
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">📮 联系我</h2>
            <p>
              有问题想交流？技术难题需要解答？或者只是想打个招呼？<br />
              欢迎通过以下方式联系我，我会尽快回复哦~ 👋
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="https://github.com/innnets" target="_blank" rel="noopener noreferrer" className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-500 dark:hover:text-zinc-400">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="mailto:contact@innnets.me" className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-500 dark:hover:text-zinc-400">
                <span className="sr-only">Email</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </section>
          
          <div className="mt-16 text-center text-sm text-zinc-500 dark:text-zinc-400">
            🙏 感谢你访问我的博客，希望这里的内容能对你有所帮助！
          </div>
        </div>
      </div>
    </Container>
  )
}
