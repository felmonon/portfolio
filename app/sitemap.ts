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
    {
      url: 'https://felmon.tech/writing',
      lastModified: new Date('2026-07-14'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://felmon.tech/writing/deterministic-checks-for-agent-evals',
      lastModified: new Date('2026-07-14'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
