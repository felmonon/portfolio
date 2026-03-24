import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://felmonfekadu.com'
const shareImagePath = '/images/felmon-portrait.jpg'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Felmon Fekadu | Engineering Portfolio',
  description:
    'Software engineering portfolio for Felmon Fekadu, featuring shipped full-stack products, real-time systems, and public proof of work.',
  keywords: [
    'Software Engineer',
    'AI Product Engineer',
    'TypeScript',
    'Next.js',
    'React',
    'Node.js',
    'PostgreSQL',
    'Open Source',
    'Engineering Portfolio',
    'Felmon Fekadu',
  ],
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Felmon Fekadu' }],
  openGraph: {
    title: 'Felmon Fekadu | Engineering Portfolio',
    description:
      'Shipped full-stack products, real-time systems work, and maintainer-reviewed open-source contributions.',
    type: 'website',
    url: siteUrl,
    siteName: 'Felmon Fekadu Portfolio',
    locale: 'en_CA',
    images: [
      {
        url: shareImagePath,
        width: 1200,
        height: 630,
        alt: 'Felmon Fekadu engineering portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Felmon Fekadu | Engineering Portfolio',
    description:
      'Engineering portfolio with shipped products, systems work, and reviewed OSS contributions.',
    images: [shareImagePath],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const personStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Felmon Fekadu',
  jobTitle: 'Software Engineer',
  url: siteUrl,
  email: 'mailto:felmonon@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Alberta',
    addressCountry: 'CA',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of the People',
  },
  sameAs: ['https://github.com/FelmonFekadu', 'https://linkedin.com/in/felmonfekadu'],
  knowsAbout: [
    'Full-stack development',
    'TypeScript',
    'React',
    'Next.js',
    'Python',
    'Realtime systems',
    'AI product engineering',
    'Open source contributions',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        {children}
      </body>
    </html>
  )
}
