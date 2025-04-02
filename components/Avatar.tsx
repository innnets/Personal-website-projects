import { type ComponentProps } from '@zolplay/react'
import { clsxm } from '@zolplay/utils'
import Image from 'next/image'
import Link, { type LinkProps } from 'next/link'

// 使用URL而不是导入静态文件
const portraitImageUrl = '/avatar.jpg'
const portraitAltImageUrl = '/avatar.jpg'

function AvatarContainer({ className, ...props }: ComponentProps) {
  return (
    <div
      className={clsxm(
        className,
        'h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'
      )}
      {...props}
    />
  )
}

type AvatarImageProps = ComponentProps &
  Omit<LinkProps, 'href'> & {
    large?: boolean
    href?: string
    alt?: boolean
  }
function AvatarImage({
  large = false,
  className,
  href,
  alt,
  ...props
}: AvatarImageProps) {
  return (
    <Link
      aria-label="主页"
      className={clsxm(className, 'pointer-events-auto')}
      href={href ?? '/'}
      {...props}
    >
      <Image
        src={alt ? portraitAltImageUrl : portraitImageUrl}
        alt=""
        width={large ? 64 : 36}
        height={large ? 64 : 36}
        className={clsxm(
          'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
          large ? 'h-16 w-16' : 'h-9 w-9'
        )}
        priority
      />
    </Link>
  )
}

export const Avatar = Object.assign(AvatarContainer, { Image: AvatarImage })
