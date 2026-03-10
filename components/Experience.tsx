import { experiences } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="section-frame">
      <div className="container-shell">
        <div className="section-grid">
          <div className="section-side reveal-up">
            <p className="section-index">04</p>
            <p className="section-kicker">Experience</p>
            <h2 className="section-heading">Built through work, not a straight line.</h2>
          </div>

          <div className="section-main">
            <p className="section-lede reveal-up">
              My background is mixed on purpose and in reality. Software work, industrial
              operations, and self-directed study gave me a useful combination of discipline,
              adaptability, and respect for systems that cannot fail casually.
            </p>

            <div className="timeline reveal-up delay-1">
              {experiences.map((item) => (
                <article key={`${item.title}-${item.period}`} className="timeline-item">
                  <div className="timeline-meta">
                    <p className="timeline-period">{item.period}</p>
                    <p className="timeline-subtitle">{item.company}</p>
                    <p className="muted">{item.location}</p>
                  </div>

                  <div className="timeline-main">
                    <h3 className="timeline-title">{item.title}</h3>
                    <ul className="timeline-list">
                      {item.description.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                    <div className="timeline-taglist">
                      {item.tech.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
