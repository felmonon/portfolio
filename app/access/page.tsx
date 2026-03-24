import type { Metadata } from 'next'
import { socialLinks } from '@/lib/data'

interface AccessPageProps {
  searchParams?: {
    error?: string
    next?: string
  }
}

function normalizeCredential(value: string | undefined) {
  return value?.trim() ?? ''
}

const isPrivateModeEnabled =
  normalizeCredential(process.env.PORTFOLIO_VISIBILITY).toLowerCase() === 'private'
const emailLink = socialLinks.find((link) => link.icon === 'mail')
const githubLink = socialLinks.find((link) => link.icon === 'github')
const linkedInLink = socialLinks.find((link) => link.icon === 'linkedin')

export const metadata: Metadata = {
  title: 'Private Access | Felmon Fekadu',
  description: 'Private reviewer access for Felmon Fekadu’s engineering portfolio.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AccessPage({ searchParams }: AccessPageProps) {
  const hasError = searchParams?.error === 'invalid'
  const nextPath =
    searchParams?.next && searchParams.next.startsWith('/') && !searchParams.next.startsWith('//')
      ? searchParams.next
      : '/'

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F0]">
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(#F5F5F0 1px, transparent 1px), linear-gradient(90deg, #F5F5F0 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] items-center px-4 py-12 md:px-8 md:py-16">
        <div className="grid w-full gap-6 xl:grid-cols-12 xl:gap-8">
          <section className="flex flex-col justify-between rounded-[32px] border border-[#232326] bg-[#111111]/90 p-8 shadow-[0_32px_120px_rgba(0,0,0,0.35)] backdrop-blur md:p-10 xl:col-span-7">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-[#3B3020] bg-[#171717] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-[#C9A86A]">
                Private portfolio access
              </div>

              <h1 className="font-serif text-4xl leading-[1.02] text-[#F5F5F0] md:text-6xl">
                Review the work behind the gate.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#A1A1AA]">
                This portfolio is shared privately. Enter your access credentials to review live
                products, open-source contributions, and engineering case studies.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-[#232326] bg-[#0D0D0D] p-5">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#71717A]">
                  Included
                </div>
                <div className="mt-2 text-lg font-medium text-[#F5F5F0]">Flagship products</div>
                <p className="mt-2 text-sm leading-relaxed text-[#8F8F96]">
                  Live product walkthroughs, architecture notes, and inspectable source links.
                </p>
              </div>

              <div className="rounded-2xl border border-[#232326] bg-[#0D0D0D] p-5">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#71717A]">
                  Included
                </div>
                <div className="mt-2 text-lg font-medium text-[#F5F5F0]">OSS proof</div>
                <p className="mt-2 text-sm leading-relaxed text-[#8F8F96]">
                  Maintainer-reviewed upstream work and public repositories grouped by depth.
                </p>
              </div>

              <div className="rounded-2xl border border-[#232326] bg-[#0D0D0D] p-5">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#71717A]">
                  Included
                </div>
                <div className="mt-2 text-lg font-medium text-[#F5F5F0]">Resume + contact</div>
                <p className="mt-2 text-sm leading-relaxed text-[#8F8F96]">
                  Current resume, contact paths, and the full engineering narrative.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-[#232326] bg-[#111111]/95 p-8 shadow-[0_32px_120px_rgba(0,0,0,0.4)] backdrop-blur md:p-10 xl:col-span-5">
            <div className="mb-8">
              <div className="text-xs font-medium uppercase tracking-[0.24em] text-[#C9A86A]">
                Sign in
              </div>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#F5F5F0]">
                Enter credentials to continue
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#8F8F96]">
                Access is limited to approved reviewers. The session stays active on this browser
                after a successful sign-in.
              </p>

              {!isPrivateModeEnabled ? (
                <p className="mt-3 text-sm leading-relaxed text-[#B0B0B6]">
                  The public portfolio is already live. This page is only needed when private
                  review mode is enabled.
                </p>
              ) : null}
            </div>

            {isPrivateModeEnabled ? (
              <form action="/api/access" method="post" className="space-y-5">
                <input type="hidden" name="next" value={nextPath} />

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#F5F5F0]">Username</span>
                  <input
                    type="text"
                    name="username"
                    autoComplete="username"
                    required
                    className="w-full rounded-2xl border border-[#2B2B31] bg-[#0D0D0D] px-4 py-3 text-base text-[#F5F5F0] outline-none transition-all placeholder:text-[#5C5C63] focus:border-[#C9A86A] focus:ring-2 focus:ring-[#C9A86A]/20"
                    placeholder="Enter username"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#F5F5F0]">Password</span>
                  <input
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    required
                    aria-invalid={hasError}
                    className="w-full rounded-2xl border border-[#2B2B31] bg-[#0D0D0D] px-4 py-3 text-base text-[#F5F5F0] outline-none transition-all placeholder:text-[#5C5C63] focus:border-[#C9A86A] focus:ring-2 focus:ring-[#C9A86A]/20 aria-[invalid=true]:border-[#A84B4B] aria-[invalid=true]:focus:ring-[#A84B4B]/20"
                    placeholder="Enter password"
                  />
                </label>

                {hasError ? (
                  <div className="rounded-2xl border border-[#5A2E2E] bg-[#281717] px-4 py-3 text-sm text-[#F2C1C1]">
                    The username or password was incorrect. Try again with the shared access
                    credentials.
                  </div>
                ) : null}

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#C9A86A] px-5 py-3 font-medium text-[#0A0A0A] transition-all duration-300 hover:bg-[#D4B57A] hover:shadow-[0_0_24px_rgba(201,168,106,0.25)] focus:outline-none focus:ring-2 focus:ring-[#C9A86A] focus:ring-offset-2 focus:ring-offset-[#111111]"
                >
                  Open portfolio
                </button>
              </form>
            ) : (
              <div className="rounded-2xl border border-[#2B2B31] bg-[#0D0D0D] p-5">
                <div className="text-sm font-medium text-[#F5F5F0]">Public mode is enabled.</div>
                <p className="mt-2 text-sm leading-relaxed text-[#8F8F96]">
                  The portfolio homepage is publicly accessible, so you do not need credentials to
                  continue.
                </p>
              </div>
            )}

            <div className="mt-8 border-t border-[#232326] pt-6">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#71717A]">
                Access note
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#8F8F96]">
                If you need credentials, request them directly from Felmon. Portfolio content,
                resume assets, and project links remain protected until access is granted.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {!isPrivateModeEnabled ? (
                  <a
                    href="/"
                    className="inline-flex items-center justify-center rounded-2xl border border-[#2B2B31] px-4 py-2 text-sm text-[#F5F5F0] transition-colors hover:border-[#C9A86A] hover:text-[#C9A86A]"
                  >
                    View public portfolio
                  </a>
                ) : null}

                {emailLink ? (
                  <a
                    href={emailLink.url}
                    className="inline-flex items-center justify-center rounded-2xl border border-[#2B2B31] px-4 py-2 text-sm text-[#F5F5F0] transition-colors hover:border-[#C9A86A] hover:text-[#C9A86A]"
                  >
                    Email Felmon
                  </a>
                ) : null}

                {linkedInLink ? (
                  <a
                    href={linkedInLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border border-[#2B2B31] px-4 py-2 text-sm text-[#F5F5F0] transition-colors hover:border-[#C9A86A] hover:text-[#C9A86A]"
                  >
                    LinkedIn
                  </a>
                ) : null}

                {githubLink ? (
                  <a
                    href={githubLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border border-[#2B2B31] px-4 py-2 text-sm text-[#F5F5F0] transition-colors hover:border-[#C9A86A] hover:text-[#C9A86A]"
                  >
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
