import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Food Stall Website",
    desc: "Firebase-based food ordering site with real-time updates and smooth UI.",
    link: "https://desikas2007.github.io/Food-Stall/",
  },
  {
    title: "Portfolio Website",
    desc: "A responsive, AI-themed React portfolio with animations and smart layout.",
    link: "https://desikas2007.github.io/PORTFOLIO/",
  },
  {
    title: "Pothy’s Mart",
    desc: "E-commerce web app with dynamic product filtering and authentication.",
    link: "https://desikas2007.github.io/pothys-mart/",
  },
  
];

export default function Projects() {
  const canvasRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  // 🧠 Neural AI Background (same for all pages)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h;
    let particles = [];

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      particles = Array.from({ length: 90 }, () => new Particle());
    }

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 2;
        this.alpha = 0.4 + Math.random() * 0.6;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${this.alpha})`;
        ctx.fill();
      }
    }

    function animate() {
      ctx.fillStyle = "rgba(0, 0, 20, 0.12)";
      ctx.fillRect(0, 0, w, h);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(0,255,255,${1 - dist / 120})`;
            ctx.lineWidth = 0.2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    resize();
    animate();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="projects-section">
      <canvas ref={canvasRef} className="neural-bg"></canvas>

      <h2 className="projects-heading">🚀 My Technical Projects</h2>

      <div className="project-showcase">
        {projects.map((p, index) => (
          <div
            key={index}
            className={`project-card ${hovered === index ? "active" : ""}`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              Visit Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
