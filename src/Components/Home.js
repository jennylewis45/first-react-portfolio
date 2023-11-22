import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
import resume from "../images/Resume.pdf"
const Home = () => {
  

  return (
    <div className="home-container">
      
      <section className="intro-section">
        <h1 className="animated-text">
          <span>Hello,</span>
          <span>I'm Javeriya Imran</span>
        </h1>
        <p className="animated-text-sub">A developer with a love for creating meaningful projects.</p>

 <a className='cta-button' href= {resume}download="Resume.pdf">Download CV</a> 
 
        <Link to="/contact" className="cta-button">Contact Me</Link>
      </section>
    </div>
  );
}

export default Home;




