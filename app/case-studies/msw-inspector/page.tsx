import type { Metadata } from 'next'
import Link from 'next/link'
import { JetBrains_Mono, Source_Serif_4, Space_Grotesk } from 'next/font/google'
import type { ReactNode } from 'react'
import styles from './case-study.module.css'

const sans = Space_Grotesk({ subsets: ['latin'], variable: '--font-sans' })
const serif = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Building MSW Inspector | Felmon Fekadu',
  description:
    'Case study on building MSW Inspector, an AST-based TypeScript CLI and GitHub Action for finding stale and missing MSW mocks.',
  alternates: {
    canonical: '/case-studies/msw-inspector',
  },
}

const proofRuns = [
  {
    repo: 'TypeJung',
    handlers: '0',
    calls: '39',
    unmocked: '39',
    stale: '0',
    unsupported: '11',
    takeaway: 'A real app can have auth, billing, analytics, and AI endpoints with no mock coverage.',
  },
  {
    repo: 'Mirror',
    handlers: '0',
    calls: '7',
    unmocked: '7',
    stale: '0',
    unsupported: '3',
    takeaway: 'A smaller product still exposes clear gaps around journal, AI, and Stripe routes.',
  },
  {
    repo: 'MSW browser REST slice',
    handlers: '66',
    calls: '0',
    unmocked: '0',
    stale: '66',
    unsupported: '0',
    takeaway: 'A narrowed scan can also reveal handlers outside the scanned active call surface.',
  },
]

const builtItems = [
  'TypeScript CLI that scans source files for API calls.',
  'MSW handler scanner for modern http.* and legacy rest.* handlers.',
  'Static endpoint extraction for fetch, Axios, and axios.create.',
  'Normalization layer for methods, origins, and paths.',
  'CI-friendly JSON output and threshold flags.',
  'GitHub Action wrapper for job summaries and pull-request workflows.',
]

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <div className={styles.sectionBody}>
        <h2>{title}</h2>
        <div className={styles.sectionCopy}>{children}</div>
      </div>
    </section>
  )
}

const externalProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const

export default function MswInspectorCaseStudyPage() {
  return (
    <main className={`${styles.page} ${sans.variable} ${serif.variable} ${mono.variable}`}>
      <header className={styles.siteHeader}>
        <Link className={styles.identity} href="/">
          Felmon Fekadu
        </Link>
        <nav className={styles.nav} aria-label="Case study navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#open-source">Open source</Link>
          <a href="/resume.pdf" download>
            Résumé
          </a>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <article className={styles.article}>
        <header className={styles.hero}>
          <Link className={styles.backLink} href="/#work">
            Back to selected work
          </Link>
          <p className={styles.eyebrow}>Developer tool case study</p>
          <h1>Building MSW Inspector: finding stale and missing mocks with AST analysis.</h1>
          <p className={styles.lead}>
            MSW Inspector is an open-source TypeScript developer tool for checking whether a
            codebase&apos;s Mock Service Worker handlers still match the API calls the application
            actually makes. It ships as an npm CLI and a GitHub Marketplace Action.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href="https://github.com/felmonon/msw-inspector" {...externalProps}>
              Inspect source
            </a>
            <a className={styles.secondaryAction} href="https://www.npmjs.com/package/msw-inspector-cli" {...externalProps}>
              npm package
            </a>
            <a className={styles.textAction} href="https://github.com/marketplace/actions/msw-inspector" {...externalProps}>
              GitHub Marketplace
            </a>
          </div>
        </header>

        <Section eyebrow="01 / Problem" title="Mock coverage drifts away from product code.">
          <p>
            MSW works best when handlers represent the real request surface of the application.
            Over time, that relationship drifts: new API calls arrive without matching handlers,
            and old handlers remain after product code stops calling those endpoints.
          </p>
          <p>
            Both problems weaken test confidence. Missing handlers hide integration gaps. Stale
            handlers create a mock layer that looks comprehensive but no longer reflects current
            product behavior.
          </p>
        </Section>

        <Section eyebrow="02 / What I built" title="One analysis path from source code to CI evidence.">
          <ul className={styles.builtList}>
            {builtItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="03 / Technical approach" title="AST analysis instead of text matching.">
          <p>
            The CLI uses ts-morph so the scanner can inspect TypeScript and JavaScript syntax,
            identify call expressions, and evaluate static URL expressions where the source code
            makes them available.
          </p>
          <p>
            It collects API call sites and MSW handler registrations, normalizes both sides into
            comparable endpoint records, then reports unmocked calls, stale handlers, and
            unsupported dynamic patterns. Unsupported output is deliberate: CI tooling should
            report what it can prove instead of fabricating coverage.
          </p>
        </Section>

        <Section eyebrow="04 / Proof runs" title="The report makes gaps concrete.">
          <div className={styles.tableWrap} tabIndex={0} aria-label="MSW Inspector proof runs table">
            <table>
              <thead>
                <tr>
                  {['Repository', 'Handlers', 'API calls', 'Unmocked', 'Stale', 'Unsupported', 'What it shows'].map(
                    (heading) => (
                      <th key={heading} scope="col">
                        {heading}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {proofRuns.map((run) => (
                  <tr key={run.repo}>
                    <th scope="row">{run.repo}</th>
                    <td>{run.handlers}</td>
                    <td>{run.calls}</td>
                    <td>{run.unmocked}</td>
                    <td>{run.stale}</td>
                    <td>{run.unsupported}</td>
                    <td>{run.takeaway}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section eyebrow="05 / Outcome" title="A maintained tool, not a one-off parser.">
          <p>
            The project demonstrates end-to-end developer tooling work: AST parsing, CLI design,
            report formats, CI integration, npm packaging, GitHub Marketplace distribution, and
            clear handling of static-analysis limits.
          </p>
          <p>
            The next product work is config-file support, more framework examples, clearer
            unsupported-pattern messages, and baseline or delta reporting for pull requests.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href="https://github.com/felmonon/msw-inspector" {...externalProps}>
              Review the repository
            </a>
            <Link className={styles.secondaryAction} href="/#contact">
              Contact Felmon
            </Link>
          </div>
        </Section>
      </article>

      <footer className={styles.footer}>
        <span>Felmon Fekadu · Calgary, Alberta</span>
        <Link href="/">Return to portfolio</Link>
      </footer>
    </main>
  )
}
