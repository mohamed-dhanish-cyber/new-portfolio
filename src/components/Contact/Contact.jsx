import { contactInfo } from '../../data/projects'
import ScrollReveal from '../common/ScrollReveal'
import MagneticButton from '../common/MagneticButton'
import './Contact.css'

export default function Contact() {
  return (
    <section className="contact section" id="contact" aria-label="Contact">
      <div className="contact__glow" aria-hidden="true" />

      <div className="container">
        <ScrollReveal>
          <span className="section-label">07 — CONTACT</span>
        </ScrollReveal>

        <div className="contact__content">
          <ScrollReveal>
            <h2 className="contact__heading">
              LET'S BUILD<br />
              SOMETHING<br />
              <span className="text-accent">DIFFERENT.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <p className="contact__text">
              Have a project, idea or business that needs a better digital
              presence? Let's talk.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="contact__actions">
              <MagneticButton
                as="a"
                href={`mailto:${contactInfo.email}`}
                className="btn btn--primary btn--lg"
                strength={0.15}
                id="contact-cta-quote"
              >
                GET A QUOTE <span className="btn__arrow">↗</span>
              </MagneticButton>

              <MagneticButton
                as="a"
                href={`https://wa.me/${contactInfo.whatsapp}`}
                className="btn btn--outline btn--lg"
                target="_blank"
                rel="noopener noreferrer"
                strength={0.15}
                id="contact-cta-whatsapp"
              >
                WHATSAPP <span className="btn__arrow">↗</span>
              </MagneticButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <div className="contact__info">
              <div className="contact__info-item">
                <span className="contact__info-label">EMAIL</span>
                <a href={`mailto:${contactInfo.email}`} className="contact__info-value">
                  {contactInfo.email}
                </a>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-label">SOCIAL</span>
                <div className="contact__socials">
                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-link"
                    aria-label="Instagram"
                  >
                    Instagram
                  </a>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-link"
                    aria-label="LinkedIn"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-link"
                    aria-label="GitHub"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
