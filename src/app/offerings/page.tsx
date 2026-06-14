import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Church, HeartHandshake } from 'lucide-react'

import IndividualImg from '@public/img/sh/individual.webp'
import GroupImg from '@public/img/sh/group.webp'
import CoachingImg from '@public/img/sh/coaching.webp'

import { CTASection } from '@/components/CTASection'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'
import { PageIntro } from '@/components/PageIntro'
import { SpLink } from '@/components/SimplePractice'

const description =
  'Individual therapy for New York and Tennessee, group sessions and community support, and faith-based coaching available worldwide — compassionate services to nurture your mental wellness and spiritual growth.'

export const metadata: Metadata = {
  title: 'Offerings',
  description,
  openGraph: {
    title: 'Offerings — Soulful Horizon',
    description,
    url: 'https://soulfulhorizon.com/offerings',
  },
}

const services = [
  {
    n: '01',
    title: 'Individual Therapy',
    image: IndividualImg,
    body: 'Personalized one-on-one online sessions for clients in New York and Tennessee, helping you navigate life’s challenges with empathy and guidance tailored to your unique spiritual beliefs.',
    note: 'Online · New York & Tennessee',
  },
  {
    n: '02',
    title: 'Group Sessions & Community Support',
    image: GroupImg,
    body: 'By-request group sessions and community-based support for schools, organizations, churches, and community programs — warm, supportive spaces for emotional processing, coping skills, reflection, and connection.',
    note: 'By request · details below',
  },
  {
    n: '03',
    title: 'Mental Health Coaching',
    image: CoachingImg,
    body: 'Faith-based coaching blends spiritual beliefs with psychological strategies, empowering you through prayer, reflection, and action. Because coaching isn’t bound by state licensure, it’s available worldwide — wherever you are.',
    note: 'Available worldwide',
  },
]

const groupIncludes = [
  'Grief support',
  'Stress management',
  'Emotional regulation',
  'Coping skills',
  'Faith-integrated reflection (upon request)',
  'Wellness workshops',
]

const why = [
  {
    title: 'Faith-Infused Interventions',
    icon: Church,
    body: 'We uniquely blend spiritual guidance with professional counseling techniques, ensuring your faith and values are integral to your journey.',
  },
  {
    title: 'Community-Centered Approach',
    icon: HeartHandshake,
    body: 'We weave connection and an understanding of cultural backgrounds into your care. We are not only professionals, but also compassionate listeners.',
  },
]

export default function Offerings() {
  return (
    <div data-pagefind-body>
      <PageIntro eyebrow="Our Offerings" title="Explore our holistic offerings">
        <p>{description}</p>
      </PageIntro>

      <Container className="mt-10 sm:mt-14">
        <div className="space-y-16 lg:space-y-24">
          {services.map((s, i) => (
            <FadeIn key={s.title}>
              <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-last' : ''}`}>
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <div className="aspect-[4/3]">
                    <Image src={s.image} alt={s.title} className="h-full w-full object-cover" placeholder="blur" sizes="(min-width: 1024px) 50vw, 100vw" />
                  </div>
                </div>
                <div>
                  <span className="font-display text-5xl font-medium text-[var(--theme-border)]">{s.n}</span>
                  <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-[var(--brand-teal)]">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-lg text-[var(--theme-text-secondary)]">{s.body}</p>
                  {s.note && (
                    <p className="mt-5 inline-flex rounded-full bg-[var(--theme-bg-elevated)] px-4 py-2 text-sm font-semibold text-[var(--brand-teal)]">
                      {s.note}
                    </p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>

      {/* Group Sessions & Community Support — full detail */}
      <section className="mt-16 bg-[var(--theme-bg-elevated)] sm:mt-24">
        <Container className="py-14 sm:py-20">
          <FadeIn className="mx-auto max-w-3xl">
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-[var(--brand-gold-ink)] uppercase">
              By Request
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--brand-teal)] sm:text-4xl">
              Group Sessions &amp; Community Support
            </h2>
            <div className="mt-6 space-y-4 text-lg text-[var(--theme-text-secondary)]">
              <p>
                Soulful Horizon offers group sessions and community-based support by request for schools, organizations,
                churches, and community programs.
              </p>
              <p>
                These sessions are designed to provide a warm, supportive space for emotional processing,
                psychoeducation, coping skills, reflection, and connection. Group offerings may be helpful after a loss,
                major transition, stressful event, or during seasons where additional emotional wellness support is
                needed.
              </p>
            </div>
          </FadeIn>

          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            <FadeIn>
              <div className="h-full rounded-3xl bg-[var(--theme-bg-surface)] p-7 ring-1 ring-[var(--theme-card-border)]">
                <h3 className="font-display text-lg font-semibold text-[var(--brand-teal)]">Sessions may include</h3>
                <ul className="mt-4 space-y-2 text-base text-[var(--theme-text-secondary)]">
                  {groupIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="mt-1.5 h-2 w-2 flex-none fill-[var(--brand-gold)]" viewBox="0 0 8 8" aria-hidden="true">
                        <circle cx="4" cy="4" r="4" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-[var(--theme-text-muted)]">
                  Group sessions are customized based on the needs of the organization or community.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="h-full rounded-3xl bg-[var(--theme-bg-surface)] p-7 ring-1 ring-[var(--theme-card-border)]">
                <h3 className="font-display text-lg font-semibold text-[var(--brand-teal)]">A recent example</h3>
                <p className="mt-4 text-base text-[var(--theme-text-secondary)]">
                  Past group support has included grief-focused healing circles for children, staff, and community
                  members following a significant loss.
                </p>
                <p className="mt-4 rounded-2xl bg-[var(--theme-bg-elevated)] px-4 py-3 text-sm text-[var(--theme-text-secondary)]">
                  <strong className="font-semibold text-[var(--brand-teal)]">Coming soon:</strong> future group coaching
                  cohorts and wellness workshops are in development. Reach out to join the interest list and be notified
                  when new offerings become available.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-base text-[var(--theme-text-secondary)]">
              To inquire about a group session, workshop, or community support offering — or to join the interest list —
              please get in touch.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <SpLink
                contact
                className="inline-flex cursor-pointer rounded-full bg-[var(--brand-gold)] px-7 py-3 text-base font-semibold text-white transition hover:bg-[#b07f33]"
              >
                Inquire About Group Sessions
              </SpLink>
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-[var(--brand-gold)] px-7 py-3 text-base font-semibold text-[var(--brand-teal)] transition hover:bg-[var(--brand-gold)] hover:text-white"
              >
                Contact Page
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Why choose Soulful Horizon */}
      <Container className="mt-16 sm:mt-24">
        <FadeIn>
          <h2 className="font-display text-3xl font-medium tracking-tight text-[var(--brand-teal)] sm:text-4xl">
            Why choose Soulful Horizon for your healing?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[var(--theme-text-secondary)]">
            We prioritize empathetic care, integrating spirituality with psychology for a holistic healing experience
            that fosters genuine growth and wellness.
          </p>
        </FadeIn>
        <FadeInStagger className="mt-10 grid gap-8 md:grid-cols-2">
          {why.map((w) => (
            <FadeIn key={w.title}>
              <div className="h-full rounded-3xl border border-[var(--theme-card-border)] bg-[var(--theme-card-bg)] p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--theme-bg-elevated)] text-[var(--brand-teal)]">
                  <w.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-[var(--brand-teal)]">{w.title}</h3>
                <p className="mt-3 text-base text-[var(--theme-text-secondary)]">{w.body}</p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      <CTASection title="Ready to begin?">
        Have a question about which offering is right for you? Reach out — we’re happy to help you find the best fit.
      </CTASection>
    </div>
  )
}
