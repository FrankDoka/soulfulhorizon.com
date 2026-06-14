import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Logo } from '@/components/Logo'

describe('Logo', () => {
  it('renders the logo image', () => {
    const { container } = render(<Logo />)
    expect(container.querySelector('img')).toBeInTheDocument()
  })

  it('renders the wordmark', () => {
    render(<Logo />)
    expect(screen.getByText('Soulful Horizon')).toBeInTheDocument()
  })

  it('forwards custom className', () => {
    const { container } = render(<Logo className="h-9 w-auto" />)
    expect(container.firstChild).toHaveClass('h-9')
  })

  it('accepts fillOnHover without erroring', () => {
    const { container } = render(<Logo fillOnHover />)
    expect(container.querySelector('img')).toBeInTheDocument()
  })
})
