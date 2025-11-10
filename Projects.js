import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Food Stall Website",
    image: "/foodimage.jpeg", // ✅ Correct path
    link: "https://desikas2007.github.io/Food-Stall/",
  },
  {
    title: "Portfolio Website",
    image: "/portimage.jpeg", // ✅ Correct path
    link: "https://desikas2007.github.io/PORTFOLIO/",
  },
  {
    title: "Pothy’s Mart",
    image: "/pothysimage.jpeg", // ✅ Correct path
    link: "https://desikas2007.github.io/pothys-mart/",
  },
];

export default function Projects() {
  const [bgImage, setBgImage] = useState(null);

  return (
    <section
      className={`projects-section ${bgImage ? "blur-active" : ""}`}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : 'url("/flower.png")',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="overlay"></div>

      {/* Left big text */}
      <div className="big-title">WORKS</div>

      {/* Project list (right side) */}
      <div className="project-list">
        {projects.map((p, index) => (
          <div
            key={index}
            className="project-card"
            onMouseEnter={() => setBgImage(p.image)}
            onMouseLeave={() => setBgImage(null)}
          >
            <h3>
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                {p.title}
              </a>
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
