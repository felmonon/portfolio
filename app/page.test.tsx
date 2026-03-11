import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home page', () => {
  it('renders the main narrative sections', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', {
        name: /Felmon Fekadu\. Full-stack developer for real products\./i,
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /AI Research Systems Builder/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /The profile behind the repositories/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /How I work, what I build, and what counts as proof/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Start with the strongest shipped work/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /For the teams you're headed toward/i,
      })
    ).toBeInTheDocument()
  })
})
