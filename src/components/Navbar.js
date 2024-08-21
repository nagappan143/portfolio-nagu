import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import logoImage from '../img/NAGU.PNG.jpg';
import '../CSS/Navbar.css'; 

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div className="logo-section">
        <img src={logoImage} alt="Logo" className="logo-image" />
        <span className={`logo-text ${darkMode ? 'dark' : 'light'}`}>
          NAGAPPAN K
        </span>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/" className={`nav-link ${darkMode ? 'dark' : 'light'}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={`nav-link ${darkMode ? 'dark' : 'light'}`}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="/education" className={`nav-link ${darkMode ? 'dark' : 'light'}`}>
            Education
          </Link>
        </li>
        <li>
          <Link to="/projects" className={`nav-link ${darkMode ? 'dark' : 'light'}`}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/skills" className={`nav-link ${darkMode ? 'dark' : 'light'}`}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`nav-link ${darkMode ? 'dark' : 'light'}`}>
            Contact Me
          </Link>
        </li>
      </ul>

      <button 
        onClick={toggleTheme} 
        className={`theme-toggle-button ${darkMode ? 'dark' : 'light'}`} 
        aria-label={`Switch to ${darkMode ? 'Light' : 'Dark'} Mode`}
      >
        <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
      </button>
    </nav>
  );
};

export default Navbar;
