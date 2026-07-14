import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

vi.mock('next/font/google', () => ({
  Space_Grotesk: () => ({ variable: 'font-sans' }),
  Source_Serif_4: () => ({ variable: 'font-serif' }),
  JetBrains_Mono: () => ({ variable: 'font-mono' }),
}))

vi.mock('next/image', () => ({
  default: ({
    unoptimized: _unoptimized,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement> & { unoptimized?: boolean }) =>
    React.createElement('img', { alt: props.alt ?? '', ...props }),
}))

vi.mock('@vercel/analytics', () => ({ track: vi.fn() }))

import Home from '@/app/page'

describe('Home page', () => {
  it('presents the recruiter path and only three selected projects', () => {
    const { container } = render(<Home />)

    expect(
      screen.getByRole('heading', { name: /Building developer tools and applied AI products/i })
    ).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Download résumé/i })).toHaveLength(2)
    expect(screen.getByRole('heading', { name: /^Agent Reliability Harness$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^MSW Inspector$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^TypeJung$/i })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(3)
    expect(screen.getAllByText(/willing to relocate to the United States/i)).toHaveLength(2)
    expect(container.querySelectorAll('img:not([alt=""])')).toHaveLength(0)
    expect(container.querySelectorAll('img[alt=""]')).toHaveLength(10)
    expect(
      screen.getByRole('list', { name: /organizations with accepted contributions/i })
    ).toBeInTheDocument()
  })

  it('links to the résumé, projects, contact, and verified evidence', () => {
    render(<Home />)

    expect(screen.getAllByRole('link', { name: /Download résumé/i })[0]).toHaveAttribute(
      'href',
      '/resume.pdf'
    )
    expect(
      screen.getByRole('link', { name: /Review repository: Agent Reliability Harness/i })
    ).toHaveAttribute(
      'href',
      'https://github.com/felmonon/agent-reliability-harness'
    )
    expect(screen.getByRole('link', { name: /Email Felmon/i })).toHaveAttribute(
      'href',
      'mailto:hello@felmon.tech'
    )
    const caseStudyLink = screen.getByRole('link', { name: /Read case study: MSW Inspector/i })
    expect(caseStudyLink).toHaveAttribute('href', '/case-studies/msw-inspector')
    expect(caseStudyLink).not.toHaveAttribute('target')
    expect(screen.getByRole('link', { name: /Read three engineering case studies/i })).toHaveAttribute(
      'href',
      '/case-studies/upstream-work'
    )
    expect(screen.getAllByText(/What I learned/i)).toHaveLength(3)
    expect(screen.getAllByText(/Verified July 13, 2026/i)).toHaveLength(2)
  })

  it('uses readable labels for every factual metric source', () => {
    render(<Home />)

    expect(screen.getByRole('link', { name: /14 upstream PRs merged/i })).toHaveAttribute(
      'href',
      expect.stringContaining('github.com/search')
    )
    expect(screen.getByRole('link', { name: /7 upstream repositories/i })).toHaveAttribute(
      'href',
      expect.stringContaining('-user%3Afelmonon')
    )
    expect(screen.getByRole('link', { name: /7 paying TypeJung users/i })).toHaveAttribute(
      'href',
      'https://typejung.com'
    )
  })

  it('has no automated Axe accessibility violations', async () => {
    const { container } = render(<Home />)
    const results = await axe(container)

    expect(results.violations).toEqual([])
  })
})
