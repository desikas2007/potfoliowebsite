// About.jsx
import React, { useEffect, useState } from "react";
import "../styles/About.css";
import aboutImg from "../assets/aboutimg.jpeg";

export default function About() {
  // 1. Title is always visible (it has its own CSS animation)
  // 2. Everything else is hidden until this state becomes true
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    // Start showing the image + text + skills after the title animation finishes
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 2700); // 2.7s → a little buffer after the 2.5s sketchDrawText

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about-page">
      <div className="about-container">
        {/* Left - BIG Circular Image */}
        <div className={`about-left ${showMainContent ? "loaded" : ""}`}>
          <img src={aboutImg} alt="Desika Sekar" />
        </div>

        {/* Right Side */}
        <div className="about-right">
          {/* This appears immediately with its own CSS animation */}
          <h1 className="about-title">About Me</h1>

          {/* Everything else appears together after the delay */}
          <div className={`content-wrapper ${showMainContent ? "loaded" : ""}`}>
            <h2 className="about-name">I'm Desika Sekar</h2>
            <p className="about-description">
              Full Stack Developer and modern web designer from India.<br />
              I create beautiful, fast, and user-friendly digital experiences using
              React, Laravel, Flutter, and modern design tools.
            </p>

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
    </div>
  );
}
