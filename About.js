import React from "react";
import "../styles/theme.css";
import "../styles/About.css";
import aboutImg from "../assets/aboutimg.jpeg"; // your image

export default function About() {
  return (
    <div className="about-page">
      {/* Header */}
      <header className="header-bar">
        <h2 className="logo">DESIKA PORTFOLIO</h2>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      {/* Content */}
      <div className="about-container">
        {/* Left image */}
        <div className="about-left">
          <img src={aboutImg} alt="About" className="about-img" />
        </div>

        {/* Right text */}
        <div className="about-right fade-in-text">
          <h1 className="about-title">About Me</h1>
          <p>
            Hello! I’m <b>Desika Sekar</b>, a passionate  
            <span className="highlight"> Full Stack Developer </span>  
            and modern web designer.
          </p>
          <p>
            I craft visually engaging, responsive websites and web experiences.
            Using pixel-perfect design, modern UI/UX principles, and animations,
            I turn ideas into functional digital products.
            I specialize in transforming ideas into functional web interfaces
            using strong design sense, responsive layouts, and modern UI/UX
            principles. I focus on pixel-perfect design, animations, and
            brand-aligned aesthetics.
          </p>
        </div>
      </div>
    </div>
  );
}
