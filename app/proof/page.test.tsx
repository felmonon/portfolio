import React from 'react'
import { render, screen } from '@testing-library/react'

vi.mock('next/font/google', () => ({
  Space_Grotesk: () => ({ variable: 'font-sans' }),
  Source_Serif_4: () => ({ variable: 'font-serif' }),
  JetBrains_Mono: () => ({ variable: 'font-mono' }),
}))

import ProofPage from './page'

describe('Selected work page', () => {
  it('renders three factual engineering case studies', () => {
    render(<ProofPage />)

    expect(
      screen.getByRole('heading', { name: /Selected engineering work/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^Astro$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^MSW Inspector$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^TypeJung$/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Developer tools, platform work, or applied AI/i })
    ).toBeInTheDocument()
  })

  it('links directly to the underlying work and contact information', () => {
    render(<ProofPage />)

    expect(screen.getByRole('link', { name: /Merged language-server fix/i })).toHaveAttribute(
      'href',
      'https://github.com/withastro/astro/pull/15927'
    )
    expect(screen.getByRole('link', { name: /^Repository$/i })).toHaveAttribute(
      'href',
      'https://github.com/felmonon/msw-inspector'
    )
    expect(screen.getByRole('link', { name: /Live product/i })).toHaveAttribute(
      'href',
      'https://typejung.com'
    )
    expect(screen.getByRole('link', { name: /Email Felmon/i })).toHaveAttribute(
      'href',
      'mailto:hello@felmon.tech'
    )
  })
})
