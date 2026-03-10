import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home page', () => {
  it('renders the main narrative sections', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', {
        name: /A product engineer/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /A portfolio that moves like a product story/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Proof that holds up when you inspect it/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Let's build something with a real standard/i,
      })
    ).toBeInTheDocument()
  })
})
