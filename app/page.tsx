'use client'

import Image from 'next/image'
import { useEffect, useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
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
  proofOfWork,
  projects,
  resumeLinks,
  socialLinks,
} from '@/lib/data'

interface CaseStudyBlockProps {
  category: string
  name: string
  tagline: string
  solution: string
  outcome: string
  stack: string[]
  imageGradient: string
  href: string
  ctaLabel: string
  secondaryHref?: string
  secondaryLabel?: string
  proofItems: string[]
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
  { value: '4', label: 'shipped products' },
  { value: '7', label: 'merged PRs' },
  { value: '36', label: 'public repos' },
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
      className={`group block rounded-2xl border border-[#232326] bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A86A] hover:shadow-[0_20px_60px_-30px_rgba(201,168,106,0.25)] ${focusRingClass}`}
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

function CaseStudyBlock({
  category,
  name,
  tagline,
  solution,
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
    <article className="group overflow-hidden rounded-2xl border border-[#232326] bg-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A86A]/50 hover:shadow-[0_20px_60px_-20px_rgba(201,168,106,0.15)]">
      <div className="grid xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.55fr)]">
        <div
          className="relative hidden overflow-hidden border-b border-[#232326] xl:block xl:border-b-0 xl:border-r"
          style={{ background: imageGradient }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_55%)]" />
          <div className="relative flex h-full flex-col justify-between p-7">
            <div className="inline-flex w-fit rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm">
              {category}
            </div>
            <div className="font-serif text-4xl leading-tight text-white">{name}</div>
          </div>
        </div>

        <div className="p-7 xl:p-8">
          <div className="mb-3 inline-flex rounded-full border border-[#3A3021] bg-[#171717] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#C9A86A] xl:hidden">
            {category}
          </div>

          <div className="mb-4">
            <h3 className="mb-2 text-2xl font-semibold text-[#F5F5F0]">{name}</h3>
            <p className="text-sm text-[#C9A86A]">{tagline}</p>
          </div>

          <p className="mb-5 max-w-3xl text-[15px] leading-relaxed text-[#D4D4D8]">{solution}</p>

          <div className="mb-5 flex items-start gap-2 rounded-xl border border-[#7FB38A]/20 bg-[#7FB38A]/5 px-4 py-3 text-sm leading-relaxed text-[#7FB38A]">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0" />
            <span>{outcome}</span>
          </div>

          {proofItems.length > 0 ? (
            <ul className="mb-5 grid gap-1.5 text-sm text-[#A1A1AA] md:grid-cols-2">
              {proofItems.slice(0, 4).map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#71717A]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="flex flex-wrap gap-1.5">
            {stack.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-[#232326] pt-5">
            <PrimaryButton href={href} newTab={!href.startsWith('/')} showArrow className="px-5 py-2.5">
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
    </article>
  )
}

function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      const sections = ['hero', 'about', 'case-studies', 'experience', 'github', 'contact']
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= 120 && rect.bottom >= 120
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'about', label: 'About', num: '01' },
    { id: 'case-studies', label: 'Work', num: '02' },
    { id: 'experience', label: 'Experience', num: '03' },
    { id: 'github', label: 'GitHub', num: '04' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-[#232326]/70 bg-[#0A0A0A]/85 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-4 xl:px-8">
        <a
          href="#hero"
          className={`group inline-flex items-center gap-3 ${focusRingClass}`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-md border border-[#3A3021] bg-[#171717] font-serif text-[15px] leading-none text-[#C9A86A] transition-colors group-hover:border-[#C9A86A]">
            ff
          </span>
          <span className="hidden flex-col leading-tight md:flex">
            <span className="text-sm font-medium text-[#F5F5F0] transition-colors group-hover:text-[#C9A86A]">Felmon Fekadu</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#71717A]">Engineer · Boulder, CO</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? 'page' : undefined}
              className={`group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${focusRingClass} ${
                activeSection === item.id
                  ? 'bg-[#171717] text-[#C9A86A]'
                  : 'text-[#A1A1AA] hover:bg-[#111111] hover:text-[#F5F5F0]'
              }`}
            >
              <span className={`font-mono text-[10px] tracking-[0.1em] ${activeSection === item.id ? 'text-[#C9A86A]/70' : 'text-[#52525B]'}`}>
                {item.num}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 rounded-full border border-[#2B3A2C] bg-[#0F1A11] px-3 py-1.5 lg:inline-flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7FB38A] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#7FB38A]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#7FB38A]">Open to work</span>
          </span>

          {primaryResumeLink ? (
            <a
              href={primaryResumeLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden rounded-lg px-3 py-2 text-sm text-[#A1A1AA] transition-colors hover:text-[#F5F5F0] lg:inline-flex ${focusRingClass}`}
            >
              Resume ↗
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
    </motion.nav>
  )
}

function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const mergedProof = proofOfWork[0]

  useEffect(() => {
    if (shouldReduceMotion) {
      return
    }

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth - 0.5) * 18,
        y: (event.clientY / window.innerHeight - 0.5) * 18,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [shouldReduceMotion])

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

        <motion.div
          className="absolute right-[10%] top-[12%] h-[420px] w-[420px] rounded-full opacity-[0.04] blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #C9A86A 0%, transparent 70%)',
            x: shouldReduceMotion ? 0 : mousePosition.x,
            y: shouldReduceMotion ? 0 : mousePosition.y,
          }}
          transition={{ type: 'spring', stiffness: 45, damping: 30 }}
        />

        <div className="relative z-10 grid gap-10 py-10 xl:grid-cols-12 xl:items-center">
          <div className="xl:col-span-7">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="font-mono text-[11px] text-[#C9A86A]">00</span>
              <span className="h-px w-10 bg-gradient-to-r from-[#C9A86A] to-transparent" aria-hidden />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#C9A86A]">{heroSection.eyebrow}</span>
            </motion.div>

            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mb-6 max-w-4xl font-serif text-5xl leading-[1.05] text-[#F5F5F0] md:text-6xl xl:text-7xl"
            >
              I build products that are{' '}
              <em className="not-italic text-[#C9A86A]">
                <span className="italic">useful</span>
              </em>
              ,{' '}
              <em className="not-italic text-[#C9A86A]">
                <span className="italic">fast</span>
              </em>
              , and{' '}
              <em className="not-italic text-[#C9A86A]">
                <span className="italic">real</span>
              </em>
              <span className="text-[#C9A86A]">.</span>
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="mb-8 max-w-2xl text-lg leading-relaxed text-[#A1A1AA] md:text-xl"
            >
              {heroSection.summary}
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.34 }}
              className="mb-8 flex flex-wrap items-center gap-4"
            >
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
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.42 }}
              className="flex flex-wrap items-stretch gap-x-10 gap-y-4 border-t border-[#232326] pt-6"
            >
              {heroSignals.map((item, index) => (
                <div key={item.label} className="flex items-baseline gap-3">
                  {index > 0 ? <div className="hidden h-10 w-px self-center bg-[#232326] md:block" aria-hidden /> : null}
                  <span className="font-mono text-[10px] text-[#52525B]">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <div className="font-serif text-3xl italic leading-none text-[#F5F5F0]">{item.value}</div>
                    <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#71717A]">{item.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="xl:col-span-5"
          >
            <div className="overflow-hidden rounded-[20px] border border-[#232326] bg-[#0D0D0F] shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between border-b border-[#232326] bg-[#0A0A0C] px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3F2828]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3F3528]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#283F2C]" />
                </div>
                <span className="font-mono text-[11px] text-[#52525B]">~ / open-work</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#7FB38A]">live</span>
              </div>

              <div className="space-y-3 p-5">
                <div className="flex items-center gap-2 font-mono text-[11px] text-[#71717A]">
                  <span className="text-[#7FB38A]">$</span>
                  <span>ls --pinned</span>
                  <span className="caret" aria-hidden />
                </div>

                {heroProjects.map((project, index) => (
                  <a
                    key={project.title}
                    href={project.live || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between gap-4 rounded-lg border border-transparent bg-[#0A0A0C] px-3 py-2.5 transition-all duration-200 hover:border-[#C9A86A]/60 hover:bg-[#111114] ${focusRingClass}`}
                  >
                    <div className="flex min-w-0 items-baseline gap-3">
                      <span className="font-mono text-[10px] text-[#52525B]">{String(index + 1).padStart(2, '0')}</span>
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-[#F5F5F0]">{project.title}</div>
                        <div className="mt-0.5 truncate font-mono text-[10px] uppercase tracking-[0.16em] text-[#52525B]">
                          {project.category}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-[#52525B] transition-all group-hover:translate-x-0.5 group-hover:text-[#C9A86A]" />
                  </a>
                ))}

                {mergedProof ? (
                  <>
                    <div className="flex items-center gap-2 pt-3 font-mono text-[11px] text-[#71717A]">
                      <span className="text-[#7FB38A]">$</span>
                      <span>git log --merged</span>
                    </div>
                    <a
                      href={mergedProof.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center justify-between gap-4 rounded-lg border border-transparent bg-[#0A0A0C] px-3 py-2.5 transition-all duration-200 hover:border-[#7FB38A]/50 hover:bg-[#0F1A11] ${focusRingClass}`}
                    >
                      <div className="flex min-w-0 items-baseline gap-3">
                        <span className="font-mono text-[10px] text-[#7FB38A]">●</span>
                        <div className="min-w-0">
                          <div className="truncate text-sm font-medium text-[#F5F5F0]">{mergedProof.label}</div>
                          <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#7FB38A]/80">
                            {mergedProof.status}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 text-[#52525B] transition-colors group-hover:text-[#7FB38A]" />
                    </a>
                  </>
                ) : null}
              </div>

              <div className="flex flex-wrap gap-1.5 border-t border-[#232326] bg-[#0A0A0C] px-5 py-4">
                {heroSection.stackFocus.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-[#232326] bg-[#111114] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#A1A1AA]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function About() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="about" className="scroll-mt-28 border-t border-[#232326] px-6 py-20 xl:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 xl:grid-cols-12 xl:gap-12">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.55 }}
            className="xl:col-span-4"
          >
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
          </motion.div>

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
    <section id="case-studies" className="scroll-mt-28 border-t border-[#232326] px-6 py-20 xl:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16">
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#C9A86A]">Featured work</div>
          <h2 className="mb-4 font-serif text-5xl leading-tight text-[#F5F5F0]">Case studies</h2>
          <p className="max-w-3xl text-xl leading-relaxed text-[#A1A1AA]">
            Real products, real constraints, real outcomes. Each project is compressed for fast review and points straight to inspectable proof.
          </p>
        </div>

        <div className="space-y-6">
          {caseStudyProjects.map((project) => (
            <CaseStudyBlock
              key={project.title}
              category={project.category}
              name={project.title}
              tagline={project.tagline ?? project.description}
              solution={project.solution ?? project.description}
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
    <section className="border-t border-[#232326] px-6 py-20 xl:px-8">
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
    <section id="experience" className="scroll-mt-28 border-t border-[#232326] px-6 py-20 xl:px-8">
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
    <section id="github" className="scroll-mt-28 border-t border-[#232326] px-6 py-20 xl:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
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

        <div className="mb-10 flex flex-wrap items-baseline gap-x-10 gap-y-4 border-y border-[#232326] py-6">
          {githubSection.stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span className="font-serif text-3xl text-[#F5F5F0]">{stat.value}</span>
              <span className="text-sm text-[#71717A]">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
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
                  className={`group block rounded-2xl border border-[#232326] bg-[#0A0A0A] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A86A] ${focusRingClass}`}
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
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 border-t border-[#232326] px-6 py-20 xl:px-8">
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
                className={`group rounded-2xl border border-[#232326] bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A86A] ${focusRingClass}`}
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
                className={`group rounded-2xl border border-[#232326] bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A86A] ${focusRingClass}`}
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
                className={`group rounded-2xl border border-[#232326] bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A86A] ${focusRingClass}`}
              >
                <FileText className="mx-auto mb-3 h-6 w-6 text-[#71717A] transition-colors group-hover:text-[#C9A86A]" />
                <div className="mb-1 text-sm font-medium text-[#F5F5F0]">Resume</div>
                <div className="text-xs text-[#71717A]">Download PDF</div>
              </a>
            ) : null}
          </div>
        </div>

        <div className="mt-24 grid gap-6 border-t border-[#232326] pt-10 lg:grid-cols-3 lg:items-end">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md border border-[#3A3021] bg-[#171717] font-serif text-base text-[#C9A86A]">
              ff
            </span>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#52525B]">Index · 2026</div>
              <div className="text-sm text-[#A1A1AA]">© Felmon Fekadu — all rights reserved</div>
            </div>
          </div>

          <div className="space-y-1.5 text-sm text-[#71717A] lg:text-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#52525B]">Locale</div>
            <div className="text-[#A1A1AA]">{contactSection.footerLocation}</div>
            <div className="font-mono text-[11px] text-[#52525B]">{contactSection.footerAvailability}</div>
          </div>

          <div className="flex flex-col gap-1.5 lg:items-end">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#52525B]">Built with</div>
            <div className="text-sm text-[#A1A1AA]">Next.js · Tailwind · Framer Motion</div>
            <div className="font-mono text-[11px] text-[#52525B]">Hosted on Vercel · static edge</div>
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
