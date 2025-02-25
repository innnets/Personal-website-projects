import React from 'react'

import { Card } from '@tremor/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于 - 更新日志',
  description: '网站更新历史和说明'
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-8">
      <h1 className="text-3xl font-bold">关于本站</h1>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">最新更新 v2.1</h2>
        <Card className="p-6">
          <div className="prose dark:prose-invert">
            <h3>🚀 新功能亮点</h3>
            <ul>
              <li>优化了后台管理界面</li>
              <li>添加了自动备份系统</li>
              <li>改进了构建和部署流程</li>
              <li>升级了代码规范配置</li>
            </ul>

            <h3>💅 界面优化</h3>
            <ul>
              <li>优化了移动端适配</li>
              <li>改进了暗色模式效果</li>
              <li>提升了页面加载速度</li>
              <li>优化了整体用户体验</li>
            </ul>

            <h3>🛠️ 技术升级</h3>
            <ul>
              <li>升级核心框架至最新版本</li>
              <li>优化了数据库性能</li>
              <li>提升了系统安全性</li>
              <li>改进了错误处理机制</li>
            </ul>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">后续计划</h2>
        <Card className="p-6">
          <div className="prose dark:prose-invert">
            <p>我们将持续改进：</p>
            <ul>
              <li>提升用户体验</li>
              <li>优化性能表现</li>
              <li>加强安全性</li>
              <li>增加更多实用功能</li>
            </ul>
          </div>
        </Card>
      </section>

      <section className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>感谢您的使用和支持！如有问题或建议，欢迎通过网站反馈功能与我们联系。</p>
      </section>
    </div>
  )
} 