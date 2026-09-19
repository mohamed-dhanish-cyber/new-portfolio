import ScrollReveal from '../common/ScrollReveal'
import './Services.css'

const webServices = [
  'Business Websites',
  'Landing Pages',
  'Portfolio Websites',
  'Gym Websites',
  'Restaurant Websites',
  'Local Business Websites',
  'Website Redesign',
  'Responsive Web Design',
]

const videoServices = [
  'Instagram Reels',
  'Short-form Videos',
  'YouTube Videos',
  'Promotional Videos',
  'Social Media Content',
  'Cinematic Edits',
  'Motion-based Edits',
]

export default function Services() {
  const scrollToWebWork = (e) => {
    e.preventDefault()
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToVideoWork = (e) => {
    e.preventDefault()
    document.querySelector('#video-work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="services section" id="services" aria-label="Services">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">02 — SERVICES</span>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="services__heading">
            WHAT I <span className="text-accent">DO</span>
          </h2>
        </ScrollReveal>

        <div className="services__grid">
          {/* SERVICE 01 — Web */}
          <ScrollReveal delay={1}>
            <div className="services__card services__card--web">
              <div className="services__card-header">
                <span className="services__number">01</span>
                <div className="services__card-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
              </div>

              <h3 className="services__card-title">
                WEB DESIGN &<br/>DEVELOPMENT
              </h3>

              <p className="services__card-desc">
                I design and build modern, responsive websites that establish a
                strong online presence and turn visitors into customers.
              </p>

              <ul className="services__list" role="list">
                {webServices.map((s) => (
                  <li key={s} className="services__list-item">
                    <span className="services__list-dot" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>

              <a href="#work" className="btn btn--ghost" onClick={scrollToWebWork} id="services-web-cta">
                EXPLORE WEB WORK <span className="btn__arrow">↗</span>
              </a>
            </div>
          </ScrollReveal>

          {/* SERVICE 02 — Video */}
          <ScrollReveal delay={2}>
            <div className="services__card services__card--video">
              <div className="services__card-header">
                <span className="services__number">02</span>
                <div className="services__card-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" />
                  </svg>
                </div>
              </div>

              <h3 className="services__card-title">
                VIDEO<br/>EDITING
              </h3>

              <p className="services__card-desc">
                I create compelling video content — from short-form social media
                edits to cinematic productions — that captures attention and
                communicates with impact.
              </p>

              <ul className="services__list" role="list">
                {videoServices.map((s) => (
                  <li key={s} className="services__list-item">
                    <span className="services__list-dot" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>

              <a href="#video-work" className="btn btn--ghost" onClick={scrollToVideoWork} id="services-video-cta">
                EXPLORE VIDEO WORK <span className="btn__arrow">↗</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
