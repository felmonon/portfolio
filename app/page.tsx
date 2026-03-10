import {
  ArrowRight,
  BrainCircuit,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Lock,
  Mail,
  Sparkles,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { experiences, proofOfWork, projects, resumeLinks, socialLinks, stats } from '@/lib/data'
import { normalizeExternalUrl } from '@/lib/url'

const navItems = [
  { label: 'Story', href: '#story' },
  { label: 'Work', href: '#work' },
  { label: 'Proof', href: '#proof' },
  { label: 'Contact', href: '#contact' },
]

const signalCards = [
  'Readable systems over theater',
  'Model-powered products with restraint',
  'Proof that survives inspection',
]

const storyMoments: Array<{
  icon: LucideIcon
  eyebrow: string
  title: string
  copy: string
}> = [
  {
    icon: Lock,
    eyebrow: 'Calm Surface',
    title: 'Interfaces that stay quiet while the logic gets deep.',
    copy:
      'I care about the first ten seconds. If the product feels heavy, noisy, or over-designed, the rest of the engineering work never gets the attention it deserves.',
  },
  {
    icon: BrainCircuit,
    eyebrow: 'Connected Context',
    title: 'Systems that remember the right details.',
    copy:
      'Good product work is mostly about context. Real-time collaboration, AI-assisted flows, and full-stack apps only feel smart when the state model is actually coherent.',
  },
  {
    icon: Zap,
    eyebrow: 'Working Signal',
    title: 'Output you can inspect instead of claims you have to trust.',
    copy:
      'Live deployments, merged OSS fixes, tests, and commit history matter more than polished buzzwords. I want the work to hold up under direct scrutiny.',
  },
]

const socialIconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3)
const careerMoments = experiences.slice(0, 3)

export default function Home() {
  return (
    <main className="landing-page">
      <header className="landing-nav">
        <div className="landing-nav__inner">
          <a href="#top" className="brand-mark">
            <span className="brand-mark__title">Felmon Fekadu</span>
            <span className="brand-mark__meta">Product engineer / internship portfolio</span>
          </a>

          <nav className="landing-nav__links" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-pill">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="/resume.pdf" className="nav-cta" download>
            Resume
          </a>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-ambient hero-ambient--left" aria-hidden="true" />
        <div className="hero-ambient hero-ambient--right" aria-hidden="true" />

        <div className="hero-section__inner">
          <div className="hero-copy">
            <p className="eyebrow">Software engineer / model-powered systems / 2026</p>
            <h1 className="hero-title">
              A product engineer
              <span> for what you&apos;re building.</span>
            </h1>
            <p className="hero-summary">
              I design and ship full-stack products that feel calm up front and rigorous underneath:
              AI-assisted interfaces, real-time systems, and public work that can be inspected.
            </p>

            <div className="hero-actions">
              <a href="#work" className="button button--primary">
                View selected work
                <ArrowRight size={18} />
              </a>
              <a href="/resume.pdf" className="button button--secondary" download>
                Download resume
                <Download size={18} />
              </a>
            </div>

            <div className="hero-socials">
              {socialLinks.map((item) => {
                const Icon = socialIconMap[item.icon] ?? Mail
                const isExternal = item.url.startsWith('http')

                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="link-chip"
                  >
                    <Icon size={16} />
                    {item.name}
                  </a>
                )
              })}
            </div>
          </div>

          <div className="hero-visual">
            <div className="signal-stack" aria-hidden="true">
              {signalCards.map((signal, index) => (
                <div key={signal} className={`signal-card signal-card--${index + 1}`}>
                  <Sparkles size={14} />
                  <span>{signal}</span>
                </div>
              ))}
            </div>

            <div className="device-shell">
              <div className="device-shell__topbar">
                <span className="status-pill">Ambient product memo</span>
                <span className="status-pill status-pill--muted">active focus</span>
              </div>

              <div className="device-shell__screen">
                <div className="screen-section">
                  <p className="screen-label">Current orientation</p>
                  <h2 className="screen-title">Calm UI. Deep implementation. Visible proof.</h2>
                  <p className="screen-copy">
                    Designing for clarity while shipping real product constraints: auth, state,
                    testing, payments, model prompts, persistence, and maintainable code paths.
                  </p>
                </div>

                <div className="screen-metrics">
                  {stats.slice(0, 3).map((stat) => (
                    <article key={stat.label} className="metric-card">
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </article>
                  ))}
                </div>

                <div className="screen-feed">
                  <article className="feed-card">
                    <p className="feed-card__eyebrow">Live product</p>
                    <strong>{featuredProjects[0]?.title}</strong>
                    <span>{featuredProjects[0]?.tech.slice(0, 3).join(' / ')}</span>
                  </article>
                  <article className="feed-card">
                    <p className="feed-card__eyebrow">Merged OSS</p>
                    <strong>{proofOfWork[0]?.label}</strong>
                    <span>Public commit trail available</span>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="story-section">
        <div className="section-intro">
          <p className="eyebrow">Story</p>
          <h2 className="section-title">A portfolio that moves like a product story.</h2>
          <p className="section-copy">
            The reference you shared is strong because it does not feel like a brochure. It feels
            intentional, paced, and narrative-driven. This redesign applies that idea to a personal
            site without turning it into a copy.
          </p>
        </div>

        <div className="story-grid">
          <div className="story-column">
            {storyMoments.map((moment) => {
              const Icon = moment.icon

              return (
                <article key={moment.title} className="story-card">
                  <div className="story-card__icon">
                    <Icon size={20} />
                  </div>
                  <p className="story-card__eyebrow">{moment.eyebrow}</p>
                  <h3>{moment.title}</h3>
                  <p>{moment.copy}</p>
                </article>
              )
            })}
          </div>

          <div className="story-panel-wrap">
            <div className="story-panel">
              <div className="story-panel__header">
                <span>Why this format works</span>
                <span>Sticky narrative panel</span>
              </div>

              <div className="story-panel__body">
                <article className="panel-block">
                  <p className="panel-block__eyebrow">Signal 01</p>
                  <h3>Hierarchy first</h3>
                  <p>
                    Large serif headlines create mood. Clean sans-serif body copy keeps the message
                    legible and fast to scan.
                  </p>
                </article>

                <article className="panel-block">
                  <p className="panel-block__eyebrow">Signal 02</p>
                  <h3>Whitespace as pacing</h3>
                  <p>
                    The page breathes. Each section gets room to land instead of competing for
                    attention like a conventional portfolio grid.
                  </p>
                </article>

                <article className="panel-block">
                  <p className="panel-block__eyebrow">Signal 03</p>
                  <h3>Controlled motion</h3>
                  <p>
                    Subtle drift, layered gradients, and sticky framing create movement without
                    making the site feel like a visual effects demo.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="section-intro">
          <p className="eyebrow">Selected Work</p>
          <h2 className="section-title">Proof that holds up when you inspect it.</h2>
          <p className="section-copy">
            These are the strongest public signals in the portfolio: shipped applications,
            real-world architecture decisions, and open-source fixes with direct commit trails.
          </p>
        </div>

        <div className="project-stack">
          {featuredProjects.map((project, index) => (
            <article key={project.title} className="project-card">
              <div className="project-card__meta">
                <p className="project-card__index">0{index + 1}</p>
                <p className="project-card__category">{project.category}</p>
              </div>

              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags" aria-label={`${project.title} technologies`}>
                  {project.tech.map((item) => (
                    <span key={item} className="tag-chip">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={normalizeExternalUrl(project.github)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--ghost"
                  >
                    <Github size={16} />
                    Source
                  </a>
                  <a
                    href={normalizeExternalUrl(project.live)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--primary"
                  >
                    <ExternalLink size={16} />
                    {index === 0 ? 'Live product' : 'Launch'}
                  </a>
                </div>
              </div>

              <div className="project-card__panel">
                <p className="project-card__panel-label">Build notes</p>
                <ul className="project-point-list">
                  <li>Product-first interface choices instead of a generic dashboard shell.</li>
                  <li>Backend and state decisions shaped by real constraints, not tutorial patterns.</li>
                  <li>Clear enough structure that another engineer can audit the system quickly.</li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="proof" className="proof-section">
        <div className="proof-grid">
          <div className="proof-column">
            <div className="section-intro section-intro--compact">
              <p className="eyebrow">Proof</p>
              <h2 className="section-title">Public commits, visible range, and real constraints.</h2>
            </div>

            <div className="proof-list">
              {proofOfWork.map((item) => (
                <article key={item.url} className="proof-item">
                  <div>
                    <p className="proof-item__eyebrow">Merged contribution</p>
                    <h3>{item.label}</h3>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proof-link"
                  >
                    Open commit
                    <ExternalLink size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div className="career-column">
            <div className="career-panel">
              <p className="eyebrow">Recent Timeline</p>
              <div className="career-list">
                {careerMoments.map((item) => (
                  <article key={`${item.title}-${item.period}`} className="career-item">
                    <p className="career-item__period">{item.period}</p>
                    <h3>{item.title}</h3>
                    <p className="career-item__company">
                      {item.company} / {item.location}
                    </p>
                    <p>{item.description[0]}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-panel">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let&apos;s build something with a real standard.</h2>
          <p className="section-copy">
            I&apos;m looking for teams where product taste, engineering quality, and honest
            execution all matter. If that&apos;s your environment, send me the problem.
          </p>

          <div className="contact-actions">
            {resumeLinks.map((resume) => (
              <a key={resume.name} href={resume.url} className="button button--secondary" download>
                {resume.name}
              </a>
            ))}
          </div>

          <div className="contact-links">
            {socialLinks.map((item) => {
              const Icon = socialIconMap[item.icon] ?? Mail
              const isExternal = item.url.startsWith('http')

              return (
                <a
                  key={item.name}
                  href={item.url}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="link-chip"
                >
                  <Icon size={16} />
                  {item.name}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>Felmon Fekadu</p>
        <p>Built in Next.js. Redesigned with a Thine-inspired narrative structure.</p>
      </footer>
    </main>
  )
}
