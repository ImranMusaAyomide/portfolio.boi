import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <div className="footer-name">Imran Musa Ayomide</div>
          <div className="footer-role">Designer, Front End Dev & Builder</div>
          <div className="footer-follow">Follow me On</div>
          <div className="footer-icons-grid">
            <div className="footer-icons-row">
              <a href="https://x.com/haajmuskid" aria-label="X" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
              <a href="https://www.linkedin.com/in/imran-musa-/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.facebook.com/share/1AZvoq2sRy/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="mailto:haajmuskid@gmail.com" aria-label="Gmail" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
              <a href="https://t.me/haajsensie" aria-label="Telegram" target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram-plane"></i></a>
            </div>
            <div className="footer-icons-row">
              <a href="#" aria-label="Behance"><i className="fab fa-behance"></i></a>
              <a href="https://medium.com/@haajmuskid" aria-label="Medium" target="_blank" rel="noopener noreferrer"><i className="fab fa-medium"></i></a>
              <a href="https://dribbble.com/haajeth" aria-label="Dribbble" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a>
              <a href="https://www.instagram.com/haajboiz?igsh=MW01MnB5bTM5c3l0NQ==" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Flickr"><i className="fab fa-flickr"></i></a>
              <a href="https://discord.com/users/961653685618880532" aria-label="Discord" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-phone">+234 814 361 167</div>
          <div className="footer-email">haajmuski@gmail.com</div>
          <form className="footer-form">
            <input type="email" placeholder="Enter Your Email" className="footer-input" />
            <button type="submit" className="footer-btn">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        All right and Reserved by Designer Haaj | 2025
      </div>
    </footer>
  );
};

export default Footer; 