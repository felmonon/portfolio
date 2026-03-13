'use client'

import Image from 'next/image'
import { useEffect, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
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
  projects,
  proofBarItems,
  resumeLinks,
  socialLinks,
  stats,
} from '@/lib/data'

interface CaseStudyBlockProps {
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

interface PrimaryButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  showArrow?: boolean
}

interface RepoCardProps {
  name: string
  description: string
  language: string
  stars?: number
  category: string
  url: string
}

interface SecondaryButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  showArrow?: boolean
}

interface TimelineItemProps {
  year: string
  title: string
  description: string
  type: 'education' | 'work' | 'project' | 'milestone'
}

const decisionIconMap = {
  database: Database,
  zap: Zap,
  shield: Shield,
}

function PrimaryButton({ children, href, onClick, showArrow = false }: PrimaryButtonProps) {
  const className =
    'inline-flex items-center gap-2 px-6 py-3 bg-[#C9A86A] text-[#0A0A0A] rounded-xl font-medium hover:bg-[#D4B57A] hover:shadow-[0_0_20px_rgba(201,168,106,0.3)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]'

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
        {showArrow && <ArrowRight className="w-4 h-4 transition-transform" />}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4 transition-transform" />}
    </button>
  )
}

function SecondaryButton({ children, href, onClick, showArrow = false }: SecondaryButtonProps) {
  const className =
    'inline-flex items-center gap-2 px-6 py-3 border border-[#232326] text-[#F5F5F0] rounded-xl font-medium hover:border-[#C9A86A] hover:text-[#C9A86A] hover:bg-[#C9A86A]/5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]'

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
        {showArrow && <ArrowRight className="w-4 h-4 transition-transform" />}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4 transition-transform" />}
    </button>
  )
}

function TechTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 bg-[#171717] border border-[#232326] text-[#A1A1AA] text-xs rounded-md">
      {children}
    </span>
  )
}

function MetricCard({ value, label, description }: MetricCardProps) {
  return (
    <div className="bg-[#111111] border border-[#232326] rounded-xl p-6 hover:border-[#C9A86A]/40 hover:bg-[#111111]/80 transition-all duration-300 group">
      <div className="text-3xl font-semibold text-[#F5F5F0] mb-1 group-hover:text-[#C9A86A] transition-colors">
        {value}
      </div>
      <div className="text-sm font-medium text-[#C9A86A] mb-1">{label}</div>
      {description && <div className="text-xs text-[#71717A]">{description}</div>}
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
    <div className="relative pl-8 pb-8 border-l border-[#232326] last:border-l-0">
      <div
        className="absolute left-0 top-0 w-3 h-3 rounded-full border-2 -translate-x-[7px]"
        style={{
          backgroundColor: typeColors[type],
          borderColor: '#0A0A0A',
        }}
      />

      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs font-medium text-[#71717A]">{year}</span>
        <span
          className="text-xs px-2 py-0.5 rounded"
          style={{
            backgroundColor: '#171717',
            color: typeColors[type],
          }}
        >
          {typeLabels[type]}
        </span>
      </div>

      <h4 className="text-[#F5F5F0] font-medium mb-1">{title}</h4>
      <p className="text-sm text-[#A1A1AA]">{description}</p>
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
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-[#111111] border border-[#232326] rounded-xl p-6 hover:border-[#C9A86A] transition-colors"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <GitBranch className="w-4 h-4 text-[#71717A]" />
          <span className="font-medium text-[#F5F5F0]">{name}</span>
        </div>

        {stars !== undefined && (
          <div className="flex items-center gap-1 text-[#71717A]">
            <Star className="w-3 h-3" />
            <span className="text-xs">{stars}</span>
          </div>
        )}
      </div>

      <p className="text-sm text-[#A1A1AA] mb-4">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Circle
            className="w-3 h-3"
            style={{ color: languageColors[language] || '#71717A' }}
            fill="currentColor"
          />
          <span className="text-xs text-[#71717A]">{language}</span>
        </div>

        <span className="text-xs text-[#71717A] px-2 py-1 bg-[#171717] rounded">{category}</span>
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
    <div className="bg-[#111111] border border-[#232326] rounded-2xl overflow-hidden hover:border-[#C9A86A]/50 transition-all duration-500 group hover:shadow-[0_0_40px_rgba(201,168,106,0.1)]">
      <div className="grid grid-cols-12">
        <div className="col-span-5 p-8">
          <div
            className="aspect-[4/3] rounded-xl overflow-hidden relative group"
            style={{ background: imageGradient }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-full h-full flex items-center justify-center relative z-10">
              <div className="text-[#71717A] text-4xl font-serif opacity-20 group-hover:opacity-30 transition-opacity">
                {name}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-7 p-8 flex flex-col">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-[#F5F5F0] mb-2">{name}</h3>
            <p className="text-[#C9A86A]">{tagline}</p>
          </div>

          <div className="space-y-4 flex-1 mb-6">
            <div>
              <div className="text-xs font-medium text-[#71717A] uppercase tracking-wide mb-1">
                Problem
              </div>
              <p className="text-sm text-[#A1A1AA]">{problem}</p>
            </div>

            <div>
              <div className="text-xs font-medium text-[#71717A] uppercase tracking-wide mb-1">
                What I Built
              </div>
              <p className="text-sm text-[#A1A1AA]">{solution}</p>
            </div>

            <div>
              <div className="text-xs font-medium text-[#71717A] uppercase tracking-wide mb-1">
                Architecture
              </div>
              <p className="text-sm text-[#A1A1AA]">{architecture}</p>
            </div>

            <div>
              <div className="text-xs font-medium text-[#71717A] uppercase tracking-wide mb-1">
                Constraints
              </div>
              <p className="text-sm text-[#A1A1AA]">{constraints}</p>
            </div>

            <div>
              <div className="text-xs font-medium text-[#71717A] uppercase tracking-wide mb-1">
                Outcome
              </div>
              <p className="text-sm text-[#7FB38A]">{outcome}</p>
            </div>

            <div className="bg-[#0A0A0A] border border-[#232326] rounded-xl p-4">
              <div className="text-xs font-medium text-[#71717A] uppercase tracking-wide mb-3">
                Inspectable proof
              </div>
              <div className="grid grid-cols-2 gap-2">
                {proofItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-xs text-[#A1A1AA] bg-[#111111] border border-[#232326] rounded-lg px-3 py-2"
                  >
                    <Check className="w-3.5 h-3.5 text-[#7FB38A] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-[#232326] pt-4">
            <div className="text-xs font-medium text-[#71717A] uppercase tracking-wide mb-3">
              Stack
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {stack.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#C9A86A] hover:text-[#D4B57A] flex items-center gap-2 transition-colors"
              >
                {ctaLabel}
                <ArrowRight className="w-4 h-4" />
              </a>

              {secondaryHref && secondaryLabel ? (
                <a
                  href={secondaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A1A1AA] hover:text-[#F5F5F0] flex items-center gap-2 transition-colors"
                >
                  {secondaryLabel}
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Navigation() {
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ['hero', 'about', 'case-studies', 'experience', 'github', 'contact']
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'case-studies', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'github', label: 'GitHub' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-[#232326]/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg font-serif text-[#F5F5F0] hover:text-[#C9A86A] transition-colors"
          >
            Felmon Fekadu
          </button>

          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  activeSection === item.id
                    ? 'text-[#C9A86A] bg-[#171717]'
                    : 'text-[#A1A1AA] hover:text-[#F5F5F0] hover:bg-[#111111]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

function AnimatedMetric({
  value,
  label,
}: {
  value: string
  label: string
}) {
  const match = value.match(/^(\d+)(.*)$/)
  const targetValue = match ? Number.parseInt(match[1], 10) : 0
  const suffix = match?.[2] ?? ''
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!match) {
      return undefined
    }

    const duration = 2000
    const steps = 60
    const increment = targetValue / steps
    let current = 0

    const timer = window.setInterval(() => {
      current += increment
      if (current >= targetValue) {
        setCount(targetValue)
        window.clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => window.clearInterval(timer)
  }, [match, targetValue])

  return (
    <div>
      <div className="text-2xl font-semibold text-[#F5F5F0] mb-1">
        {match ? `${count}${suffix}` : value}
      </div>
      <div className="text-sm text-[#71717A]">{label}</div>
    </div>
  )
}

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
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
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.03] blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #C9A86A 0%, transparent 70%)',
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />

      <div className="max-w-[1440px] mx-auto px-8 w-full relative z-10">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs font-medium text-[#C9A86A] tracking-wide uppercase mb-4"
            >
              {heroSection.eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-7xl leading-[1.1] text-[#F5F5F0] mb-6"
            >
              I build products that are <span className="text-[#C9A86A]">useful</span>,{' '}
              <span className="text-[#C9A86A]">fast</span>, and{' '}
              <span className="text-[#C9A86A]">real</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-[#A1A1AA] leading-relaxed mb-8 max-w-2xl"
            >
              {heroSection.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 mb-12"
            >
              <PrimaryButton href="#case-studies" showArrow>
                View case studies
              </PrimaryButton>
              <SecondaryButton href={socialLinks[0]?.url}>
                <Github className="w-4 h-4" />
                See GitHub
              </SecondaryButton>
              <a
                href={resumeLinks[0]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A1A1AA] hover:text-[#C9A86A] transition-colors ml-2"
              >
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-4 gap-6 pt-8 border-t border-[#232326]"
            >
              {stats.map((stat) => (
                <AnimatedMetric key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-5"
          >
            <div className="bg-[#111111] border border-[#232326] rounded-2xl p-8 relative overflow-hidden group hover:border-[#C9A86A]/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A86A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="space-y-4 relative z-10">
                {heroSection.architectureNodes.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + item.delay }}
                    className="flex items-center gap-3"
                    style={{ paddingLeft: `${item.indent * 2}rem` }}
                  >
                    <motion.div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.6, 1],
                      }}
                      transition={{
                        duration: 2,
                        delay: index * 0.2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                    <div className="flex-1 h-1 bg-[#232326]" />
                    <div className="text-xs text-[#71717A] font-mono">{item.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#232326] relative z-10">
                <div className="text-xs text-[#71717A] mb-2">Stack focus</div>
                <div className="flex flex-wrap gap-2">
                  {heroSection.stackFocus.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                      className="px-2 py-1 bg-[#171717] text-[#A1A1AA] text-xs rounded hover:bg-[#232326] hover:text-[#C9A86A] transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProofBar() {
  return (
    <section className="py-24 border-t border-[#232326]">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-4 gap-4">
          {proofBarItems.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MetricCard
                value={metric.value}
                label={metric.label}
                description={metric.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-32 border-t border-[#232326]">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="col-span-4"
          >
            <div className="bg-[#111111] border border-[#232326] rounded-2xl overflow-hidden mb-6 hover:border-[#C9A86A]/30 transition-all duration-500 group">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#171717] to-[#111111] flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/felmon-portrait.jpg"
                  alt="Felmon Fekadu portrait"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/20 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A86A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            <div className="bg-[#111111] border border-[#232326] rounded-xl p-6 space-y-3">
              {aboutSection.meta.map((item, index) => (
                <div key={item.label}>
                  <div className="flex justify-between items-start">
                    <span className="text-sm text-[#71717A]">{item.label}</span>
                    <span className="text-sm text-[#F5F5F0] text-right">{item.value}</span>
                  </div>
                  {index < aboutSection.meta.length - 1 && <div className="h-px bg-[#232326] mt-3" />}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="col-span-8">
            <div className="text-xs font-medium text-[#C9A86A] tracking-wide uppercase mb-4">
              Engineering profile
            </div>

            <h2 className="font-serif text-5xl leading-tight text-[#F5F5F0] mb-6">
              {aboutSection.title}
            </h2>

            <div className="space-y-4 text-lg text-[#A1A1AA] leading-relaxed mb-12">
              {aboutSection.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="bg-[#111111] border border-[#232326] rounded-xl p-8">
              <div className="text-sm font-medium text-[#C9A86A] mb-6">How I work</div>

              <div className="grid grid-cols-2 gap-6">
                {aboutSection.principles.map(([title, copy]) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#171717] border border-[#232326] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#7FB38A]" />
                    </div>
                    <div>
                      <div className="text-[#F5F5F0] font-medium mb-1">{title}</div>
                      <div className="text-sm text-[#71717A]">{copy}</div>
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
    <section id="case-studies" className="py-32 border-t border-[#232326]">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="mb-16">
          <div className="text-xs font-medium text-[#C9A86A] tracking-wide uppercase mb-4">
            Featured work
          </div>
          <h2 className="font-serif text-5xl leading-tight text-[#F5F5F0] mb-4">
            Case studies
          </h2>
          <p className="text-xl text-[#A1A1AA] max-w-3xl">
            Real products, real constraints, real outcomes. Each project demonstrates end-to-end
            ownership and technical execution.
          </p>
        </div>

        <div className="space-y-6">
          {projects
            .filter((project) => project.caseStudy)
            .map((project) => (
              <CaseStudyBlock
                key={project.title}
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
    <section className="py-32 border-t border-[#232326]">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="mb-16 text-center">
          <div className="text-xs font-medium text-[#C9A86A] tracking-wide uppercase mb-4">
            Technical depth
          </div>
          <h2 className="font-serif text-5xl leading-tight text-[#F5F5F0] mb-4">
            Engineering decisions, not just polished screens
          </h2>
          <p className="text-xl text-[#A1A1AA] max-w-3xl mx-auto">
            I think about architecture, tradeoffs, and system behavior, not just UI components.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {engineeringDecisions.map((decision) => {
            const Icon = decisionIconMap[decision.icon as keyof typeof decisionIconMap]

            return (
              <div
                key={decision.title}
                className="bg-[#111111] border border-[#232326] rounded-2xl p-8 hover:border-[#C9A86A] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#171717] border border-[#232326] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#C9A86A]" />
                </div>

                <h3 className="text-xl font-semibold text-[#F5F5F0] mb-3">{decision.title}</h3>

                <p className="text-[#A1A1AA] mb-6">{decision.copy}</p>

                <div className="bg-[#0A0A0A] border border-[#232326] rounded-xl p-4">
                  <div className="text-xs font-medium text-[#71717A] mb-3">
                    {decision.exampleTitle}
                  </div>
                  <div className="space-y-2 text-xs text-[#A1A1AA]">
                    {decision.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#7FB38A] mt-1.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-[#71717A] mt-3">{decision.footer}</div>
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
    <section id="experience" className="py-32 border-t border-[#232326]">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="mb-16">
          <div className="text-xs font-medium text-[#C9A86A] tracking-wide uppercase mb-4">
            Journey
          </div>
          <h2 className="font-serif text-5xl leading-tight text-[#F5F5F0] mb-4">
            Experience &amp; milestones
          </h2>
          <p className="text-xl text-[#A1A1AA] max-w-3xl">
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
    <section id="github" className="py-32 border-t border-[#232326]">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="mb-16">
          <div className="text-xs font-medium text-[#C9A86A] tracking-wide uppercase mb-4">
            Open source &amp; experiments
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-serif text-5xl leading-tight text-[#F5F5F0] mb-4">
                Body of work
              </h2>
              <p className="text-xl text-[#A1A1AA] max-w-3xl">
                {githubSection.intro}
              </p>
            </div>

            <a
              href={githubSection.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#A1A1AA] hover:text-[#C9A86A] transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>View all on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="bg-[#111111] border border-[#232326] rounded-xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="text-sm font-medium text-[#F5F5F0]">Contribution activity</div>
            <div className="flex items-center gap-4 text-xs text-[#71717A]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#171717] rounded-sm" />
                <span>Less</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-[#C9A86A]/20 rounded-sm" />
                <div className="w-3 h-3 bg-[#C9A86A]/40 rounded-sm" />
                <div className="w-3 h-3 bg-[#C9A86A]/60 rounded-sm" />
                <div className="w-3 h-3 bg-[#C9A86A]/80 rounded-sm" />
                <div className="w-3 h-3 bg-[#C9A86A] rounded-sm" />
              </div>
              <span>More</span>
            </div>
          </div>

          <div className="flex gap-1">
            {githubSection.contributionWeeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((contributionCount, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-2.5 h-2.5 rounded-sm ${getContributionCellClass(contributionCount)}`}
                    title={`${contributionCount} contribution${contributionCount === 1 ? '' : 's'}`}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-[#232326] grid grid-cols-4 gap-6">
            {githubSection.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-semibold text-[#F5F5F0] mb-1">{stat.value}</div>
                <div className="text-xs text-[#71717A]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {githubSection.repoGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-medium text-[#F5F5F0] mb-4">{group.title}</h3>
              <div className="grid grid-cols-3 gap-4">
                {group.repos.map((repo) => (
                  <RepoCard
                    key={repo.name}
                    name={repo.name}
                    description={repo.description}
                    language={repo.language}
                    stars={repo.stars}
                    category={repo.category}
                    url={repo.url}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const emailLink = socialLinks.find((link) => link.icon === 'mail')
  const githubLink = socialLinks.find((link) => link.icon === 'github')
  const linkedInLink = socialLinks.find((link) => link.icon === 'linkedin')

  return (
    <section id="contact" className="py-32 border-t border-[#232326]">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-medium text-[#C9A86A] tracking-wide uppercase mb-6">
            {contactSection.eyebrow}
          </div>

          <h2 className="font-serif text-6xl leading-tight text-[#F5F5F0] mb-6">
            {contactSection.title}
          </h2>

          <p className="text-xl text-[#A1A1AA] mb-12 max-w-2xl mx-auto">
            {contactSection.summary}
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <PrimaryButton href={emailLink?.url}>
              <Mail className="w-4 h-4" />
              {emailLink?.url.replace('mailto:', '')}
            </PrimaryButton>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <a
              href={githubLink?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111111] border border-[#232326] rounded-xl p-6 hover:border-[#C9A86A] transition-colors group"
            >
              <Github className="w-6 h-6 text-[#71717A] group-hover:text-[#C9A86A] transition-colors mx-auto mb-3" />
              <div className="text-sm font-medium text-[#F5F5F0] mb-1">GitHub</div>
              <div className="text-xs text-[#71717A]">View repositories</div>
            </a>

            <a
              href={linkedInLink?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111111] border border-[#232326] rounded-xl p-6 hover:border-[#C9A86A] transition-colors group"
            >
              <Linkedin className="w-6 h-6 text-[#71717A] group-hover:text-[#C9A86A] transition-colors mx-auto mb-3" />
              <div className="text-sm font-medium text-[#F5F5F0] mb-1">LinkedIn</div>
              <div className="text-xs text-[#71717A]">Professional profile</div>
            </a>

            <a
              href={resumeLinks[0]?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111111] border border-[#232326] rounded-xl p-6 hover:border-[#C9A86A] transition-colors group"
            >
              <FileText className="w-6 h-6 text-[#71717A] group-hover:text-[#C9A86A] transition-colors mx-auto mb-3" />
              <div className="text-sm font-medium text-[#F5F5F0] mb-1">Resume</div>
              <div className="text-xs text-[#71717A]">Download PDF</div>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 mt-32 pt-8 border-t border-[#232326]">
        <div className="flex items-center justify-between text-sm text-[#71717A]">
          <div>© 2026 Felmon Fekadu. Built with care.</div>
          <div className="flex items-center gap-6">
            <span>{contactSection.footerLocation}</span>
            <span>•</span>
            <span>{contactSection.footerAvailability}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'

    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      <Hero />
      <ProofBar />
      <About />
      <CaseStudies />
      <EngineeringDecisions />
      <Experience />
      <GitHubSection />
      <Contact />
    </div>
  )
}
