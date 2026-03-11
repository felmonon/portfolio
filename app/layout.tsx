import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Felmon Fekadu | Software Developer Portfolio',
  description:
    'Narrative portfolio for Felmon Fekadu, focused on shipped products, full-stack systems, Prime Lab experiments, and public proof.',
  keywords: [
    'Software Developer',
    'AI Product Developer',
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
    title: 'Felmon Fekadu | Software Developer Portfolio',
    description:
      'A narrative portfolio featuring shipped products, model-powered development work, and public proof.',
    type: 'website',
    url: 'https://felmonfekadu.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Felmon Fekadu | Software Developer',
    description:
      'Software developer portfolio with shipped products, full-stack systems, and OSS contributions.',
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
