/** Central site configuration for Soulful Horizon LCSW, PLLC. */
export const site = {
  name: 'Soulful Horizon',
  legalName: 'Soulful Horizon LCSW, PLLC',
  clinician: 'Emmanuelle Lajeunesse, LCSW',
  url: 'https://soulfulhorizon.com',
  tagline: 'A safe place to heal, grow, and rediscover who you were created to be.',
  // Existing-client portal (SimplePractice) — kept during the October 2026
  // move to Carepatron; new clients book through `carepatron` below.
  portalUrl: 'https://soulful-horizon-lcsw.clientsecure.me/sign-in',
  instagram: 'https://www.instagram.com/soulful_horizon_lcsw/',
  googleBusiness: 'https://maps.app.goo.gl/1ky2dphLennhEKgLA',
  // Therapy is license-bound (NY + TN); coaching is not jurisdiction-restricted.
  therapyArea: 'New York & Tennessee',
  coachingArea: 'worldwide',
  languages: ['English', 'Spanish', 'Haitian Creole'],
  // Carepatron: new-client booking (free consultation, initial assessment,
  // coaching discovery call). contactFormUrl: paste a Carepatron public form
  // link (Templates → form → Share) to replace the email fallback for
  // "Send a message".
  carepatron: {
    bookingUrl:
      'https://book.carepatron.com/Soulful-Horizon-LCSW--PLLC/Emmanuelle?p=6jhe7J7wRqmJ9BfonTzrUA&s=ET6xBV.c&e=b',
    contactFormUrl: '' as string,
  },
  contact: {
    phone: '929-900-3880',
    phoneHref: 'tel:+19299003880',
    email: 'info@soulfulhorizon.com',
    address: {
      line1: '418 Broadway #6377',
      city: 'Albany',
      state: 'NY',
      zip: '12207',
    },
  },
} as const

// From Pressure to Peace signup (GoHighLevel). UTM-tagged so GoHighLevel's
// attribution shows which signups came from the website, and from which spot.
export function guideUrl(placement: string) {
  return `https://online.soulfulhorizon.com/burnout-guide?utm_source=soulfulhorizon.com&utm_medium=website&utm_campaign=from-pressure-to-peace&utm_content=${placement}`
}

// A page-level `openGraph` replaces the layout's entirely (Next doesn't merge
// it), so every page spreads this to keep the site name, type and share image.
export const ogBase = {
  siteName: site.name,
  type: 'website' as const,
  images: ['/opengraph-image'],
}

export const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/offerings', label: 'Offerings' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/insurance', label: 'Insurance' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const
