import React from 'react';
import './HeroSection.css';
import avatar from './images/pic.svg'; // Make sure to add an avatar image in the images folder

const HeroSection = () => {
  return (
    <div className="hero-container">
      <img src={avatar} alt="Avatar" className="hero-avatar" />
      <h1 className="hero-title">
        I'm a product designer with <span className="highlight">3 years</span> of experience in building products for start-up and open minded founder in the ecosystem.
      </h1>
      <div className="hero-buttons">
        <a
          className="ping-btn"
          href="https://wa.me/2348143861167"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="ping-icon">💬</span> Ping me
        </a>
        <button className="resume-btn">Download Resume</button>
      </div>
    </div>
  );
};

export default HeroSection; 