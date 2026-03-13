'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, resumeLinks } from '@/lib/data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-nav ${isScrolled ? 'site-nav--scrolled' : ''}`}>
      <div className="container-shell">
        <div className="site-nav__inner">
          <a href="#home" className="nav-brand" onClick={() => setIsOpen(false)}>
            <span className="nav-brand__name">Felmon Fekadu</span>
            <span className="nav-brand__meta">software engineer / calgary / 2026</span>
          </a>

          <nav className="nav-links hidden md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="nav-actions hidden md:flex">
            <a href={resumeLinks[0]?.url} className="button-secondary" download>
              Resume
            </a>
            <a href="#contact" className="button-primary">
              Contact
            </a>
          </div>

          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="button-secondary nav-toggle md:hidden"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="mobile-panel md:hidden">
          <div className="container-shell mobile-panel__inner">
            <nav className="mobile-panel__nav" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="nav-link"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mobile-panel__actions">
              <a href={resumeLinks[0]?.url} className="button-secondary" download>
                Resume
              </a>
              <a href="#contact" className="button-primary" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
