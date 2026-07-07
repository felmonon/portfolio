import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Building msw-inspector | Felmon Fekadu',
  description:
    'Case study on building msw-inspector, an AST-based TypeScript CLI and GitHub Action for finding stale and missing MSW mocks.',
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
    <section className="border-t border-[#232326] py-12">
      <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#C9A86A]">{eyebrow}</div>
      <h2 className="mb-5 font-serif text-3xl leading-tight text-[#F5F5F0] md:text-4xl">{title}</h2>
      <div className="space-y-5 text-base leading-relaxed text-[#D4D4D8]">{children}</div>
    </section>
  )
}

export default function MswInspectorCaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 py-10 text-[#F5F5F0] xl:px-8">
      <article className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="mb-12 inline-flex text-sm text-[#A1A1AA] transition-colors hover:text-[#C9A86A]"
        >
          Back to portfolio
        </Link>

        <header className="pb-12">
          <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-[#C9A86A]">
            Developer tool case study
          </div>
          <h1 className="mb-6 max-w-4xl font-serif text-5xl leading-tight text-[#F5F5F0] md:text-6xl">
            Building msw-inspector: finding stale and missing MSW mocks with AST analysis
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-[#A1A1AA]">
            `msw-inspector` is an open-source TypeScript developer tool for checking whether a
            codebase&apos;s Mock Service Worker handlers still match the API calls the app actually makes.
            It ships as an npm CLI and a GitHub Marketplace Action.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/felmonon/msw-inspector"
              className="rounded-xl bg-[#C9A86A] px-5 py-2.5 text-sm font-medium text-[#0A0A0A] transition-colors hover:bg-[#D4B57A]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inspect source
            </a>
            <a
              href="https://www.npmjs.com/package/msw-inspector-cli"
              className="rounded-xl border border-[#232326] px-5 py-2.5 text-sm font-medium text-[#F5F5F0] transition-colors hover:border-[#C9A86A] hover:text-[#C9A86A]"
              target="_blank"
              rel="noopener noreferrer"
            >
              npm package
            </a>
            <a
              href="https://github.com/marketplace/actions/msw-inspector"
              className="rounded-xl border border-[#232326] px-5 py-2.5 text-sm font-medium text-[#F5F5F0] transition-colors hover:border-[#C9A86A] hover:text-[#C9A86A]"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Marketplace
            </a>
          </div>
        </header>

        <Section eyebrow="01" title="Problem">
          <p>
            MSW works best when handlers represent the real request surface of the application. Over
            time, that relationship drifts: new API calls are added without matching handlers, and old
            handlers remain after product code stops calling those endpoints.
          </p>
          <p>
            Both problems weaken test confidence. Missing handlers hide integration gaps. Stale handlers
            create a mock layer that looks comprehensive but no longer reflects current product behavior.
          </p>
        </Section>

        <Section eyebrow="02" title="What I built">
          <ul className="grid gap-3 text-[#D4D4D8] md:grid-cols-2">
            {[
              'TypeScript CLI that scans source files for API calls.',
              'MSW handler scanner for modern http.* and legacy rest.* handlers.',
              'Static endpoint extraction for fetch, axios, and axios.create.',
              'Normalization layer for methods, origins, and paths.',
              'CI-friendly JSON output and threshold flags.',
              'GitHub Action wrapper for job summaries and PR workflow integration.',
            ].map((item) => (
              <li key={item} className="rounded-xl border border-[#232326] bg-[#111111] p-4">
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="03" title="Technical approach">
          <p>
            The core choice was AST analysis instead of regex matching. The CLI uses `ts-morph` so the
            scanner can inspect TypeScript and JavaScript syntax, identify call expressions, and evaluate
            static URL expressions where the source code makes them available.
          </p>
          <p>
            The scanner collects API call sites and MSW handler registrations, normalizes both sides into
            comparable endpoint records, then reports unmocked calls, stale handlers, and unsupported
            dynamic patterns. Unsupported output is deliberate: CI tooling should report what it can prove
            instead of fabricating coverage.
          </p>
        </Section>

        <Section eyebrow="04" title="Proof runs">
          <div className="overflow-hidden rounded-xl border border-[#232326]">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="bg-[#111111] text-[#C9A86A]">
                <tr>
                  {['Repo', 'Handlers', 'API calls', 'Unmocked', 'Stale', 'Unsupported', 'What it shows'].map((heading) => (
                    <th key={heading} className="border-b border-[#232326] px-4 py-3 font-medium">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {proofRuns.map((run) => (
                  <tr key={run.repo} className="border-b border-[#232326] last:border-b-0">
                    <td className="px-4 py-3 text-[#F5F5F0]">{run.repo}</td>
                    <td className="px-4 py-3">{run.handlers}</td>
                    <td className="px-4 py-3">{run.calls}</td>
                    <td className="px-4 py-3">{run.unmocked}</td>
                    <td className="px-4 py-3">{run.stale}</td>
                    <td className="px-4 py-3">{run.unsupported}</td>
                    <td className="px-4 py-3 text-[#A1A1AA]">{run.takeaway}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section eyebrow="05" title="Outcome">
          <p>
            The project demonstrates end-to-end developer tooling work: AST parsing, CLI design, report
            formats, CI integration, npm packaging, GitHub Marketplace distribution, and clear handling of
            static-analysis limits.
          </p>
          <p>
            The next product work is config-file support, more framework examples, clearer unsupported
            pattern messages, and baseline or delta reporting for pull requests.
          </p>
        </Section>
      </article>
    </main>
  )
}
