import ScrollReveal from '../common/ScrollReveal'
import './Skills.css'

const webSkills = [
  { name: 'HTML', level: 'Core' },
  { name: 'CSS', level: 'Core' },
  { name: 'JavaScript', level: 'Core' },
  { name: 'React', level: 'Framework' },
  { name: 'Responsive Design', level: 'Core' },
  { name: 'UI/UX', level: 'Design' },
]

const videoSkills = [
  { name: 'Premiere Pro', level: 'Editing' },
  { name: 'After Effects', level: 'Motion' },
  { name: 'DaVinci Resolve', level: 'Grading' },
  { name: 'CapCut', level: 'Short-form' },
]

export default function Skills() {
  return (
    <section className="skills section" id="skills" aria-label="Skills and tools">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">04 — SKILLS</span>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="skills__heading">
            TOOLS & <span className="text-accent">TECHNOLOGIES</span>
          </h2>
        </ScrollReveal>

        <div className="skills__grid">
          <ScrollReveal delay={1}>
            <div className="skills__group">
              <h3 className="skills__group-title">
                <span className="skills__group-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </span>
                WEB DEVELOPMENT
              </h3>
              <div className="skills__tags">
                {webSkills.map((skill) => (
                  <div className="skills__badge skills__badge--web" key={skill.name}>
                    <span className="skills__badge-name">{skill.name}</span>
                    <span className="skills__badge-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="skills__group">
              <h3 className="skills__group-title">
                <span className="skills__group-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" />
                  </svg>
                </span>
                VIDEO EDITING
              </h3>
              <div className="skills__tags">
                {videoSkills.map((skill) => (
                  <div className="skills__badge skills__badge--video" key={skill.name}>
                    <span className="skills__badge-name">{skill.name}</span>
                    <span className="skills__badge-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
