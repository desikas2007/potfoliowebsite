import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import profileImg from "../assets/homecute.jpeg";

export default function Home() {
  const roles = ["Full Stack Developer", "Web Designer", "UI/UX Enthusiast"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <div className="home-container">
        {/* Left - Circular Image with Floating Icons */}
        <div className="home-left">
          <div className="profile-circle">
            <img src={profileImg} alt="Desika Sekar" className="profile-img" />

            <div className="floating-icon icon-react">
              <i className="devicon-react-original colored"></i>
            </div>
            <div className="floating-icon icon-css">
              <i className="devicon-css3-plain colored"></i>
            </div>
            <div className="floating-icon icon-js">
              <i className="devicon-javascript-plain colored"></i>
            </div>
            <div className="floating-icon icon-node">
              <i className="devicon-nodejs-plain colored"></i>
            </div>
            <div className="floating-icon icon-html">
              <i className="devicon-html5-plain colored"></i>
            </div>
            <div className="floating-icon icon-git">
              <i className="devicon-git-plain colored"></i>
            </div>
          </div>
        </div>

        {/* Right - Text with Moving Animation */}
        <div className="home-right">
          <h1 className="greeting">Hi, I’m Desika</h1>

          {/* Animated Role Title */}
          <div className="role-container">
            <h2 className="title animated-role">{roles[currentRole]}</h2>
          </div>

          <p className="description">
            Crafting modern, responsive, and user-friendly websites with passion and precision.
          </p>

          <div className="home-actions">
            <a href="/projects" className="btn primary">View My Work</a>
            <a 
              href="/Desika_Sekar_Resume.pdf"
              download="Desika_Sekar_Resume.pdf"
              className="btn outline"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
