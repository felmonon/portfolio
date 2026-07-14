import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { JetBrains_Mono, Source_Serif_4, Space_Grotesk } from 'next/font/google'
import styles from './proof.module.css'

const sans = Space_Grotesk({ subsets: ['latin'], variable: '--font-work-sans' })
const serif = Source_Serif_4({ subsets: ['latin'], variable: '--font-work-serif' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-work-mono' })

export const metadata: Metadata = {
  title: 'Selected Work | Felmon Fekadu',
  description: 'Selected engineering work by Felmon Fekadu: Astro, MSW Inspector, and TypeJung.',
  openGraph: {
    title: 'Selected Work | Felmon Fekadu',
    description: 'Open-source contributions, developer tooling, and a shipped full-stack product.',
    url: 'https://felmon.tech/proof',
    type: 'website',
  },
}

const projects = [
  {
    index: '01',
    title: 'Astro',
    type: 'Open-source contribution record',
    period: '2026',
    summary:
      'I have had five pull requests merged into Astro, mainly around TypeScript and developer experience. I now also contribute through issue triage, pull-request review, and community support.',
    details: [
      ['Work', 'Language-server behavior, error handling, TypeScript-related fixes, reviews, and issue triage.'],
      ['Approach', 'Reproduce the problem, reduce the scope, add or request the right test, and explain the tradeoff clearly.'],
      ['Current focus', 'Sustained weekly contributions toward the Astro maintainer path.'],
    ],
    note:
      'A recent support diagnosis was confirmed and refined by a Zed staff engineer. That interaction is a useful example of how I work in public: investigate carefully, share the evidence, and update the answer when better information appears.',
    links: [
      { label: 'Merged language-server fix', href: 'https://github.com/withastro/astro/pull/15927' },
      { label: 'GitHub profile', href: 'https://github.com/felmonon' },
    ],
  },
  {
    index: '02',
    title: 'MSW Inspector',
    type: 'Developer tool I maintain',
    period: '2026',
    summary:
      'MSW Inspector is a TypeScript CLI and GitHub Action that compares Mock Service Worker handlers with the API calls in a codebase. It reports unmocked endpoints and handlers that may have gone stale.',
    details: [
      ['Work', 'AST analysis with ts-morph, command-line UX, CI integration, tests, releases, and documentation.'],
      ['Why ASTs', 'The tool needs to understand fetch, Axios, and handler registrations as code. Text matching would create too many false positives.'],
      ['Current status', 'Public repository, Marketplace action, outside contributors, and a documented product roadmap.'],
    ],
    note:
      'Maintaining the project has included reviewing contributor pull requests, diagnosing cross-platform CI failures, planning narrowly scoped issues, and separating real failures from theoretical risk.',
    links: [
      { label: 'Repository', href: 'https://github.com/felmonon/msw-inspector' },
      { label: 'GitHub Marketplace', href: 'https://github.com/marketplace/actions/msw-inspector' },
    ],
  },
  {
    index: '03',
    title: 'TypeJung',
    type: 'Full-stack product',
    period: '2025–2026',
    summary:
      'TypeJung is a personality assessment product built with React, TypeScript, Express, Supabase, Stripe, and Gemini. The system includes the assessment, account state, persisted results, billing, and AI-assisted reports.',
    details: [
      ['Work', 'Product design, frontend, API, authentication, payments, persistence, email capture, and report generation.'],
      ['Early result', '22 registered users, 6 paying users, and CA$74 in revenue in the June 29, 2026 snapshot.'],
      ['Current focus', 'Improving acquisition, social proof, and the sharing loop after a user receives a result.'],
    ],
    note:
      'The main lesson was that the model output is not the product. The surrounding workflow has to handle payment state, account state, report generation, and recovery paths reliably.',
    links: [
      { label: 'Live product', href: 'https://typejung.com' },
      { label: 'Source', href: 'https://github.com/felmonon/jungian-typology-assessment' },
    ],
  },
]

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className={styles.textLink} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <ArrowUpRight aria-hidden="true" size={14} />
    </a>
  )
}

export default function SelectedWorkPage() {
  return (
    <main className={`${styles.page} ${sans.variable} ${serif.variable} ${mono.variable}`}>
      <header className={styles.header}>
        <a className={styles.back} href="/">
          <ArrowLeft aria-hidden="true" size={15} />
          Portfolio
        </a>
        <nav aria-label="Contact links" className={styles.nav}>
          <a href="https://github.com/felmonon" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/felmonfekadu/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:hello@felmon.tech">Email</a>
        </nav>
      </header>

      <section className={styles.intro} aria-labelledby="page-title">
        <p className={styles.eyebrow}>Felmon Fekadu · Selected work</p>
        <h1 id="page-title">Selected engineering work.</h1>
        <p className={styles.introCopy}>
          Three projects that best represent the work I want to do next: developer tools, open-source
          systems, and applied AI products. Across these projects and other upstream contributions, I
          have had 14 upstream pull requests merged across eight repositories in five organizations.
        </p>
        <dl className={styles.profileMeta}>
          <div>
            <dt>Based in</dt>
            <dd>Calgary, Alberta</dd>
          </div>
          <div>
            <dt>Primary stack</dt>
            <dd>TypeScript, Python, React, Node.js</dd>
          </div>
          <div>
            <dt>Looking for</dt>
            <dd>Full-time software engineering roles</dd>
          </div>
        </dl>
      </section>

      <section className={styles.work} aria-label="Selected engineering projects">
        {projects.map((project) => (
          <article className={styles.project} key={project.title}>
            <aside className={styles.projectMeta}>
              <span>{project.index}</span>
              <p>{project.type}</p>
              <p>{project.period}</p>
            </aside>

            <div className={styles.projectBody}>
              <h2>{project.title}</h2>
              <p className={styles.summary}>{project.summary}</p>

              <dl className={styles.details}>
                {project.details.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>

              <p className={styles.note}>{project.note}</p>

              <div className={styles.links}>
                {project.links.map((link) => (
                  <TextLink href={link.href} key={link.href}>
                    {link.label}
                  </TextLink>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.next} aria-labelledby="next-title">
        <p className={styles.eyebrow}>Next role</p>
        <h2 id="next-title">Developer tools, platform work, or applied AI.</h2>
        <p>
          I am looking for a team with strong review standards, useful problems, and enough ownership
          to follow work from investigation through release. Canada-based or remote roles are the best
          fit.
        </p>
        <div className={styles.links}>
          <a className={styles.contactLink} href="mailto:hello@felmon.tech">
            Email Felmon
          </a>
          <TextLink href="https://github.com/felmonon">Review GitHub</TextLink>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>Updated July 2026</span>
        <span>felmon.tech</span>
      </footer>
    </main>
  )
}
