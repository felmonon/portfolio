import { normalizeExternalUrl } from '@/lib/url'

describe('normalizeExternalUrl', () => {
  it('extracts the final valid url from malformed concatenated input', () => {
    expect(
      normalizeExternalUrl(
        'hingtolivb.comhttps://jungian-typology-assessment.vercel.app/'
      )
    ).toBe('https://jungian-typology-assessment.vercel.app/')
  })

  it('adds https to bare domains', () => {
    expect(normalizeExternalUrl('example.com/demo')).toBe('https://example.com/demo')
  })
})
