import { site } from '@/lib/site'

const sp = site.simplePractice

type SpLinkProps = {
  contact?: boolean
  className?: string
  children: React.ReactNode
}

/**
 * A link that the SimplePractice integration script (loaded in layout.tsx) binds
 * to, opening the booking/contact overlay in-page — exactly like the original
 * site. If JS is unavailable it falls back to opening the practice portal.
 *
 * `contact` switches the widget from "Request Appointment" to "Send Message".
 */
export function SpLink({ contact = false, className, children }: SpLinkProps) {
  return (
    <a
      href={sp.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-spwidget-scope-id={sp.scopeId}
      data-spwidget-scope-uri={sp.scopeUri}
      data-spwidget-application-id={sp.applicationId}
      data-spwidget-scope-global=""
      data-spwidget-autobind=""
      {...(contact
        ? { 'data-spwidget-channel': 'embedded_widget', 'data-spwidget-contact': '' }
        : {})}
    >
      {children}
    </a>
  )
}
