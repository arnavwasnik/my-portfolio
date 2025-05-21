import React, { useState } from "react";
import "./projects.css";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    summary: "A personal portfolio website built with React to showcase my work and skills.",
    details: `A dynamic and responsive React app that highlights my professional profile, projects, and technical skills.
     It includes interactive elements, smooth navigation, 
    and integration with social media and contact forms to connect with potential employers or collaborators.`,
  },
  {
    id: 2,
    title: "Concrete Strength Prediction",
    summary: "ML model predicting compressive strength of concrete mix for civil engineering applications.",
    details: `A supervised ML model trained on concrete mix data to predict compressive strength at various curing times (7, 14, 28 days).
     It leverages regression techniques to help civil engineers optimize mix design for durability and cost-efficiency`,
  },
  {
    id: 3,
    title: "Smart classification of fruits and vegetables using CNN and ML",
    summary: "Computer vision project classifying fruits and vegetables using CNNs.",
    details: `A convolutional neural network (CNN)-based image classifier that identifies different fruits and vegetables
     with high accuracy despite variations in size, shape, and ripeness. 
    This project supports automation in sorting, grading, and inventory management in the agriculture and retail sectors.`,
  },
];

const Projects = () => {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const toggleDetails = (id) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section className="projects-section section-container" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projectsData.map(({ id, title, summary, details }) => (
          <div key={id} className="project-card">
            <h3 className="project-title">{title}</h3>
            <p className="project-summary">{summary}</p>
            <button
              className="toggle-btn"
              onClick={() => toggleDetails(id)}
              aria-expanded={expandedProjectId === id}
              aria-controls={`project-details-${id}`}
            >
              {expandedProjectId === id ? "Show Less" : "Show More"}
            </button>
            {expandedProjectId === id && (
              <div
                className="project-details"
                id={`project-details-${id}`}
              >
                <p>{details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
