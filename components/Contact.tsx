'use client'

import { FormEvent, useState } from 'react'
import { Copy, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { resumeLinks } from '@/lib/data'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const email = 'felmonon@gmail.com'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section-frame">
      <div className="container-shell">
        <div className="section-grid">
          <div className="section-side reveal-up">
            <p className="section-index">05</p>
            <p className="section-kicker">Contact</p>
            <h2 className="section-heading">Open to teams with a real engineering bar.</h2>
          </div>

          <div className="section-main">
            <p className="section-lede reveal-up">
              I am looking for software engineering and product-focused internship work where I can
              contribute quickly, learn from strong review culture, and keep shipping visible
              progress.
            </p>

            <div className="contact-frame reveal-up delay-1">
              <div className="contact-panel">
                <div className="contact-stack">
                  <p className="contact-note">Email</p>
                  <div className="contact-note-row">
                    <a href={`mailto:${email}`} className="contact-inline-link">
                      <Mail size={16} />
                      {email}
                    </a>
                    <button type="button" onClick={copyEmail} className="button-secondary">
                      <Copy size={16} />
                      {copied ? 'Copied' : 'Copy Email'}
                    </button>
                  </div>
                </div>

                <div className="contact-stack">
                  <p className="contact-note">Location</p>
                  <p className="contact-location">
                    <MapPin size={16} />
                    Calgary, Alberta / open to remote and relocation
                  </p>
                </div>

                <div className="contact-stack">
                  <p className="contact-note">Profiles</p>
                  <div className="contact-links">
                    <a
                      href="https://github.com/FELMONON"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-inline-link"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/felmonfekadu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-inline-link"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="contact-stack">
                  <p className="contact-note">Resumes</p>
                  <div className="resume-grid">
                    {resumeLinks.map((resume) => (
                      <a key={resume.name} href={resume.url} className="resume-link" download>
                        {resume.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="contact-form">
                <div className="contact-meta">
                  <p className="contact-note">Message</p>
                  <h3 className="contact-title">Create an email draft directly.</h3>
                  <p className="contact-copy">
                    This form opens your local mail app with the details filled in. No fake backend,
                    no dead submit button, no broken form theater.
                  </p>
                </div>

                <form className="field-grid" onSubmit={handleSubmit}>
                  <label>
                    <span className="field-label">Name</span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(event) =>
                        setFormData((prev) => ({ ...prev, name: event.target.value }))
                      }
                      className="field-input"
                    />
                  </label>

                  <label>
                    <span className="field-label">Email</span>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(event) =>
                        setFormData((prev) => ({ ...prev, email: event.target.value }))
                      }
                      className="field-input"
                    />
                  </label>

                  <label>
                    <span className="field-label">Message</span>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(event) =>
                        setFormData((prev) => ({ ...prev, message: event.target.value }))
                      }
                      className="field-input"
                    />
                  </label>

                  <button type="submit" className="button-primary">
                    <Mail size={16} />
                    Create Email Draft
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
