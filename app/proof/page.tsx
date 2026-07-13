import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight, CheckCircle2, GitPullRequest, Mail } from 'lucide-react'
import { JetBrains_Mono, Source_Serif_4, Space_Grotesk } from 'next/font/google'
import styles from './proof.module.css'

const sans = Space_Grotesk({ subsets: ['latin'], variable: '--font-proof-sans' })
const serif = Source_Serif_4({ subsets: ['latin'], variable: '--font-proof-serif' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-proof-mono' })

export const metadata: Metadata = {
  title: 'Proof of Work | Felmon Fekadu',
  description:
    'Inspectable evidence from Felmon Fekadu: maintainer-reviewed open-source work, a developer tool with outside contributors, and a full-stack AI product with paying users.',
  openGraph: {
    title: 'Proof of Work | Felmon Fekadu',
    description: 'Real products, merged pull requests, public repositories, and measurable outcomes.',
    url: 'https://felmon.tech/proof',
    type: 'website',
  },
}

const metrics = [
  { value: '14', label: 'upstream PRs accepted', note: 'Across 6 open-source organizations' },
  { value: '5/5', label: 'Astro PRs merged', note: 'A repeated maintainer-reviewed signal' },
  { value: '3', label: 'proof packages', note: 'Framework, developer tool, and paid product' },
  { value: '6', label: 'paying TypeJung users', note: 'Early product snapshot, June 29, 2026' },
]

const caseStudies = [
  {
    number: '01',
    eyebrow: 'Framework engineering · open source',
    title: 'Astro: moving from accepted fixes to sustained ecosystem work',
    thesis:
      'Five accepted Astro pull requests created a stronger signal than a generic framework claim. I am now compounding that signal through reviews, issue triage, and user support.',
    evidence: [
      '5 of 5 submitted Astro PRs merged',
      'L1 Contributor role in the Astro community',
      'First weekly loop: two PR reviews and one issue triage contribution',
      'A support diagnosis independently validated by a Zed staff engineer',
    ],
    decision:
      'I chose Astro as my primary maintainer track because the feedback loop is real: maintainers accept focused fixes, the project has a documented governance ladder, and my TypeScript/DX work maps directly to user needs.',
    result:
      'A visible contribution record that demonstrates technical judgment, review quality, and community collaboration, not just isolated coding.',
    links: [
      { label: 'Merged language-server PR', href: 'https://github.com/withastro/astro/pull/15927' },
      { label: 'GitHub profile', href: 'https://github.com/felmonon' },
    ],
  },
  {
    number: '02',
    eyebrow: 'Developer tools · testing infrastructure',
    title: 'MSW Inspector: turning an API-testing gap into a maintained tool',
    thesis:
      'MSW handlers drift away from real API usage. MSW Inspector parses both sides, compares coverage, and reports unmocked endpoints and stale handlers in local development and CI.',
    evidence: [
      'AST-driven TypeScript CLI and GitHub Action',
      'Public Marketplace integration and reproducible repository',
      'Outside contributors now opening and landing pull requests',
      'Seven public roadmap issues spanning product depth, DX, and reliability',
    ],
    decision:
      'I used ts-morph instead of fragile text matching so the tool can reason about fetch, Axios, and handler registrations as code. I also built the maintainer workflow around small issues, review feedback, and CI evidence.',
    result:
      'The project now proves product ownership, parser design, release engineering, CI debugging, and contributor management in one inspectable system.',
    links: [
      { label: 'Inspect the repository', href: 'https://github.com/felmonon/msw-inspector' },
      { label: 'GitHub Marketplace', href: 'https://github.com/marketplace/actions/msw-inspector' },
    ],
  },
  {
    number: '03',
    eyebrow: 'Full-stack AI product · paying users',
    title: 'TypeJung: building the product around the model output',
    thesis:
      'The AI report is only one part of the product. The real system includes assessment state, authentication, persistence, billing, email capture, and a workflow that turns an answer into a useful paid result.',
    evidence: [
      'Live product at typejung.com',
      '22 registered users and 6 paying users in the June 29 snapshot',
      'CA$74 in early revenue',
      'React, TypeScript, Express, Supabase, Stripe, and Gemini in one production flow',
    ],
    decision:
      'I treated the model as a bounded capability inside a product rather than the entire product. Account state, payment state, report generation, and recovery paths had to agree.',
    result:
      'A shipped AI application with real customers and measurable behavior, giving employers evidence of product judgment as well as implementation ability.',
    links: [
      { label: 'Open the live product', href: 'https://typejung.com' },
      { label: 'Inspect the source', href: 'https://github.com/felmonon/jungian-typology-assessment' },
    ],
  },
]

const doubtMatrix = [
  ['Can he ship?', 'Live products, deployed systems, and accepted pull requests'],
  ['Can he debug?', 'Reproductions, root-cause analysis, tests, CI diagnosis, and focused fixes'],
  ['Can he prioritize?', 'A documented Astro focus, public roadmaps, and explicit tradeoffs'],
  ['Can he collaborate?', 'Maintainer reviews, issue triage, contributor feedback, and community support'],
  ['Does he understand users?', 'A paid TypeJung funnel and developer-tool workflows built around real friction'],
  ['Can he learn fast?', 'Accepted work across OpenAI, Astro, MSW, Google, and comma.ai codebases'],
]

const principles = [
  ['Show the work', 'Replace capability adjectives with a live artifact, source link, or accepted change.'],
  ['Own the outcome', 'Carry the problem through product decisions, implementation, verification, and communication.'],
  ['Make review easy', 'Package evidence so a technical manager can understand it in minutes.'],
]

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className={styles.externalLink} href={href} target="_blank" rel="noopener noreferrer">
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={16} />
    </a>
  )
}

export default function ProofPage() {
  return (
    <main className={`${styles.page} ${sans.variable} ${serif.variable} ${mono.variable}`}>
      <nav className={styles.nav} aria-label="Proof of work navigation">
        <a className={styles.backLink} href="/">
          <ArrowLeft aria-hidden="true" size={16} />
          Portfolio
        </a>
        <div className={styles.navMeta}>
          <span className={styles.statusDot} aria-hidden="true" />
          Open to engineering roles
        </div>
        <a className={styles.navContact} href="mailto:hello@felmon.tech">
          Contact
        </a>
      </nav>

      <section className={styles.hero} aria-labelledby="proof-title">
        <p className={styles.kicker}>Proof of work / 2026</p>
        <div className={styles.heroGrid}>
          <div>
            <h1 id="proof-title" className={styles.heroTitle}>
              Evidence,
              <br />
              not adjectives.
            </h1>
          </div>
          <div className={styles.heroCopyWrap}>
            <p className={styles.heroCopy}>
              I build full-stack products and developer tools, then make the work inspectable. This
              page compresses my strongest evidence into three proof packages a technical manager can
              review in under five minutes.
            </p>
            <a className={styles.primaryCta} href="mailto:hello@felmon.tech?subject=A%20problem%20worth%20solving">
              <Mail aria-hidden="true" size={18} />
              Tell me the problem you need solved
            </a>
          </div>
        </div>
      </section>

      <section className={styles.metrics} aria-label="Verified career evidence">
        {metrics.map((metric) => (
          <article className={styles.metricCard} key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <p>{metric.note}</p>
          </article>
        ))}
      </section>

      <section className={styles.caseStudySection} aria-labelledby="case-studies-title">
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Three proof packages</p>
          <h2 id="case-studies-title">Work selected for signal, not volume.</h2>
          <p>
            Each case shows a different risk an employer needs to resolve: framework depth,
            developer-tool ownership, and full-stack product execution.
          </p>
        </div>

        <div className={styles.caseStudyList}>
          {caseStudies.map((study) => (
            <article className={styles.caseStudy} key={study.number}>
              <div className={styles.caseIndex} aria-hidden="true">
                {study.number}
              </div>
              <div className={styles.caseBody}>
                <p className={styles.caseEyebrow}>{study.eyebrow}</p>
                <h3>{study.title}</h3>
                <p className={styles.caseThesis}>{study.thesis}</p>

                <div className={styles.caseGrid}>
                  <div>
                    <p className={styles.label}>Inspectable evidence</p>
                    <ul className={styles.evidenceList}>
                      {study.evidence.map((item) => (
                        <li key={item}>
                          <CheckCircle2 aria-hidden="true" size={17} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.decisionBlock}>
                    <p className={styles.label}>Decision</p>
                    <p>{study.decision}</p>
                    <p className={styles.label}>Result</p>
                    <p>{study.result}</p>
                  </div>
                </div>

                <div className={styles.caseLinks}>
                  {study.links.map((link) => (
                    <ExternalLink href={link.href} key={link.href}>
                      {link.label}
                    </ExternalLink>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.matrixSection} aria-labelledby="matrix-title">
        <div className={styles.sectionIntroCompact}>
          <p className={styles.kicker}>Employer doubt matrix</p>
          <h2 id="matrix-title">The evidence is organized around hiring risk.</h2>
        </div>
        <div className={styles.matrix} role="list">
          {doubtMatrix.map(([doubt, evidence]) => (
            <div className={styles.matrixRow} role="listitem" key={doubt}>
              <div className={styles.matrixQuestion}>
                <GitPullRequest aria-hidden="true" size={17} />
                {doubt}
              </div>
              <p>{evidence}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.principlesSection} aria-labelledby="principles-title">
        <div className={styles.sectionIntroCompact}>
          <p className={styles.kicker}>How I work</p>
          <h2 id="principles-title">Three operating principles.</h2>
        </div>
        <div className={styles.principlesGrid}>
          {principles.map(([title, body], index) => (
            <article className={styles.principleCard} key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="final-cta-title">
        <p className={styles.kicker}>A concrete next step</p>
        <h2 id="final-cta-title">Give me one real problem to investigate.</h2>
        <p>
          I will ask the right questions, build or diagnose something useful, and communicate the
          tradeoffs clearly.
        </p>
        <a className={styles.primaryCta} href="mailto:hello@felmon.tech?subject=A%20problem%20worth%20solving">
          Start a conversation
          <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </section>

      <footer className={styles.footer}>
        <span>Felmon Fekadu · Calgary, Alberta</span>
        <a href="https://github.com/felmonon" target="_blank" rel="noopener noreferrer">
          github.com/felmonon
        </a>
      </footer>
    </main>
  )
}
