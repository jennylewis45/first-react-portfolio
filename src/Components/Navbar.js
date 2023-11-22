import React, { useState} from 'react';
import { FaGithub, FaLinkedin, FaPinterest } from 'react-icons/fa';
import './navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);



  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
     <nav className="navbar">  
    

     <div className="navbar-container">

        <div className="social-icons">
      <a href="https://github.com/jennylewis45" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/javeriyah-imran-31399a251/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://www.pinterest.com/imranjaveriya/" target="_blank" rel="noopener noreferrer">
        <FaPinterest />
      </a>
      {/* Add more social media icons as needed */}
    </div>
    
        <div className="logo-container">
          <h1 className="logo">Portfolio</h1>
        </div>
        <div className={`nav-links ${isNavOpen ? 'show' : ''}`}>
  
              <Link to="/">Home</Link>
            
              <Link to="/about">About</Link>
            
              <Link to="/project">Projects</Link>
            
              <Link to="/contact">Contact</Link>
            
        </div>
        <div className="hamburger" onClick={handleNavToggle}>
          <div className={`bar ${isNavOpen ? 'change' : ''}`}></div>
          <div className={`bar ${isNavOpen ? 'change' : ''}`}></div>
          <div className={`bar ${isNavOpen ? 'change' : ''}`}></div>
        </div>
      </div>
  
    </nav>
    </>
  );
};

export default Navbar;


