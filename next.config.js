/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'innnets.com',
      },
      // 如果您还有其他域名，按照相同格式添加
      {
        protocol: 'https',
        hostname: '*.innnets.com',  // 支持所有子域名
      },
      // Sanity 图片域名（如果需要）
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // 其他配置...
}

module.exports = nextConfig 