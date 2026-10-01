import { type Metadata } from 'next'

import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'
import { PageIntro } from '@/components/PageIntro'
import { ogBase, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Notice of Privacy Practices',
  openGraph: { ...ogBase, title: 'Notice of Privacy Practices — Soulful Horizon', url: 'https://soulfulhorizon.com/privacy' },
  description:
    'How Soulful Horizon LCSW, PLLC may use and disclose your protected health information, and your rights regarding that information under HIPAA.',
  robots: { index: true, follow: true },
}

export default function Privacy() {
  return (
    <>
      <PageIntro eyebrow="Your Privacy" title="Notice of Privacy Practices">
        <p>
          This notice describes how medical information about you may be used and disclosed, and how you can get access to
          this information. Please review it carefully.
        </p>
        <p className="mt-4 text-base">Effective date: October 1, 2026</p>
      </PageIntro>

      <Container className="mt-10 sm:mt-14">
        <FadeIn>
          <div className="mx-auto max-w-3xl space-y-8 text-lg text-[var(--theme-text-secondary)]">
            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--theme-text-primary)]">Our commitment to your privacy</h2>
              <p className="mt-3">
                {site.legalName} is required by law to maintain the privacy of your protected health information (PHI), to
                provide you with this notice of our legal duties and privacy practices, and to follow the terms of the
                notice currently in effect.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--theme-text-primary)]">How we may use and disclose your information</h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-[var(--theme-text-primary)]">Treatment</strong> — to provide, coordinate, or
                  manage your care and related services.
                </li>
                <li>
                  <strong className="text-[var(--theme-text-primary)]">Payment</strong> — to bill and collect payment for
                  the services you receive, including verifying insurance coverage.
                </li>
                <li>
                  <strong className="text-[var(--theme-text-primary)]">Health care operations</strong> — to support
                  quality, administrative, and business activities necessary to run the practice.
                </li>
                <li>
                  <strong className="text-[var(--theme-text-primary)]">As required by law</strong> — including mandatory
                  reporting of abuse, threats of harm to self or others, and valid court orders.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--theme-text-primary)]">Uses that require your written permission</h2>
              <p className="mt-3">
                Other uses and disclosures not described in this notice, including most uses of psychotherapy notes,
                uses for marketing, and any sale of your information, will be made only with your written
                authorization. You may revoke an authorization in writing at any time, except to the extent we have
                already acted on it.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--theme-text-primary)]">Your rights</h2>
              <p className="mt-3">You have the right to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Request access to and a copy of your records.</li>
                <li>Request corrections to your health information.</li>
                <li>Request restrictions on certain uses and disclosures.</li>
                <li>
                  Restrict disclosures to your health plan about services you have paid for in full, out of pocket.
                </li>
                <li>Request confidential communications by alternative means or at alternative locations.</li>
                <li>Receive an accounting of certain disclosures.</li>
                <li>Obtain a paper copy of this notice upon request.</li>
                <li>Be notified if a breach of your unsecured health information occurs.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--theme-text-primary)]">Complaints</h2>
              <p className="mt-3">
                If you believe your privacy rights have been violated, you may file a complaint with us using the contact
                information below, or with the U.S. Department of Health and Human Services Office for Civil Rights by
                writing to 200 Independence Avenue, S.W., Washington, D.C. 20201, calling 1-877-696-6775, or visiting{' '}
                <a href="https://www.hhs.gov/ocr/complaints/" className="font-semibold text-[var(--theme-accent)] hover:underline">
                  hhs.gov/ocr/complaints
                </a>
                . We will not retaliate against you for filing a complaint.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--theme-text-primary)]">Changes to this notice</h2>
              <p className="mt-3">
                We may change the terms of this notice, and the changes will apply to all information we have about you.
                The current notice is always available on this page and on request.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--theme-text-primary)]">Contact us</h2>
              <p className="mt-3">
                To exercise any of these rights or to ask questions about this notice, contact our Privacy Officer,
                Emmanuelle Lajeunesse, LCSW, at{' '}
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
          </div>
        </FadeIn>
      </Container>
    </>
  )
}
