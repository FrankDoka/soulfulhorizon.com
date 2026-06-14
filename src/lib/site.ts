/** Central site configuration for Soulful Horizon LCSW, PLLC. */
export const site = {
  name: 'Soulful Horizon',
  legalName: 'Soulful Horizon LCSW, PLLC',
  clinician: 'Emmanuelle Lajeunesse, LCSW',
  url: 'https://soulfulhorizon.com',
  tagline: 'A safe place to heal, grow, and rediscover who you were created to be.',
  // External booking/portal (SimplePractice — HIPAA-compliant, handles all PHI).
  bookingUrl: 'https://soulful-horizon-lcsw.clientsecure.me/',
  portalUrl: 'https://soulful-horizon-lcsw.clientsecure.me/sign-in',
  psychologyToday: 'https://www.psychologytoday.com/us/therapists/emmanuelle-lajeunesse-rosedale-ny/1338702',
  instagram: 'https://www.instagram.com/soulful_horizon_lcsw/',
  // SimplePractice embeddable widget (opens the booking/contact overlay in-page,
  // exactly like the original site). IDs pulled from the original embed code.
  simplePractice: {
    href: 'https://soulful-horizon-lcsw.clientsecure.me',
    scopeId: '0355277d-8687-4e40-9840-d7146ddc8877',
    scopeUri: 'soulful-horizon-lcsw',
    applicationId: '7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b',
    script: 'https://widget-cdn.simplepractice.com/assets/integration-1.0.js',
  },
  contact: {
    phone: '929-900-3880',
    phoneHref: 'tel:+19299003880',
    email: 'elajeunesse@soulfulhorizon.com',
    address: {
      line1: '418 Broadway #6377',
      city: 'Albany',
      state: 'NY',
      zip: '12207',
    },
  },
} as const

export const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/offerings', label: 'Offerings' },
  { href: '/insurance', label: 'Insurance' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const
