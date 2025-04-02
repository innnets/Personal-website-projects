export const seo = {
  title: 'ByteInnnetsX | 开发者、设计师、细节控',
  description:
    '我叫 ByteInnnetsX，一名开发者，设计师，细节控。热爱技术和创新，致力于分享有价值的内容和经验。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
