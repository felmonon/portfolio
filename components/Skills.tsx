import { skills } from '@/lib/data'

const categoryNotes: Record<string, string> = {
  'Frontend Development': 'Interfaces that feel intentional, responsive, and stable under real use.',
  'Backend & AI': 'Application logic, data flow, and model-powered features that are useful instead of ornamental.',
  'Data & DevOps': 'Tooling and delivery layers that keep projects shippable, testable, and easy to operate.',
}

export default function Skills() {
  return (
    <section id="skills" className="section-frame">
      <div className="container-shell">
        <div className="section-grid">
          <div className="section-side reveal-up">
            <p className="section-index">02</p>
            <p className="section-kicker">Stack</p>
            <h2 className="section-heading">A focused stack, not a keyword dump.</h2>
          </div>

          <div className="section-main">
            <p className="section-lede reveal-up">
              I use a practical toolset that helps me move across interface work, backend systems,
              and shipping infrastructure without looking scattered. The point is range with
              discipline, not a list of buzzwords.
            </p>

            <div className="skills-ledger reveal-up delay-1">
              {skills.map((group, index) => (
                <article key={group.category} className="skill-row">
                  <div className="skill-meta">
                    <p className="section-kicker">0{index + 1}</p>
                    <h3 className="skill-title">{group.category}</h3>
                    <p className="skill-note">{categoryNotes[group.category]}</p>
                  </div>

                  <div className="skill-items">
                    {group.items.map((item) => (
                      <span key={item} className="skill-chip">
                        {item}
                      </span>
                    ))}
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
