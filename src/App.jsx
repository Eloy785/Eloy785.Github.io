import { useState } from 'react'
import { Github, Linkedin, Mail, ArrowDown, Database, BrainCircuit, ChartNoAxesCombined } from 'lucide-react'
import Navbar from './components/Navbar'
import Terminal from './components/Terminal'
import ProjectCard from './components/ProjectCard'
import ProjectWindow from './components/ProjectWindow'
import { projects } from './data/projects'
import { experience } from './data/experience'

export default function App() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <>
      <div className="page-grid" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <Navbar />

      <main>
        <section id="home" className="hero section-shell">
          <div className="hero-copy">
            <p className="mono-label status-label"><span className="status-dot" /> Computer Science @ UTEP</p>
            <p className="hero-kicker">Hello, I'm</p>
            <h1>Eloy Perez <span>Quinones.</span></h1>
            <p className="hero-focus">Data Engineering · Data Science · Analytics · Machine Learning · AI</p>
            <p className="hero-description">
              I build data-driven software and intelligent applications that turn information
              into useful, measurable experiences.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#projects">View Projects <ArrowDown size={16} /></a>
              <a className="ghost-button" href="https://github.com/Eloy785" target="_blank" rel="noreferrer">
                <Github size={16} /> GitHub
              </a>
            </div>

            <Terminal />
          </div>

          <div className="hero-panel">
            <div className="profile-card">
              <p className="mono-label">PROFILE.SYS / 01</p>
              <img src="/EloyPerez.jpeg" alt="Eloy Perez Quinones" />
              <div className="profile-footer">
                <span>CS STUDENT</span>
                <span>DATA + AI</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="content-section section-shell">
          <div className="section-heading">
            <p className="mono-label">01 / ABOUT</p>
            <h2>Building at the intersection of software, data, and AI.</h2>
          </div>

          <div className="about-layout">
            <div className="about-text">
              <p>
                I'm a Computer Science student at The University of Texas at El Paso pursuing a
                path in data engineering, data science, analytics, machine learning, and artificial intelligence.
              </p>
              <p>
                I enjoy building full-stack and data-driven applications, working with APIs and databases,
                and turning complex technical ideas into useful products.
              </p>
            </div>

            <div className="data-panels">
              <div><Database size={18}/><strong>Data</strong><span>Engineering & Analytics</span></div>
              <div><BrainCircuit size={18}/><strong>AI / ML</strong><span>Intelligent systems</span></div>
              <div><ChartNoAxesCombined size={18}/><strong>2027</strong><span>Expected graduation</span></div>
            </div>
          </div>
        </section>

        <section id="projects" className="content-section section-shell">
          <div className="section-heading">
            <p className="mono-label">02 / PROJECTS.EXE</p>
            <h2>Selected work.</h2>
            <p className="section-note">Click a project to open its system window.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
            ))}
          </div>
        </section>

        <section id="experience" className="content-section section-shell">
          <div className="section-heading">
            <p className="mono-label">03 / EXPERIENCE.LOG</p>
            <h2>Technical work and leadership.</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article key={item.role} className="timeline-row">
                <div className="timeline-date">{item.years}</div>
                <div className="timeline-line"><i /></div>
                <div className="timeline-content">
                  <p className="mono-label">{item.organization}</p>
                  <h3>{item.role}</h3>
                  <ul>
                    {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="leadership-box">
            <div>
              <p className="mono-label">LEADERSHIP.LOG</p>
              <h3>Association for Computing Machinery</h3>
            </div>
            <div className="leadership-list">
              <span><b>Secretary</b><small>Aug. 2025 — Present</small></span>
              <span><b>Management Chair</b><small>Jan. 2025 — Aug. 2025</small></span>
            </div>
          </div>
        </section>

        <section id="stack" className="content-section section-shell">
          <div className="section-heading">
            <p className="mono-label">04 / STACK.JSON</p>
            <h2>Tools I use to build, analyze, and ship.</h2>
          </div>

          <div className="stack-list">
            <div><span>01</span><strong>Languages</strong><p>Python · Java · C · C++ · JavaScript · SQL · HTML/CSS</p></div>
            <div><span>02</span><strong>Data & AI</strong><p>Pandas · NLP · OpenAI API · Google Generative AI · Excel/XLSX</p></div>
            <div><span>03</span><strong>Web & Backend</strong><p>React · Node.js · Express.js · Flask · Streamlit · REST APIs</p></div>
            <div><span>04</span><strong>Data & Infrastructure</strong><p>Supabase · Git · GitHub · VS Code · JUnit 5</p></div>
          </div>
        </section>

        <section id="contact" className="content-section contact-section section-shell">
          <p className="mono-label">05 / CONTACT.SH</p>
          <h2>Let's build something useful.</h2>
          <p>I'm interested in opportunities across data engineering, data science, analytics, machine learning, and AI.</p>
          <div className="contact-buttons">
            <a href="mailto:perez.qeloy@gmail.com"><Mail size={16}/> Email</a>
            <a href="https://www.linkedin.com/in/eloy-perez-quinones/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
            <a href="https://github.com/Eloy785" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
          </div>
        </section>
      </main>

      <footer className="section-shell">
        <span>© 2026 Eloy Perez Quinones</span>
        <span>React + Vite</span>
      </footer>

      <ProjectWindow project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  )
}
