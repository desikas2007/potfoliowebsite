// src/pages/About.jsx
import React, { useEffect, useState } from "react";
import "../styles/About.css";
import aboutImg from "../assets/aboutimg.jpeg";

export default function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about-page">
      <div className="about-wrapper">
        {/* Photo */}
        <div className={`about-photo ${loaded ? "show" : ""}`}>
          <img src={aboutImg} alt="Desika Sekar" />
        </div>

        {/* Right Side */}
        <div className="about-info">
          <h1 className="about-title">About Me</h1>

          <p className={`about-desc ${loaded ? "show" : ""}`}>
            Hello, I'm <strong>Desika Sekar</strong> passionate about building smart and scalable
            web & mobile applications. I aim to transition into the IT industry by 2028 and
            eventually move towards AI and data science.
          </p>

          {/* 3 Stat Cards */}
          <div className={`stats-container ${loaded ? "show" : ""}`}>
            <div className="stat-item">
              <div className="stat-icon code">Code</div>
              <h2>3+</h2>
              <p>Total Projects</p>
            </div>
            <div className="stat-item">
            <div className="stat-icon cert">Voucher</div>
              <h2>3</h2>
              <p>Certificates</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon globe">Globe</div>
              <h2>1+</h2>
              <p>Years Learning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
