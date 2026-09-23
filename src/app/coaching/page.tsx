import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Compass, HeartHandshake, Scale, Sprout } from 'lucide-react'

import CoachingImg from '@public/img/sh/coaching.webp'

import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'
import { PageIntro } from '@/components/PageIntro'
import { SpLink } from '@/components/SimplePractice'
import { guideUrl, ogBase, site } from '@/lib/site'

// DRAFT COPY: working structure and placeholder wording, pending the owner's
// finalized copy.

const title = 'Coaching for Christian Women Who Are Tired of Carrying Too Much'
const description =
  'Faith-based coaching for Christian women who carry too much. Build sustainable rhythms around rest, boundaries, and everyday responsibilities. Online, worldwide.'

export const metadata: Metadata = {
  title: 'Faith-Based Coaching for Christian Women',
  description,
  openGraph: {
    ...ogBase,
    title: 'Faith-Based Coaching — Soulful Horizon',
    description,
    url: 'https://soulfulhorizon.com/coaching',
  },
}

const experiencing = [
  'You’re the one everyone counts on, and your own needs keep landing at the bottom of the list',
  'You say yes before you’ve checked whether you have the capacity',
  'Rest feels selfish, or like something you have to earn first',
  'You feel guilty setting boundaries, even with people you love',
  'You’re more irritable, tired, or resentful than you want to be',
  'Time with God has started to feel rushed, or like one more thing to get done',
]

const changes = [
  'Rhythms of rest that fit your real life, not an ideal week that never happens',
  'Boundaries you can hold without carrying guilt for days afterward',
  'A clear picture of your current capacity, and permission to honor it',
  'Room in your week for God, relationships, and things you enjoy',
  'Responsibilities that feel sustainable instead of overwhelming',
]

const approach = [
  {
    icon: Scale,
    title: 'Look honestly at what you’re carrying',
    body: 'We name your commitments, expectations, and the beliefs behind them, including what you learned about strength, service, and being dependable.',
  },
  {
    icon: Sprout,
    title: 'Build sustainable rhythms',
    body: 'Practical, realistic changes to how you rest, say yes and no, and share responsibility, built around your actual life and season.',
  },
  {
    icon: HeartHandshake,
    title: 'Keep faith at the center',
    body: 'Scripture, prayer, and reflection are part of the work, so you can serve and care for others without abandoning your own needs.',
  },
]

const comparison = [
  {
    label: 'Who it’s for',
    coaching: 'Christian women who are functioning, but stretched thin and ready for practical change',
    therapy: 'Adolescents and adults experiencing symptoms that affect daily life, such as anxiety, depression, or trauma',
  },
  {
    label: 'Focus',
    coaching: 'The present: rhythms, boundaries, capacity, and next steps',
    therapy: 'Clinical assessment and treatment, including past experiences when helpful',
  },
  {
    label: 'Faith',
    coaching: 'Faith-integrated throughout',
    therapy: 'Optional and client-led',
  },
  {
    label: 'Where',
    coaching: 'Online, available worldwide',
    therapy: 'Online, for clients located in New York and Tennessee',
  },
]

export default function Coaching() {
  return (
    <div data-pagefind-body>
      <PageIntro eyebrow="Faith-Based Coaching" title={title}>
        <p>
          Practical, faith-integrated coaching for women who are used to carrying everyone else’s needs, and want to
          build sustainable rhythms around rest, boundaries, and everyday responsibilities.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <SpLink
            contact
            className="btn-gold inline-flex cursor-pointer justify-center rounded-full px-7 py-3 text-base font-semibold transition"
          >
            Ask About Coaching
          </SpLink>
          <a
            href={guideUrl('coaching-hero')}
            className="btn-gold-outline inline-flex justify-center rounded-full border px-7 py-3 text-base font-semibold transition"
          >
            Get the Free Guide
          </a>
        </div>
        <p className="mt-5 text-base">Online · Available worldwide · {site.languages.join(', ')}</p>
      </PageIntro>

      {/* Who I help */}
      <Container className="mt-14 sm:mt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <div className="aspect-[4/3]">
                <Image
                  src={CoachingImg}
                  alt=""
                  className="h-full w-full object-cover"
                  placeholder="blur"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-[var(--brand-gold-ink)] uppercase">
              Who I Help
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--brand-teal)] sm:text-4xl">
              You’re the dependable one
            </h2>
            <div className="mt-5 space-y-4 text-lg text-[var(--theme-text-secondary)]">
              <p>
                I work with Christian women who hold everything together for their families, churches, workplaces, and
                communities. You love the people you serve. But somewhere along the way, being dependable started to
                leave very little room for you.
              </p>
              <p>
                Many of the women I work with grew up with strong expectations around responsibility, strength, and
                service, often shaped by Afro-Caribbean, Latinx, and other cultural backgrounds. Coaching is a space to
                honor those values while making room for your own needs.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* Problems → changes */}
      <Container className="mt-14 sm:mt-20">
        <div className="grid gap-8 md:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-3xl border border-[var(--theme-card-border)] bg-[var(--theme-card-bg)] p-8">
              <h2 className="font-display text-2xl font-semibold text-[var(--brand-teal)]">
                What you may be experiencing
              </h2>
              <ul className="mt-5 space-y-3 text-base text-[var(--theme-text-secondary)]">
                {experiencing.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="mt-2 h-2 w-2 flex-none fill-[var(--brand-gold)]" viewBox="0 0 8 8" aria-hidden="true">
                      <circle cx="4" cy="4" r="4" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="h-full rounded-3xl bg-[var(--theme-bg-elevated)] p-8 ring-1 ring-[var(--theme-card-border)]">
              <h2 className="font-display text-2xl font-semibold text-[var(--brand-teal)]">What we’ll work toward</h2>
              <ul className="mt-5 space-y-3 text-base text-[var(--theme-text-secondary)]">
                {changes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="mt-2 h-2 w-2 flex-none fill-[var(--brand-teal)]" viewBox="0 0 8 8" aria-hidden="true">
                      <circle cx="4" cy="4" r="4" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* Approach */}
      <Container className="mt-14 sm:mt-20">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-[var(--brand-gold-ink)] uppercase">
            My Approach
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--brand-teal)] sm:text-4xl">
            Practical, faith-integrated coaching
          </h2>
          <p className="mt-5 text-lg text-[var(--theme-text-secondary)]">
            Not another self-care routine that only works on a perfect day, but a way of living that honors your real
            responsibilities, your current capacity, and your need for rest and connection.
          </p>
        </FadeIn>
        <FadeInStagger className="mt-10 grid gap-8 md:grid-cols-3">
          {approach.map((a) => (
            <FadeIn key={a.title}>
              <div className="h-full rounded-3xl bg-[var(--theme-bg-surface)] p-8 shadow-sm ring-1 ring-[var(--theme-card-border)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-teal)] text-white">
                  <a.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-[var(--brand-teal)]">{a.title}</h3>
                <p className="mt-3 text-base text-[var(--theme-text-secondary)]">{a.body}</p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      {/* Coaching vs. psychotherapy */}
      <section className="mt-16 bg-[var(--theme-bg-elevated)] sm:mt-24">
        <Container className="py-14 sm:py-20">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--brand-teal)] sm:text-4xl">
              Coaching or psychotherapy?
            </h2>
            <p className="mt-5 text-lg text-[var(--theme-text-secondary)]">
              Both are offered at Soulful Horizon, and they’re different services. Coaching is not a substitute for
              mental health treatment.
            </p>
          </FadeIn>
          <FadeIn className="mx-auto mt-10 max-w-4xl">
            <dl className="overflow-hidden rounded-3xl bg-[var(--theme-bg-surface)] ring-1 ring-[var(--theme-card-border)]">
              <div className="hidden grid-cols-[10rem_1fr_1fr] gap-6 border-b border-[var(--theme-card-border)] px-6 py-4 font-display text-sm font-semibold tracking-[0.1em] text-[var(--brand-gold-ink)] uppercase sm:grid">
                <span aria-hidden="true" />
                <span>Faith-Based Coaching</span>
                <span>Psychotherapy</span>
              </div>
              {comparison.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-2 border-b border-[var(--theme-card-border)] px-6 py-5 last:border-b-0 sm:grid-cols-[10rem_1fr_1fr] sm:gap-6"
                >
                  <dt className="font-semibold text-[var(--brand-teal)]">{row.label}</dt>
                  <dd className="text-[var(--theme-text-secondary)]">
                    <span className="font-semibold text-[var(--theme-text-primary)] sm:hidden">Coaching: </span>
                    {row.coaching}
                  </dd>
                  <dd className="text-[var(--theme-text-secondary)]">
                    <span className="font-semibold text-[var(--theme-text-primary)] sm:hidden">Therapy: </span>
                    {row.therapy}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-center text-base text-[var(--theme-text-secondary)]">
              In New York or Tennessee and looking for clinical support?{' '}
              <Link href="/offerings#individual-therapy" className="font-semibold text-[var(--brand-gold-ink)] hover:underline">
                Learn about psychotherapy →
              </Link>
            </p>
            <p className="mt-3 text-center text-sm text-[var(--theme-text-muted)]">
              If you’re in crisis, call or text 988 (Suicide &amp; Crisis Lifeline) or dial 911.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Ways to start */}
      <Container className="my-16 sm:my-24">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-[var(--brand-gold-ink)] uppercase">
            Ways to Start
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--brand-teal)] sm:text-4xl">
            Begin where you are
          </h2>
        </FadeIn>
        <FadeInStagger className="mt-10 grid gap-8 md:grid-cols-2">
          <FadeIn>
            <div className="flex h-full flex-col rounded-3xl bg-[var(--theme-bg-surface)] p-8 shadow-sm ring-1 ring-[var(--theme-card-border)]">
              <Compass className="h-8 w-8 text-[var(--brand-teal)]" aria-hidden="true" />
              <h3 className="mt-4 font-display text-2xl font-semibold text-[var(--brand-teal)]">1:1 Faith-Based Coaching</h3>
              <p className="mt-3 flex-1 text-base text-[var(--theme-text-secondary)]">
                Private online coaching sessions, available worldwide. Send a message to ask about availability and
                how coaching works.
              </p>
              <SpLink
                contact
                className="btn-gold mt-6 inline-flex cursor-pointer self-start rounded-full px-7 py-3 text-base font-semibold transition"
              >
                Ask About Coaching
              </SpLink>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="flex h-full flex-col rounded-3xl bg-[var(--theme-bg-elevated)] p-8 ring-1 ring-[var(--theme-card-border)]">
              <p className="font-display text-sm font-semibold tracking-[0.2em] text-[var(--brand-gold-ink)] uppercase">
                Free Guide
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-[var(--brand-teal)]">From Pressure to Peace</h3>
              <p className="mt-3 flex-1 text-base text-[var(--theme-text-secondary)]">
                Three common patterns that keep Christian women pushing past their capacity, and practical ways to
                begin approaching rest and responsibility differently.
              </p>
              <a
                href={guideUrl('coaching')}
                className="btn-gold-outline mt-6 inline-flex self-start rounded-full border px-7 py-3 text-base font-semibold transition"
              >
                Download the Free Guide
              </a>
            </div>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </div>
  )
}
