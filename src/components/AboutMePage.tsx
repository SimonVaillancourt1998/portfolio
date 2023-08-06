import React from 'react';

const AboutMe = () => {
  const containerStyle = {
    backgroundColor: '#f9f5eb', // Cream color
    padding: '20px',
  };

  const headingStyle = {
    color: '#333', // Dark text color
  };

  const paragraphStyle = {
    color: '#555', // Slightly lighter text color
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Me</h1>
      <p style={paragraphStyle}>
        Hello! I'm [Your Name], and this is my about me page. [Write a brief introduction about yourself here.]
      </p>
      {/* Add more content about yourself here */}
    </div>
  );
};

export default AboutMe;
