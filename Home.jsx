import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="overlay"></div>

      {/* ✨ Floating particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* 🌸 Main content */}
      <div className="content">
        <h1 className="main-title">DESIKA SEKAR</h1>
        <h3 className="subtitle">Web Designer / Frontend Developer</h3>
        
      </div>
    </div>
  );
}
