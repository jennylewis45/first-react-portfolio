import React from 'react';
import './styles.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <div className="intro animate__animated animate__fadeIn">
          <h2>About Me</h2>
          <p>
          Hello, I'm Javeriya Imran! 👋

Aspiring Developer | Curious Learner | Creative Thinker

I'm on a journey to explore the world of Mern-Stack development with a passion for creating digital solutions that make a positive impact. My coding adventure began with a deep curiosity for problem-solving, and since then, each project has been a step towards transforming ideas into meaningful experiences.

What Defines Me:

💡 A curious mind eager to unravel the intricacies of coding.
🚀 Enthusiastic about translating ideas into captivating web applications.
🌐 Committed to continuous learning and embracing new technologies.
Join me on this exciting coding expedition, where every line of code is a new chapter in my story of growth and innovation.
          </p>
        </div>

        <div className="skills-section animate__animated animate__fadeIn animate__delay-1s">
          <h3>Skills</h3>
          <div className="skills-list">
            <div className="skill-item">HTML</div>
            <div className="skill-item">CSS</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">React.js</div>
            <div className="skill-item">Bootstrap</div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
