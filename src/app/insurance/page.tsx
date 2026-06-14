import { type Metadata } from 'next'

import { CTASection } from '@/components/CTASection'
import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'
import { PageIntro } from '@/components/PageIntro'
import { site } from '@/lib/site'

const description =
  'Soulful Horizon accepts a wide range of insurance plans, with out-of-pocket and sliding-scale options available.'

export const metadata: Metadata = {
  title: 'Insurance',
  description,
  openGraph: {
    title: 'Insurance — Soulful Horizon',
    description,
    url: 'https://soulfulhorizon.com/insurance',
  },
}

const plans = [
  'Aetna',
  'Anthem Blue Cross and Blue Shield NY',
  'Anthem EAP',
  'Blue Cross Blue Shield of Massachusetts',
  'Carelon Behavioral Health',
  'Cigna',
  'Horizon Blue Cross and Blue Shield of NJ',
  'Medicaid',
  'Optum',
  'Optum Live & Work Well (EAP)',
  'Oscar',
  'Oxford Health Plans',
  'UHC Student Resources',
  'UMR',
  'UnitedHealthcare',
  'UnitedHealthcare Medicare Advantage',
]

export default function Insurance() {
  return (
    <div data-pagefind-body>
      <PageIntro eyebrow="Insurance" title="Insurance & fees">
        <p>{description}</p>
      </PageIntro>

      <Container className="mt-10 sm:mt-14">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-[var(--brand-teal)]">Accepted plans</h2>
          <p className="mt-2 text-base text-[var(--theme-text-secondary)]">
            We’re in-network with a wide range of major plans, including:
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <li
                key={plan}
                className="flex items-center gap-3 rounded-2xl bg-[var(--theme-bg-surface)] px-4 py-3 text-sm font-medium text-[var(--theme-text-primary)] ring-1 ring-[var(--theme-card-border)]"
              >
                <svg className="h-5 w-5 flex-none text-[var(--brand-teal)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 10.7a1 1 0 011.4-1.4l3.3 3.29 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                </svg>
                <span>{plan}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-[var(--theme-card-border)] bg-[var(--theme-card-bg)] p-8">
              <h3 className="font-display text-xl font-semibold text-[var(--theme-text-primary)]">Out of pocket</h3>
              <p className="mt-3 text-base text-[var(--theme-text-secondary)]">
                Self-pay is welcome, and a <strong className="text-[var(--theme-text-primary)]">sliding scale is
                available</strong> to help make care more affordable.
              </p>
            </div>
            <div className="rounded-3xl border border-[var(--theme-card-border)] bg-[var(--theme-card-bg)] p-8">
              <h3 className="font-display text-xl font-semibold text-[var(--theme-text-primary)]">Not sure?</h3>
              <p className="mt-3 text-base text-[var(--theme-text-secondary)]">
                Not sure if your insurance is accepted? Reach out and inquire — we’re happy to help you check your
                coverage. Call{' '}
                <a href={site.contact.phoneHref} className="font-semibold text-[var(--theme-accent)] hover:underline">
                  {site.contact.phone}
                </a>{' '}
                or{' '}
                <a href={`mailto:${site.contact.email}`} className="font-semibold text-[var(--theme-accent)] hover:underline">
                  email us
                </a>
                .
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>

      <CTASection title="Have a coverage question?">
        We’ll help you understand your benefits and options so you can focus on healing.
      </CTASection>
    </div>
  )
}
