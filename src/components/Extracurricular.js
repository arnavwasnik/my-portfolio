import React from 'react';
import './Extracurricular.css';

const activities = [
  {
    title: "NSS Volunteer",
    organization: "GH Raisoni College of Engineering and Mangement Nagpur",
    period: "Oct 2024 - Present",
    description: "Participated in cleanliness drives, awareness programs, and community service initiatives.",
  },
  {
    title: "AI Club Secretary & Newsletter Editor-in-Chief",
    organization: "GH Raisoni College of Engineering and Mangement Nagpur",
    period: "2024 - Present",
    description: "Organized workshops, coding sessions, newsletters, and managed various AI events successfully.",
  },
  {
    title: "Event Management",
    organization: "GH Raisoni College of Engineering and Mangement Nagpur",
    period: "",
    description: "Managed planning and execution of multiple technical and cultural events for College , effectively handling large crowds.",
  },
];

const Extracurricular = () => {
  return (
    <section className="extracurricular-section" id="extracurricular">

      <h2>Extracurricular Activities</h2>
      <div className="activities-container ">
        {activities.map((activity, idx) => (
          <div key={idx} className="activity-card">
            <h3 className="activity-title">{activity.title}</h3>
            <p className="activity-org">{activity.organization} | <span className="activity-period">{activity.period}</span></p>
            <p className="activity-desc">{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Extracurricular;
