import Link from 'next/link'

import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'

export default function NotFound() {
  return (
    <Container className="flex items-center py-24 sm:py-32 lg:py-40">
      <FadeIn className="mx-auto flex max-w-xl flex-col items-center text-center">
        <p className="font-display text-5xl font-semibold text-[var(--brand-gold-ink)]">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-[var(--brand-teal)]">Page not found</h1>
        <p className="mt-3 text-lg text-[var(--theme-text-secondary)]">
          The page you’re looking for doesn’t exist or has been moved. Let’s get you back on solid ground.
        </p>
        <Link
          href="/"
          className="btn-gold mt-8 inline-flex rounded-full px-7 py-3 text-base font-semibold transition"
        >
          Return Home
        </Link>
      </FadeIn>
    </Container>
  )
}
