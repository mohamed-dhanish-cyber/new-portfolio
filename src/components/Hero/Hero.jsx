import { useEffect, useRef } from 'react'
import { contactInfo } from '../../data/projects'
import MagneticButton from '../common/MagneticButton'
import './Hero.css'

export default function Hero() {
  const heroRef = useRef(null)
  const visualRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    // Stagger reveal on load
    const items = hero.querySelectorAll('.hero__reveal')
    items.forEach((item, i) => {
      item.style.animationDelay = `${0.3 + i * 0.12}s`
      item.classList.add('hero__reveal--animate')
    })
  }, [])

  // Subtle parallax for the visual element
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const handleMouseMove = (e) => {
      const el = visualRef.current
      if (!el) return
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      el.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToWork = (e) => {
    e.preventDefault()
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home" ref={heroRef} aria-label="Hero introduction">
      {/* Ambient glow */}
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="hero__container container">
        <div className="hero__content">
          <p className="hero__greeting hero__reveal">HELLO, I'M</p>

          <h1 className="hero__name hero__reveal">
            <span className="hero__name-text">MOHAMED DHANISH</span>
          </h1>

          <p className="hero__title hero__reveal">DIGITAL CREATOR</p>

          <p className="hero__subtitle hero__reveal">
            <span className="hero__subtitle-line" />
            WEB DEVELOPER <span className="hero__cross">×</span> VIDEO EDITOR
            <span className="hero__subtitle-line" />
          </p>

          <p className="hero__description hero__reveal">
            I design and build modern digital experiences and create engaging
            visual content for brands, businesses and individuals.
          </p>

          <div className="hero__actions hero__reveal">
            <MagneticButton
              as="a"
              href="#work"
              className="btn btn--primary"
              onClick={scrollToWork}
              strength={0.15}
              id="hero-cta-work"
            >
              VIEW MY WORK <span className="btn__arrow">↗</span>
            </MagneticButton>

            <MagneticButton
              as="a"
              href="#contact"
              className="btn btn--outline"
              onClick={scrollToContact}
              strength={0.15}
              id="hero-cta-quote"
            >
              GET A QUOTE <span className="btn__arrow">↗</span>
            </MagneticButton>

            <MagneticButton
              as="a"
              href={`https://wa.me/${contactInfo.whatsapp}`}
              className="hero__whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact via WhatsApp"
              strength={0.2}
              id="hero-cta-whatsapp"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </MagneticButton>
          </div>
        </div>

        {/* Abstract visual placeholder */}
        <div className="hero__visual" ref={visualRef} aria-hidden="true">
          <div className="hero__visual-inner">
            <div className="hero__orb hero__orb--1" />
            <div className="hero__orb hero__orb--2" />
            <div className="hero__orb hero__orb--3" />
            <div className="hero__visual-ring" />
            <div className="hero__visual-ring hero__visual-ring--2" />
            <div className="hero__profile-wrapper">
              <img src="/profile.png" alt="Profile" className="hero__profile-img" />
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}
