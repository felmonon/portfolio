import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

vi.mock('next/font/google', () => ({
  Space_Grotesk: () => ({ variable: 'font-sans' }),
  Source_Serif_4: () => ({ variable: 'font-serif' }),
  JetBrains_Mono: () => ({ variable: 'font-mono' }),
}))

import MswInspectorCaseStudyPage from './page'

describe('MSW Inspector case study', () => {
  it('presents the tool, proof runs, and public destinations', () => {
    render(<MswInspectorCaseStudyPage />)

    expect(screen.getByRole('heading', { level: 1, name: /Building MSW Inspector/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Inspect source/i })).toHaveAttribute(
      'href',
      'https://github.com/felmonon/msw-inspector',
    )
    expect(screen.getByRole('link', { name: /npm package/i })).toHaveAttribute(
      'href',
      'https://www.npmjs.com/package/msw-inspector-cli',
    )
    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  it('has no automated Axe accessibility violations', async () => {
    const { container } = render(<MswInspectorCaseStudyPage />)
    const results = await axe(container)

    expect(results.violations).toEqual([])
  })
})
