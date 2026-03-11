import { ExternalLink, Github } from 'lucide-react'
import { proofOfWork, projects } from '@/lib/data'
import { normalizeExternalUrl } from '@/lib/url'

export default function Projects() {
  const featured = projects.filter((project) => project.featured)
  const more = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="section-frame">
      <div className="container-shell">
        <div className="section-grid">
          <div className="section-side reveal-up">
            <p className="section-index">03</p>
            <p className="section-kicker">Selected Work</p>
            <h2 className="section-heading">Proof over claims.</h2>
          </div>

          <div className="section-main">
            <p className="section-lede reveal-up">
              The strongest signal is work that can be inspected. This section leads with shipped
              products, then separates accepted upstream work from submitted PRs.
            </p>

            <div className="project-stack reveal-up delay-1">
              {featured.map((project, index) => (
                <article key={project.title} className="project-entry">
                  <div className="project-meta">
                    <p className="project-index">0{index + 1}</p>
                    <p className="project-category">{project.category}</p>
                  </div>

                  <div className="project-body">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-summary">{project.description}</p>

                    <div className="project-actions">
                      <a
                        href={normalizeExternalUrl(project.github)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <Github size={16} />
                        Source
                      </a>
                      <a
                        href={normalizeExternalUrl(project.live)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link--primary"
                      >
                        <ExternalLink size={16} />
                        {index === 0 ? 'Live Project' : 'Launch'}
                      </a>
                    </div>

                    <div className="project-tech">
                      {project.tech.map((item) => (
                        <span key={item} className="project-tech-item">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="subsection-block reveal-up delay-2">
              <div>
                <p className="section-kicker">Accepted + Submitted Upstream Work</p>
                <p className="section-lede">
                  The accepted PR and the submitted upstream work are labeled separately so the
                  public proof stays precise.
                </p>
              </div>

              <div className="proof-list">
                {proofOfWork.map((item) => (
                  <article key={item.url} className="proof-item">
                    <p className="project-category">{item.kind}</p>
                    <h3 className="skill-title">{item.label}</h3>
                    <p className="muted">{item.status}</p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proof-link"
                    >
                      {item.cta}
                      <ExternalLink size={16} />
                    </a>
                  </article>
                ))}
              </div>
            </div>

            <div className="subsection-block reveal-up delay-2">
              <div>
                <p className="section-kicker">More Work</p>
              </div>

              <div className="mini-projects">
                {more.map((project) => (
                  <article key={project.title} className="mini-project">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className="muted">{project.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
