import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section-container contact-container" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-cards">
        <div className="contact-card">
          <h3>Email</h3>
          <p>arnavwasnik405@gmail.com</p>
        </div>
        <div className="contact-card">
          <h3>Phone</h3>
          <p>+91 7709773462</p>
        </div>
        <div className="contact-card">
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/arnav-wasnik" target="_blank" rel="noreferrer">
  linkedin.com/in/arnav-wasnik
</a>

        </div>
        <div className="contact-card">
          <h3>GitHub</h3>
          <a href="https://github.com/arnavwasnik" target="_blank" rel="noreferrer">github.com/arnavwasnik</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
