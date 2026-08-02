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

/** Clinician profile for the About page — the entity search engines tie
 *  expertise and credentials to. */
export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Emmanuelle Lajeunesse',
    honorificSuffix: 'LCSW',
    jobTitle: 'Licensed Clinical Social Worker',
    url: `${site.url}/about`,
    image: `${site.url}/img/sh/emmanuelle.webp`,
    telephone: site.contact.phone,
    email: site.contact.email,
    knowsLanguage: [...site.languages],
    knowsAbout: ['Anxiety', 'Depression', 'Trauma', 'Faith-based counseling', 'Mental health coaching'],
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Columbia University' },
      { '@type': 'CollegeOrUniversity', name: 'Liberty University' },
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: 'Licensed Clinical Social Worker (LCSW)',
      recognizedBy: { '@type': 'Organization', name: 'New York State and Tennessee licensing boards' },
    },
    worksFor: { '@type': 'MedicalBusiness', name: site.legalName, url: site.url },
  }
}

/** The services offered, for the Offerings page. */
export function servicesSchema(services: { name: string; description: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': services.map((s) => ({
      '@type': 'Service',
      name: s.name,
      description: s.description,
      serviceType: 'Mental health care',
      provider: { '@type': 'MedicalBusiness', name: site.legalName, url: site.url },
      areaServed: [
        { '@type': 'State', name: 'New York' },
        { '@type': 'State', name: 'Tennessee' },
      ],
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: site.bookingUrl,
        availableLanguage: [...site.languages],
      },
    })),
  }
}

/** The blog itself, so the post list is understood as a collection. */
export function blogSchema(posts: { title: string; description: string; href: string; date: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Soulful Insights',
    description: 'Reflections on faith, mental health, healing, and growth.',
    url: `${site.url}/blog`,
    publisher: { '@type': 'Organization', name: site.legalName, url: site.url },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      url: `${site.url}${p.href}`,
      author: { '@type': 'Person', name: 'Emmanuelle Lajeunesse' },
    })),
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
