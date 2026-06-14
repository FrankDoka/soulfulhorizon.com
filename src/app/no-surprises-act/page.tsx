import { type Metadata } from 'next'

import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'
import { PageIntro } from '@/components/PageIntro'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'No Surprises Act',
  description:
    'Your right to a Good Faith Estimate under the No Surprises Act when you are uninsured or paying for services yourself.',
  robots: { index: true, follow: true },
}

export default function NoSurprisesAct() {
  return (
    <>
      <PageIntro eyebrow="Your Rights" title="No Surprises Act & Good Faith Estimate">
        <p>
          You have the right to receive a “Good Faith Estimate” explaining how much your medical care will cost.
        </p>
      </PageIntro>

      <Container className="mt-10 sm:mt-14">
        <FadeIn>
          <div className="mx-auto max-w-3xl space-y-8 text-lg text-[var(--theme-text-secondary)]">
            <section>
              <p>
                Under the law, health care providers need to give patients who don’t have insurance or who are not using
                insurance an estimate of the bill for medical items and services.
              </p>
            </section>

            <section>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>
                  You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency
                  items or services.
                </li>
                <li>
                  Make sure your provider gives you a Good Faith Estimate in writing at least 1 business day before your
                  service. You can also ask for one before you schedule an item or service.
                </li>
                <li>
                  If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill.
                </li>
                <li>Make sure to save a copy or picture of your Good Faith Estimate.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--theme-text-primary)]">Requesting an estimate</h2>
              <p className="mt-3">
                To request a Good Faith Estimate before scheduling, contact {site.legalName} at{' '}
                <a href={site.contact.phoneHref} className="font-semibold text-[var(--theme-accent)] hover:underline">
                  {site.contact.phone}
                </a>{' '}
                or{' '}
                <a href={`mailto:${site.contact.email}`} className="font-semibold text-[var(--theme-accent)] hover:underline">
                  {site.contact.email}
                </a>
                .
              </p>
            </section>

            <section>
              <p className="rounded-2xl bg-[var(--theme-bg-elevated)] px-5 py-4 text-base">
                For questions or more information about your right to a Good Faith Estimate, visit{' '}
                <a
                  href="https://www.cms.gov/nosurprises"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--theme-accent)] hover:underline"
                >
                  www.cms.gov/nosurprises
                </a>{' '}
                or call 1-800-985-3059.
              </p>
            </section>
          </div>
        </FadeIn>
      </Container>
    </>
  )
}
