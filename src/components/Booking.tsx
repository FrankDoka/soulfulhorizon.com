import { site } from '@/lib/site'

/**
 * New-client booking / contact link.
 *
 * Appointment requests go to the Carepatron booking page, which offers the free
 * consultation, the initial assessment, and the coaching discovery call.
 * `contact` ("Send a message") uses the Carepatron request form once its link
 * is set in site.ts, and email until then. Existing clients keep using the
 * SimplePractice portal (site.portalUrl) during the October 2026 transition.
 */
export function BookingLink({
  contact = false,
  className,
  children,
}: {
  contact?: boolean
  className?: string
  children: React.ReactNode
}) {
  const href = contact
    ? site.carepatron.contactFormUrl || `mailto:${site.contact.email}`
    : site.carepatron.bookingUrl
  const external = href.startsWith('http')

  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
