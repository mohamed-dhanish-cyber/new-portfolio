import { useState, useEffect } from 'react'
import { usePortfolioMode } from '../../context/PortfolioContext'
import MagneticButton from '../common/MagneticButton'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'WEB DESIGN', href: '#work', mode: 'web' },
  { label: 'VIDEO EDITING', href: '#work', mode: 'video' },
  { label: 'PROCESS', href: '#process' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { setMode } = usePortfolioMode()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (e, href, targetMode = null) => {
    e.preventDefault()
    setMobileOpen(false)
    if (targetMode) {
      setMode(targetMode)
    }
    
    // Slight delay so document.body.style.overflow gets cleared BEFORE we try to scroll
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
      id="main-nav"
    >
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, '#home')}>
          <img src="/logo_transparent.png" alt="DHANISH" className="navbar__logo-img" />
        </a>

        {/* Desktop Nav Links */}
        <ul className="navbar__links" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={(e) => handleNavClick(e, link.href, link.mode)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <MagneticButton
          as="a"
          href="#contact"
          className="navbar__cta"
          onClick={(e) => handleNavClick(e, '#contact')}
          strength={0.2}
        >
          LET'S TALK <span className="btn__arrow">↗</span>
        </MagneticButton>

        {/* Mobile Hamburger */}
        <button
          className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          id="mobile-menu-toggle"
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`} role="dialog" aria-label="Mobile navigation">
        <ul className="navbar__mobile-links" role="list">
          {NAV_LINKS.map((link, i) => (
            <li key={link.label} className="navbar__mobile-item" style={{ transitionDelay: `${0.05 + i * 0.05}s` }}>
              <a
                href={link.href}
                className="navbar__mobile-link"
                onClick={(e) => handleNavClick(e, link.href, link.mode)}
              >
                <span className="navbar__mobile-number">0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="navbar__mobile-footer">
          <a href="#contact" className="btn btn--primary" onClick={(e) => handleNavClick(e, '#contact')}>
            LET'S TALK <span className="btn__arrow">↗</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
