import { ExternalLink, Github, X } from 'lucide-react'

export default function ProjectWindow({ project, onClose }) {
  if (!project) return null

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="project-window" onMouseDown={(e) => e.stopPropagation()}>
        <div className="window-titlebar">
          <div className="window-dots"><i /><i /><i /></div>
          <span>{project.name.toLowerCase().replaceAll(' ', '_')}.exe</span>
          <button onClick={onClose} aria-label="Close project window"><X size={16} /></button>
        </div>

        <div className="window-content">
          <p className="mono-label">{project.type}</p>
          <h3>{project.name}</h3>
          <p className="window-description">{project.description}</p>

          <div className="tag-row">
            {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
          </div>

          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="window-link">
              <Github size={16} /> View repository <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
