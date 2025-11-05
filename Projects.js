import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Food Stall Website",
    desc: "Online ordering system integrated with Firebase backend.",
    link: "https://desikas2007.github.io/Food-Stall/",
  },
  {
    id: 2,
    title: "Portfolio UI",
    desc: "Modern responsive React portfolio showcasing animations and design.",
    link: "https://desikas2007.github.io/PORTFOLIO/",
  },
  {
    id: 3,
    title: "Pothy’s Mart",
    desc: "E-commerce application with user authentication and real-time database.",
    link: "https://desikas2007.github.io/pothys-mart/",
  },
];

export default function Projects() {
  const canvasRef = useRef(null);
  const [highlighted, setHighlighted] = useState(0);

  // 🔥 Blue Fire Particle Animation (same as About)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w, h;
    function resize() {
      w = canvas.width = canvas.parentElement.clientWidth;
      h = canvas.height = canvas.parentElement.clientHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = w * (0.2 + Math.random() * 0.6);
        this.y = h + 20;
        this.size = Math.random() * 12 + 8;
        this.speedY = -(Math.random() * 6 + 9);
        this.speedX = (Math.random() - 0.5) * 2;
        this.life = 1;
        this.decay = Math.random() * 0.015 + 0.008;
        this.hue = 190 + Math.random() * 20;
      }
      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.speedY *= 0.96;
        this.life -= this.decay;
        if (this.life <= 0 || this.y < -20) this.reset();
      }
      draw() {
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size
        );
        gradient.addColorStop(0, `hsla(${this.hue}, 100%, 80%, ${this.life})`);
        gradient.addColorStop(
          0.4,
          `hsla(${this.hue + 15}, 90%, 60%, ${this.life * 0.7})`
        );
        gradient.addColorStop(1, `hsla(${this.hue + 30}, 70%, 30%, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 120 }, () => new Particle());

    function animate() {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(10,20,32,0.04)";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  // 🌈 Highlight projects one by one
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlighted((prev) => (prev + 1) % projects.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="projects-page">
      <canvas ref={canvasRef} id="fire-particles"></canvas>

      <section className="projects-section">
        <h2 className="projects-title">🔥 My Projects</h2>
        <div className="project-grid">
          {projects.map((p, index) => (
            <div
              key={p.id}
              className={`project-card ${
                highlighted === index ? "highlight" : ""
              }`}
            >
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
