import { Phone } from 'lucide-react'

import { SpLink } from '@/components/SimplePractice'
import { site } from '@/lib/site'

/** A sticky bottom action bar on small screens, for one-tap booking/calling. */
export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-[var(--theme-border)] bg-[var(--theme-bg-surface)]/95 px-3 py-2.5 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] backdrop-blur lg:hidden">
      <a
        href={site.contact.phoneHref}
        aria-label={`Call ${site.contact.phone}`}
        className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-[var(--brand-gold)] text-[var(--brand-teal)] transition hover:bg-[var(--brand-gold)] hover:text-white"
      >
        <Phone className="h-5 w-5" />
      </a>
      <SpLink className="flex h-11 flex-1 cursor-pointer items-center justify-center rounded-full bg-[var(--brand-gold)] text-base font-semibold text-white transition hover:bg-[#b07f33]">
        Request an Appointment
      </SpLink>
    </div>
  )
}
