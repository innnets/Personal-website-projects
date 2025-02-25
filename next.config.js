/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    // 确保图片优化功能正常工作
    domains: [
      // 添加您的图片域名
      'innnets.me',
      // ... 其他域名
    ],
  },
  // 其他配置...
}

module.exports = nextConfig 