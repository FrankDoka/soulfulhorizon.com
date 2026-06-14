import { Footer } from '@/components/layout/Footer'
import { MobileCTA } from '@/components/MobileCTA'
import { Header } from './Header'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-[var(--brand-teal)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-auto">
        {children}
      </main>
      <Footer />
      {/* Spacer so the sticky mobile bar never covers footer content */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
      <MobileCTA />
    </>
  )
}
