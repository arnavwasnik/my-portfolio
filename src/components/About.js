import React from 'react';
import './About.css';

const About = () => {
  return (
<div className="about-container" id="about">
      <img
        src="/profile.jpg" // Place this image in the public folder and rename without spaces
        alt="H's Profile"
        className="about-photo"
      />

      <div className="about-content">
        <h1 className="about-name">Hi, I'm Arnav Manoj Wasnik</h1>
        <p className="about-description">
         I’m a passionate software engineer and AI researcher skilled in Java, Python, and React. I build scalable, user-focused applications that blend clean interfaces with intelligent systems. I have created projects designed to be practical and useful for people. 
         A strong communicator and collaborative team player, 
         I’m dedicated to solving real-world problems through code and continuous learning.


        </p>
      </div>
    </div>
  );
};

export default About;
