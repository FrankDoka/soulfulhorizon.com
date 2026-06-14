import clsx from 'clsx'
import Image from 'next/image'

import LogoImg from '@public/img/sh/logo.webp'

/**
 * Brand lockup: the practice's actual logo (transparent) + the wordmark.
 * Size it with a height class on `className` (e.g. "h-9 w-auto"); the image
 * scales to match. `filled` / `fillOnHover` are accepted for API compatibility.
 */
export function Logo({
  className,
}: {
  className?: string
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <span className={clsx('inline-flex items-center gap-2.5', className)}>
      <Image src={LogoImg} alt="" aria-hidden="true" className="h-full w-auto" />
      <span className="font-display text-lg font-semibold tracking-tight whitespace-nowrap text-[var(--theme-text-primary)]">
        Soulful Horizon
      </span>
    </span>
  )
}
