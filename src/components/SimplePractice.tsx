'use client'

import { site } from '@/lib/site'

const sp = site.simplePractice

// Load the (heavy) SimplePractice integration script only once, on first
// interaction — NOT on page load. Loading it eagerly pulls in Stripe, Segment,
// a consent SDK, and a hidden booking iframe (~7 MB), which tanks performance.
// Deferring to click keeps the initial page light; the booking app loads only
// when a visitor actually wants it.
let widgetPromise: Promise<void> | null = null
function ensureWidget(): Promise<void> {
  if (widgetPromise) return widgetPromise
  widgetPromise = new Promise<void>((resolve) => {
    const s = document.createElement('script')
    s.src = sp.script
    s.async = true
    s.onload = () => resolve()
    s.onerror = () => resolve()
    document.body.appendChild(s)
  })
  return widgetPromise
}

type SpLinkProps = {
  contact?: boolean
  className?: string
  children: React.ReactNode
}

/**
 * A booking/contact link. On click it lazy-loads the SimplePractice widget and
 * opens the overlay in-page (same UX as the original site). Falls back to the
 * portal URL if the script can't load or JS is unavailable.
 *
 * `contact` switches the widget from "Request Appointment" to "Send Message".
 */
export function SpLink({ contact = false, className, children }: SpLinkProps) {
  async function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = e.currentTarget
    // If the widget already bound this element, let its own handler run.
    if (typeof el.onclick === 'function') return
    e.preventDefault()
    await ensureWidget()
    const w = window as unknown as { spWidgetAutoBind?: () => void }
    if (typeof w.spWidgetAutoBind === 'function') {
      w.spWidgetAutoBind()
      // Binding assigns el.onclick; invoke it to reveal the overlay now.
      if (typeof el.onclick === 'function') {
        ;(el.onclick as (ev: unknown) => void)(e)
        return
      }
    }
    // Fallback: open the portal directly.
    window.open(sp.href, '_blank', 'noopener,noreferrer')
  }

  return (
    <a
      href={sp.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
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
