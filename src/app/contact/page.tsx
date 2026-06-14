import { type Metadata } from 'next'

import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'
import { PageIntro } from '@/components/PageIntro'
import { SpLink } from '@/components/SimplePractice'
import { JsonLd, practiceSchema } from '@/components/StructuredData'
import { site } from '@/lib/site'

const description =
  'Get in touch with Soulful Horizon LCSW, PLLC. Request an appointment through our secure client portal, or reach us by phone or email.'

export const metadata: Metadata = {
  title: 'Contact',
  description,
  openGraph: {
    title: 'Contact — Soulful Horizon',
    description,
    url: 'https://soulfulhorizon.com/contact',
  },
}

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.contact.address.line1}, ${site.contact.address.city}, ${site.contact.address.state} ${site.contact.address.zip}`,
)}`

export default function Contact() {
  return (
    <div data-pagefind-body>
      <JsonLd data={practiceSchema()} />
      <PageIntro eyebrow="Contact" title="We would love to hear from you">
        <p>{description}</p>
      </PageIntro>

      <Container className="mt-10 sm:mt-14">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Primary: request appointment */}
          <FadeIn>
            <div className="flex h-full flex-col rounded-3xl bg-[var(--brand-teal-dark)] p-8 text-[#faf6ee]">
              <h2 className="font-display text-2xl font-semibold">Request an appointment</h2>
              <p className="mt-3 text-[#b7c6c9]">
                New and existing clients can request appointments and securely message the practice through our
                HIPAA-compliant booking system — it opens right here and only takes a few minutes.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <SpLink className="inline-flex cursor-pointer justify-center rounded-full bg-[var(--brand-gold)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#b07f33]">
                  Request Appointment
                </SpLink>
                <SpLink
                  contact
                  className="inline-flex cursor-pointer justify-center rounded-full border border-[#3a7d8c] px-6 py-3 text-base font-semibold text-[#faf6ee] transition hover:bg-[#1b4d57]"
                >
                  Send a Message
                </SpLink>
              </div>
              <p className="mt-4 text-sm text-[#9fb4b7]">
                Already a client?{' '}
                <a href={site.portalUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#e0b878] hover:underline">
                  Sign in to the client portal
                </a>
              </p>
            </div>
          </FadeIn>

          {/* Contact details */}
          <FadeIn>
            <div className="h-full rounded-3xl border border-[var(--theme-card-border)] bg-[var(--theme-card-bg)] p-8">
              <h2 className="font-display text-2xl font-semibold text-[var(--theme-text-primary)]">Get in touch</h2>
              <dl className="mt-6 space-y-6">
                <div>
                  <dt className="font-display text-sm font-semibold tracking-wider text-[var(--theme-text-muted)] uppercase">Phone</dt>
                  <dd className="mt-1">
                    <a href={site.contact.phoneHref} className="text-lg text-[var(--theme-text-secondary)] transition hover:text-[var(--theme-accent)]">
                      {site.contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-sm font-semibold tracking-wider text-[var(--theme-text-muted)] uppercase">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${site.contact.email}`} className="text-lg text-[var(--theme-text-secondary)] transition hover:text-[var(--theme-accent)] break-words">
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-sm font-semibold tracking-wider text-[var(--theme-text-muted)] uppercase">Address</dt>
                  <dd className="mt-1">
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-lg text-[var(--theme-text-secondary)] transition hover:text-[var(--theme-accent)]">
                      {site.contact.address.line1}
                      <br />
                      {site.contact.address.city}, {site.contact.address.state} {site.contact.address.zip}
                    </a>
                  </dd>
                </div>
              </dl>
              <p className="mt-8 rounded-2xl bg-[var(--theme-bg-elevated)] px-5 py-4 text-sm text-[var(--theme-text-secondary)]">
                Please do not include sensitive personal or health information in email. For anything confidential, use the
                secure client portal above.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  )
}
