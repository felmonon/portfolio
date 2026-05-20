import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://felmon.tech'),
  title: 'Felmon Fekadu | Full-Stack Product Engineer',
  description:
    'Calgary-based full-stack product engineer building TypeScript, Python, AI, auth, payments, and open-source systems.',
  keywords: [
    'Software Engineer',
    'Full-Stack Product Engineer',
    'AI Engineer',
    'TypeScript',
    'Python',
    'Next.js',
    'React',
    'Node.js',
    'PostgreSQL',
    'Open Source',
    'Engineering Portfolio',
    'Felmon Fekadu',
  ],
  authors: [{ name: 'Felmon Fekadu' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Felmon Fekadu | Full-Stack Product Engineer',
    description:
      'Shipped TypeScript/Python products with auth, Stripe payments, AI workflows, real-time systems, and maintainer-reviewed OSS work.',
    type: 'website',
    url: 'https://felmon.tech',
    siteName: 'Felmon Fekadu',
    locale: 'en_CA',
    images: [
      {
        url: '/images/felmon-portrait.jpg',
        width: 1200,
        height: 630,
        alt: 'Felmon Fekadu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Felmon Fekadu | Full-Stack Product Engineer',
    description:
      'Calgary-based full-stack product engineer building TypeScript, Python, AI, auth, payments, and open-source systems.',
    images: ['/images/felmon-portrait.jpg'],
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Felmon Fekadu',
  url: 'https://felmon.tech',
  image: 'https://felmon.tech/images/felmon-portrait.jpg',
  jobTitle: 'Full-Stack Product Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Independent Engineer',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Calgary',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  sameAs: [
    'https://github.com/felmonon',
    'https://www.linkedin.com/in/felmonfekadu/',
    'https://typejung.com',
  ],
  knowsAbout: [
    'TypeScript',
    'Python',
    'React',
    'Next.js',
    'Node.js',
    'Supabase',
    'Stripe',
    'Vercel',
    'AI product engineering',
    'Open-source software',
    'Developer tools',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        {children}
      </body>
    </html>
  )
}
