import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import NotFound from '@/app/not-found'

describe('NotFound (404)', () => {
  it('renders "404" text', () => {
    render(<NotFound />)
    expect(screen.getByText('404')).toBeInTheDocument()
  })

  it('renders "Page not found" heading', () => {
    render(<NotFound />)
    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument()
  })

  it('renders the explanatory message', () => {
    render(<NotFound />)
    expect(screen.getByText(/doesn’t exist or has been moved/)).toBeInTheDocument()
  })

  it('renders a link to the home page', () => {
    render(<NotFound />)
    expect(screen.getByRole('link', { name: 'Return Home' })).toBeInTheDocument()
  })

  it('home link points to /', () => {
    render(<NotFound />)
    expect(screen.getByRole('link', { name: 'Return Home' })).toHaveAttribute('href', '/')
  })
})
