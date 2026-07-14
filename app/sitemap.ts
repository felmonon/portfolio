import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://felmon.tech',
      lastModified: new Date('2026-07-13'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://felmon.tech/case-studies/msw-inspector',
      lastModified: new Date('2026-07-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
