import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faNodeJs, faHtml5, faPython, faJava, faBootstrap, faAngular } from '@fortawesome/free-brands-svg-icons';
import { faStar, faStarHalfAlt, faStar as faStarRegular } from '@fortawesome/free-solid-svg-icons';
import '../CSS/Skills.css'; 

const SkillRating = ({ rating }) => {
  return (
    <div className="stars-container">
      {Array.from({ length: 5 }).map((_, index) => {
        if (index < Math.floor(rating)) {
          return <FontAwesomeIcon key={index} icon={faStar} className="star" />;
        } else if (index < rating) {
          return <FontAwesomeIcon key={index} icon={faStarHalfAlt} className="star" />;
        } else {
          return <FontAwesomeIcon key={index} icon={faStarRegular} className="star" />;
        }
      })}
    </div>
  );
}

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>
      <ul className="skills-list">
        <li className="skill-item">
          <FontAwesomeIcon icon={faJs} className="skill-icon" />
          JavaScript
          <SkillRating rating={4.5} />
        </li>
        <li className="skill-item">
          <FontAwesomeIcon icon={faReact} className="skill-icon" />
          React
          <SkillRating rating={4} />
        </li>
        <li className="skill-item">
          <FontAwesomeIcon icon={faNodeJs} className="skill-icon" />
          Node.js
          <SkillRating rating={4} />
        </li>
        <li className="skill-item">
          <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
          HTML/CSS
          <SkillRating rating={4.5} />
        </li>
        <li className="skill-item">
          <FontAwesomeIcon icon={faPython} className="skill-icon" />
          Python
          <SkillRating rating={3.5} />
        </li>
        <li className="skill-item">
          <FontAwesomeIcon icon={faJava} className="skill-icon" />
          Java
          <SkillRating rating={3.5} />
        </li>
        <li className="skill-item">
          <FontAwesomeIcon icon={faBootstrap} className="skill-icon" />
          Bootstrap
          <SkillRating rating={4} />
        </li>
        <li className="skill-item">
          <FontAwesomeIcon icon={faAngular} className="skill-icon" />
          Angular
          <SkillRating rating={3} />
        </li>
        <li className="skill-item">
          <FontAwesomeIcon icon={faNodeJs} className="skill-icon" />
          MongoDB
          <SkillRating rating={4} />
        </li>
        <li className="skill-item">
          <FontAwesomeIcon icon={faNodeJs} className="skill-icon" />
          Express.js
          <SkillRating rating={4} />
        </li>
        <li className="skill-item">
          <FontAwesomeIcon icon={faReact} className="skill-icon" />
          UI Design
          <SkillRating rating={4} />
        </li>
        <li className="skill-item">
          <FontAwesomeIcon icon={faReact} className="skill-icon" />
          UX Design
          <SkillRating rating={4} />
        </li>
      </ul>
    </div>
  );
}

export default Skills;
