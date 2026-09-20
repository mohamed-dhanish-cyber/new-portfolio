import { useState } from 'react'
import { contactInfo } from '../../data/projects'
import ScrollReveal from '../common/ScrollReveal'
import MagneticButton from '../common/MagneticButton'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const text = `Hello Dhanish, my name is ${formData.name}.\nMy Email: ${formData.email}\n\nMessage:\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

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
              HAVE A PROJECT<br />
              <span className="text-accent">IN MIND?</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <p className="contact__text">
              Let's turn your idea into something people remember.
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
                EMAIL ME <span className="btn__arrow">↗</span>
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

          <ScrollReveal delay={2.5}>
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-group">
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="contact__input" />
              </div>
              <div className="contact__form-group">
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="contact__input" />
              </div>
              <div className="contact__form-group">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." required rows="4" className="contact__input contact__textarea"></textarea>
              </div>
              <button type="submit" className="btn btn--primary btn--full">
                SEND MESSAGE <span className="btn__arrow">↗</span>
              </button>
            </form>
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
