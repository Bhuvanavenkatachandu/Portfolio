import React from 'react'

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        {/*left*/}
        <div className="about-left">
          <p className="about-description">
            Hello! I'm <strong>Bhuvana Venkata Chandu Eluri</strong>, a passionate software developer who loves building
            intuitive and scalable web applications. I specialize in Java and React and have hands-on experience
            with modern tools like Spring Boot, MySQL, and GitHub.
          </p>

          <p className="about-description">
            I’m also certified in Java, C++, and Data Structures through NPTEL and other platforms. Outside academics, I’ve built
            projects like a Library Management System in Java and a fully responsive e-commerce product page in React.
          </p>

          <p className="about-description">
            I'm committed to writing clean code, learning continuously, and collaborating with teams to solve real-world problems 
            through software.
          </p>
          <br></br>
        </div>

        {/*right*/}
        <div className="about-right">
          <h3 className="section-subtitle">Education</h3>
          <ul className="about-list">
            <li>
              <strong>B.Tech in Computer Science</strong><br />
              Raghu Institute of Technology, Visakhapatnam (2022–2026)<br />
              CGPA: 8.20
            </li>
            <li>
              <strong>Intermediate</strong><br />
              Sri Chaitanya Junior College, Visakhapatnam (2020–2022)<br />
              Percentage: 75.2%
            </li>
            <li>
              <strong>10th Grade</strong><br />
              Pollocks School, Visakhapatnam (2020)<br />
              Percentage: 99.8%
            </li>
          </ul>
          <br></br>
        </div>
      </div>
    </section>
  )
}

export default About
