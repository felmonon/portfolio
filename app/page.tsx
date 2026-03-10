import { ArrowRight, Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { experiences, proofOfWork, projects, resumeLinks, socialLinks, stats } from '@/lib/data'
import { normalizeExternalUrl } from '@/lib/url'

const navItems = [
  { label: 'Story', href: '#story' },
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
    eyebrow: 'Quiet Surface',
    title: 'The interface should calm down fast.',
    copy:
      'The best part of Thine is its restraint. It does not try to prove intelligence with more UI. It clears the frame, sets a tone, and lets the hierarchy do the work.',
    points: ['Centered hero', 'Large serif display', 'Minimal chrome'],
    variant: 'memory',
  },
  {
    eyebrow: 'Connected Depth',
    title: 'The depth belongs underneath, not everywhere on screen.',
    copy:
      'My work lives in the same tension: full-stack products, real-time collaboration, model-powered workflows, and public code that still needs to feel composed from the first glance.',
    points: ['Coherent state', 'Readable architecture', 'Real constraints'],
    variant: 'network',
  },
  {
    eyebrow: 'Visible Proof',
    title: 'Claims only matter when the work is inspectable.',
    copy:
      'That means live products, merged OSS commits, tests, and straightforward links to what actually shipped. The story should feel premium. The proof should feel concrete.',
    points: ['Live deployments', 'Merged commits', 'Audit-friendly links'],
    variant: 'proof',
  },
]

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
        <span className="proof-card__label">merged</span>
        <strong>LangChain.js validation + tests</strong>
      </div>
      <div className="proof-card">
        <span className="proof-card__label">shipped</span>
        <strong>Real-time editor with sync and persistence</strong>
      </div>
      <div className="proof-card">
        <span className="proof-card__label">live</span>
        <strong>AI assessment platform with payments</strong>
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
            <span className="site-brand__meta">Product engineering portfolio</span>
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
          <p className="eyebrow eyebrow--center">Software engineer / full-stack systems / practical AI</p>

          <h1 className="hero__title" aria-label="A portfolio for the teams you're building.">
            <span>A portfolio </span>
            <span>for the teams </span>
            <span>you&apos;re building.</span>
          </h1>

          <p className="hero__summary">
            I build products that feel composed on the surface and rigorous underneath: model-aware
            interfaces, real-time systems, and public work with proof you can inspect.
          </p>

          <div className="hero__actions">
            <a href="#work" className="button button--primary">
              View selected work
              <ArrowRight size={16} />
            </a>
            <a href="/resume.pdf" className="button button--secondary" download>
              Download resume
              <Download size={16} />
            </a>
          </div>

          <div className="hero__stage" aria-hidden="true">
            <div className="hero-panel">
              <div className="hero-panel__top">
                <span className="hero-panel__pill">current focus</span>
                <span className="hero-panel__pill hero-panel__pill--muted">2026</span>
              </div>

              <div className="hero-panel__body">
                <p className="hero-panel__eyebrow">orientation</p>
                <h2 className="hero-panel__title">Quiet on the surface. Rigorous underneath.</h2>
                <p className="hero-panel__copy">
                  Product taste, maintainable code, model integration, and shipped proof should
                  reinforce each other instead of competing for attention.
                </p>
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

      <section id="story" className="chapters">
        <div className="section-heading">
          <p className="eyebrow">Story</p>
          <h2 className="section-heading__title">Closer to a product story, further from a resume grid.</h2>
          <p className="section-heading__copy">
            The goal is not to copy Thine verbatim. It is to borrow the discipline: stronger
            pacing, fewer objects, better hierarchy, and motion that feels intentional.
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
          <h2 className="section-heading__title">Proof that still reads cleanly.</h2>
          <p className="section-heading__copy">
            These projects are the strongest public signals in the portfolio: product range,
            implementation depth, and links that point to something real.
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
                      {index === 0 ? 'Live product' : 'Open'}
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
            <h2 className="section-heading__title">Public commits, shipped work, and visible range.</h2>
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
                  <p className="eyebrow">Merged contribution</p>
                  <h3>{item.label}</h3>
                </div>

                <a href={item.url} target="_blank" rel="noopener noreferrer" className="proof-line__link">
                  Open commit
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
            I&apos;m looking for environments where product judgment and engineering standards both
            matter. If that&apos;s the bar, send me the problem.
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
        <p>Next.js portfolio / redesigned toward a calmer product narrative</p>
      </footer>
    </main>
  )
}
