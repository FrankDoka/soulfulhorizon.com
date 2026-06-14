import clsx from 'clsx'
import Image from 'next/image'

import LogoImg from '@public/img/sh/logo.webp'

/**
 * Brand lockup: the practice's actual logo + the wordmark.
 *
 * The logo's dove is white, so on light backgrounds it's set on a small teal
 * "chip" (the deep teal it was designed for) so the whole emblem reads clearly.
 * Size with a height class on `className` (e.g. "h-9 w-auto"). `filled` /
 * `fillOnHover` are accepted for API compatibility.
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
      <span className="flex h-full items-center justify-center rounded-lg bg-[var(--brand-teal-hero)] px-2 py-1">
        <Image src={LogoImg} alt="" aria-hidden="true" className="h-full w-auto" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight whitespace-nowrap text-[var(--theme-text-primary)]">
        Soulful Horizon
      </span>
    </span>
  )
}
