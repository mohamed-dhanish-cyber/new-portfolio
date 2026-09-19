import { useState } from 'react'
import { webProjects, videoProjects } from '../../data/projects'
import ScrollReveal from '../common/ScrollReveal'
import './Work.css'

const TABS = [
  { key: 'web', label: 'Web Development' },
  { key: 'video', label: 'Video Editing' },
]

export default function Work() {
  const [activeTab, setActiveTab] = useState('web')

  return (
    <section className="work section" id="work" aria-label="Selected work">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">03 — WORK</span>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="work__heading">
            SELECTED <span className="text-accent">WORK</span>
          </h2>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={1}>
          <div className="work__tabs" role="tablist" aria-label="Portfolio categories">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={activeTab === tab.key}
                className={`work__tab ${activeTab === tab.key ? 'work__tab--active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
                id={`tab-${tab.key}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Web Projects */}
        {activeTab === 'web' && (
          <div className="work__projects" role="tabpanel" aria-labelledby="tab-web" id="web-work">
            {webProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={Math.min(i + 1, 4)}>
                <article className="work__project">
                  <div className="work__project-image">
                    {project.image ? (
                      <img src={project.image} alt={project.title} loading="lazy" />
                    ) : (
                      <div className="work__project-placeholder">
                        <span className="work__project-placeholder-text">
                          Project Screenshot
                        </span>
                        <span className="work__project-placeholder-sub">
                          Replace in projects.js
                        </span>
                      </div>
                    )}
                    <div className="work__project-overlay">
                      <a
                        href={project.link}
                        className="btn btn--primary btn--sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        VIEW PROJECT <span className="btn__arrow">↗</span>
                      </a>
                    </div>
                  </div>

                  <div className="work__project-info">
                    <span className="work__project-category">{project.category}</span>
                    <h3 className="work__project-title">{project.title}</h3>
                    <p className="work__project-desc">{project.description}</p>
                    <div className="work__project-tools">
                      {project.tools.map((tool) => (
                        <span key={tool} className="work__project-tool">{tool}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Video Projects */}
        {activeTab === 'video' && (
          <div className="work__projects work__projects--video" role="tabpanel" aria-labelledby="tab-video" id="video-work">
            <div className="work__video-grid">
              {videoProjects.map((project, i) => (
                <ScrollReveal key={project.id} delay={Math.min(i + 1, 4)}>
                  <article className="work__video-card">
                    <div className="work__video-thumb">
                      {project.thumbnail ? (
                        <img src={project.thumbnail} alt={project.title} loading="lazy" />
                      ) : (
                        <div className="work__video-placeholder">
                          <span className="work__video-placeholder-text">
                            Video Thumbnail
                          </span>
                        </div>
                      )}
                      <div className="work__video-play" aria-label={`Play ${project.title}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                      <span className="work__video-category-badge">{project.category}</span>
                    </div>

                    <div className="work__video-info">
                      <h3 className="work__video-title">{project.title}</h3>
                      <p className="work__video-desc">{project.description}</p>
                      <div className="work__project-tools">
                        {project.tools.map((tool) => (
                          <span key={tool} className="work__project-tool">{tool}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
