import { aboutHighlights } from '@/lib/data'

const principles = [
  {
    title: 'Working software over portfolio theater',
    copy: 'I care more about whether the product holds up under real use than whether it can be sold by one polished screenshot.',
  },
  {
    title: 'Clear structure over cleverness',
    copy: 'Readable systems, direct feedback loops, and honest implementation choices age better than flashy code.',
  },
  {
    title: 'Fast iteration with evidence',
    copy: 'I like making progress visible: working demos, tests, commit history, and fixes that can actually be inspected.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-frame">
      <div className="container-shell">
        <div className="section-grid">
          <div className="section-side reveal-up">
            <p className="section-index">01</p>
            <p className="section-kicker">About</p>
            <h2 className="section-heading">Engineering with less theater.</h2>
          </div>

          <div className="section-main">
            <p className="section-lede reveal-up">
              I work best where product taste and engineering rigor have to coexist. I want the
              interface to feel deliberate, the system to stay readable, and the shipped result to
              stand up when real people start leaning on it.
            </p>

            <div className="body-grid reveal-up delay-1">
              <p className="body-copy">
                Recent work includes an AI-assisted assessment platform, a real-time collaborative
                editor, and upstream fixes across TypeScript and Rust open-source projects.
              </p>
              <p className="body-copy">
                I am looking for full-time engineering work where I can contribute quickly, absorb
                feedback from strong teams, and keep raising the quality bar on what I ship.
              </p>
            </div>

            <div className="statement reveal-up delay-1">
              <p className="statement-copy">Build the thing. Test the thing. Keep the thing honest.</p>
            </div>

            <div className="principles-list reveal-up delay-2">
              {principles.map((item, index) => (
                <article key={item.title} className="principle-item">
                  <p className="principle-index">0{index + 1}</p>
                  <h3 className="principle-title">{item.title}</h3>
                  <p className="principle-copy">{item.copy}</p>
                </article>
              ))}
            </div>

            <div className="tag-list reveal-up delay-2">
              {aboutHighlights.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
