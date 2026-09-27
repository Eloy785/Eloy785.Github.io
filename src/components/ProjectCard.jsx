import { ArrowUpRight, Activity } from 'lucide-react'

export default function ProjectCard({ project, onOpen }) {
  return (
    <button className={`project-card ${project.featured ? 'featured' : ''}`} onClick={() => onOpen(project)}>
      <div className="project-card-header">
        <span className="mono-label">{project.type}</span>
        <ArrowUpRight size={18} />
      </div>

      <div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>

      <div className="tag-row">
        {project.tech.slice(0, 6).map((tech) => <span key={tech}>{tech}</span>)}
      </div>

      {project.featured && (
        <div className="live-strip">
          <Activity size={14} />
          <span>{project.status}</span>
        </div>
      )}
    </button>
  )
}
