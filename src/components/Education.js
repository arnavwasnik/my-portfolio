import React from "react";
import './Education.css';


const educationList = [
  {
    degree: "B.Tech in Artificial Intelligence",
    institution: "GH Raisoni College of Engineering and Management, Nagpur",
    duration: "2022 - Present",
    details: "CGPA: 7.28/10 (Till 6th Semester)",
    semesters: [
      "Sem 5: 8.58", "Sem 4: 7.18", "Sem 3: 7.55",
      "Sem 2: 6.72", "Sem 1: 5.95"
    ],
  },
  {
    degree: "Higher Secondary Certificate (12th)",
    institution: "Dinanath Junior College, Nagpur",
    duration: "2022",
    details: "Percentage: 52%",
  },
  {
    degree: "Secondary School Certificate (10th)",
    institution: "Bishop Cotton High School, Nagpur",
    duration: "2020",
    details: "Percentage: 77%",
  },
];

export default function Education() {
  return (
    <section className="section-container Education-custom" id="education">
      <h2>Education</h2>
      <div className="education-list">
        {educationList.map((edu, idx) => (
          <div key={idx} className="education-card">
            <h3>{edu.degree}</h3>
            <p>
              <strong>{edu.institution}</strong> — <em>{edu.duration}</em>
            </p>
            <p>{edu.details}</p>
            {edu.semesters && (
              <ul className="semester-list">
                {edu.semesters.map((sem, i) => (
                  <li key={i}>{sem}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
