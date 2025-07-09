import React from 'react';
import chandu from '../Assets/Eluri_Bhuvanavenkatachandu.jpeg';
import resume from '../Assets/Eluri_Bhuvanavenkatachandu_Resume.pdf';

const Hero = () => {
  return (
    <section className="hero-section">
      <img src={chandu} alt="Eluri Bhuvana Venkata Chandu" className="profile-img" />
      <h1 className="hero-title">Hi, I'm Eluri Bhuvana Venkata Chandu</h1>
      <p className="hero-subtitle">
        A passionate developer focused on building user-friendly and scalable web apps.
      </p>
      <div className="hero-buttons">
        <button className="Connect-with-me" onClick={() => window.location.href = "#contact"}>Connect with me</button>
        <button className="resume" onClick={() => window.open(resume, "_blank")}>My resume</button>
      </div>
      <br></br>
    </section>
  );
};

export default Hero;
