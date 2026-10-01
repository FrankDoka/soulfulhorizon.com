import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'
import { PageIntro } from '@/components/PageIntro'
import { BookingLink } from '@/components/Booking'
import { ogBase, site } from '@/lib/site'
import { specialties } from '@/lib/specialties'

// One static page per entry in src/lib/specialties.ts (required for `output: export`).
export const dynamicParams = false

export function generateStaticParams() {
  return specialties.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const s = specialties.find((x) => x.slug === slug)
  if (!s) return {}
  return {
    title: s.title,
    description: s.description,
    openGraph: {
      ...ogBase,
      title: `${s.title} — Soulful Horizon`,
      description: s.description,
      url: `${site.url}/therapy/${s.slug}`,
    },
  }
}

function List({ title, items, tone }: { title: string; items: string[]; tone: 'card' | 'elevated' }) {
  return (
    <div
      className={
        tone === 'card'
          ? 'h-full rounded-3xl border border-[var(--theme-card-border)] bg-[var(--theme-card-bg)] p-8'
          : 'h-full rounded-3xl bg-[var(--theme-bg-elevated)] p-8 ring-1 ring-[var(--theme-card-border)]'
      }
    >
      <h2 className="font-display text-2xl font-semibold text-[var(--brand-teal)]">{title}</h2>
      <ul className="mt-5 space-y-3 text-base text-[var(--theme-text-secondary)]">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <svg className="mt-2 h-2 w-2 flex-none fill-[var(--brand-gold)]" viewBox="0 0 8 8" aria-hidden="true">
              <circle cx="4" cy="4" r="4" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default async function SpecialtyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = specialties.find((x) => x.slug === slug)
  if (!s) notFound()
  const others = specialties.filter((x) => x.slug !== s.slug)

  return (
    <div data-pagefind-body>
      <PageIntro eyebrow="Psychotherapy" title={s.title}>
        <p>{s.intro}</p>
        <p className="mt-4 text-base">
          Online therapy for adolescents and adults in {site.therapyArea} · {site.languages.join(', ')}
        </p>
      </PageIntro>

      <Container className="mt-12 sm:mt-16">
        <div className="grid gap-8 md:grid-cols-2">
          <FadeIn>
            <List title={s.signsTitle} items={s.signs} tone="card" />
          </FadeIn>
          <FadeIn>
            <List title={s.focusTitle} items={s.focus} tone="elevated" />
          </FadeIn>
        </div>
      </Container>

      <Container className="mt-12 sm:mt-16">
        <FadeIn className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--brand-teal)]">My approach</h2>
          <div className="mt-5 space-y-4 text-lg text-[var(--theme-text-secondary)]">
            {s.approach.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </FadeIn>
      </Container>

      <Container className="my-16 sm:my-24">
        <FadeIn className="mx-auto max-w-3xl rounded-3xl bg-[var(--theme-bg-elevated)] p-8 text-center ring-1 ring-[var(--theme-card-border)] sm:p-10">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--brand-teal)]">
            Ready to talk?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--theme-text-secondary)]">
            Request an appointment or a free 15-minute consultation. Therapy is available via telehealth to clients
            located in {site.therapyArea}.
          </p>
          <BookingLink className="btn-gold mt-6 inline-flex cursor-pointer rounded-full px-7 py-3 text-base font-semibold transition">
            Request a Therapy Appointment
          </BookingLink>
          <p className="mt-8 text-sm text-[var(--theme-text-secondary)]">
            Also see:{' '}
            {others.map((o, i) => (
              <span key={o.slug}>
                {i > 0 && ' · '}
                <Link href={`/therapy/${o.slug}`} className="font-semibold text-[var(--brand-gold-ink)] hover:underline">
                  {o.name}
                </Link>
              </span>
            ))}
            {' · '}
            <Link href="/offerings" className="font-semibold text-[var(--brand-gold-ink)] hover:underline">
              All services
            </Link>
          </p>
        </FadeIn>
      </Container>
    </div>
  )
}
