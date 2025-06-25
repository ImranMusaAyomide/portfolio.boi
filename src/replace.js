import React from 'react';
import './replace.css';
import avatar from './images/pic.svg';

const Replace = () => {
  return (
    <div className="replace-container">
      <div className="replace-left">
        <img src={avatar} alt="Profile" className="replace-avatar" />
      </div>
      <div className="replace-right">
        <h2 className="replace-title">About Me</h2>
        <p className="replace-subtitle">Feed response from those who i have worked with.</p>
        <div className="replace-card">
          <h3 className="replace-headline">
            Think of me as a curious explorer—driven by a passion for learning, uncovering how things work, and creating something new.
          </h3>
          <p className="replace-desc">
            I'm a seasoned online community consultant passionate about cultivating authentic, engaged Web3 communities. From strategic engagement to seamless community operations, I bring a unique blend of design aesthetics and functional innovation. If you're looking to elevate your Web3 project, you're in the right place!
          </p>
          <div className="replace-buttons">
            <a
              className="replace-ping-btn"
              href="https://wa.me/2348143861167"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ping me
            </a>
            <button className="replace-resume-btn">Download Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Replace; 