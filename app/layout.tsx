import './globals.css'
import './clerk.css'
import './prism.css'

import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata, Viewport } from 'next'

import { ThemeProvider } from '~/app/(main)/ThemeProvider'
import { url } from '~/lib'
import { zhCN } from '~/lib/clerkLocalizations'
import { sansFont } from '~/lib/font'
import { seo } from '~/lib/seo'

export const metadata: Metadata = {
  metadataBase: seo.url,
  title: {
    template: '%s | Cali Castle',
    default: seo.title,
  },
  description: seo.description,
  keywords: 'Cali,Cali Castle,郭晓楠,佐玩,创始人,CEO,开发者,设计师,细节控,创新',
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: {
      default: seo.title,
      template: '%s | Cali Castle',
    },
    description: seo.description,
    siteName: 'Cali Castle',
    locale: 'zh_CN',
    type: 'website',
    url: 'https://cali.so',
  },
  twitter: {
    site: '@thecalicastle',
    creator: '@thecalicastle',
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
  },
  alternates: {
    canonical: url('/'),
    types: {
      'application/rss+xml': [{ url: 'rss', title: 'RSS 订阅' }],
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000212' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={zhCN}>
      <html
        lang="zh-CN"
        className={`${sansFont.variable} m-0 h-full p-0 font-sans antialiased`}
        suppressHydrationWarning
      >
        <body className="flex h-full flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <div className="text-sm text-zinc-400 dark:text-zinc-500">
              <p>
                &copy; {new Date().getFullYear()} Innnets. All rights reserved.
                {' | '}
                <a 
                  href="https://beian.mps.gov.cn/#/query/webSearch?code=33010502012079" 
                  rel="noreferrer" 
                  target="_blank"
                  className="hover:text-teal-500 transition-colors"
                >
                  浙公网安备33010502012079号
                </a>
              </p>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
