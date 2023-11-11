import React, { useState } from 'react';
import './navbar.css'; 



const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <h1 className="logo">Portfolio</h1>
        </div>
        <div className={`nav-links ${isNavOpen ? 'show' : ''}`}>
        
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/project">Projects</a>
          <a href="/contact">Contact</a>
        
        </div>
        <div className="hamburger" onClick={handleNavToggle}>
          <div className={`bar ${isNavOpen ? 'change' : ''}`}></div>
          <div className={`bar ${isNavOpen ? 'change' : ''}`}></div>
          <div className={`bar ${isNavOpen ? 'change' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


