import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import LogoImg from '@public/img/sh/logo.png'
import CrossImg from '@public/img/sh/faith-cbi.png'
import IndividualImg from '@public/img/sh/individual.webp'
import GroupImg from '@public/img/sh/group.jpg'
import CoachingImg from '@public/img/sh/coaching.webp'
import PortraitImg from '@public/img/sh/emmanuelle.jpg'

import { CTASection } from '@/components/CTASection'
import { FAQ } from '@/components/FAQ'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'
import { SpLink } from '@/components/SimplePractice'
import { JsonLd, practiceSchema } from '@/components/StructuredData'
import { loadPosts } from '@/lib/mdx'
import { formatDate } from '@/lib/formatDate'

export const metadata: Metadata = {
  title: {
    absolute: 'Soulful Horizon LCSW, PLLC | Faith-Based Therapy & Coaching',
  },
  description:
    'Faith-based individual therapy, group sessions, and mental health coaching with Emmanuelle Lajeunesse, LCSW. A safe place to heal, grow, and rediscover who you were created to be. Serving New York.',
}

const offerings = [
  {
    title: 'Individual Therapy',
    image: IndividualImg,
    body: 'One-on-one sessions with personalized strategies that align with your spiritual beliefs to enhance emotional well-being.',
  },
  {
    title: 'Group Sessions',
    image: GroupImg,
    body: 'Connect with others in a supportive environment. Share experiences and gain insights while fostering community and healing together.',
  },
  {
    title: 'Mental Health Coaching',
    image: CoachingImg,
    body: 'Build resilience and achieve your goals through supportive, faith-based guidance tailored to your unique needs.',
  },
]

function Hero() {
  return (
    <section className="bg-[var(--brand-teal-hero)]">
      <Container className="py-14 text-center sm:py-20">
        <FadeIn>
          <Image
            src={LogoImg}
            alt="Soulful Horizon LCSW, PLLC logo"
            priority
            className="mx-auto h-auto w-72 max-w-full sm:w-96"
          />
          <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight text-[#f6efe2] sm:text-7xl">
            The Care You Deserve
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#cdd9db] sm:text-xl">
            A safe place to heal, grow, and rediscover who you were created to be.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <SpLink className="inline-flex cursor-pointer rounded-full bg-[var(--brand-gold)] px-8 py-3.5 text-base font-semibold text-white transition hover:bg-[#b07f33]">
              Request an Appointment
            </SpLink>
            <Link
              href="/offerings"
              className="inline-flex rounded-full border border-[#5b8893] px-8 py-3.5 text-base font-semibold text-[#f6efe2] transition hover:bg-white/10"
            >
              Explore Offerings
            </Link>
          </div>
          <p className="mt-6 text-sm font-medium tracking-wide text-[#9fb9bf]">
            Online therapy across New York · Free 15-minute consultation
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}

function Story() {
  return (
    <section className="bg-[var(--theme-bg-page)]">
      <Container className="py-14 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn className="order-last lg:order-first">
            <Image
              src={CrossImg}
              alt="Christ-based cognitive and behavioral care"
              className="mx-auto h-auto w-full max-w-md"
            />
          </FadeIn>
          <FadeIn>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-[var(--brand-teal)] sm:text-5xl">
              The Heartfelt Story of Soulful Horizon
            </h2>
            <div className="mt-6 space-y-4 text-lg text-[var(--theme-text-secondary)]">
              <p>
                Life can feel heavy when anxiety, depression, or past trauma keep you stuck in cycles of stress and
                self-doubt. You may find yourself asking, <em>“Why can’t I just feel normal?”</em> or{' '}
                <em>“When will things finally get better?”</em>
              </p>
              <p>
                At Soulful Horizon, I help adolescents, young adults, and adults create space for healing and growth.
                Whether you’re looking for therapy to work through difficult emotions or coaching to move forward with
                clarity and purpose, you don’t have to walk this journey alone.
              </p>
              <p className="font-medium text-[var(--theme-text-primary)]">
                This is your space to pause, breathe, and begin again.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex rounded-full bg-[var(--brand-gold)] px-7 py-3 text-base font-semibold text-white transition hover:bg-[#b07f33]"
            >
              Learn More
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
      <Container className="py-14 sm:py-20">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-[var(--brand-gold)] uppercase">
            Our Offerings
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[var(--brand-teal)] sm:text-5xl">
            Explore Our Holistic Offerings
          </h2>
          <p className="mt-5 text-lg text-[var(--theme-text-secondary)]">
            Compassionate services tailored to nurture your mental wellness and spiritual growth.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-14 grid gap-8 md:grid-cols-3">
          {offerings.map((o) => (
            <FadeIn key={o.title}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-[var(--theme-bg-surface)] shadow-sm ring-1 ring-[var(--theme-card-border)] transition hover:shadow-md">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={o.image}
                    alt={o.title}
                    className="h-full w-full object-cover"
                    placeholder="blur"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-semibold text-[var(--brand-teal)]">{o.title}</h3>
                  <p className="mt-3 flex-1 text-base text-[var(--theme-text-secondary)]">{o.body}</p>
                  <Link
                    href="/offerings"
                    className="mt-5 text-sm font-semibold text-[var(--brand-gold)] transition hover:text-[#b07f33]"
                  >
                    Learn more →
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

function AboutPreview() {
  return (
    <section className="bg-[var(--theme-bg-elevated)]">
      <Container className="py-14 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
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
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-[var(--brand-gold)] uppercase">
              Meet Your Therapist
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[var(--brand-teal)] sm:text-5xl">
              Emmanuelle Lajeunesse, LCSW
            </h2>
            <div className="mt-6 space-y-4 text-lg text-[var(--theme-text-secondary)]">
              <p>
                I’m a Licensed Clinical Social Worker dedicated to supporting adolescents, young adults, and adults on
                their mental health journeys. My person-centered approach is grounded in evidence-based practices and
                thoughtfully integrates faith for a holistic experience.
              </p>
              <p>
                I believe everyone has the capacity to become their best self, regardless of life circumstances. I’m here
                to guide you on your path to wellness.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex rounded-full border border-[var(--brand-gold)] px-7 py-3 text-base font-semibold text-[var(--brand-teal)] transition hover:bg-[var(--brand-gold)] hover:text-white"
            >
              More About Me
            </Link>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

async function Insights() {
  const posts = (await loadPosts()).slice(0, 2)
  if (posts.length === 0) return null
  return (
    <section className="bg-[var(--theme-bg-page)]">
      <Container className="py-14 sm:py-20">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-[var(--brand-gold)] uppercase">
            Soulful Insights
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[var(--brand-teal)] sm:text-5xl">
            From the Blog
          </h2>
          <p className="mt-5 text-lg text-[var(--theme-text-secondary)]">
            Reflections on faith, mental health, healing, and growth.
          </p>
        </FadeIn>
        <FadeInStagger className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <FadeIn key={post.href}>
              <Link
                href={post.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-[var(--theme-bg-surface)] shadow-sm ring-1 ring-[var(--theme-card-border)] transition hover:shadow-md"
              >
                {post.image && (
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      placeholder="blur"
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-7">
                  <time dateTime={post.date} className="text-sm text-[var(--brand-gold)]">
                    {formatDate(post.date)}
                  </time>
                  <h3 className="mt-2 font-display text-xl font-semibold text-[var(--brand-teal)]">{post.title}</h3>
                  <p className="mt-3 flex-1 text-base text-[var(--theme-text-secondary)]">{post.description}</p>
                  <span className="mt-5 text-sm font-semibold text-[var(--brand-gold)] transition group-hover:text-[#b07f33]">
                    Read More »
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </FadeInStagger>
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

function WhoIHelp() {
  return (
    <section className="bg-[var(--theme-bg-page)]">
      <Container className="py-14 sm:py-20">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-[var(--brand-gold)] uppercase">
            Who I Help
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[var(--brand-teal)] sm:text-5xl">
            Support for what you’re carrying
          </h2>
          <p className="mt-5 text-lg text-[var(--theme-text-secondary)]">
            Compassionate, faith-informed care for adolescents, young adults, and adults — wherever you are on your
            journey.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-[var(--theme-bg-surface)] px-5 py-2 text-base font-medium text-[var(--brand-teal)] ring-1 ring-[var(--theme-card-border)]"
              >
                {area}
              </span>
            ))}
          </div>
        </FadeIn>
      </Container>
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
      <WhoIHelp />
      <AboutPreview />
      <Insights />
      <FAQ />
      <CTASection />
    </div>
  )
}
