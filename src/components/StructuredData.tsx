import { site } from '@/lib/site'

// JSON-LD structured data for SEO — helps search engines understand page content
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function practiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'ProfessionalService'],
    name: site.legalName,
    url: site.url,
    description:
      'Faith-based online therapy for clients in New York and Tennessee, plus mental health coaching available worldwide, for adolescents, young adults, and adults. Specializing in anxiety, depression, and trauma.',
    telephone: site.contact.phone,
    email: site.contact.email,
    availableLanguage: [...site.languages],
    availableService: {
      '@type': 'MedicalProcedure',
      name: 'Telehealth psychotherapy',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.contact.address.line1,
      addressLocality: site.contact.address.city,
      addressRegion: site.contact.address.state,
      postalCode: site.contact.address.zip,
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'State', name: 'New York' },
      { '@type': 'State', name: 'Tennessee' },
    ],
    founder: {
      '@type': 'Person',
      name: 'Emmanuelle Lajeunesse',
      jobTitle: 'Licensed Clinical Social Worker (LCSW)',
    },
    medicalSpecialty: 'Psychiatric',
    knowsAbout: ['Anxiety', 'Depression', 'Trauma', 'Faith-based counseling', 'Mental health coaching'],
    sameAs: [site.instagram, site.googleBusiness],
  }
}

export function faqSchema(faqs: { q: string; text: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.text },
    })),
  }
}

export function blogPostSchema(post: {
  title: string
  description: string
  date: string
  href: string
  author: { name: string }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    image: `${site.url}${post.href}/opengraph-image`,
    url: `${site.url}${post.href}`,
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: site.url,
    },
    publisher: {
      '@type': 'Organization',
      name: site.legalName,
    },
  }
}
