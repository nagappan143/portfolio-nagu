import React from 'react';
import '../CSS/Project.css';
import image1 from '../img/meal web.png'; 
import image2 from '../img/WhatsApp Image 2024-08-16 at 16.55.22_c82566f3.jpg'; 
import image3 from '../img/WhatsApp Image 2024-08-16 at 16.55.23_9abeab7b.jpg';
import image4 from '../img/WhatsApp Image 2024-03-17 at 9.30.48 PM.jpeg';
import image5 from '../img/Screenshot (648).png';
import image6 from '../img/WhatsApp Image 2024-08-16 at 16.55.22_6cee6c2b.jpg';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="title">My Projects</h1>
      <div className="projects-grid">
        <div className="project-card">
          <img src={image1} alt="Project 1" className="project-image" />
          <h2 className="project-title">Personalized Recommendation System</h2>
          <p className="project-description">
            An AI-driven platform that suggests movies based on user preferences and viewing history, enhancing the overall entertainment experience.
          </p>
        </div>
        <div className="project-card">
          <img src={image2} alt="Project 2" className="project-image" />
          <h2 className="project-title">E-commerce Website</h2>
          <p className="project-description">
            A dynamic online shopping platform that offers personalized product recommendations and a seamless user experience driven by AI and data analytics.
          </p>
        </div>
        <div className="project-card">
          <img src={image3} alt="Project 3" className="project-image" />
          <h2 className="project-title">Interactive Restaurant Menu Page</h2>
          <p className="project-description">
            A visually engaging and user-friendly online menu that allows customers to explore dishes, view detailed descriptions, and customize orders with ease.
          </p>
        </div>
        <div className="project-card">
          <img src={image4} alt="Project 4" className="project-image" />
          <h2 className="project-title">A Comprehensive Analysis of Social Media</h2>
          <p className="project-description">
            An in-depth exploration of social media platforms, focusing on user behavior, engagement metrics, and content trends to uncover actionable insights.
          </p>
        </div>
        <div className="project-card">
          <img src={image5} alt="Project 5" className="project-image" />
          <h2 className="project-title">Offensive Meme Classification System</h2>
          <p className="project-description">
            A machine learning model designed to detect and categorize offensive content in memes, ensuring safer online environments by filtering harmful material.
          </p>
        </div>
        <div className="project-card">
          <img src={image6} alt="Project 6" className="project-image" />
          <h2 className="project-title">Tic-Tac-Toe Game</h2>
          <p className="project-description">
            A simple yet engaging digital version of the classic Tic-Tac-Toe game, featuring intuitive controls and multiplayer functionality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
