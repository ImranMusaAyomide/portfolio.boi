import React, { useState, useEffect } from "react";
import "./Tool.css";

const tools = [
  { icon: 'fab fa-react', label: 'React' },
  { icon: 'fab fa-js', label: 'JavaScript' },
  { icon: 'fab fa-html5', label: 'HTML5' },
  { icon: 'fab fa-css3-alt', label: 'CSS3' },
  { icon: 'fab fa-node-js', label: 'Node.js' },
  { icon: 'fab fa-git-alt', label: 'Git' },
  { icon: 'fab fa-github', label: 'GitHub' },
  { icon: 'fab fa-figma', label: 'Figma' },
  { icon: 'fab fa-slack', label: 'Slack' },
  { icon: 'fab fa-windows', label: 'Windows' },
  { icon: 'fab fa-wordpress', label: 'WordPress' },
  { icon: 'fab fa-behance', label: 'Behance' },
];

function Tool() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const handleStorage = () => {
      setTheme(localStorage.getItem('theme') || 'dark');
    };
    window.addEventListener('storage', handleStorage);
    // Listen for theme changes from Header
    const observer = new MutationObserver(() => {
      setTheme(document.body.classList.contains('light-theme') ? 'light' : 'dark');
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => {
      window.removeEventListener('storage', handleStorage);
      observer.disconnect();
    };
  }, []);

  const iconColor = theme === 'light' ? '#222' : '#fff';

  return (
    <div className="tool-container">
      <div className="tool-title"><p>Tools I use for building</p></div>
      <div className="tool-icons">
        {tools.map((tool, idx) => (
          <span key={idx} className="tool-icon" title={tool.label}>
            <i className={tool.icon} style={{ fontSize: '2em', color: iconColor }}></i>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Tool; 