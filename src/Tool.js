import React from "react";
import "./Tool.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faNodeJs,
  faGitAlt,
  faGithub,
  faFigma,
  faSlack,
  faWindows,
  faWordpress,
  faBehance
} from "@fortawesome/free-brands-svg-icons";

const tools = [
  { icon: faReact, label: "React" },
  { icon: faJs, label: "JavaScript" },
  { icon: faHtml5, label: "HTML5" },
  { icon: faCss3Alt, label: "CSS3" },
  { icon: faNodeJs, label: "Node.js" },
  { icon: faGitAlt, label: "Git" },
  { icon: faGithub, label: "GitHub" },
  { icon: faFigma, label: "Figma" },
  { icon: faSlack, label: "Slack" },
  { icon: faWindows, label: "Windows" },
  { icon: faWordpress, label: "WordPress" },
  { icon: faBehance, label: "Behance" },
];

function Tool() {
  return (
    <div className="tool-container">
      <div className="tool-title"><p>Tools I use for building</p></div>
      <div className="tool-icons">
        {tools.map((tool, idx) => (
          <span key={idx} className="tool-icon" title={tool.label}>
            <FontAwesomeIcon icon={tool.icon} size="2x" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Tool; 