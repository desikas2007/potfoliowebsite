
import React from "react";
import "./About.css";

// Correct image import
import profileImg from "../assets/profilephoto.jpeg";

export default function About() {
  return (
    <div className="about-section">
      
      {/* IMAGE LEFT */}
      <div className="about-image-container">
        <img
          src={profileImg}
          alt="Profile"
          className="about-profile-img"
        />
      </div>

      {/* TEXT RIGHT */}
      <div className="about-content">
        <h1 className="about-title">About Me</h1>

        <p className="about-para">
          I am a passionate <strong>Web Designer</strong> and
          <strong> Full Stack Developer</strong> who blends creativity with
          clean, modern engineering. My goal is to build digital experiences
          that are visually engaging, fast, and user-focused.
        </p>

        <p className="about-para">
          I specialize in transforming ideas into functional web interfaces
          using strong design sense, responsive layouts, and modern UI/UX
          principles. I focus on pixel-perfect design, animations, and
          brand-aligned aesthetics.
        </p>

        <h2 className="skill-title">Technologies I Work With</h2>
        <ul className="skill-list">
          <li>HTML, CSS, Tailwind, JavaScript</li>
          <li>React.js, Framer Motion</li>
          <li>Node.js, Express</li>
          <li>MongoDB, Firebase</li>
          <li>Git, GitHub</li>
        </ul>
      </div>
    </div>
  );
}
