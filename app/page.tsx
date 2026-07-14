import Image from 'next/image'
import { JetBrains_Mono, Source_Serif_4, Space_Grotesk } from 'next/font/google'
import { TrackedLink } from '@/components/TrackedLink'
import portfolio from '@/content/portfolio.json'
import styles from './home.module.css'

const sans = Space_Grotesk({ subsets: ['latin'], variable: '--font-sans' })
const serif = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

const externalProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const

const organizationLogos: Record<string, string> = {
  Astro: '/brands/astro.svg',
  OpenAI: '/brands/openai.svg',
  MSW: '/brands/msw.svg',
  Google: '/brands/google.svg',
  'comma.ai': '/brands/comma.svg',
}

const featuredOrganizations = ['OpenAI', 'Astro', 'MSW', 'Google', 'comma.ai'] as const

export default function Home() {
  const { links, metrics, openSource, projects, selectedPullRequests, verification } = portfolio

  return (
    <main
      className={`${styles.page} ${sans.variable} ${serif.variable} ${mono.variable}`}
      id="top"
    >
      <a className={styles.skipLink} href="#work">
        Skip to selected work
      </a>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.identity} href="#top" aria-label="Felmon Fekadu, home">
            Felmon Fekadu
          </a>
          <nav className={styles.nav} aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#open-source">Open source</a>
            <a href="/case-studies/upstream-work">Case studies</a>
            <a href="#about">About</a>
            <TrackedLink eventName="resume_download" href={links.resume} download>
              Résumé
            </TrackedLink>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <p className={styles.eyebrow}>
          Developer-tools & applied-AI reliability engineer · Calgary, Alberta · Open to U.S. relocation
        </p>
        <h1 id="hero-title">Building developer tools and applied AI products.</h1>
        <p className={styles.heroCopy}>
          I build reliability-first TypeScript and Python systems: maintained developer tooling,
          deterministic AI evaluation, and full-stack product workflows. My public record includes
          14 maintainer-merged upstream changes across OpenAI, Astro, MSW, Google, and comma.ai.
        </p>
        <ul
          className={styles.heroOrganizations}
          aria-label="Organizations with accepted contributions"
        >
          {featuredOrganizations.map((organization) => (
            <li key={organization}>
              <Image
                alt=""
                className={styles.heroOrganizationLogo}
                height={18}
                src={organizationLogos[organization]}
                unoptimized
                width={18}
              />
              <span>{organization}</span>
            </li>
          ))}
        </ul>
        <div className={styles.heroActions}>
          <TrackedLink
            className={styles.primaryAction}
            eventName="resume_download"
            href={links.resume}
            download
          >
            Download résumé
          </TrackedLink>
          <a className={styles.secondaryAction} href="#work">
            View selected work
          </a>
          <TrackedLink
            className={styles.textAction}
            eventName="github_click"
            href={links.github}
            {...externalProps}
          >
            GitHub
          </TrackedLink>
        </div>
      </section>

      <section className={styles.proof} aria-label="Verified engineering evidence">
        <p className={styles.verification}>{verification.label}</p>
        <ul>
          {metrics.map((metric) => (
            <li key={metric.label}>
              <a
                aria-label={`${metric.value} ${metric.label}`}
                href={metric.source}
                {...externalProps}
              >
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} id="work" aria-labelledby="work-title">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Selected work</p>
          <h2 id="work-title">Three projects. Three different kinds of ownership.</h2>
          <p>
            Evaluation infrastructure, maintained tooling, and a paid product — selected for the
            decisions behind them.
          </p>
        </div>

        <div className={styles.projectList}>
          {projects.map((project) => (
            <article className={styles.project} key={project.title}>
              <div className={styles.projectMeta}>
                <span>{project.index}</span>
                <p>{project.category}</p>
              </div>
              <div className={styles.projectBody}>
                <h3>{project.title}</h3>
                <dl className={styles.projectDetails}>
                  <div>
                    <dt>Problem</dt>
                    <dd>{project.problem}</dd>
                  </div>
                  <div>
                    <dt>What I built</dt>
                    <dd>{project.built}</dd>
                  </div>
                  <div>
                    <dt>Technical decision</dt>
                    <dd>{project.decision}</dd>
                  </div>
                  <div>
                    <dt>Verified result</dt>
                    <dd>{project.result}</dd>
                  </div>
                  <div>
                    <dt>What I learned</dt>
                    <dd>{project.learned}</dd>
                  </div>
                </dl>
                <ul className={styles.stack} aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className={styles.inlineLinks}>
                  {project.links.map((link) => (
                    <TrackedLink
                      aria-label={`${link.label}: ${project.title}`}
                      eventName="project_open"
                      eventData={{ project: project.title, destination: link.label }}
                      href={link.href}
                      key={link.href}
                      {...(link.href.startsWith('http') ? externalProps : {})}
                    >
                      {link.label}
                    </TrackedLink>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.openSource} id="open-source" aria-labelledby="oss-title">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Open-source evidence</p>
          <h2 id="oss-title">Reviewed in public.</h2>
          <p>
            Fourteen changes accepted across seven repositories, spanning reliability, typing,
            language tooling, accessibility, documentation, and test performance. I also maintain
            MSW Inspector end to end and hold Astro&rsquo;s L1 Contributor role, with weekly
            reviews and issue triage.
          </p>
        </div>

        <div className={styles.ossGrid}>
          <dl className={styles.orgList}>
            {openSource.map((item) => (
              <div key={item.organization}>
                <dt>
                  <a href={item.source} {...externalProps}>
                    <span className={styles.orgLogoFrame} aria-hidden="true">
                      <Image
                        alt=""
                        className={styles.orgLogo}
                        height={22}
                        src={organizationLogos[item.organization]}
                        unoptimized
                        width={22}
                      />
                    </span>
                    <span>{item.organization}</span>
                  </a>
                </dt>
                <dd>{item.count} merged</dd>
              </div>
            ))}
          </dl>
          <div className={styles.selectedPrs}>
            <p className={styles.monoLabel}>Selected pull requests</p>
            <ol>
              {selectedPullRequests.map((pullRequest) => (
                <li key={pullRequest.href}>
                  <a href={pullRequest.href} {...externalProps}>
                    {pullRequest.label}
                  </a>
                </li>
              ))}
            </ol>
            <div className={styles.inlineLinks}>
              <a href="/case-studies/upstream-work">Read three engineering case studies</a>
              <TrackedLink
                className={styles.textAction}
                eventName="github_click"
                href={links.github}
                {...externalProps}
              >
                Review the full GitHub record
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about} id="about" aria-labelledby="about-title">
        <div className={styles.aboutCopy}>
          <p className={styles.eyebrow}>About and experience</p>
          <h2 id="about-title">Reliability is a technical skill and an operating habit.</h2>
          <p>
            I am a Calgary-based software engineer completing a B.S. in Computer Science. I am
            seeking developer tools, platform, and applied AI roles with end-to-end ownership, and
            I am willing to relocate to the United States.
          </p>
          <p>
            Safety-sensitive industrial work shaped how I approach testing, failure paths,
            documentation, escalation, and production responsibility.
          </p>
          <dl className={styles.aboutMeta}>
            <div>
              <dt>Primary stack</dt>
              <dd>TypeScript, Python, React, Node.js, PostgreSQL</dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>B.S. Computer Science, expected October 2026</dd>
            </div>
            <div>
              <dt>Target roles</dt>
              <dd>Developer tools, applied AI reliability, platform; full-stack product engineering</dd>
            </div>
            <div>
              <dt>Currently</dt>
              <dd>
                Maintaining MSW Inspector, contributing weekly to Astro, and interviewing for
                full-time roles — updated July 13, 2026
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={styles.contact} id="contact" aria-labelledby="contact-title">
        <p className={styles.eyebrow}>Contact</p>
        <h2 id="contact-title">Let’s talk about useful software and hard problems.</h2>
        <p>
          Open to Canada-based and remote roles, and willing to relocate to the United States. The
          résumé is the overview; GitHub is the evidence.
        </p>
        <div className={styles.heroActions}>
          <TrackedLink
            className={styles.primaryAction}
            eventName="resume_download"
            href={links.resume}
            download
          >
            Download résumé
          </TrackedLink>
          <TrackedLink
            className={styles.secondaryAction}
            eventName="email_click"
            href={links.email}
          >
            Email Felmon
          </TrackedLink>
          <TrackedLink
            className={styles.textAction}
            eventName="github_click"
            href={links.github}
            {...externalProps}
          >
            GitHub
          </TrackedLink>
          <a className={styles.textAction} href={links.linkedin} {...externalProps}>
            LinkedIn
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>Felmon Fekadu · Calgary, Alberta</span>
        <span>{verification.label}</span>
        <a className={styles.backToTop} href="#top">
          Back to top ↑
        </a>
      </footer>
    </main>
  )
}
