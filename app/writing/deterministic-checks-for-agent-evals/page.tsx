import type { Metadata } from 'next'
import Link from 'next/link'
import { JetBrains_Mono, Source_Serif_4, Space_Grotesk } from 'next/font/google'
import styles from '../writing.module.css'

const sans = Space_Grotesk({ subsets: ['latin'], variable: '--font-sans' })
const serif = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Deterministic checks beat model-judged evals in CI | Felmon Fekadu',
  description:
    'Why I gate agent behavior with schema, budget, safety, and grounding checks instead of asking a second model for its opinion.',
  alternates: { canonical: '/writing/deterministic-checks-for-agent-evals' },
}

const postJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Deterministic checks beat model-judged evals in CI',
  datePublished: '2026-07-14',
  dateModified: '2026-07-14',
  url: 'https://felmon.tech/writing/deterministic-checks-for-agent-evals',
  author: {
    '@type': 'Person',
    name: 'Felmon Fekadu',
    url: 'https://felmon.tech',
  },
}

export default function Post() {
  return (
    <main className={`${styles.page} ${sans.variable} ${serif.variable} ${mono.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(postJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <header className={styles.siteHeader}>
        <Link className={styles.identity} href="/">
          Felmon Fekadu
        </Link>
        <Link className={styles.backLink} href="/writing">
          All writing
        </Link>
      </header>

      <article className={styles.content}>
        <p className={styles.eyebrow}>Agent reliability</p>
        <h1>Deterministic checks beat model-judged evals in CI.</h1>
        <p className={styles.meta}>July 14, 2026 · Felmon Fekadu</p>

        <div className={styles.prose}>
          <p>
            An agent can complete its task and still fail you. While building{' '}
            <a
              href="https://github.com/felmonon/agent-reliability-harness"
              target="_blank"
              rel="noopener noreferrer"
            >
              agent-reliability-harness
            </a>
            , I kept running into the same category of bug: the trace looks successful, the user
            got an answer, and something in the middle was still wrong. A tool was called that the
            workflow never approved. A required argument was missing and the tool silently coped. A
            response that needed evidence shipped without a single citation.
          </p>
          <p>
            The popular fix is LLM-as-judge: hand the trace to a second model and ask whether the
            agent behaved. I think that is the wrong default for CI, and I want to argue for
            something more boring.
          </p>

          <h2>The problem with a judge in the merge path</h2>
          <p>
            A model judge in CI has three costs that compound. It is <strong>flaky</strong>: the
            same trace can pass on Monday and fail on Tuesday, which trains a team to re-run the
            pipeline instead of reading the failure. It is <strong>expensive</strong>: every push
            burns tokens on questions that mostly have mechanical answers. And it is{' '}
            <strong>unexplainable</strong> in the way that matters for debugging: &ldquo;the judge
            scored this 6/10&rdquo; does not tell you which step to fix.
          </p>
          <p>
            None of that means judges are useless. It means the merge path is the wrong place for
            an opinion.
          </p>

          <h2>What I gate on instead</h2>
          <p>
            The harness validates agent execution traces against a versioned policy file. Four
            families of checks, all deterministic:
          </p>
          <ul>
            <li>
              <strong>Tool-call contracts.</strong> Each allowed tool declares required and
              optional arguments with types. Unapproved tools, missing arguments, wrong types, and
              undeclared arguments all fail loudly.
            </li>
            <li>
              <strong>Budgets.</strong> Maximum total latency, per-step latency, and total cost.
              An agent that answers correctly but blows the cost envelope is still a failing agent.
            </li>
            <li>
              <strong>Safety patterns.</strong> Case-insensitive regexes for content that should
              never appear in a tool argument, response, or tool output: prompt-injection phrases,
              password-like strings.
            </li>
            <li>
              <strong>Grounding coverage.</strong> Responses marked as requiring evidence are
              measured for citation coverage against a policy threshold.
            </li>
          </ul>
          <p>The output is a weighted 0&ndash;100 score per trace, and the failures are named:</p>
          <pre>
            <code>{`[PASS] lead-qualification-0001  score=100.0/100
[FAIL] renewal-workflow-0007    score=80.0/100
[FAIL] support-escalation-0042  score=70.0/100

SUMMARY: 1/3 traces passed, average score 83.3/100`}</code>
          </pre>
          <p>
            When <code>support-escalation-0042</code> fails, the report says why: an unapproved
            tool, missing citations, and an injection phrase in a tool output. That is a diff-sized
            fix, not an investigation.
          </p>

          <h2>Why determinism is the feature</h2>
          <p>
            Same trace, same policy, same score, forever. That single property buys everything
            else: failures are reproducible, so they are debuggable. Checks are free, so they run
            on every push. Policies live in JSON, so tightening a budget or approving a tool is a
            code-reviewed diff with an author and a reason. The policy file becomes the honest,
            versioned record of what the team considers acceptable agent behavior.
          </p>
          <p>
            I also kept the runtime standard-library only. No framework dependency means adopting
            it in CI is one install and one command, and there is no second agent stack to
            maintain inside your test infrastructure.
          </p>

          <h2>Where judges still belong</h2>
          <p>
            Offline, on samples, for the qualities that genuinely resist rules: tone,
            helpfulness, whether an answer actually addressed the question. Run a judge nightly
            over a sampled slice and review the trend line. Just do not let an opinion block a
            merge.
          </p>

          <h2>Honest limits</h2>
          <p>
            Regex safety checks are tripwires, not guarantees; they catch known-bad patterns and
            nothing else. Schema checks catch drift, not intent. And a 100/100 trace can still be
            a bad user experience. Deterministic gates do not replace evaluation; they are the
            floor that makes everything above them cheaper to build.
          </p>
          <p>
            The code, sample policies, and failing traces are in{' '}
            <a
              href="https://github.com/felmonon/agent-reliability-harness"
              target="_blank"
              rel="noopener noreferrer"
            >
              the repository
            </a>
            . If you gate agents differently in CI, I would genuinely like to hear how:{' '}
            <a href="mailto:hello@felmon.tech">hello@felmon.tech</a>.
          </p>
        </div>
      </article>

      <footer className={styles.footer}>
        <span>Felmon Fekadu · Calgary, Alberta</span>
        <Link href="/writing">All writing</Link>
      </footer>
    </main>
  )
}
