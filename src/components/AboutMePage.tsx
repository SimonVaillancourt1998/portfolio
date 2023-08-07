import React from 'react';

const AboutMe: React.FC = () => {
  const containerStyle = {
    fontFamily: 'Ubuntu, sans-serif', // Use the "Ubuntu" font
    backgroundColor: '#f9f5eb', // Cream color
    padding: '20px',
    maxWidth: '80%', // Take 80% of the width of the screen
    margin: '0 auto',
    display: 'flex', // Use flexbox to arrange image and text side by side
    alignItems: 'center', // Vertically center the content
  };

  const imageStyle = {
    maxWidth: '200px', // Adjust the width of the image as needed
    marginRight: '20px', // Add some space between the image and text
  };

  const headingStyle = {
    color: '#333', // Dark text color
  };

  const paragraphStyle = {
    color: '#555', // Slightly lighter text color
  };

  return (
    <div style={containerStyle}>
      <img
        src='/291890267_783827702773338_2891594127640559464_n.jpg'
        alt='Myself'
        style={imageStyle}
      />
      <div>
        <h1 style={headingStyle}>About Me</h1>
        <p style={paragraphStyle}>
          Hello! I'm Simon Vaillancourt, and this is my own portfolio. I'm a software developer from Montreal, QC, Canada. I have previous experience working in web development and DevOps. I've worked in startup environments and big companies as well.
        </p>
        <p>Here are some of my skills:</p>
        <ul>
          <li>Creating websites with Angular.js, Vue.js, and React</li>
          <li>Building backend applications with Flask or Express.js</li>
          <li>Creating containerized applications with Docker and handling Kubernetes</li>
          <li>Managing Jenkins and ArgoCD pipelines</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
