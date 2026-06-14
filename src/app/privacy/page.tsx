import { type Metadata } from 'next'

import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'
import { PageIntro } from '@/components/PageIntro'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Notice of Privacy Practices',
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
              <h2 className="font-display text-2xl font-semibold text-[var(--theme-text-primary)]">Your rights</h2>
              <p className="mt-3">You have the right to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Request access to and a copy of your records.</li>
                <li>Request corrections to your health information.</li>
                <li>Request restrictions on certain uses and disclosures.</li>
                <li>Request confidential communications by alternative means or at alternative locations.</li>
                <li>Receive an accounting of certain disclosures.</li>
                <li>Obtain a paper copy of this notice upon request.</li>
                <li>File a complaint if you believe your privacy rights have been violated.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--theme-text-primary)]">Contact us</h2>
              <p className="mt-3">
                To exercise any of these rights or to ask questions about this notice, contact us at{' '}
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
