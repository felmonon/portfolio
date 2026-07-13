import React from 'react'
import { render, screen } from '@testing-library/react'

vi.mock('next/font/google', () => ({
  Space_Grotesk: () => ({ variable: 'font-sans' }),
  Source_Serif_4: () => ({ variable: 'font-serif' }),
  JetBrains_Mono: () => ({ variable: 'font-mono' }),
}))

import ProofPage from './page'

describe('Proof of work page', () => {
  it('renders the three evidence packages and employer doubt matrix', () => {
    render(<ProofPage />)

    expect(screen.getByRole('heading', { name: /Evidence,\s*not adjectives/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Astro: moving from accepted fixes/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /MSW Inspector: turning an API-testing gap/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /TypeJung: building the product around/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /evidence is organized around hiring risk/i })).toBeInTheDocument()
  })

  it('provides inspectable evidence links and a direct contact action', () => {
    render(<ProofPage />)

    expect(screen.getByRole('link', { name: /Merged language-server PR/i })).toHaveAttribute(
      'href',
      'https://github.com/withastro/astro/pull/15927'
    )
    expect(screen.getByRole('link', { name: /Inspect the repository/i })).toHaveAttribute(
      'href',
      'https://github.com/felmonon/msw-inspector'
    )
    expect(screen.getByRole('link', { name: /Open the live product/i })).toHaveAttribute(
      'href',
      'https://typejung.com'
    )
    expect(screen.getByRole('link', { name: /Tell me the problem you need solved/i })).toHaveAttribute(
      'href',
      expect.stringContaining('mailto:hello@felmon.tech')
    )
  })
})
