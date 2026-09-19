import ScrollReveal from '../common/ScrollReveal'
import './WhyMe.css'

const reasons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Modern Design',
    description: 'Clean, contemporary aesthetics that make your brand stand out and leave a lasting impression.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Responsive Experiences',
    description: 'Every project looks and functions perfectly across all devices and screen sizes.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Attention to Detail',
    description: 'Pixel-perfect execution with meticulous attention to every visual and functional element.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Client-Focused Communication',
    description: 'Clear, transparent communication throughout the project to keep you informed at every stage.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Custom Solutions',
    description: 'Every project is uniquely tailored to your specific needs — no cookie-cutter templates.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Clean & Professional',
    description: 'Well-structured, high-quality work delivered with professionalism and creative precision.',
  },
]

export default function WhyMe() {
  return (
    <section className="whyme section" id="why-me" aria-label="Why work with me">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">06 — WHY ME</span>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="whyme__heading">
            WHY WORK <span className="text-accent">WITH ME</span>
          </h2>
        </ScrollReveal>

        <div className="whyme__grid">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={Math.min(i + 1, 6)}>
              <div className="whyme__card">
                <div className="whyme__card-icon">{reason.icon}</div>
                <h3 className="whyme__card-title">{reason.title}</h3>
                <p className="whyme__card-desc">{reason.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
