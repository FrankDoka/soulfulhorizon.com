import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: 'Are sessions online or in person?',
    a: 'All sessions are held online (telehealth), so you can meet from the comfort and privacy of your own home — anywhere in New York State.',
  },
  {
    q: 'Do you offer a free consultation?',
    a: 'Yes. I offer a free 15-minute consultation so we can connect and make sure we’re a good fit before you commit to anything.',
  },
  {
    q: 'How long are sessions?',
    a: 'Individual sessions are about 50 minutes. An initial diagnostic evaluation runs about an hour.',
  },
  {
    q: 'Do you take my insurance?',
    a: (
      <>
        I accept many major plans, and out-of-pocket sessions are welcome with a sliding scale available. See the{' '}
        <Link href="/insurance" className="font-semibold text-[var(--brand-gold)] hover:underline">
          insurance page
        </Link>{' '}
        or reach out to check your coverage.
      </>
    ),
  },
  {
    q: 'Is faith part of every session?',
    a: 'Faith is woven in as much — or as little — as you’d like. Care is always client-centered and meets you exactly where you are.',
  },
  {
    q: 'Who do you work with?',
    a: 'Adolescents, young adults, and adults navigating anxiety, depression, trauma, and life’s transitions.',
  },
  {
    q: 'How do I get started?',
    a: 'Click “Request an Appointment” to book your free consultation or first session through the secure portal — it only takes a few minutes.',
  },
]

export function FAQ() {
  return (
    <section className="bg-[var(--theme-bg-elevated)]">
      <Container className="py-14 sm:py-20">
        <FadeIn className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-[var(--brand-gold)] uppercase">
              Questions
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[var(--brand-teal)] sm:text-5xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl bg-[var(--theme-bg-surface)] ring-1 ring-[var(--theme-card-border)]">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-[var(--theme-border-subtle)] last:border-b-0">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-lg font-semibold text-[var(--theme-text-primary)] transition hover:text-[var(--brand-teal)] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown className="h-5 w-5 flex-none text-[var(--brand-gold)] transition group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5 text-base text-[var(--theme-text-secondary)]">{f.a}</div>
              </details>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
