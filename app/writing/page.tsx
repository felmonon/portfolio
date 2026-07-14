import type { Metadata } from 'next'
import Link from 'next/link'
import { JetBrains_Mono, Source_Serif_4, Space_Grotesk } from 'next/font/google'
import styles from './writing.module.css'

const sans = Space_Grotesk({ subsets: ['latin'], variable: '--font-sans' })
const serif = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Writing | Felmon Fekadu',
  description:
    'Technical notes on developer tools, agent reliability, and decisions made while shipping real software.',
  alternates: { canonical: '/writing' },
}

const posts = [
  {
    slug: 'deterministic-checks-for-agent-evals',
    title: 'Deterministic checks beat model-judged evals in CI',
    summary:
      'Why I gate agent behavior with schema, budget, safety, and grounding checks instead of asking a second model for its opinion.',
    date: 'July 14, 2026',
  },
]

export default function WritingIndex() {
  return (
    <main className={`${styles.page} ${sans.variable} ${serif.variable} ${mono.variable}`}>
      <header className={styles.siteHeader}>
        <Link className={styles.identity} href="/">
          Felmon Fekadu
        </Link>
        <Link className={styles.backLink} href="/">
          Back to home
        </Link>
      </header>

      <section className={styles.content}>
        <p className={styles.eyebrow}>Writing</p>
        <h1>Notes from real decisions.</h1>
        <div className={styles.postList}>
          {posts.map((post) => (
            <Link className={styles.postItem} href={`/writing/${post.slug}`} key={post.slug}>
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <p className={styles.meta}>{post.date}</p>
            </Link>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <span>Felmon Fekadu · Calgary, Alberta</span>
        <Link href="/">felmon.tech</Link>
      </footer>
    </main>
  )
}
