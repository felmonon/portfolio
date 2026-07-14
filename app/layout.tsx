import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import portfolio from '@/content/portfolio.json'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://felmon.tech'),
  title: 'Felmon Fekadu | Full-Stack Software Engineer',
  description:
    'Full-stack software engineer building developer tools and applied AI products with TypeScript and Python.',
  keywords: [
    'Software Engineer',
    'Full-Stack Engineer',
    'Developer Tools',
    'Applied AI',
    'TypeScript',
    'Python',
    'React',
    'Node.js',
    'Open Source',
    'Felmon Fekadu',
  ],
  authors: [{ name: 'Felmon Fekadu', url: 'https://felmon.tech' }],
  creator: 'Felmon Fekadu',
  alternates: { canonical: '/' },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '128x128' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Felmon Fekadu | Full-Stack Software Engineer',
    description:
      'Developer tools, applied AI products, and 14 maintainer-reviewed upstream contributions.',
    url: 'https://felmon.tech',
    type: 'website',
    siteName: 'Felmon Fekadu',
    locale: 'en_CA',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Felmon Fekadu — full-stack software engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Felmon Fekadu | Full-Stack Software Engineer',
    description: 'Developer tools, applied AI products, and reviewed open-source work.',
    images: ['/opengraph-image.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#f2f0e9',
  colorScheme: 'light',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Felmon Fekadu',
  url: 'https://felmon.tech',
  image: 'https://felmon.tech/opengraph-image.jpg',
  jobTitle: 'Full-Stack Software Engineer',
  description:
    'Full-stack software engineer building developer tools and applied AI products with TypeScript and Python. 14 merged upstream pull requests across OpenAI, Astro, MSW, Google, and comma.ai.',
  email: 'mailto:hello@felmon.tech',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of the People',
    sameAs: 'https://www.uopeople.edu',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Calgary',
    addressRegion: 'Alberta',
    addressCountry: 'Canada',
  },
  sameAs: [
    portfolio.links.github,
    portfolio.links.linkedin,
    'https://www.npmjs.com/~felmonon',
    'https://typejung.com',
  ],
  knowsAbout: [
    'TypeScript',
    'Python',
    'React',
    'Node.js',
    'Developer tools',
    'Applied AI',
    'Open-source software',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
