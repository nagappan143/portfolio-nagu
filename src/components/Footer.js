import React from 'react';
import '../CSS/Footer.css'; 

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-item left">
        <a href="https://keykoders.com" target="_blank" rel="noopener noreferrer" className="footer-link">
        Employee at Keykoders
        </a>
      </div>
      <div className="footer-item center">
        <p>© 2024 NAGAPPAN K . All Rights Reserved.</p>
      </div>
      <div className="footer-item right">
        <p>📱 7063961249</p>
      </div>
    </footer>
  );
}

export default Footer;
