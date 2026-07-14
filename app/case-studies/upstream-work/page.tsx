import type { Metadata } from 'next'
import Link from 'next/link'
import { JetBrains_Mono, Source_Serif_4, Space_Grotesk } from 'next/font/google'
import type { ReactNode } from 'react'
import styles from './case-study.module.css'

const sans = Space_Grotesk({ subsets: ['latin'], variable: '--font-sans' })
const serif = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Upstream Engineering Work | Felmon Fekadu',
  description:
    'Selected maintainer-merged open-source work by Felmon Fekadu across OpenAI, Astro, and MSW.',
  alternates: { canonical: '/case-studies/upstream-work' },
}

const externalProps = { target: '_blank', rel: 'noopener noreferrer' } as const

const cases = [
  {
    organization: 'OpenAI Agents SDK',
    title: 'Isolating merged MCP tool metadata',
    problem:
      'MCP tool metadata is part of the contract used to describe agent capabilities. Merging that metadata incorrectly can leak or couple state across tool definitions.',
    decision:
      'Scoped the change to the metadata-isolation behavior, kept the public contract intact, and supplied the test evidence required for maintainer review.',
    proof:
      'Merged upstream in openai/openai-agents-python as PR #3114.',
    href: 'https://github.com/openai/openai-agents-python/pull/3114',
  },
  {
    organization: 'Astro',
    title: 'Fixing defineLiveCollection loader typing',
    problem:
      'A developer-facing type boundary around a live collection loader can turn a valid integration into a confusing editor or build-time failure.',
    decision:
      'Traced the type contract at the API boundary, made the smallest compatible typing correction, and relied on Astro’s review and test process to protect the framework surface.',
    proof:
      'Merged upstream in withastro/astro as PR #16018.',
    href: 'https://github.com/withastro/astro/pull/16018',
  },
  {
    organization: 'MSW',
    title: 'Avoiding open handles for infinite delays',
    problem:
      'A deliberately infinite request delay can leave a Node.js handle alive, causing test processes to hang instead of finishing deterministically.',
    decision:
      'Focused on the runtime cleanup path for the delay behavior and validated a backwards-compatible fix in the project’s test suite.',
    proof:
      'Merged upstream in mswjs/msw as PR #2669.',
    href: 'https://github.com/mswjs/msw/pull/2669',
  },
]

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
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

export default function UpstreamWorkCaseStudyPage() {
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
          <Link className={styles.backLink} href="/#open-source">
            Back to open-source evidence
          </Link>
          <p className={styles.eyebrow}>Maintainer-reviewed engineering work</p>
          <h1>Small patches, high-signal engineering.</h1>
          <p className={styles.lead}>
            These are three selected examples from 14 maintainer-merged upstream pull requests across
            seven repositories and five organizations. Each began with a narrow system constraint, not
            a generic contribution goal.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href="https://github.com/search?q=author%3Afelmonon+is%3Apr+is%3Amerged+-user%3Afelmonon&type=pullrequests" {...externalProps}>
              Review all merged PRs
            </a>
            <a className={styles.secondaryAction} href="https://github.com/felmonon" {...externalProps}>
              GitHub profile
            </a>
          </div>
        </header>

        <Section eyebrow="01 / The operating model" title="Start with a real constraint, then prove the narrowest fix.">
          <p>
            The useful unit of open-source work is not a contribution count. It is a reviewable chain:
            understand an unfamiliar system, isolate the failure or boundary, make the smallest durable
            change, and provide enough validation for maintainers to trust it.
          </p>
          <p>
            The linked pull requests are the canonical record. This page explains what each change
            demonstrates without claiming ownership of the wider projects or outcomes that are not public.
          </p>
        </Section>

        <Section eyebrow="02 / Selected cases" title="Concrete constraints across SDK, framework, and test-runtime work.">
          <div className={styles.proofGrid}>
            {cases.map((item) => (
              <article className={styles.proofCard} key={item.href}>
                <p className={styles.monoLabel}>{item.organization}</p>
                <h3>{item.title}</h3>
                <p><strong>Constraint:</strong> {item.problem}</p>
                <p><strong>Engineering decision:</strong> {item.decision}</p>
                <p><strong>Review outcome:</strong> <a href={item.href} {...externalProps}>{item.proof}</a></p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="03 / What this evidence means" title="It demonstrates collaboration, not just code output.">
          <ul className={styles.builtList}>
            <li>I can make a small change legible to people who did not hire or manage me.</li>
            <li>I can work inside an existing testing, type, and review culture instead of bypassing it.</li>
            <li>I can describe a technical decision by its constraint and verification, not a vague responsibility label.</li>
            <li>I use open-source work to keep learning connected to real maintainers and real users.</li>
          </ul>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} href="/case-studies/msw-inspector">
              Read MSW Inspector case study
            </Link>
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
