import React from "react";
import "./ProofOfWork.css";
import behanceLogo from "./images/behance.svg";
import img1 from "./images/1.svg.svg";
import img2 from "./images/2.svg.svg";
import img3 from "./images/3.svg.svg";
import img4 from "./images/4.svg.svg";
import img5 from "./images/5.svg.svg";
import img6 from "./images/6.svg.svg";
import img7 from "./images/7.svg.svg";
import img8 from "./images/8.svg.svg";
import img9 from "./images/9.svg.svg";
import img10 from "./images/10.svg";

const projectImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
];

const projectLinks = [
  "https://www.linkedin.com/posts/imran-musa-_crafting-an-intuitive-ux-design-for-crypto-activity-7272726623332769793-eVmD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADav998B8cn-4qCq6BeDUqbFFh0Bvcn6YAk",
  "https://www.behance.net/gallery/215595921/web3",
  "https://www.behance.net/gallery/215385473/web3",
  "https://www.figma.com/design/s72f2tD8LPpvlbqJYwXrO6/Web3-Family?node-id=431-2533&t=revwv6nDMWBLxpCD-0",
  "https://www.behance.net/gallery/209428801/UX-Design",
  "https://x.com/haajmuskid/status/1909606344463696128/photo/1",
  "https://www.behance.net/gallery/190787829/GameDesign",
  "https://www.linkedin.com/feed/update/urn:li:activity:7145361499987906562/",
  "https://x.com/haajmuskid/status/1860413650013401464/photo/1",
  "https://www.behance.net/gallery/224492135/web3-ai",
];

const ProofOfWork = () => (
  <section className="proof-of-work">
    <h2>
      Proof Of Work on{" "}
      <img src={behanceLogo} alt="Behance" className="behance-logo" />
    </h2>
    <div className="pow-gallery">
      {projectImages.map((src, idx) => (
        <div className="pow-item" key={idx}>
          {projectLinks[idx] ? (
            <a
              href={projectLinks[idx]}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", width: "100%", height: "100%" }}
            >
              <img src={src} alt={`Project ${idx + 1}`} />
            </a>
          ) : (
            <img src={src} alt={`Project ${idx + 1}`} />
          )}
        </div>
      ))}
    </div>
  </section>
);

export default ProofOfWork;
