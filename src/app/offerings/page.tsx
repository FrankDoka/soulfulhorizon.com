import { type Metadata } from 'next'
import Image from 'next/image'

import IndividualImg from '@public/img/sh/individual.webp'
import GroupImg from '@public/img/sh/group.jpg'
import CoachingImg from '@public/img/sh/coaching.webp'

import { CTASection } from '@/components/CTASection'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'
import { PageIntro } from '@/components/PageIntro'

const description =
  'Individual therapy, group sessions, and faith-based mental health coaching — compassionate services tailored to nurture your mental wellness and spiritual growth.'

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
    body: 'Personalized support through one-on-one sessions, helping you navigate life’s challenges with empathy and guidance tailored to your unique spiritual beliefs.',
    note: null,
  },
  {
    n: '02',
    title: 'Group Sessions',
    image: GroupImg,
    body: 'A warm, welcoming environment where you can share your experiences, gain valuable insights, and find the support you need — whether you’re seeking advice, looking to share your story, or simply want to be part of a caring community.',
    note: 'Next group cohort: Fall 2026',
  },
  {
    n: '03',
    title: 'Mental Health Coaching',
    image: CoachingImg,
    body: 'Faith-based coaching integrates spiritual beliefs with psychological strategies, empowering you to navigate life’s challenges through prayer, reflection, and action — aligning your mental health goals with your faith values.',
    note: null,
  },
]

const why = [
  {
    title: 'Faith-Infused Interventions',
    body: 'We uniquely blend spiritual guidance with professional counseling techniques, ensuring your faith and values are integral to your journey.',
  },
  {
    title: 'Community-Centered Approach',
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
                  <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-[var(--theme-text-primary)]">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-lg text-[var(--theme-text-secondary)]">{s.body}</p>
                  {s.note && (
                    <p className="mt-5 inline-flex rounded-full bg-[var(--theme-bg-elevated)] px-4 py-2 text-sm font-semibold text-[var(--theme-accent)]">
                      {s.note}
                    </p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>

      {/* Why choose Soulful Horizon */}
      <Container className="mt-12 sm:mt-16">
        <FadeIn>
          <h2 className="font-display text-3xl font-medium tracking-tight text-[var(--theme-text-primary)] sm:text-4xl">
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
                <h3 className="font-display text-xl font-semibold text-[var(--theme-accent)]">{w.title}</h3>
                <p className="mt-3 text-base text-[var(--theme-text-secondary)]">{w.body}</p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      <CTASection title="Ready to begin?" >
        Have a question about which offering is right for you? Reach out — we’re happy to help you find the best fit.
      </CTASection>
    </div>
  )
}
