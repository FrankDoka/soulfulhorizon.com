import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { UserRound, Users, Compass, MessageCircle, HeartHandshake, Sparkles, ShieldCheck, Award, Languages, Video } from 'lucide-react'

import LogoImg from '@public/img/sh/logo.webp'
import IndividualImg from '@public/img/sh/individual.webp'
import GroupImg from '@public/img/sh/group.webp'
import CoachingImg from '@public/img/sh/coaching.webp'
import PortraitImg from '@public/img/sh/emmanuelle.webp'
import MountainImg from '@public/img/sh/mountain.webp'

import { CTASection } from '@/components/CTASection'
import { FAQ } from '@/components/FAQ'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'
import { SpLink } from '@/components/SimplePractice'
import { WaveDivider } from '@/components/WaveDivider'
import { JsonLd, practiceSchema } from '@/components/StructuredData'
import { loadPosts } from '@/lib/mdx'
import { formatDate } from '@/lib/formatDate'

export const metadata: Metadata = {
  title: {
    absolute: 'Soulful Horizon LCSW, PLLC | Faith-Based Therapy & Coaching',
  },
  description:
    'Online therapy for anxiety, depression, trauma, and burnout in New York & Tennessee with Emmanuelle Lajeunesse, LCSW. Free 15-minute consult.',
}

const offerings = [
  {
    title: 'Individual Therapy',
    href: '/offerings#individual-therapy',
    image: IndividualImg,
    icon: UserRound,
    body: 'One-on-one sessions with personalized, evidence-based strategies to support your emotional well-being. Christian faith integration is available for clients who want it.',
  },
  {
    title: 'Group Sessions & Community Support',
    href: '/offerings#group-sessions',
    image: GroupImg,
    icon: Users,
    body: 'By-request group sessions and community support for schools, organizations, churches, and community programs — a warm space for processing, coping skills, reflection, and connection.',
  },
  {
    title: 'Mental Health Coaching',
    href: '/offerings#mental-health-coaching',
    image: CoachingImg,
    icon: Compass,
    body: 'Build resilience and reach your goals through supportive, faith-based coaching — available worldwide, wherever you are.',
  },
]

const steps = [
  {
    icon: MessageCircle,
    title: 'Reach Out',
    body: 'Request a free 15-minute consultation through the secure portal — no pressure, no commitment.',
  },
  {
    icon: HeartHandshake,
    title: 'Connect',
    body: 'We’ll talk through what’s bringing you in and make sure we’re the right fit for one another.',
  },
  {
    icon: Sparkles,
    title: 'Begin',
    body: 'Start your personalized therapy or coaching journey, from the comfort of home.',
  },
]

const trust = [
  { icon: ShieldCheck, label: 'Licensed in NY & Tennessee' },
  { icon: Award, label: '10 years of experience' },
  { icon: Languages, label: 'English · Spanish · Haitian Creole' },
  { icon: Video, label: 'Online · Free 15-min consult' },
]

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--brand-teal-hero)]">
      <Container className="py-12 text-center sm:py-16">
        <FadeIn>
          <Image
            src={LogoImg}
            alt="Soulful Horizon LCSW, PLLC logo"
            priority
            className="mx-auto h-auto w-52 max-w-full sm:w-80"
          />
          <h1 className="mx-auto mt-5 max-w-4xl font-display text-3xl leading-tight font-semibold tracking-tight text-balance text-[#f6efe2] sm:text-5xl">
            Online Therapy in New York &amp; Tennessee for Anxiety, Depression, Trauma, and
            Burnout
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#cdd9db] sm:text-xl">
            A compassionate space to heal, grow, and feel more grounded, with Christian
            faith integration available for clients who want it.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <SpLink className="btn-gold inline-flex cursor-pointer rounded-full px-8 py-3.5 text-base font-semibold transition">
              Request an Appointment
            </SpLink>
            <Link
              href="/offerings"
              className="inline-flex rounded-full border border-[#5b8893] px-8 py-3.5 text-base font-semibold text-[#f6efe2] transition hover:bg-white/10"
            >
              Explore Offerings
            </Link>
          </div>
          <p className="mt-5 text-sm font-medium tracking-wide text-[#9fb9bf]">
            Coaching available worldwide
          </p>
          {/* max-w-5xl, not 3xl: the four items need 916px to sit on one line. */}
          <ul className="mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-[#cdd9db]">
            {trust.map((t) => (
              <li key={t.label} className="flex items-center gap-2">
                <t.icon className="h-4 w-4 flex-none text-[var(--brand-gold-light)]" aria-hidden="true" />
                <span>{t.label}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
      <WaveDivider fill="var(--theme-bg-page)" />
    </section>
  )
}

/**
 * The practice story and the clinician bio used to be two separate sections
 * telling one story across ~1,200px. Merged into a single introduction.
 */
function Story() {
  return (
    <section className="bg-[var(--theme-bg-page)]">
      <Container className="py-12 sm:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
          <FadeIn className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl shadow-lg ring-1 ring-[var(--theme-card-border)]">
              <Image
                src={PortraitImg}
                alt="Emmanuelle Lajeunesse, LCSW"
                className="h-full w-full object-cover"
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </FadeIn>
          <FadeIn className="lg:col-span-3">
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-[var(--brand-gold-ink)] uppercase">
              Meet Your Therapist
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[var(--brand-teal)] sm:text-5xl">
              Emmanuelle Lajeunesse, LCSW
            </h2>
            <div className="mt-6 space-y-4 text-lg text-[var(--theme-text-secondary)]">
              <p>
                Life can feel heavy when anxiety, depression, or past trauma keep you stuck in cycles of stress and
                self-doubt. You may find yourself asking, <em>“Why can’t I just feel normal?”</em> or{' '}
                <em>“When will things finally get better?”</em>
              </p>
              <p>
                I’m a Licensed Clinical Social Worker helping adolescents, young adults, and adults create space for
                healing and growth. My approach is person-centered, grounded in evidence-based practice, and integrates
                faith as much — or as little — as you’d like.
              </p>
              <p className="font-medium text-[var(--theme-text-primary)]">
                This is your space to pause, breathe, and begin again.
              </p>
            </div>
            <Link
              href="/about"
              className="btn-gold mt-8 inline-flex rounded-full px-7 py-3 text-base font-semibold transition"
            >
              Read Our Story
            </Link>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

function Offerings() {
  return (
    <section className="bg-[var(--theme-bg-elevated)]">
      <Container className="py-12 sm:py-16">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-[var(--brand-gold-ink)] uppercase">
            Our Offerings
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[var(--brand-teal)] sm:text-5xl">
            Explore Our Holistic Offerings
          </h2>
          <p className="mt-5 text-lg text-[var(--theme-text-secondary)]">
            Compassionate services tailored to nurture your mental wellness and spiritual growth.
          </p>
          {/* Focus areas, folded in from what used to be its own section. */}
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {focusAreas.map((area) => (
              <li
                key={area}
                className="rounded-full bg-[var(--theme-bg-surface)] px-4 py-1.5 text-sm font-medium text-[var(--brand-teal)] ring-1 ring-[var(--theme-card-border)]"
              >
                {area}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeInStagger className="mt-12 grid gap-8 md:grid-cols-3">
          {offerings.map((o) => (
            <FadeIn key={o.title}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-[var(--theme-bg-surface)] shadow-sm ring-1 ring-[var(--theme-card-border)] transition hover:shadow-md">
                <div className="aspect-[16/9] overflow-hidden">
                  {/* Decorative: the h3 beside it already names the service. */}
                  <Image
                    src={o.image}
                    alt=""
                    className="h-full w-full object-cover"
                    placeholder="blur"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[var(--theme-bg-elevated)] text-[var(--brand-teal)]">
                      <o.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-xl font-semibold text-[var(--brand-teal)]">{o.title}</h3>
                  </div>
                  <p className="mt-4 flex-1 text-base text-[var(--theme-text-secondary)]">{o.body}</p>
                  <Link
                    href={o.href}
                    className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--brand-gold-ink)] transition hover:underline"
                  >
                    Learn more<span className="sr-only"> about {o.title}</span> →
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

async function Insights() {
  const posts = (await loadPosts()).slice(0, 2)
  if (posts.length === 0) return null
  return (
    <section className="bg-[var(--theme-bg-elevated)]">
      <Container className="py-12 sm:py-16">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-[var(--brand-gold-ink)] uppercase">
            Soulful Insights
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[var(--brand-teal)] sm:text-5xl">
            From the Blog
          </h2>
        </FadeIn>
        {/* Compact rows rather than large cards — two posts did not justify 930px. */}
        <FadeInStagger className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <FadeIn key={post.href}>
              <Link
                href={post.href}
                className="group flex h-full items-center gap-4 overflow-hidden rounded-2xl bg-[var(--theme-bg-surface)] p-4 shadow-sm ring-1 ring-[var(--theme-card-border)] transition hover:shadow-md"
              >
                {post.image && (
                  <div className="h-20 w-20 flex-none overflow-hidden rounded-xl">
                    <Image
                      src={post.image}
                      alt=""
                      placeholder="blur"
                      sizes="80px"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="min-w-0">
                  <time dateTime={post.updated ?? post.date} className="text-xs text-[var(--brand-gold-ink)]">
                    {formatDate(post.updated ?? post.date)}
                  </time>
                  <h3 className="mt-1 font-display text-lg font-semibold text-[var(--brand-teal)] group-hover:underline">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </FadeIn>
          ))}
        </FadeInStagger>
        <div className="mt-6 text-center">
          <Link
            href="/blog"
            className="inline-flex min-h-11 items-center text-base font-semibold text-[var(--brand-gold-ink)] transition hover:underline"
          >
            Read all posts →
          </Link>
        </div>
      </Container>
    </section>
  )
}

function FreeGuide() {
  return (
    <section className="bg-[var(--theme-bg-elevated)]">
      <Container className="pb-12 sm:pb-16">
        <FadeIn className="mx-auto max-w-3xl rounded-3xl bg-[var(--theme-bg-surface)] p-8 text-center shadow-sm ring-1 ring-[var(--theme-card-border)] sm:p-10">
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-[var(--brand-gold-ink)] uppercase">
            Free Guide
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--brand-teal)] sm:text-4xl">
            From Pressure to Peace
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--theme-text-secondary)]">
            A gentle starting point for Christian women who are tired of carrying too much and want
            to begin moving from overwhelm toward greater peace.
          </p>
          <a
            href="https://online.soulfulhorizon.com/burnout-guide"
            className="btn-gold mt-6 inline-flex rounded-full px-7 py-3 text-base font-semibold transition"
          >
            Download the Free Guide
          </a>
        </FadeIn>
      </Container>
    </section>
  )
}

const focusAreas = [
  'Anxiety',
  'Depression',
  'Trauma',
  'Faith & identity',
  'Life transitions',
  'Stress & burnout',
  'Self-doubt',
  'Adolescents & young adults',
]

function HowItWorks() {
  return (
    <section className="bg-[var(--theme-bg-page)]">
      <Container className="py-12 sm:py-16">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-[var(--brand-gold-ink)] uppercase">
            Getting Started
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[var(--brand-teal)] sm:text-5xl">
            Starting is simple
          </h2>
          <p className="mt-5 text-lg text-[var(--theme-text-secondary)]">
            Taking the first step can feel big. Here’s exactly what to expect.
          </p>
        </FadeIn>
        <FadeInStagger className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <FadeIn key={s.title}>
              <div className="h-full rounded-3xl bg-[var(--theme-bg-surface)] p-8 text-center shadow-sm ring-1 ring-[var(--theme-card-border)]">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-teal)] text-white">
                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="mt-4 font-display text-xs font-semibold tracking-[0.15em] text-[var(--brand-gold-ink)] uppercase">
                  Step {i + 1}
                </div>
                <h3 className="mt-1 font-display text-xl font-semibold text-[var(--brand-teal)]">{s.title}</h3>
                <p className="mt-3 text-base text-[var(--theme-text-secondary)]">{s.body}</p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

/**
 * A slim teal band roughly halfway down the page. It breaks up the long run of
 * cream sections and puts a booking prompt within reach without scrolling to
 * the bottom — the full CTASection still closes the page.
 */
function MidPageCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--brand-teal)]">
      <Image
        src={MountainImg}
        alt=""
        aria-hidden="true"
        placeholder="blur"
        fill
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 -z-10 bg-[var(--brand-teal)]/80" aria-hidden="true" />
      <WaveDivider fill="var(--theme-bg-page)" position="top" />
      <Container className="py-10 text-center sm:py-12">
        <FadeIn>
          <h2 className="mx-auto max-w-2xl font-display text-2xl font-semibold tracking-tight text-balance text-[#faf6ee] sm:text-3xl">
            Not sure where to start? A free 15-minute call can help.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-[#cdd9db]">
            No pressure and no commitment — just a conversation about what you’re looking for.
          </p>
          <SpLink className="btn-gold mt-6 inline-flex cursor-pointer rounded-full px-7 py-3 text-base font-semibold transition">
            Book a Free Consultation
          </SpLink>
        </FadeIn>
      </Container>
      <WaveDivider fill="var(--theme-bg-elevated)" />
    </section>
  )
}

export default async function Home() {
  return (
    <div data-pagefind-body>
      <JsonLd data={practiceSchema()} />
      <Hero />
      <Story />
      <Offerings />
      <HowItWorks />
      <MidPageCTA />
      <Insights />
      <FreeGuide />
      {/* 6, not 5: private pay now sits at position 5, and the faith question
          after it needs to stay on the homepage. */}
      <FAQ limit={6} />
      <CTASection />
    </div>
  )
}
