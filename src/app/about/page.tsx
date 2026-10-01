import { type Metadata } from 'next'
import Image from 'next/image'
import { Heart, ShieldCheck, Leaf } from 'lucide-react'

import PortraitImg from '@public/img/sh/emmanuelle.webp'

import { CTASection } from '@/components/CTASection'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'
import { PageIntro } from '@/components/PageIntro'
import { BookingLink } from '@/components/Booking'
import { JsonLd, personSchema } from '@/components/StructuredData'
import { VerificationSeal } from '@/components/VerificationSeal'
import { ogBase, site } from '@/lib/site'

const description =
  'Meet Emmanuelle Lajeunesse, LCSW, and learn about the mission, vision, and core values behind Soulful Horizon LCSW, PLLC.'

export const metadata: Metadata = {
  title: 'About',
  description,
  openGraph: {
    ...ogBase,
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

// ESV text (matches the blog). Crossway requires the credit line rendered below.
const scriptures = [
  {
    ref: 'Philippians 4:6–8 (ESV)',
    text: 'Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus. Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable, if there is any excellence, if there is anything worthy of praise, think about these things.',
  },
  {
    ref: '2 Corinthians 10:4–5 (ESV)',
    text: 'For the weapons of our warfare are not of the flesh but have divine power to destroy strongholds. We destroy arguments and every lofty opinion raised against the knowledge of God, and take every thought captive to obey Christ.',
  },
  {
    ref: 'John 14:27 (ESV)',
    text: 'Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.',
  },
]

export default function About() {
  return (
    <div data-pagefind-body>
      <JsonLd data={personSchema()} />
      <PageIntro eyebrow="About" title="The heartfelt story of Soulful Horizon">
        <p>
          Soulful Horizon LCSW, PLLC is a compassionate counseling practice dedicated to holistic healing that nurtures
          the soul — offering individual counseling, group sessions, and faith-based coaching for Christian women, all infused with
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
            <div className="mt-4 flex justify-center">
              <VerificationSeal />
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
                My person-centered approach is grounded in evidence-based practices, and Christian faith integration is
                available for clients who want it. I believe everyone has the capacity to become their best self,
                regardless of life circumstances. I’m here to guide you on your path to wellness.
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
              {[
                { label: 'Credential', value: ['LCSW'] },
                { label: 'Licensed in', value: ['New York & Tennessee'] },
                {
                  label: 'Education',
                  value: ['Columbia University, MSW', 'Liberty University, MA Pastoral Counseling'],
                },
                { label: 'Experience', value: ['10 years'] },
                { label: 'Languages', value: ['English, Spanish & Haitian Creole'] },
              ].map((fact) => (
                <div key={fact.label}>
                  <dt className="font-display text-xs font-semibold tracking-[0.15em] text-[var(--theme-text-muted)] uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 space-y-1 text-base font-semibold text-[var(--brand-teal)]">
                    {fact.value.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 inline-flex flex-wrap rounded-full bg-[var(--theme-bg-elevated)] px-4 py-2 text-sm font-medium text-[var(--brand-teal)]">
              🌿 Online therapy in {site.therapyArea} · Coaching available worldwide
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <BookingLink className="btn-gold inline-flex cursor-pointer rounded-full px-7 py-3 text-base font-semibold transition">
                Request an Appointment
              </BookingLink>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* My Approach */}
      <Container className="mt-12 sm:mt-16">
        <FadeIn className="mx-auto max-w-3xl rounded-3xl border border-[var(--theme-card-border)] bg-[var(--theme-card-bg)] p-8 sm:p-10">
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-[var(--brand-gold-ink)] uppercase">
            My Approach
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--brand-teal)] sm:text-4xl">
            Christ-centered, evidence-based care
          </h2>
          <div className="mt-5 space-y-4 text-lg text-[var(--theme-text-secondary)]">
            <p>
              My work blends evidence-based therapy — primarily cognitive and behavioral approaches — with
              Christ-centered care. Together we’ll gently examine the thoughts and patterns keeping you stuck, build
              practical coping skills, and move toward real, lasting change.
            </p>
            <p>
              Faith is integrated as much, or as little, as you’d like. When you welcome it, we can weave in prayer,
              Scripture, and reflection; either way, care is always client-centered and paced around you, with your
              beliefs and values guiding the work.
            </p>
          </div>
        </FadeIn>
      </Container>

      {/* Mission & Vision */}
      <Container className="mt-12 sm:mt-16">
        <div className="grid gap-8 md:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-3xl border border-[var(--theme-card-border)] bg-[var(--theme-card-bg)] p-8">
              <h3 className="font-display text-2xl font-semibold text-[var(--theme-text-primary)]">Our Mission</h3>
              <p className="mt-4 text-lg text-[var(--theme-text-secondary)]">
                To support individuals who have experienced trauma and struggle with anxiety and depression — guiding
                them through therapeutic interventions and faith-based coaching.
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

      {/* Scripture foundation */}
      <section className="mt-16 bg-[var(--brand-teal-dark)] sm:mt-24">
        <Container className="py-14 sm:py-20">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-[var(--brand-gold-light)] uppercase">
              Our Foundation
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#faf6ee] sm:text-4xl">
              The Word we’re built on
            </h2>
          </FadeIn>
          <FadeInStagger className="mx-auto mt-10 max-w-3xl space-y-8">
            {scriptures.map((s) => (
              <FadeIn key={s.ref}>
                <figure className="rounded-3xl bg-white/5 px-7 py-6 ring-1 ring-white/10">
                  <blockquote className="font-display text-lg leading-relaxed text-[#e7eef0] italic sm:text-xl">
                    “{s.text}”
                  </blockquote>
                  <figcaption className="mt-4 font-display text-sm font-semibold tracking-wide text-[var(--brand-gold-light)]">
                    — {s.ref}
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </FadeInStagger>
          <p className="mt-8 text-center text-xs text-[#9fb4b7]">
            Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by
            Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved.
          </p>
        </Container>
      </section>

      <CTASection title="Let’s take the first step together" />
    </div>
  )
}
