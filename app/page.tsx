import { ArrowRight, Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { experiences, proofOfWork, projects, resumeLinks, socialLinks, stats } from '@/lib/data'
import { normalizeExternalUrl } from '@/lib/url'

const navItems = [
  { label: 'Profile', href: '#profile' },
  { label: 'Work', href: '#work' },
  { label: 'Proof', href: '#proof' },
  { label: 'Contact', href: '#contact' },
]

const socialIconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

const chapters = [
  {
    eyebrow: 'How I Work',
    title: 'Start with the product. Make the system hold up.',
    copy:
      'I care about interfaces that read clearly, state that stays coherent, and implementation that survives iteration instead of collapsing after the first polished demo.',
    points: ['Calm UX', 'State discipline', 'Maintainable implementation'],
    variant: 'memory',
  },
  {
    eyebrow: 'What I Build',
    title: 'Full-stack software where AI is one capability among many.',
    copy:
      'My best work mixes frontend judgment with backend reality: auth, persistence, real-time collaboration, APIs, payments, and model-powered workflows that fit the product instead of hijacking it.',
    points: ['Next.js + TypeScript', 'Real-time + data flows', 'Model integrations that serve the UX'],
    variant: 'network',
  },
  {
    eyebrow: 'Proof Standard',
    title: 'Lead with shipped products. State upstream work exactly.',
    copy:
      'The standard is simple: public products that run, accepted upstream work where it exists, and submitted PRs labeled exactly as they are. The proof should not need spin.',
    points: ['Live products', 'Accepted upstream PR', 'Code you can inspect'],
    variant: 'proof',
  },
]

const heroHighlights = ['Open to full-time roles', 'Based in Alberta', 'Product development + practical AI']

const heroDetails = [
  {
    label: 'Looking for',
    value: 'Full-time software developer, full-stack, and AI product roles',
  },
  {
    label: 'Strongest proof',
    value: 'TypeJung: a live full-stack assessment product with payments, auth, and AI-generated reports',
  },
  {
    label: 'Works with',
    value: 'Next.js, TypeScript, FastAPI, real-time flows, and model-backed features',
  },
]

const profilePrinciples = [
  'Make the interface clear before making it clever.',
  'Use AI where it improves product behavior, not where it only adds spectacle.',
  'Prefer proof that is inspectable: live products, accepted work, clearly labeled PRs, and source.',
]

const profileSignals = [
  {
    label: 'Current target',
    value: 'Full-time roles where product judgment and software quality both matter',
  },
  {
    label: 'Strongest environments',
    value: 'Teams shipping real software with review culture, iteration speed, and high ownership',
  },
  {
    label: 'Working base',
    value: 'Alberta, Canada / remote-friendly',
  },
]

const profileFocus = ['Product-minded builder', 'Shipped products', 'Real-time systems', 'Model-powered features']

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3)
const recentExperience = experiences.slice(0, 3)

function ChapterStage({ variant }: { variant: string }) {
  if (variant === 'memory') {
    return (
      <div className="chapter-stage chapter-stage--memory" aria-hidden="true">
        <div className="memory-device">
          <div className="memory-device__header">
            <span className="memory-dot" />
            <span className="memory-label">ambient context</span>
          </div>
          <div className="memory-device__body">
            <p className="memory-title">Calm at first glance.</p>
            <p className="memory-copy">Dense underneath when it actually matters.</p>
          </div>
        </div>

        <div className="memory-note memory-note--one">clear product taste</div>
        <div className="memory-note memory-note--two">state that stays coherent</div>
        <div className="memory-note memory-note--three">less theater, more proof</div>
      </div>
    )
  }

  if (variant === 'network') {
    return (
      <div className="chapter-stage chapter-stage--network" aria-hidden="true">
        <div className="network-orbit network-orbit--outer" />
        <div className="network-orbit network-orbit--inner" />
        <div className="network-core">system</div>
        <div className="network-node network-node--top">ui</div>
        <div className="network-node network-node--right">state</div>
        <div className="network-node network-node--bottom">api</div>
        <div className="network-node network-node--left">models</div>
      </div>
    )
  }

  return (
    <div className="chapter-stage chapter-stage--proof" aria-hidden="true">
      <div className="proof-card proof-card--lead">
        <span className="proof-card__label">flagship</span>
        <strong>TypeJung live product</strong>
      </div>
      <div className="proof-card">
        <span className="proof-card__label">shipped</span>
        <strong>Collab Editor with sync and persistence</strong>
      </div>
      <div className="proof-card">
        <span className="proof-card__label">merged</span>
        <strong>commaai/opendbc upstream PR</strong>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-nav">
        <div className="site-nav__inner">
          <a href="#top" className="site-brand">
            <span className="site-brand__name">Felmon Fekadu</span>
            <span className="site-brand__meta">Product development portfolio</span>
          </a>

          <nav className="site-nav__links" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="/resume.pdf" className="nav-button" download>
            Resume
          </a>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="hero__aurora hero__aurora--left" aria-hidden="true" />
        <div className="hero__aurora hero__aurora--right" aria-hidden="true" />

        <div className="hero__content">
          <p className="eyebrow eyebrow--center">Felmon Fekadu / software developer / full-stack systems</p>

          <h1 className="hero__title" aria-label="Felmon Fekadu. Full-stack developer for real products.">
            <span>Felmon Fekadu.</span>
            <span>Full-stack developer</span>
            <span>for real products.</span>
          </h1>

          <p className="hero__summary">
            I build model-aware interfaces, real-time systems, and full-stack product workflows
            that stay readable under real use. The strongest public proof is shipped product work
            first, then accepted upstream OSS where it exists, with submitted PRs stated plainly.
          </p>

          <div className="hero__actions">
            <a href="#profile" className="button button--ghost">
              Read profile
              <ArrowRight size={16} />
            </a>
            <a href="#work" className="button button--primary">
              View selected work
              <ArrowRight size={16} />
            </a>
            <a href="/resume.pdf" className="button button--secondary" download>
              Download resume
              <Download size={16} />
            </a>
          </div>

          <div className="hero__meta" aria-label="Profile highlights">
            {heroHighlights.map((item) => (
              <span key={item} className="hero-meta-pill">
                {item}
              </span>
            ))}
          </div>

          <div className="hero__stage" aria-hidden="true">
            <div className="hero-panel">
              <div className="hero-panel__top">
                <span className="hero-panel__pill">profile</span>
                <span className="hero-panel__pill hero-panel__pill--muted">2026</span>
              </div>

              <div className="hero-panel__body">
                <p className="hero-panel__eyebrow">current direction</p>
                <h2 className="hero-panel__title">Practical AI. Real systems. Public proof.</h2>
                <p className="hero-panel__copy">
                  I&apos;m most useful on products where interface clarity, implementation depth,
                  and shipping discipline are all part of the same job.
                </p>
              </div>

              <div className="hero-panel__details">
                {heroDetails.map((item) => (
                  <article key={item.label} className="hero-detail">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </article>
                ))}
              </div>

              <div className="hero-panel__metrics">
                {stats.slice(0, 3).map((stat) => (
                  <article key={stat.label} className="metric">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="profile" className="profile">
        <div className="section-heading">
          <p className="eyebrow">Profile</p>
          <h2 className="section-heading__title">The profile behind the repositories.</h2>
          <p className="section-heading__copy">
            This should answer the first practical questions quickly: what I build, how I work,
            and the kinds of teams where I&apos;m most useful.
          </p>
        </div>

        <div className="profile-grid">
          <article className="profile-panel profile-panel--intro">
            <p className="eyebrow">Short version</p>
            <h3 className="profile-panel__title">
              I care about products that survive real use, not just polished demos.
            </h3>
            <p className="profile-panel__copy">
              The through-line in my work is straightforward: make the product feel clear, make
              the system hold up, and make the proof easy to inspect. That is true whether the
              feature is a real-time editor, a paid assessment flow, or an LLM-backed workflow.
            </p>

            <div className="profile-panel__chips">
              {profileFocus.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </article>

          <div className="profile-stack">
            <article className="profile-panel">
              <p className="eyebrow">Operating principles</p>
              <ul className="profile-list">
                {profilePrinciples.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="profile-panel">
              <p className="eyebrow">Where I fit best</p>
              <div className="profile-signals">
                {profileSignals.map((item) => (
                  <article key={item.label} className="profile-signal">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </article>
                ))}
              </div>

              <div className="profile-links">
                {socialLinks.map((item) => {
                  const Icon = socialIconMap[item.icon] ?? Mail
                  const isExternal = item.url.startsWith('http')

                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="contact-link"
                    >
                      <Icon size={16} />
                      {item.name}
                    </a>
                  )
                })}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="story" className="chapters">
        <div className="section-heading">
          <p className="eyebrow">Working Style</p>
          <h2 className="section-heading__title">
            How I work, what I build, and what counts as proof.
          </h2>
          <p className="section-heading__copy">
            The goal is to make the developer profile legible before you open a single repo:
            working style, technical range, and evidence standards.
          </p>
        </div>

        <div className="chapter-list">
          {chapters.map((chapter, index) => (
            <article key={chapter.title} className="chapter">
              <div className="chapter__copy">
                <p className="eyebrow">{`0${index + 1}`} / {chapter.eyebrow}</p>
                <h2 className="chapter__title">{chapter.title}</h2>
                <p className="chapter__body">{chapter.copy}</p>
                <ul className="chapter__points">
                  {chapter.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="chapter__visual">
                <ChapterStage variant={chapter.variant} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="showcase">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2 className="section-heading__title">Start with the strongest shipped work.</h2>
          <p className="section-heading__copy">
            The portfolio leads with the best public product proof first, then separates accepted
            upstream work from submitted PRs so the signal stays clean.
          </p>
        </div>

        <div className="showcase-list">
          {featuredProjects.map((project, index) => (
            <article key={project.title} className="showcase-card">
              <div className="showcase-card__frame">
                <p className="showcase-card__index">0{index + 1}</p>

                <div className="showcase-card__body">
                  <p className="eyebrow">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="showcase-card__tags">
                    {project.tech.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="showcase-card__actions">
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
                      {index === 0 ? 'Live product' : 'Open live app'}
                    </a>
                  </div>
                </div>

                <div className="showcase-card__ghost" aria-hidden="true">
                  {project.category}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="proof" className="proof">
        <div className="proof__intro">
          <div className="section-heading section-heading--tight">
            <p className="eyebrow">Proof</p>
            <h2 className="section-heading__title">Live products first. Upstream work stated honestly.</h2>
          </div>

          <div className="proof__stats">
            {stats.map((stat) => (
              <article key={stat.label} className="proof-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="proof__grid">
          <div className="proof__commits">
            {proofOfWork.map((item) => (
              <article key={item.url} className="proof-line">
                <div>
                  <p className="eyebrow">{item.kind}</p>
                  <h3>{item.label}</h3>
                  <p className="timeline-item__meta">{item.status}</p>
                </div>

                <a href={item.url} target="_blank" rel="noopener noreferrer" className="proof-line__link">
                  {item.cta}
                  <ExternalLink size={16} />
                </a>
              </article>
            ))}
          </div>

          <div className="proof__timeline">
            {recentExperience.map((item) => (
              <article key={`${item.title}-${item.period}`} className="timeline-item">
                <p className="eyebrow">{item.period}</p>
                <h3>{item.title}</h3>
                <p className="timeline-item__meta">
                  {item.company} / {item.location}
                </p>
                <p>{item.description[0]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact__panel">
          <p className="eyebrow eyebrow--center">Contact</p>
          <h2 className="contact__title">For the teams you&apos;re headed toward.</h2>
          <p className="contact__copy">
            I&apos;m looking for environments where product judgment and software quality both
            matter in full-time product and developer work. If that&apos;s the bar, send me the problem.
          </p>

          <div className="contact__actions">
            {resumeLinks.map((resume) => (
              <a key={resume.name} href={resume.url} className="button button--secondary" download>
                {resume.name}
              </a>
            ))}
          </div>

          <div className="contact__links">
            {socialLinks.map((item) => {
              const Icon = socialIconMap[item.icon] ?? Mail
              const isExternal = item.url.startsWith('http')

              return (
                <a
                  key={item.name}
                  href={item.url}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="contact-link"
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
        <p>Profile-first portfolio / Next.js / product development focus</p>
      </footer>
    </main>
  )
}
