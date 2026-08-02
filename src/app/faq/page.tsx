import { type Metadata } from 'next'

import { CTASection } from '@/components/CTASection'
import { FAQ } from '@/components/FAQ'

const description =
  'Answers about online therapy with Soulful Horizon — sessions, fees, insurance, faith integration, and how to book a free consultation.'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description,
  openGraph: {
    title: 'FAQ — Soulful Horizon',
    description,
    url: 'https://soulfulhorizon.com/faq',
  },
}

export default function FaqPage() {
  return (
    <div data-pagefind-body>
      <FAQ as="h1" />
      <CTASection title="Still have a question?">
        Ask it on a free 15-minute consultation — no pressure, no commitment.
      </CTASection>
    </div>
  )
}
