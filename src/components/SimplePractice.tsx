'use client'

import { site } from '@/lib/site'

const sp = site.simplePractice

// Load the (heavy) SimplePractice integration script only once, on first
// interaction — NOT on page load. Loading it eagerly pulls in Stripe, Segment,
// a consent SDK, and a hidden booking iframe (~7 MB), which tanks performance.
let widgetPromise: Promise<void> | null = null
function ensureWidget(): Promise<void> {
  if (widgetPromise) return widgetPromise
  widgetPromise = new Promise<void>((resolve, reject) => {
    const s = document.createElement('script')
    s.src = sp.script
    s.async = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error('SimplePractice widget failed to load'))
    document.body.appendChild(s)
  })
  return widgetPromise
}

type SpWindow = {
  spWidgetAutoBind?: () => void
  SPWidgetInstances?: Record<string, { reveal?: () => void } | undefined>
}

type SpLinkProps = {
  contact?: boolean
  className?: string
  children: React.ReactNode
}

/**
 * A booking/contact link. On click it lazy-loads the SimplePractice widget and
 * reveals the overlay in-page (same UX as the original site). Falls back to the
 * portal URL if the script can't load.
 *
 * `contact` switches the widget from "Request Appointment" to "Send Message".
 */
export function SpLink({ contact = false, className, children }: SpLinkProps) {
  async function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    try {
      await ensureWidget()
      const w = window as unknown as SpWindow
      // Binds the data-spwidget links and creates the overlay instances
      // (idempotent — safe to call on every click).
      w.spWidgetAutoBind?.()
      const key = `${sp.scopeId}-${contact ? 'contact' : 'appointment'}`
      const instance = w.SPWidgetInstances?.[key]
      if (instance?.reveal) {
        instance.reveal()
        return
      }
    } catch {
      // fall through to the portal
    }
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
