import React from 'react';
import '../CSS/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import profileImage from '../img/NAGU.PNG.jpg';

function Home() {
  return (
    <div className="HomeContainer">
      <div className="TextWrapper">
        <h2 className="WelcomeText">Welcome to <span className='myport'>My Portfolio!</span></h2>
        <h1 className="Name"><h2 className='myport1'>Hey!</h2> I'am NAG<span className='myport1'>APP</span>AN K</h1>
        <h2 className="Role">Full Stack Developer</h2>
        <p className="Email">Nagakit80@gmail.com</p>
      </div>
      <img className="ProfileImage" src={profileImage} alt="Profile" />
      <div className="SocialLinks">
        <a className="SocialIcon" href="https://www.facebook.com/nagappan.k.31542?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook}/>
        </a>
        <a className="SocialIcon" href="https://www.instagram.com/nagappan_k_54?igsh=MWs1cjFsZnQ5bHl0cA==" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="SocialIcon" href="https://www.linkedin.com/in/Nagappan-professional" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className="SocialIcon" href="https://wa.me/7063961249" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </div>
  );
}

export default Home;
