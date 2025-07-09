import React from 'react';
import Java from '../Assets/java.png';
import HtmlCss from '../Assets/html&css.jpg';
import ReactImg from '../Assets/react.jpeg';
import Mysql from '../Assets/mysql.png';
import GitGitHub from '../Assets/git&github.png';
import Spring from '../Assets/spring.png';
const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <img src={Java} alt="Java" />
          <span>Java</span>
        </div>
        <div className="skill-card">
          <img src={ReactImg} alt="React" />
          <span>React</span>
        </div>
        <div className="skill-card">
          <img src={Spring} alt="Spring Boot" />
          <span>Spring Boot</span>
        </div>
        <div className="skill-card">
          <img src={HtmlCss} alt="HTML & CSS" />
          <span>HTML & CSS</span>
        </div>
        <div className="skill-card">
          <img src={Mysql} alt="MySQL" />
          <span>MySQL</span>
        </div>
        <div className="skill-card">
          <img src={GitGitHub} alt="Git & GitHub" />
          <span>Git & GitHub</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
