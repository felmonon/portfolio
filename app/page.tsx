import Image from 'next/image'
import type { ReactNode } from 'react'
import {
  ArrowRight,
  Check,
  Circle,
  Database,
  ExternalLink,
  FileText,
  GitBranch,
  Github,
  Linkedin,
  Mail,
  Shield,
  Star,
  Zap,
} from 'lucide-react'
import {
  aboutSection,
  contactSection,
  engineeringDecisions,
  githubSection,
  heroSection,
  journeyTimeline,
  proofBarItems,
  proofOfWork,
  projects,
  resumeLinks,
  socialLinks,
} from '@/lib/data'

interface CaseStudyBlockProps {
  category: string
  name: string
  tagline: string
  problem: string
  solution: string
  architecture: string
  constraints: string
  outcome: string
  stack: string[]
  imageGradient: string
  href: string
  ctaLabel: string
  secondaryHref?: string
  secondaryLabel?: string
  proofItems: string[]
}

interface MetricCardProps {
  value: string
  label: string
  description?: string
}

interface ButtonLinkProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  showArrow?: boolean
  newTab?: boolean
  className?: string
}

interface RepoCardProps {
  name: string
  description: string
  language: string
  stars?: number
  category: string
  url: string
}

interface TimelineItemProps {
  year: string
  title: string
  description: string
  type: 'education' | 'work' | 'project' | 'milestone'
}

const focusRingClass =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]'

const decisionIconMap = {
  database: Database,
  zap: Zap,
  shield: Shield,
}

const primaryResumeLink = resumeLinks[0]
const emailLink = socialLinks.find((link) => link.icon === 'mail')
const githubLink = socialLinks.find((link) => link.icon === 'github')
const linkedInLink = socialLinks.find((link) => link.icon === 'linkedin')
const caseStudyProjects = projects.filter((project) => project.caseStudy)
const heroProjects = caseStudyProjects.slice(0, 2)
const heroSignals = [
  'Live product links',
  'Inspectable source code',
  'Maintainer-reviewed OSS proof',
]
const highlightedRepos = githubSection.repoGroups
  .flatMap((group) =>
    group.repos.map((repo) => ({
      ...repo,
      groupTitle: group.title,
    }))
  )
  .slice(0, 6)

function PrimaryButton({
  children,
  href,
  onClick,
  showArrow = false,
  newTab = false,
  className = '',
}: ButtonLinkProps) {
  const combinedClassName = [
    'inline-flex items-center justify-center gap-2 rounded-xl bg-[#C9A86A] px-6 py-3 text-sm font-medium text-[#0A0A0A] transition-all duration-300 hover:scale-[1.02] hover:bg-[#D4B57A] hover:shadow-[0_0_20px_rgba(201,168,106,0.3)] active:scale-[0.98]',
    focusRingClass,
    className,
  ]
    .join(' ')
    .trim()

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
      >
        {children}
        {showArrow && <ArrowRight className="h-4 w-4 transition-transform" />}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={combinedClassName}>
      {children}
      {showArrow && <ArrowRight className="h-4 w-4 transition-transform" />}
    </button>
  )
}

function SecondaryButton({
  children,
  href,
  onClick,
  showArrow = false,
  newTab = false,
  className = '',
}: ButtonLinkProps) {
  const combinedClassName = [
    'inline-flex items-center justify-center gap-2 rounded-xl border border-[#232326] px-6 py-3 text-sm font-medium text-[#F5F5F0] transition-all duration-300 hover:scale-[1.02] hover:border-[#C9A86A] hover:bg-[#C9A86A]/5 hover:text-[#C9A86A] active:scale-[0.98]',
    focusRingClass,
    className,
  ]
    .join(' ')
    .trim()

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
      >
        {children}
        {showArrow && <ArrowRight className="h-4 w-4 transition-transform" />}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={combinedClassName}>
      {children}
      {showArrow && <ArrowRight className="h-4 w-4 transition-transform" />}
    </button>
  )
}

function TechTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[#232326] bg-[#171717] px-3 py-1 text-xs text-[#A1A1AA]">
      {children}
    </span>
  )
}

function AnimatedMetric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="mb-1 text-3xl font-semibold text-[#F5F5F0]">{value}</div>
      <div className="text-sm text-[#71717A]">{label}</div>
    </div>
  )
}

function MetricCard({ value, label, description }: MetricCardProps) {
  return (
    <div className="group rounded-2xl border border-[#232326] bg-[#111111] p-6 transition-all duration-300 hover:border-[#C9A86A]/40 hover:bg-[#111111]/80">
      <AnimatedMetric value={value} label={label} />
      {description ? <div className="mt-2 text-xs leading-relaxed text-[#71717A]">{description}</div> : null}
    </div>
  )
}

function TimelineItem({ year, title, description, type }: TimelineItemProps) {
  const typeColors = {
    education: '#C9A86A',
    work: '#7FB38A',
    project: '#C9A86A',
    milestone: '#7FB38A',
  }

  const typeLabels = {
    education: 'Education',
    work: 'Work',
    project: 'Project',
    milestone: 'Milestone',
  }

  return (
    <div className="relative border-l border-[#232326] pb-8 pl-8 last:border-l-0 last:pb-0">
      <div
        className="absolute left-0 top-0 h-3 w-3 -translate-x-[7px] rounded-full border-2"
        style={{
          backgroundColor: typeColors[type],
          borderColor: '#0A0A0A',
        }}
      />

      <div className="mb-2 flex items-center gap-3">
        <span className="text-xs font-medium text-[#71717A]">{year}</span>
        <span
          className="rounded bg-[#171717] px-2 py-0.5 text-xs"
          style={{
            color: typeColors[type],
          }}
        >
          {typeLabels[type]}
        </span>
      </div>

      <h3 className="mb-1 text-lg font-medium text-[#F5F5F0]">{title}</h3>
      <p className="max-w-3xl text-sm leading-relaxed text-[#A1A1AA]">{description}</p>
    </div>
  )
}

function RepoCard({ name, description, language, stars, category, url }: RepoCardProps) {
  const languageColors: Record<string, string> = {
    TypeScript: '#3178c6',
    Python: '#3572A5',
    JavaScript: '#f1e05a',
    Go: '#00ADD8',
    Rust: '#dea584',
    Swift: '#f05138',
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block rounded-2xl border border-[#232326] bg-[#111111] p-6 transition-colors hover:border-[#C9A86A] ${focusRingClass}`}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex items-center gap-2">
          <GitBranch className="h-4 w-4 text-[#71717A]" />
          <span className="font-medium text-[#F5F5F0]">{name}</span>
        </div>

        <ExternalLink className="h-4 w-4 flex-shrink-0 text-[#71717A] transition-colors group-hover:text-[#C9A86A]" />
      </div>

      <p className="mb-4 text-sm leading-relaxed text-[#A1A1AA]">{description}</p>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Circle
            className="h-3 w-3"
            style={{ color: languageColors[language] || '#71717A' }}
            fill="currentColor"
          />
          <span className="text-xs text-[#71717A]">{language}</span>
        </div>

        <div className="flex items-center gap-3 text-xs text-[#71717A]">
          <span className="rounded bg-[#171717] px-2 py-1">{category}</span>
          {stars !== undefined ? (
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              {stars}
            </span>
          ) : null}
        </div>
      </div>
    </a>
  )
}

function getContributionCellClass(contributionCount: number) {
  if (contributionCount <= 0) return 'bg-[#171717]'
  if (contributionCount <= 1) return 'bg-[#C9A86A]/20'
  if (contributionCount <= 2) return 'bg-[#C9A86A]/40'
  if (contributionCount <= 5) return 'bg-[#C9A86A]/60'
  if (contributionCount <= 8) return 'bg-[#C9A86A]/80'
  return 'bg-[#C9A86A]'
}

function CaseStudyBlock({
  category,
  name,
  tagline,
  problem,
  solution,
  architecture,
  constraints,
  outcome,
  stack,
  imageGradient,
  href,
  ctaLabel,
  secondaryHref,
  secondaryLabel,
  proofItems,
}: CaseStudyBlockProps) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-[#232326] bg-[#111111] transition-all duration-500 hover:border-[#C9A86A]/50 hover:shadow-[0_0_40px_rgba(201,168,106,0.1)]">
      <div className="grid xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)]">
        <div className="border-b border-[#232326] p-8 xl:border-b-0 xl:border-r">
          <div className="mb-4 inline-flex rounded-full border border-[#3A3021] bg-[#171717] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#C9A86A]">
            {category}
          </div>

          <div
            className="relative flex aspect-[5/4] items-end overflow-hidden rounded-2xl border border-white/5 p-6"
            style={{ background: imageGradient }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_45%)]" />
            <div className="relative z-10 max-w-[18rem]">
              <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/60">Flagship proof</div>
              <div className="font-serif text-4xl leading-tight text-[#F5F5F0]">{name}</div>
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl border border-[#232326] bg-[#0A0A0A] p-4">
              <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#71717A]">Result</div>
              <p className="text-sm leading-relaxed text-[#7FB38A]">{outcome}</p>
            </div>

            <div className="rounded-2xl border border-[#232326] bg-[#0A0A0A] p-4">
              <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#71717A]">System</div>
              <p className="text-sm leading-relaxed text-[#A1A1AA]">{architecture}</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-6">
            <h3 className="mb-2 text-3xl font-semibold text-[#F5F5F0]">{name}</h3>
            <p className="text-base text-[#C9A86A]">{tagline}</p>
          </div>

          <p className="mb-6 max-w-3xl text-base leading-relaxed text-[#D4D4D8]">{solution}</p>

          <div className="mb-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#232326] bg-[#0A0A0A] p-5">
              <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#71717A]">Why it exists</div>
              <p className="text-sm leading-relaxed text-[#A1A1AA]">{problem}</p>
            </div>

            <div className="rounded-2xl border border-[#232326] bg-[#0A0A0A] p-5">
              <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#71717A]">Constraint</div>
              <p className="text-sm leading-relaxed text-[#A1A1AA]">{constraints}</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#71717A]">Inspectable proof</div>
            <div className="grid gap-3 md:grid-cols-3">
              {proofItems.slice(0, 3).map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-2xl border border-[#232326] bg-[#0A0A0A] px-4 py-3 text-sm leading-relaxed text-[#A1A1AA]"
                >
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#7FB38A]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#232326] pt-5">
            <div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#71717A]">Stack</div>
            <div className="mb-5 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <PrimaryButton href={href} newTab showArrow className="px-5 py-2.5">
                {ctaLabel}
              </PrimaryButton>

              {secondaryHref && secondaryLabel ? (
                <SecondaryButton href={secondaryHref} newTab className="px-5 py-2.5">
                  {secondaryLabel}
                  <ExternalLink className="h-4 w-4" />
                </SecondaryButton>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function Navigation() {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'case-studies', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'github', label: 'GitHub' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#232326]/70 bg-[#0A0A0A]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-4 xl:px-8">
        <a
          href="#hero"
          className={`text-lg font-serif text-[#F5F5F0] transition-colors hover:text-[#C9A86A] ${focusRingClass}`}
        >
          Felmon Fekadu
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-lg px-4 py-2 text-sm text-[#A1A1AA] transition-all hover:bg-[#111111] hover:text-[#F5F5F0] ${focusRingClass}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {primaryResumeLink ? (
            <a
              href={primaryResumeLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden rounded-lg px-4 py-2 text-sm text-[#A1A1AA] transition-colors hover:text-[#F5F5F0] lg:inline-flex ${focusRingClass}`}
            >
              Resume
            </a>
          ) : null}

          {emailLink ? (
            <a
              href={emailLink.url}
              className={`inline-flex items-center gap-2 rounded-lg border border-[#232326] bg-[#111111] px-4 py-2 text-sm text-[#F5F5F0] transition-colors hover:border-[#C9A86A] hover:text-[#C9A86A] ${focusRingClass}`}
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          ) : null}
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  const mergedProof = proofOfWork[0]

  return (
    <section id="hero" className="scroll-mt-28 overflow-hidden px-6 pt-28 xl:px-8">
      <div className="relative mx-auto min-h-[calc(100vh-7rem)] max-w-[1440px]">
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(#F5F5F0 1px, transparent 1px), linear-gradient(90deg, #F5F5F0 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
        </div>

        <div
          className="absolute right-[10%] top-[12%] h-[420px] w-[420px] rounded-full opacity-[0.04] blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #C9A86A 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 grid gap-10 py-10 xl:grid-cols-12 xl:items-center">
          <div className="xl:col-span-7">
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#C9A86A]">
              {heroSection.eyebrow}
            </div>

            <h1 className="mb-6 max-w-4xl font-serif text-5xl leading-[1.05] text-[#F5F5F0] md:text-6xl xl:text-7xl">
              I build products that are <span className="text-[#C9A86A]">useful</span>,{' '}
              <span className="text-[#C9A86A]">fast</span>, and{' '}
              <span className="text-[#C9A86A]">real</span>.
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[#A1A1AA] md:text-xl">
              {heroSection.summary}
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-4">
              <PrimaryButton href="#case-studies" showArrow>
                View case studies
              </PrimaryButton>

              {githubLink ? (
                <SecondaryButton href={githubLink.url} newTab>
                  <Github className="h-4 w-4" />
                  See GitHub
                </SecondaryButton>
              ) : null}

              {primaryResumeLink ? (
                <a
                  href={primaryResumeLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm text-[#A1A1AA] transition-colors hover:text-[#C9A86A] ${focusRingClass}`}
                >
                  Resume
                </a>
              ) : null}
            </div>

            <div className="flex flex-wrap gap-3">
              {heroSignals.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-[#232326] bg-[#111111] px-4 py-2 text-sm text-[#D4D4D8]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="xl:col-span-5">
            <div className="rounded-[28px] border border-[#232326] bg-[#111111] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.22)]">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <div className="mb-2 text-[11px] uppercase tracking-[0.2em] text-[#71717A]">Fastest proof</div>
                  <h2 className="font-serif text-3xl leading-tight text-[#F5F5F0]">Open real work first</h2>
                </div>

                <div className="rounded-full border border-[#3A3021] bg-[#171717] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#C9A86A]">
                  Public evidence
                </div>
              </div>

              <div className="space-y-4">
                {heroProjects.map((project) => (
                  <a
                    key={project.title}
                    href={project.live || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block rounded-2xl border border-[#232326] bg-[#0A0A0A] p-5 transition-colors hover:border-[#C9A86A] ${focusRingClass}`}
                  >
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <div className="text-sm font-medium text-[#F5F5F0]">{project.title}</div>
                      <ArrowRight className="h-4 w-4 text-[#71717A] transition-colors group-hover:text-[#C9A86A]" />
                    </div>
                    <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#C9A86A]">{project.category}</div>
                    <p className="text-sm leading-relaxed text-[#A1A1AA]">{project.outcome}</p>
                  </a>
                ))}

                {mergedProof ? (
                  <a
                    href={mergedProof.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block rounded-2xl border border-[#232326] bg-[#0A0A0A] p-5 transition-colors hover:border-[#7FB38A] ${focusRingClass}`}
                  >
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <div className="text-sm font-medium text-[#F5F5F0]">{mergedProof.label}</div>
                      <ExternalLink className="h-4 w-4 text-[#71717A] transition-colors group-hover:text-[#7FB38A]" />
                    </div>
                    <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#7FB38A]">{mergedProof.kind}</div>
                    <p className="text-sm leading-relaxed text-[#A1A1AA]">{mergedProof.status}</p>
                  </a>
                ) : null}
              </div>

              <div className="mt-6 border-t border-[#232326] pt-5">
                <div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#71717A]">Stack focus</div>
                <div className="flex flex-wrap gap-2">
                  {heroSection.stackFocus.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProofBar() {
  return (
    <section className="border-t border-[#232326] px-6 py-20 xl:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#C9A86A]">Proof snapshot</div>
            <h2 className="font-serif text-4xl leading-tight text-[#F5F5F0]">Evidence you can scan in seconds</h2>
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-[#71717A]">
            This section stays quantitative. The detailed proof lives in the project and open-source sections below.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {proofBarItems.map((metric) => (
            <div key={metric.label}>
              <MetricCard value={metric.value} label={metric.label} description={metric.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="scroll-mt-28 border-t border-[#232326] px-6 py-28 xl:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 xl:grid-cols-12 xl:gap-12">
          <div className="xl:col-span-4">
            <div className="group mb-6 overflow-hidden rounded-[28px] border border-[#232326] bg-[#111111] transition-all duration-500 hover:border-[#C9A86A]/30">
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-[#171717] to-[#111111]">
                <Image
                  src="/images/felmon-portrait.jpg"
                  alt="Felmon Fekadu portrait"
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 33vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/20 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A86A]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </div>

            <div className="rounded-2xl border border-[#232326] bg-[#111111] p-6">
              {aboutSection.meta.map((item, index) => (
                <div key={item.label} className={index === aboutSection.meta.length - 1 ? '' : 'mb-3 pb-3 border-b border-[#232326]'}>
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-sm text-[#71717A]">{item.label}</span>
                    <span className="text-right text-sm text-[#F5F5F0]">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="xl:col-span-8">
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#C9A86A]">Engineering profile</div>

            <h2 className="mb-6 font-serif text-5xl leading-tight text-[#F5F5F0]">{aboutSection.title}</h2>

            <div className="mb-12 space-y-4 text-lg leading-relaxed text-[#A1A1AA]">
              {aboutSection.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="rounded-[28px] border border-[#232326] bg-[#111111] p-8">
              <div className="mb-6 text-sm font-medium text-[#C9A86A]">How I work</div>

              <div className="grid gap-6 md:grid-cols-2">
                {aboutSection.principles.map(([title, copy]) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-[#232326] bg-[#171717]">
                      <Check className="h-3 w-3 text-[#7FB38A]" />
                    </div>
                    <div>
                      <div className="mb-1 font-medium text-[#F5F5F0]">{title}</div>
                      <div className="text-sm leading-relaxed text-[#71717A]">{copy}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-28 border-t border-[#232326] px-6 py-28 xl:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16">
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#C9A86A]">Featured work</div>
          <h2 className="mb-4 font-serif text-5xl leading-tight text-[#F5F5F0]">Case studies</h2>
          <p className="max-w-3xl text-xl leading-relaxed text-[#A1A1AA]">
            Real products, real constraints, real outcomes. Each project is compressed for fast review and points straight to inspectable proof.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudyProjects.map((project) => (
            <CaseStudyBlock
              key={project.title}
              category={project.category}
              name={project.title}
              tagline={project.tagline ?? project.description}
              problem={project.problem ?? project.description}
              solution={project.solution ?? project.description}
              architecture={project.architecture ?? 'Public project implementation'}
              constraints={project.constraints ?? 'Built under real product constraints.'}
              outcome={project.outcome ?? project.description}
              stack={project.tech}
              imageGradient={project.imageGradient ?? 'linear-gradient(135deg, #171717 0%, #232326 100%)'}
              href={project.live || project.github}
              ctaLabel={project.ctaLabel ?? 'Open project'}
              secondaryHref={project.secondaryHref}
              secondaryLabel={project.secondaryLabel}
              proofItems={project.proofItems ?? ['Public project proof available']}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function EngineeringDecisions() {
  return (
    <section className="border-t border-[#232326] px-6 py-28 xl:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 text-center">
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#C9A86A]">Technical depth</div>
          <h2 className="mb-4 font-serif text-5xl leading-tight text-[#F5F5F0]">Engineering decisions, not just polished screens</h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-[#A1A1AA]">
            The UI matters, but the work underneath it matters more. These are the patterns I use to keep products stable and credible.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {engineeringDecisions.map((decision) => {
            const Icon = decisionIconMap[decision.icon as keyof typeof decisionIconMap]

            return (
              <div
                key={decision.title}
                className="rounded-[28px] border border-[#232326] bg-[#111111] p-8 transition-colors hover:border-[#C9A86A]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#232326] bg-[#171717]">
                  <Icon className="h-6 w-6 text-[#C9A86A]" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-[#F5F5F0]">{decision.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-[#A1A1AA]">{decision.copy}</p>

                <div className="rounded-2xl border border-[#232326] bg-[#0A0A0A] p-4">
                  <div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#71717A]">{decision.exampleTitle}</div>
                  <div className="space-y-2 text-sm text-[#A1A1AA]">
                    {decision.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-2">
                        <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7FB38A]" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 text-xs leading-relaxed text-[#71717A]">{decision.footer}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 border-t border-[#232326] px-6 py-28 xl:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16">
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#C9A86A]">Journey</div>
          <h2 className="mb-4 font-serif text-5xl leading-tight text-[#F5F5F0]">Experience &amp; milestones</h2>
          <p className="max-w-3xl text-xl leading-relaxed text-[#A1A1AA]">
            Continuous growth through building, learning, and shipping.
          </p>
        </div>

        <div className="max-w-4xl">
          {journeyTimeline.map((item) => (
            <TimelineItem
              key={`${item.year}-${item.title}`}
              year={item.year}
              type={item.type as TimelineItemProps['type']}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function GitHubSection() {
  return (
    <section id="github" className="scroll-mt-28 border-t border-[#232326] px-6 py-28 xl:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#C9A86A]">Open source &amp; experiments</div>
            <h2 className="mb-4 font-serif text-5xl leading-tight text-[#F5F5F0]">Body of work</h2>
            <p className="max-w-3xl text-xl leading-relaxed text-[#A1A1AA]">{githubSection.intro}</p>
          </div>

          <a
            href={githubSection.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-[#A1A1AA] transition-colors hover:text-[#C9A86A] ${focusRingClass}`}
          >
            <Github className="h-5 w-5" />
            <span>View all on GitHub</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="mb-8 grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
          <div className="rounded-[28px] border border-[#232326] bg-[#111111] p-8">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#71717A]">Selected repositories</div>
                <h3 className="text-2xl font-semibold text-[#F5F5F0]">Projects worth opening first</h3>
              </div>
              <div className="text-sm text-[#71717A]">Live products, AI tools, and systems work</div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {highlightedRepos.map((repo) => (
                <RepoCard
                  key={repo.name}
                  name={repo.name}
                  description={repo.description}
                  language={repo.language}
                  stars={repo.stars}
                  category={repo.groupTitle}
                  url={repo.url}
                />
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#232326] bg-[#111111] p-8">
            <div className="mb-6">
              <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#71717A]">Upstream review</div>
              <h3 className="text-2xl font-semibold text-[#F5F5F0]">Contribution proof</h3>
            </div>

            <div className="space-y-4">
              {proofOfWork.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block rounded-2xl border border-[#232326] bg-[#0A0A0A] p-4 transition-colors hover:border-[#C9A86A] ${focusRingClass}`}
                >
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <div className="text-sm font-medium text-[#F5F5F0]">{item.label}</div>
                    <ExternalLink className="h-4 w-4 flex-shrink-0 text-[#71717A] transition-colors group-hover:text-[#C9A86A]" />
                  </div>
                  <div className="mb-1 text-[11px] uppercase tracking-[0.18em] text-[#C9A86A]">{item.kind}</div>
                  <div className="text-sm text-[#A1A1AA]">{item.status}</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#232326] bg-[#111111] p-8">
          <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#71717A]">Activity snapshot</div>
              <h3 className="text-2xl font-semibold text-[#F5F5F0]">GitHub activity and account scale</h3>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-[#71717A]">
              Useful context, but secondary to the repos and reviewed pull requests above.
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] xl:items-start">
            <div className="overflow-x-auto">
              <div className="mb-4 flex min-w-max items-center justify-between gap-6">
                <div className="text-sm font-medium text-[#F5F5F0]">Contribution activity</div>
                <div className="flex items-center gap-4 text-xs text-[#71717A]">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-sm bg-[#171717]" />
                    <span>Less</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-sm bg-[#C9A86A]/20" />
                    <div className="h-3 w-3 rounded-sm bg-[#C9A86A]/40" />
                    <div className="h-3 w-3 rounded-sm bg-[#C9A86A]/60" />
                    <div className="h-3 w-3 rounded-sm bg-[#C9A86A]/80" />
                    <div className="h-3 w-3 rounded-sm bg-[#C9A86A]" />
                  </div>
                  <span>More</span>
                </div>
              </div>

              <div className="flex min-w-max gap-1">
                {githubSection.contributionWeeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {week.map((contributionCount, dayIndex) => (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className={`h-2.5 w-2.5 rounded-sm ${getContributionCellClass(contributionCount)}`}
                        title={`${contributionCount} contribution${contributionCount === 1 ? '' : 's'}`}
                        aria-label={`${contributionCount} contribution${contributionCount === 1 ? '' : 's'}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {githubSection.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[#232326] bg-[#0A0A0A] p-5">
                  <div className="mb-1 text-3xl font-semibold text-[#F5F5F0]">{stat.value}</div>
                  <div className="text-sm text-[#71717A]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 border-t border-[#232326] px-6 py-28 xl:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[#C9A86A]">{contactSection.eyebrow}</div>

          <h2 className="mb-6 font-serif text-5xl leading-tight text-[#F5F5F0] md:text-6xl">
            {contactSection.title}
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-[#A1A1AA]">{contactSection.summary}</p>

          <div className="mb-16 flex flex-wrap items-center justify-center gap-4">
            {emailLink ? (
              <PrimaryButton href={emailLink.url}>
                <Mail className="h-4 w-4" />
                {emailLink.url.replace('mailto:', '')}
              </PrimaryButton>
            ) : null}

            {primaryResumeLink ? (
              <SecondaryButton href={primaryResumeLink.url} newTab>
                <FileText className="h-4 w-4" />
                Open resume
              </SecondaryButton>
            ) : null}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {githubLink ? (
              <a
                href={githubLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-2xl border border-[#232326] bg-[#111111] p-6 transition-colors hover:border-[#C9A86A] ${focusRingClass}`}
              >
                <Github className="mx-auto mb-3 h-6 w-6 text-[#71717A] transition-colors group-hover:text-[#C9A86A]" />
                <div className="mb-1 text-sm font-medium text-[#F5F5F0]">GitHub</div>
                <div className="text-xs text-[#71717A]">View repositories</div>
              </a>
            ) : null}

            {linkedInLink ? (
              <a
                href={linkedInLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-2xl border border-[#232326] bg-[#111111] p-6 transition-colors hover:border-[#C9A86A] ${focusRingClass}`}
              >
                <Linkedin className="mx-auto mb-3 h-6 w-6 text-[#71717A] transition-colors group-hover:text-[#C9A86A]" />
                <div className="mb-1 text-sm font-medium text-[#F5F5F0]">LinkedIn</div>
                <div className="text-xs text-[#71717A]">Professional profile</div>
              </a>
            ) : null}

            {primaryResumeLink ? (
              <a
                href={primaryResumeLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-2xl border border-[#232326] bg-[#111111] p-6 transition-colors hover:border-[#C9A86A] ${focusRingClass}`}
              >
                <FileText className="mx-auto mb-3 h-6 w-6 text-[#71717A] transition-colors group-hover:text-[#C9A86A]" />
                <div className="mb-1 text-sm font-medium text-[#F5F5F0]">Resume</div>
                <div className="text-xs text-[#71717A]">Download PDF</div>
              </a>
            ) : null}
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-[#232326] pt-8 text-sm text-[#71717A] lg:flex-row lg:items-center lg:justify-between">
          <div>© 2026 Felmon Fekadu. Built with care.</div>
          <div className="flex flex-wrap items-center gap-4 lg:gap-6">
            <span>{contactSection.footerLocation}</span>
            <span className="hidden lg:inline">•</span>
            <span>{contactSection.footerAvailability}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <a
        href="#main-content"
        className={`sr-only absolute left-4 top-4 z-[60] rounded-md bg-[#C9A86A] px-4 py-2 text-sm font-medium text-[#0A0A0A] focus:not-sr-only ${focusRingClass}`}
      >
        Skip to content
      </a>

      <Navigation />

      <main id="main-content">
        <Hero />
        <ProofBar />
        <About />
        <CaseStudies />
        <EngineeringDecisions />
        <Experience />
        <GitHubSection />
        <Contact />
      </main>
    </div>
  )
}
