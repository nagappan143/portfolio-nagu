import React from 'react';
import '../CSS/Education.css'; 

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h1 className="section-heading mb75px">
        <span>
          <i className="fas fa-graduation-cap"></i>
        </span>
        <span> Education </span>
      </h1>

      <div className="education-content">
        <div className="education-box">
          <div className="education-logo">
            <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000032_1550746413_iiitd_logo.png" alt="IIITD Logo" />
          </div>
          <h3 className="experience-designation m0 m-blue"> Intermediate </h3>
          <h4 className="experience-company-name"> Amala Annai Matriculation higher secondary School, Pudukottai </h4>
          <h5 className="experience-duration m0"> 2017-2018 </h5>
          <p className="experience-description text-align-justify">
            Completed Intermediate (Class 10) with distinction, showcasing academic excellence and strong foundational knowledge.
          </p>
        </div>

        <div className="education-box">
          <div className="education-logo">
            <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000032_1550746413_iiitd_logo.png" alt="IIITD Logo" />
          </div>
          <h3 className="experience-designation m0 m-blue"> Degree </h3>
          <h4 className="experience-company-name"> Diploma, Pudukottai</h4>
          <h5 className="experience-duration m0"> 2018-2021</h5>
          <p className="experience-description text-align-justify">
            Completing my Diploma in Mechatronics Engineering (DMEE) from Venkataesvara Polytechnic College, Pudukottai, gaining comprehensive knowledge and skills in the field of computer science.
          </p>
        </div>

        <div className="education-box">
          <div className="education-logo">
            <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000032_1550746413_iiitd_logo.png" alt="IIITD Logo" />
          </div>
          <h3 className="experience-designation m0 m-blue"> Degree </h3>
          <h4 className="experience-company-name"> BE CSE, Pudukottai</h4>
          <h5 className="experience-duration m0"> 2021-2024-present </h5>
          <p className="experience-description text-align-justify">
            Completing my Bachelor of Engineering (BE) in Computer Science from Shanmuganathan Engineering College, Pudukottai, gaining comprehensive knowledge and skills in the field of computer science.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
