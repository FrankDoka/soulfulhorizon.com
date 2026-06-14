'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { Logo } from '../Logo'
import { SpLink } from '../SimplePractice'
import { Container } from './Container'
import { navLinks, site } from '@/lib/site'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    // Defer the initial read to the next frame so we don't call setState
    // synchronously inside the effect.
    const raf = requestAnimationFrame(onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled
          ? 'bg-[var(--theme-bg-surface)]/95 shadow-sm backdrop-blur'
          : 'bg-[var(--theme-bg-surface)]'
      }`}
    >
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" aria-label="Soulful Horizon — home" className="shrink-0">
            <Logo className="h-9 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            <Link
              href="/"
              className="text-[15px] font-medium text-[var(--theme-text-secondary)] transition hover:text-[var(--brand-teal)]"
            >
              Home
            </Link>
            {navLinks
              .filter((l) => l.label !== 'Contact')
              .map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[15px] font-medium text-[var(--theme-text-secondary)] transition hover:text-[var(--brand-teal)]"
                >
                  {l.label}
                </Link>
              ))}
            <a
              href={site.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-[var(--theme-text-secondary)] transition hover:text-[var(--brand-teal)]"
            >
              Client Portal
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="rounded-full border border-[var(--brand-gold)] px-5 py-2 text-sm font-semibold text-[var(--brand-teal)] transition hover:bg-[var(--brand-gold)] hover:text-white"
            >
              Contact Us
            </Link>
            <SpLink className="cursor-pointer rounded-full bg-[var(--brand-gold)] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#b07f33]">
              Request Appointment
            </SpLink>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="rounded-full p-2 text-[var(--brand-teal)] transition hover:bg-[var(--theme-bg-hover)] lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[var(--theme-border)] bg-[var(--theme-bg-surface)] lg:hidden">
          <Container className="py-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {[{ href: '/', label: 'Home' }, ...navLinks].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-[var(--theme-text-primary)] transition hover:bg-[var(--theme-bg-hover)]"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={site.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-[var(--theme-text-primary)] transition hover:bg-[var(--theme-bg-hover)]"
              >
                Client Portal
              </a>
              <SpLink
                contact
                className="mt-2 cursor-pointer rounded-full border border-[var(--brand-gold)] px-5 py-3 text-center text-base font-semibold text-[var(--brand-teal)] transition hover:bg-[var(--brand-gold)] hover:text-white"
              >
                Send a Message
              </SpLink>
              <SpLink className="mt-2 cursor-pointer rounded-full bg-[var(--brand-gold)] px-5 py-3 text-center text-base font-semibold text-white transition hover:bg-[#b07f33]">
                Request Appointment
              </SpLink>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}
