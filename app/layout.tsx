import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Felmon Fekadu | Engineering Portfolio',
  description:
    'Desktop-first engineering portfolio for Felmon Fekadu, featuring full-stack products, real-time systems, and public proof of work.',
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
  authors: [{ name: 'Felmon Fekadu' }],
  openGraph: {
    title: 'Felmon Fekadu | Engineering Portfolio',
    description:
      'A desktop-first engineering portfolio featuring full-stack applications, systems work, and public proof.',
    type: 'website',
    url: 'https://felmonfekadu.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Felmon Fekadu | Engineering Portfolio',
    description:
      'Engineering portfolio with full-stack projects, real-time systems, and OSS contributions.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
