import React, { useEffect } from "react";
import "./Home.css";
import Header from "../components/Header";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80 },
          color: { value: "#00ffff" },
          shape: { type: "circle" },
          opacity: { value: 0.2 },
          size: { value: 2.5 },
          line_linked: {
            enable: true,
            distance: 120,
            color: "#00ffff",
            opacity: 0.1,
            width: 1,
          },
          move: { enable: true, speed: 1.2 },
        },
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="home-page">
      <Header />
      <div id="particles-js"></div>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="intro-line">
            Hi, I'm <span className="accent">Desika S</span>
          </h1>
          <h3 className="subtitle">Full Stack Developer</h3>
          <p className="tagline">
            I build dynamic, responsive, and user-friendly web applications
            that bring ideas to life with modern design and AI-inspired creativity.
          </p>
          <div className="cta">
            <a href="/projects" className="btn main">
              View My Projects
            </a>
            <a href="/contact" className="btn alt">
              Let's Connect
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-glass">
            <img
              src="profilephoto.jpeg"
              alt="Desika S"
              className="profile-img"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
