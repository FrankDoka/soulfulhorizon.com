import { type Metadata } from 'next'
import Image from 'next/image'
import { Heart, ShieldCheck, Leaf } from 'lucide-react'

import PortraitImg from '@public/img/sh/emmanuelle.webp'

import { CTASection } from '@/components/CTASection'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'
import { PageIntro } from '@/components/PageIntro'
import { SpLink } from '@/components/SimplePractice'
import { site } from '@/lib/site'

const description =
  'Meet Emmanuelle Lajeunesse, LCSW, and learn about the mission, vision, and core values behind Soulful Horizon LCSW, PLLC.'

export const metadata: Metadata = {
  title: 'About',
  description,
  openGraph: {
    title: 'About — Soulful Horizon',
    description,
    url: 'https://soulfulhorizon.com/about',
  },
}

const values = [
  {
    title: 'Compassion',
    icon: Heart,
    body: 'We prioritize understanding and empathy in all our interactions, ensuring every client feels valued and supported throughout their healing journey.',
  },
  {
    title: 'Integrity',
    icon: ShieldCheck,
    body: 'We adhere to ethical practices and maintain transparency in our approach, fostering trust and respect among our clients.',
  },
  {
    title: 'Wholeness',
    icon: Leaf,
    body: 'We treat the individual as a whole — integrating mental, emotional, and spiritual well-being to promote lasting transformation and growth.',
  },
]

export default function About() {
  return (
    <div data-pagefind-body>
      <PageIntro eyebrow="About" title="The heartfelt story of Soulful Horizon">
        <p>
          Soulful Horizon LCSW, PLLC is a compassionate counseling practice dedicated to holistic healing that nurtures
          the soul — offering individual counseling, group sessions, and mental health coaching, all infused with
          empathy and understanding.
        </p>
      </PageIntro>

      {/* Meet the clinician */}
      <Container className="mt-10 sm:mt-14">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <FadeIn className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl shadow-xl">
              <Image src={PortraitImg} alt="Emmanuelle Lajeunesse, LCSW" className="h-full w-full object-cover" placeholder="blur" sizes="(min-width: 1024px) 40vw, 100vw" />
            </div>
          </FadeIn>
          <FadeIn className="lg:col-span-3">
            <h2 className="font-display text-3xl font-medium tracking-tight text-[var(--theme-text-primary)] sm:text-4xl">
              Hello, I’m Emmanuelle Lajeunesse, LCSW
            </h2>
            <div className="mt-6 space-y-4 text-lg text-[var(--theme-text-secondary)]">
              <p>
                I’m a Licensed Clinical Social Worker dedicated to supporting adolescents, young adults, and adults on
                their mental health journeys. I specialize in addressing depression, anxiety, and trauma by helping
                clients build the confidence to overcome barriers.
              </p>
              <p>
                My person-centered approach is grounded in evidence-based practices and thoughtfully integrates faith
                with mental health for a holistic experience. I believe everyone has the capacity to become their best
                self, regardless of life circumstances. I’m here to guide you on your path to wellness.
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {[
                { label: 'Credential', value: 'LCSW' },
                { label: 'Education', value: 'Columbia University, MSW' },
                { label: 'Experience', value: '8+ years' },
                { label: 'Languages', value: 'English & Haitian Creole' },
              ].map((fact) => (
                <div key={fact.label}>
                  <dt className="font-display text-xs font-semibold tracking-[0.15em] text-[var(--theme-text-muted)] uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-base font-semibold text-[var(--brand-teal)]">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 inline-flex rounded-full bg-[var(--theme-bg-elevated)] px-4 py-2 text-sm font-medium text-[var(--brand-teal)]">
              🌿 Online therapy across New York State
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <SpLink className="inline-flex cursor-pointer rounded-full bg-[var(--brand-gold)] px-7 py-3 text-base font-semibold text-white transition hover:bg-[#b07f33]">
                Request an Appointment
              </SpLink>
              <a
                href={site.psychologyToday}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-[var(--brand-gold)] px-7 py-3 text-base font-semibold text-[var(--brand-teal)] transition hover:bg-[var(--brand-gold)] hover:text-white"
              >
                Psychology Today Profile
              </a>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* Mission & Vision */}
      <Container className="mt-12 sm:mt-16">
        <div className="grid gap-8 md:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-3xl border border-[var(--theme-card-border)] bg-[var(--theme-card-bg)] p-8">
              <h3 className="font-display text-2xl font-semibold text-[var(--theme-text-primary)]">Our Mission</h3>
              <p className="mt-4 text-lg text-[var(--theme-text-secondary)]">
                To support individuals who have experienced trauma and struggle with anxiety and depression — guiding
                them through therapeutic interventions and supportive coaching.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="h-full rounded-3xl border border-[var(--theme-card-border)] bg-[var(--theme-card-bg)] p-8">
              <h3 className="font-display text-2xl font-semibold text-[var(--theme-text-primary)]">Our Vision</h3>
              <p className="mt-4 text-lg text-[var(--theme-text-secondary)]">
                A world where those who have faced trauma, anxiety, and depression can break free from harmful thought
                patterns and emotional distress — attaining clarity of mind, emotional stability, and enduring peace, and
                a life filled with fulfillment and resilience.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* Core Values */}
      <Container className="mt-12 sm:mt-16">
        <FadeIn>
          <h2 className="font-display text-3xl font-medium tracking-tight text-[var(--theme-text-primary)] sm:text-4xl">
            Our core values
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[var(--theme-text-secondary)]">
            At Soulful Horizon, our values define our commitment to compassionate care and holistic healing.
          </p>
        </FadeIn>
        <FadeInStagger className="mt-10 grid gap-8 md:grid-cols-3">
          {values.map((v) => (
            <FadeIn key={v.title}>
              <div className="h-full rounded-3xl border border-[var(--theme-card-border)] bg-[var(--theme-card-bg)] p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--theme-bg-elevated)] text-[var(--brand-teal)]">
                  <v.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-[var(--brand-teal)]">{v.title}</h3>
                <p className="mt-3 text-base text-[var(--theme-text-secondary)]">{v.body}</p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      <CTASection title="Let’s take the first step together" />
    </div>
  )
}
