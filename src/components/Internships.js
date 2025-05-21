import React, { useState } from "react";

const internships = [
  {
    company: "Ybi Foundation",
    role: "Artificial Intelligence and Machine Learning Internship",
    duration: "Oct 2024 - Nov 17 2024",
    description:
      "Developed practical skills in Artificial Intelligence and Machine Learning during a 1-month internship at Ybi Foundation.",
    certificate: "/ybi-cert.jpg",
  },
  {
    company: "Kalpvruksh tree foundation",
    role: "Intern",
    duration: "15 days",
    description:
      "Contributed to environmental conservation through a 15-day internship at Kalpvruksh Tree Foundation, actively involved in tree planting initiatives.",
    certificate: "/kalpvruksh-cert.jpg",
  },
];

export default function Internships() {
  const [visibleCertIndex, setVisibleCertIndex] = useState(null);

  const toggleCertificate = (index) => {
    setVisibleCertIndex(visibleCertIndex === index ? null : index);
  };

  return (
    <section className="section-container Internships-custom" id="internships">
      <h2>Internships</h2>
      <div className="internship-list">
        {internships.map((intern, idx) => (
          <div key={idx} className="internship-card">
            <h3>{intern.role}</h3>
            <p>
              <strong>{intern.company}</strong> &mdash; <em>{intern.duration}</em>
            </p>
            <p>{intern.description}</p>
            <button
              className="certificate-toggle-btn"
              onClick={() => toggleCertificate(idx)}
            >
              {visibleCertIndex === idx ? "Hide Certificate" : "View Certificate"}
            </button>
            {visibleCertIndex === idx && (
              <div className="certificate-popup">
                <img
                  src={intern.certificate}
                  alt={`${intern.company} Certificate`}
                  className="certificate-image"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
