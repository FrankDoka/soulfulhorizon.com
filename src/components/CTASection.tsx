import Image from 'next/image'

import CtaBg from '@public/img/sh/ocean-sunset.webp'
import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'
import { SpLink } from '@/components/SimplePractice'
import { site } from '@/lib/site'

export function CTASection({
  title = 'Take the First Step',
  children = 'Reach out today and begin your journey toward mental wellness and soulful healing.',
}: {
  title?: string
  children?: React.ReactNode
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--brand-teal-dark)]">
      <Image
        src={CtaBg}
        alt=""
        aria-hidden="true"
        placeholder="blur"
        fill
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-[var(--brand-teal-dark)]/80" aria-hidden="true" />
      <Container className="py-16 text-center sm:py-20">
        <FadeIn>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-[#faf6ee] sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[#dbe6e8]">{children}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <SpLink className="inline-flex cursor-pointer rounded-full bg-[var(--brand-gold)] px-7 py-3.5 text-base font-semibold text-white transition hover:bg-[#b07f33]">
              Request an Appointment
            </SpLink>
            <a
              href={site.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-[#5b8893] px-7 py-3.5 text-base font-semibold text-[#faf6ee] transition hover:bg-white/10"
            >
              Client Portal
            </a>
          </div>
          <p className="mt-6 text-sm text-[#c2d2d4]">
            Prefer to talk first? Call{' '}
            <a href={site.contact.phoneHref} className="font-semibold text-[#e0b878] hover:underline">
              {site.contact.phone}
            </a>
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}
