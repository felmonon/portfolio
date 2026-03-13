import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home page', () => {
  it('renders the main engineering portfolio sections', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', {
        name: /I build products that are useful, fast, and real/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Building systems that solve real problems/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /^Case studies$/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Engineering decisions, not just polished screens/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Experience & milestones/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Body of work/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Looking for an engineer who can build, learn fast, and own outcomes/i,
      })
    ).toBeInTheDocument()
  })
})
