import ScrollReveal from '../common/ScrollReveal'
import './Process.css'

const steps = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Understand the client\'s requirements, goals, audience, and project scope.',
  },
  {
    number: '02',
    title: 'PLAN',
    description: 'Create the structure, sitemap, content direction, and project timeline.',
  },
  {
    number: '03',
    title: 'DESIGN',
    description: 'Create the visual experience with modern layouts, typography, and aesthetics.',
  },
  {
    number: '04',
    title: 'DEVELOP',
    description: 'Build the final website or produce the video content with precision.',
  },
  {
    number: '05',
    title: 'REFINE',
    description: 'Test, review, and polish every detail to ensure quality and consistency.',
  },
  {
    number: '06',
    title: 'LAUNCH',
    description: 'Deliver the final result and ensure a smooth, successful launch.',
  },
]

export default function Process() {
  return (
    <section className="process section" id="process" aria-label="My process">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">05 — PROCESS</span>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="process__heading">
            HOW I <span className="text-accent">WORK</span>
          </h2>
        </ScrollReveal>

        <div className="process__grid">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={Math.min(i + 1, 6)}>
              <div className="process__step">
                <div className="process__step-line" aria-hidden="true" />
                <span className="process__step-number">{step.number}</span>
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-desc">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
