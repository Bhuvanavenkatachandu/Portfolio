import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Library Management System</h3>
          <p>Java + MySQL project to manage book issuing, returns, and catalog.</p>
        </div>
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Responsive React portfolio to showcase my skills and projects.</p>
        </div>
        <div className="project-card">
            <h3>E-Commerce Website</h3>
            <p>A responsive React-based frontend application for browsing products, managing a shopping cart, and simulating the checkout experience</p>
        </div>
      </div>
    </section>
  )
}

export default Projects