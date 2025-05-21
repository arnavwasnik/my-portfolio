import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Arnav Wasnik</div>
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#internships">Internships</a>
        <a href="#education">Education</a>
        <a href="#extracurricular">Extracurricular</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
