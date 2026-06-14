import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Logo, Logomark, LogoText } from '@/components/Logo'

describe('Logomark', () => {
  it('renders an svg', () => {
    const { container } = render(<Logomark />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders the sun circle', () => {
    const { container } = render(<Logomark />)
    expect(container.querySelector('circle')).toBeInTheDocument()
  })

  it('warms the sun to the solid gold when filled=true', () => {
    const { container } = render(<Logomark filled />)
    const circle = container.querySelector('circle')
    const cls = circle?.getAttribute('class') ?? ''
    expect(cls).toContain('fill-[var(--brand-gold)]')
  })

  it('uses the lighter gold (hover-to-warm) when not filled', () => {
    const { container } = render(<Logomark />)
    const circle = container.querySelector('circle')
    const cls = circle?.getAttribute('class') ?? ''
    expect(cls).toContain('fill-[var(--brand-gold-light)]')
  })
})

describe('LogoText', () => {
  it('renders a text element with the wordmark', () => {
    const { container } = render(
      <svg>
        <LogoText />
      </svg>,
    )
    const textEl = container.querySelector('text')
    expect(textEl).toBeInTheDocument()
    expect(textEl?.textContent).toBe('Soulful Horizon')
  })

  it('applies className to text element', () => {
    const { container } = render(
      <svg>
        <LogoText className="fill-red-500" />
      </svg>,
    )
    const textEl = container.querySelector('text')
    expect(textEl?.getAttribute('class')).toContain('fill-red-500')
  })
})

describe('Logo', () => {
  it('renders an svg', () => {
    const { container } = render(<Logo />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('is labelled for assistive tech', () => {
    const { container } = render(<Logo />)
    expect(container.querySelector('svg')).toHaveAttribute('aria-label', 'Soulful Horizon')
  })

  it('adds group/logo class when fillOnHover=true', () => {
    const { container } = render(<Logo fillOnHover />)
    expect(container.querySelector('svg')).toHaveClass('group/logo')
  })

  it('does not add group/logo class by default', () => {
    const { container } = render(<Logo />)
    expect(container.querySelector('svg')).not.toHaveClass('group/logo')
  })

  it('forwards custom className', () => {
    const { container } = render(<Logo className="h-8" />)
    expect(container.querySelector('svg')).toHaveClass('h-8')
  })
})
