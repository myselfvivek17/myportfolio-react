import React from 'react';
import FooterText from './FooterText';
import FooterForm from './FooterForm';
import FooterIndex from './FooterIndex';
import './Footer.css'; // Import the CSS file

export default function Footer() {
  return (
    <div className="footer-container" id='contact'>
      <div className="footer-content">
        <FooterText />
        <FooterForm />
      </div>
      <FooterIndex />
    </div>
  );
}
