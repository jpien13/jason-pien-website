import React from 'react'
import './navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="navbar-name">Jason Pien</div>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#awards">Awards</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar