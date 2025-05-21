import React from 'react';
import './Skills.css';

const skills = [
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'Python', level: 'Advanced' },
  { name: 'Java', level: 'Intermediate' },
  { name: 'React', level: 'Intermediate' },
  { name: 'Machine Learning', level: 'Intermediate' },
  { name: 'Git & GitHub', level: 'Intermediate' },
  { name: 'SQL', level: 'Basic' }

];

function Skills() {
  return (
<div id="skills" className="section-container skills-custom">

      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-level">{skill.level}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
