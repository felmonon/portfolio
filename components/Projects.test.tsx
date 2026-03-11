import React from 'react'
import { render, screen } from '@testing-library/react'
import Projects from '@/components/Projects'

describe('Projects', () => {
  it('renders the Jungian live project link with the normalized deployment url', () => {
    render(<Projects />)

    const liveLink = screen.getByRole('link', { name: /live project/i })
    expect(liveLink).toHaveAttribute('href', 'https://typejung.com')
  })
})
