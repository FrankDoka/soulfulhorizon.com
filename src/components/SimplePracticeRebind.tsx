'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * The SimplePractice integration script binds <SpLink> buttons on load via
 * window.spWidgetAutoBind(). That function is idempotent (it assigns onclick and
 * guards widget instances by key), so we re-run it after each client-side
 * navigation to bind buttons rendered on newly-visited pages.
 */
export function SimplePracticeRebind() {
  const pathname = usePathname()

  useEffect(() => {
    const w = window as unknown as { spWidgetAutoBind?: () => void }
    if (typeof w.spWidgetAutoBind === 'function') {
      w.spWidgetAutoBind()
    }
  }, [pathname])

  return null
}
