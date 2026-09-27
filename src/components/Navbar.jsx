import { Menu, X, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = ['about', 'projects', 'experience', 'stack', 'contact']

  return (
    <header className="topbar">
      <a href="#home" className="brand">
        <span className="brand-icon">E.</span>
        <span>Eloy Perez</span>
      </a>

      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map((item) => (
          <a key={item} href={`#${item}`} onClick={() => setOpen(false)}>
            {item}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <a href="/Eloy_Perez_Resume.pdf" target="_blank" className="resume-link">
          Resume <ExternalLink size={13} />
        </a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
    </header>
  )
}
