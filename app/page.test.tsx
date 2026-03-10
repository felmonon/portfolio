import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home page', () => {
  it('renders the main narrative sections', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', {
        name: /A portfolio for the teams you're building/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Closer to a product story, further from a resume grid/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Proof that still reads cleanly/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /For the teams you're headed toward/i,
      })
    ).toBeInTheDocument()
  })
})
