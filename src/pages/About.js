import React from 'react';
import '../CSS/About.css'; 
import backgroundImage from '../img/kit3.jpg'; 

function About() {
  return (
    <div className="about-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay" />
      <div className="content">
        <h1 className="section-title">About Me</h1>
        <p className="about-text">
          Hello! I'm a versatile professional with a diverse skill set and a passion for technology. Here’s a bit more about my roles:
        </p>
        <div className="role-container">
          <h2 className="role-title">Full Stack Developer</h2>
          <p className="role-description">
            As a Full Stack Developer, I design and build both the front-end and back-end of web applications. My expertise includes modern technologies such as React, Node.js, and various databases. I thrive on solving complex problems and delivering scalable solutions.
          </p>
        </div>
        <div className="role-container">
          <h2 className="role-title">UI/UX Designer</h2>
          <p className="role-description">
            In my role as a UI/UX Designer, I focus on creating intuitive and aesthetically pleasing user interfaces. I conduct user research, design wireframes, and collaborate closely with developers to ensure that the final product meets user needs and expectations.
          </p>
        </div>
        <div className="role-container">
          <h2 className="role-title">Data Scientist</h2>
          <p className="role-description">
            As a Data Scientist, I analyze and interpret complex data sets to help businesses make informed decisions. I use statistical methods and machine learning techniques to extract valuable insights and create predictive models.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
