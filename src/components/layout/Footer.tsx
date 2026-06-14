import Link from 'next/link'

import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'
import { Logo } from '@/components/Logo'
import { SpLink } from '@/components/SimplePractice'
import { navLinks, site } from '@/lib/site'

function Navigation() {
  return (
    <nav>
      <div className="font-display text-sm font-semibold tracking-wider text-[var(--theme-text-primary)]">Explore</div>
      <ul role="list" className="mt-3 grid grid-cols-2 gap-x-8 text-sm text-[var(--theme-text-secondary)]">
        <li className="mt-2">
          <Link href="/" className="transition hover:text-[var(--theme-text-primary)]">
            Home
          </Link>
        </li>
        {navLinks.map((link) => (
          <li key={link.href} className="mt-2">
            <Link href={link.href} className="transition hover:text-[var(--theme-text-primary)]">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ContactBlock() {
  return (
    <div>
      <div className="font-display text-sm font-semibold tracking-wider text-[var(--theme-text-primary)]">Contact</div>
      <ul className="mt-3 space-y-2 text-sm text-[var(--theme-text-secondary)]">
        <li>
          <a href={site.contact.phoneHref} className="transition hover:text-[var(--theme-text-primary)]">
            {site.contact.phone}
          </a>
        </li>
        <li>
          <a href={`mailto:${site.contact.email}`} className="transition hover:text-[var(--theme-text-primary)]">
            {site.contact.email}
          </a>
        </li>
        <li className="text-[var(--theme-text-muted)]">
          {site.contact.address.line1}
          <br />
          {site.contact.address.city}, {site.contact.address.state} {site.contact.address.zip}
        </li>
      </ul>
    </div>
  )
}

function AccessBlock() {
  return (
    <div>
      <div className="font-display text-sm font-semibold tracking-wider text-[var(--theme-text-primary)]">
        Appointments
      </div>
      <ul className="mt-3 space-y-2 text-sm text-[var(--theme-text-secondary)]">
        <li>
          <SpLink className="cursor-pointer transition hover:text-[var(--theme-text-primary)]">
            Request an appointment
          </SpLink>
        </li>
        <li>
          <SpLink contact className="cursor-pointer transition hover:text-[var(--theme-text-primary)]">
            Send a message
          </SpLink>
        </li>
        <li>
          <a
            href={site.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--theme-text-primary)]"
          >
            Client portal
          </a>
        </li>
      </ul>
    </div>
  )
}

function ConnectBlock() {
  return (
    <div>
      <div className="font-display text-sm font-semibold tracking-wider text-[var(--theme-text-primary)]">Connect</div>
      <ul className="mt-3 space-y-2 text-sm text-[var(--theme-text-secondary)]">
        <li>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--theme-text-primary)]"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href={site.psychologyToday}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--theme-text-primary)]"
          >
            Psychology Today
          </a>
        </li>
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-12 w-full sm:mt-16 lg:mt-20">
      <FadeIn>
        <div className="flex flex-wrap items-start justify-between gap-x-12 gap-y-8">
          <Navigation />
          <AccessBlock />
          <ConnectBlock />
          <ContactBlock />
        </div>

        <div className="mt-10 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg-surface)] px-5 py-4 text-sm text-[var(--theme-text-secondary)]">
          <strong className="font-semibold text-[var(--theme-text-primary)]">In a crisis?</strong> If you or someone
          you know is in immediate danger, call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline) or dial{' '}
          <strong>911</strong>. This website is for general information and does not provide emergency services.
        </div>

        <div className="mt-8 mb-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-[var(--theme-border)] pt-6">
          <Link href="/" aria-label="Home">
            <Logo className="h-8 w-auto" fillOnHover />
          </Link>
          <div className="text-sm text-[var(--theme-text-secondary)]">
            <p>
              © {new Date().getFullYear()} {site.legalName}
            </p>
            <p className="mt-1 text-[var(--theme-text-muted)]">
              <Link href="/privacy" className="transition hover:text-[var(--theme-text-primary)]">
                Notice of Privacy Practices
              </Link>{' '}
              ·{' '}
              <Link href="/no-surprises-act" className="transition hover:text-[var(--theme-text-primary)]">
                No Surprises Act
              </Link>
            </p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
