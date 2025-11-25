import React from "react";
import "../styles/About.css";
import aboutImg from "../assets/aboutimg.jpeg";

export default function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        {/* Left - BIG Circular Image */}
        <div className="about-left">
          <img src={aboutImg} alt="Desika Sekar" className="about-img" />
        </div>

        {/* Right - Text + 3 Skill Boxes (vertical) */}
        <div className="about-right">
          <h1 className="about-title sketch-title">About Me</h1>
          <h2 className="about-name">I'm Desika Sekar</h2>
          <p className="about-description">
            Full Stack Developer and modern web designer from India.<br />
            I create beautiful, fast, and user-friendly digital experiences using React, Laravel, Flutter, and modern design tools.
          </p>

          {/* 3 Skill Boxes - One per line */}
          <div className="skills-container">
            <div className="skill-box">
              <span className="skill-icon">Web Application Development</span>
            </div>
            <div className="skill-box">
              <span className="skill-icon">Mobile Application Development</span>
            </div>
            <div className="skill-box">
              <span className="skill-icon">Problem Solving & Clean Code</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
