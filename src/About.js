import React from 'react'
import './About.css'

function About() {
  return (
    <div className="about-also-section">
      <div className="about-also-title-row">
        <span className="about-also-title">I'm Also</span>
        <span className="about-also-divider" />
      </div>
      <ul className="about-also-list">
        <li>
          <span className="about-also-icon" role="img" aria-label="briefcase">&#128188;</span>
          A generalist that builds using AI, ships design systems & AI agents
        </li>
        <li>
          <span className="about-also-icon" role="img" aria-label="calendar">&#128197;</span>
          Currently available for remote role Full time or freelance
        </li>
        <li>
          <span className="about-also-icon" role="img" aria-label="music">&#127925;</span>
          Productive atm and listing to nothing
        </li>
      </ul>
    </div>
  )
}

export default About
