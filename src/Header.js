import React, { useState } from 'react';
import './Header.css';
import { FaGithub, FaLinkedin, FaTwitter, FaSun, FaInfoCircle, FaBook, FaClipboardList, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header__left">
        <div className="header__name">Imran Musa Ayomide</div>
        <div className="header__role">Designer, Front-End Dev & Builder</div>
      </div>
      <nav className="header__center">
        <a href="#about"><FaInfoCircle className="header__icon" /> About</a>
        <a href="#documentation"><FaBook className="header__icon" /> Documentation</a>
        <a href="#assets"><FaClipboardList className="header__icon" /> Assets</a>
      </nav>
      <div className="header__right">
        <span className="header__findme">Find me on:</span>
        <a href="https://github.com/ImranMusaAyomide" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/imran-musa-/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://x.com/haajmuskid" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <button className="header__theme-toggle" aria-label="Toggle theme">
          <FaSun />
        </button>
      </div>
      {/* Hamburger icon for mobile */}
      <button className="header__menu-icon" onClick={handleMenuToggle} aria-label="Open menu">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="header__mobile-menu">
          <nav className="header__mobile-nav">
            <a href="#about" onClick={handleMenuToggle}><FaInfoCircle className="header__icon" /> About</a>
            <a href="#documentation" onClick={handleMenuToggle}><FaBook className="header__icon" /> Documentation</a>
            <a href="#assets" onClick={handleMenuToggle}><FaClipboardList className="header__icon" /> Assets</a>
          </nav>
          <div className="header__mobile-socials">
            <span className="header__findme">Find me on:</span>
            <a href="https://github.com/ImranMusaAyomide" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/imran-musa-/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://x.com/haajmuskid" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 