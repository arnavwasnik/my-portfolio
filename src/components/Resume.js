import React, { useState } from 'react';
import './Resume.css';

const Resume = () => {
  const [selected, setSelected] = useState('AI');
  const [loading, setLoading] = useState(true);

  const resumes = {
    AI: '/ai_resume.jpg',
    FullStack: '/fullstack_resume.jpg',
  };

  // When selected changes, set loading true again to show spinner while new image loads
  React.useEffect(() => {
    setLoading(true);
  }, [selected]);

  return (
    <div className="section-container resume-container" id="resume">
      <h2>Resumes</h2>
      <div className="resume-buttons">
        <button
          className={selected === 'AI' ? 'active' : ''}
          onClick={() => setSelected('AI')}
        >
          AI Resume
        </button>
        <button
          className={selected === 'FullStack' ? 'active' : ''}
          onClick={() => setSelected('FullStack')}
        >
          Full Stack Resume
        </button>
      </div>

      <div className="resume-image">
        {loading && <div className="spinner"></div>} {/* Show spinner if loading */}
        <img
          src={resumes[selected]}
          alt={`${selected} Resume`}
          className="resume-preview"
          style={{ display: loading ? 'none' : 'block' }}
          onLoad={() => setLoading(false)}  // Hide spinner when image loads
        />
      </div>
    </div>
  );
};

export default Resume;
