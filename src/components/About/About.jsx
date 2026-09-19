import ScrollReveal from '../common/ScrollReveal'
import './About.css'

const DISCIPLINES = [
  'Web Design',
  'Web Development',
  'Digital Experiences',
  'Video Editing',
  'Creative Content',
]

export default function About() {
  return (
    <section className="about section" id="about" aria-label="About me">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">01 — ABOUT</span>
        </ScrollReveal>

        <div className="about__grid">
          <div className="about__left">
            <ScrollReveal>
              <h2 className="about__heading">
                MORE THAN<br />
                <span className="text-accent">JUST CODE.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="about__disciplines">
                {DISCIPLINES.map((d) => (
                  <span className="about__tag" key={d}>{d}</span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="about__right">
            <ScrollReveal delay={2}>
              <p className="about__text">
                I'm <strong>Mohamed Dhanish S</strong> — a digital creator who works
                at the intersection of design, development and visual storytelling.
                I build modern websites that look exceptional and function flawlessly,
                and I create video content that captures attention and communicates
                with impact.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <p className="about__text">
                Whether it's a business website that converts visitors into customers
                or a cinematic video edit that brings a brand's story to life — I
                approach every project with the same commitment to quality, attention
                to detail, and creative precision.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <div className="about__stats">
                <div className="about__stat">
                  <span className="about__stat-label">FOCUS AREAS</span>
                  <span className="about__stat-value">2</span>
                  <span className="about__stat-desc">Web & Video</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-label">APPROACH</span>
                  <span className="about__stat-value">100%</span>
                  <span className="about__stat-desc">Client-Focused</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-label">DESIGN</span>
                  <span className="about__stat-value">∞</span>
                  <span className="about__stat-desc">Possibilities</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
