import React, { useEffect } from "react";
import "./Home.css";
import Header from "../components/Header"; // make sure header is imported

export default function Home() {
  useEffect(() => {
    // Load particles.js dynamically
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 50 },
          color: { value: "#00ffff" },
          shape: { type: "circle" },
          opacity: { value: 0.3 },
          size: { value: 3 },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#00ffff",
            opacity: 0.2,
            width: 1,
          },
          move: { enable: true, speed: 1 },
        },
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="home-page">
      <Header />

      <div id="particles-js"></div>

      <section className="hero-content" data-aos="fade-up">
        {/* 👇 Replace with your actual image path */}
        <img
          src="profilephoto.jpeg"
          alt="DESIKA S"
          className="profile-photo"
        />
        <h2>Welcome to My Portfolio</h2>
        <p>Full Stack Developer</p>
        <a href="/projects" className="btn">
          Explore My Work
        </a>
      </section>
    </div>
  );
}
