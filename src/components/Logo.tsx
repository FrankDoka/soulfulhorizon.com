import clsx from 'clsx'

/**
 * A simple, theme-aware "rising sun over water" mark that echoes the Soulful
 * Horizon logo (sunrise, horizon, calm water). Gold sun + teal waves.
 * `filled`/`fillOnHover` are kept for API compatibility with the header/footer;
 * they gently warm the sun on hover.
 */
export function Logomark({
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  filled?: boolean
}) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      {/* sun */}
      <circle
        cx="16"
        cy="17"
        r="6.5"
        className={clsx(
          'transition-all duration-300',
          filled
            ? 'fill-[var(--brand-gold)]'
            : 'fill-[var(--brand-gold-light)] group-hover/logo:fill-[var(--brand-gold)]',
        )}
      />
      {/* rays */}
      <g
        className="stroke-[var(--brand-gold)]"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M16 3.5v3" />
        <path d="M6.5 7.5l2 2" />
        <path d="M25.5 7.5l-2 2" />
      </g>
      {/* horizon water */}
      <g
        className="stroke-[var(--brand-teal)]"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M2.5 20.5c2.5 0 2.5 1.6 5 1.6s2.5-1.6 5-1.6 2.5 1.6 5 1.6 2.5-1.6 5-1.6 2.5 1.6 5 1.6" />
        <path d="M2.5 25c2.5 0 2.5 1.6 5 1.6s2.5-1.6 5-1.6 2.5 1.6 5 1.6 2.5-1.6 5-1.6 2.5 1.6 5 1.6" />
      </g>
    </svg>
  )
}

export function LogoText({ className }: { className?: string }) {
  return (
    <text
      x="40"
      y="26"
      fontFamily="var(--font-mona-sans), ui-sans-serif, system-ui, sans-serif"
      fontSize="19"
      fontWeight="600"
      letterSpacing="-0.3"
      className={className}
    >
      Soulful Horizon
    </text>
  )
}

export function Logo({
  className,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <svg
      viewBox="0 0 220 32"
      aria-label="Soulful Horizon"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark preserveAspectRatio="xMinYMid meet" filled={filled} />
      <LogoText className="fill-[var(--theme-text-primary)]" />
    </svg>
  )
}
