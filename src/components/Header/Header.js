import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header-container">
      <div className="header-link-container">
        <a href="/" className="header-link">
          HOME
        </a>
        <a href="/projects" className="header-link">
          PROJECTS
        </a>
        <a href="/contact" className="header-link">
          CONTACT
        </a>
      </div>
    </div>
  )
}

export default Header