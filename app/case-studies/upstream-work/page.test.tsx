import React from 'react'
import { render, screen } from '@testing-library/react'

vi.mock('next/font/google', () => ({
  Space_Grotesk: () => ({ variable: 'font-sans' }),
  Source_Serif_4: () => ({ variable: 'font-serif' }),
  JetBrains_Mono: () => ({ variable: 'font-mono' }),
}))

import UpstreamWorkCaseStudyPage from './page'

describe('Upstream work case study', () => {
  it('links selected claims to their canonical merged pull requests', () => {
    render(<UpstreamWorkCaseStudyPage />)

    expect(screen.getByRole('heading', { name: /Small patches, high-signal engineering/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /PR #3114/i })).toHaveAttribute(
      'href',
      'https://github.com/openai/openai-agents-python/pull/3114'
    )
    expect(screen.getByRole('link', { name: /PR #16018/i })).toHaveAttribute(
      'href',
      'https://github.com/withastro/astro/pull/16018'
    )
    expect(screen.getByRole('link', { name: /PR #2669/i })).toHaveAttribute(
      'href',
      'https://github.com/mswjs/msw/pull/2669'
    )
  })
})
