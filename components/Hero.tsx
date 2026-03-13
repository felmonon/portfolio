import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { resumeLinks, roles, socialLinks, stats } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

export default function Hero() {
  return (
    <section id="home" className="hero-shell">
      <div className="container-shell">
        <div className="hero-grid">
          <div className="hero-main reveal-up">
            <p className="section-kicker">Software engineer / full-stack systems / practical AI</p>
            <h1 className="hero-title">Felmon Fekadu</h1>
            <p className="hero-summary">
              Computer Science student building product-grade software, real-time tools, and AI
              features with live demos, accepted upstream work, and a bias toward proof over
              inflated claims.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button-primary">
                View Selected Work
                <ArrowRight size={16} />
              </a>
              <a href={resumeLinks[0]?.url} className="button-secondary" download>
                Download Resume
                <Download size={16} />
              </a>
            </div>

            <div className="resume-links">
              {resumeLinks.map((resume) => (
                <a key={resume.name} href={resume.url} className="resume-link" download>
                  {resume.name}
                </a>
              ))}
            </div>

            <div className="social-links">
              {socialLinks.map((item) => {
                const Icon = iconMap[item.icon] ?? Mail
                const isExternal = item.url.startsWith('http')

                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="social-link"
                  >
                    <Icon size={16} />
                    {item.name}
                  </a>
                )
              })}
            </div>
          </div>

          <aside className="hero-rail reveal-up delay-1">
            <div className="rail-panel">
              <p className="section-kicker">Current Focus</p>
              <h2 className="rail-title">Full-time roles where engineering quality is visible in the work.</h2>
              <p className="rail-copy">
                Looking for teams that ship real software, care about review quality, and expect
                product thinking from engineers.
              </p>
            </div>

            <div className="role-list">
              {roles.map((role, index) => (
                <div key={role} className="role-item">
                  <p className="meta-label">0{index + 1}</p>
                  <strong>{role}</strong>
                </div>
              ))}
            </div>

            <div className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
