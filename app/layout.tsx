import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Felmon Fekadu | Product Engineering Portfolio',
  description:
    'Narrative portfolio for Felmon Fekadu, focused on model-powered products, full-stack systems, and public engineering proof.',
  keywords: [
    'Software Engineer',
    'AI Product Engineer',
    'TypeScript',
    'Next.js',
    'React',
    'Node.js',
    'PostgreSQL',
    'Open Source',
    'Felmon Fekadu',
  ],
  authors: [{ name: 'Felmon Fekadu' }],
  openGraph: {
    title: 'Felmon Fekadu | Product Engineering Portfolio',
    description:
      'A narrative portfolio featuring full-stack applications, model-powered product work, and public engineering proof.',
    type: 'website',
    url: 'https://felmonfekadu.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Felmon Fekadu | Product Engineer',
    description:
      'Product engineering portfolio with full-stack projects, model-aware systems, and OSS contributions.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
