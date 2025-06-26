import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Check localStorage for theme preference
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  }, [theme]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="header">
      <div className="header__left">
        <div className="header__name">Imran Musa Ayomide</div>
        <div className="header__role">Designer, Front-End Dev & Builder</div>
      </div>
      <nav className="header__center">
        <a href="#about"><i className="fas fa-info-circle header__icon"></i> About</a>
        <a href="#documentation"><i className="fas fa-book header__icon"></i> Documentation</a>
        <a href="#assets"><i className="fas fa-clipboard-list header__icon"></i> Assets</a>
      </nav>
      <div className="header__right">
        <span className="header__findme">Find me on:</span>
        <a href="https://github.com/ImranMusaAyomide" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/imran-musa-/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://x.com/haajmuskid" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
        <button className="header__theme-toggle" aria-label="Toggle theme" onClick={handleThemeToggle}>
          {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
        </button>
      </div>
      {/* Hamburger icon for mobile */}
      <button className="header__menu-icon" onClick={handleMenuToggle} aria-label="Open menu">
        {menuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="header__mobile-menu">
          <nav className="header__mobile-nav">
            <a href="#about" onClick={handleMenuToggle}><i className="fas fa-info-circle header__icon"></i> About</a>
            <a href="#documentation" onClick={handleMenuToggle}><i className="fas fa-book header__icon"></i> Documentation</a>
            <a href="#assets" onClick={handleMenuToggle}><i className="fas fa-clipboard-list header__icon"></i> Assets</a>
          </nav>
          <div className="header__mobile-socials">
            <span className="header__findme">Find me on:</span>
            <a href="https://github.com/ImranMusaAyomide" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/imran-musa-/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://x.com/haajmuskid" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 