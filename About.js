import React, { useEffect, useRef, useState } from "react";
import "./About.css";

export default function About() {
  const canvasRef = useRef(null);
  const [activeSkill, setActiveSkill] = useState(0);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Firebase",
    "Python",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
  ];

  // 🔥 Blue fire particles + white droplets
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
        this.x = Math.random() * w;
        this.y = -20 - Math.random() * 50;
        this.size = Math.random() * 12 + 8;
        this.speedY = Math.random() * 4 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.life = 1;
        this.decay = Math.random() * 0.015 + 0.008;
        this.hue = 190 + Math.random() * 20;
      }
      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.life -= this.decay;
        if (this.life <= 0 || this.y > h + 20) this.reset();
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

    // ⚪ White droplets
    class Droplet {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * w;
        this.y = -10 - Math.random() * 100;
        this.size = Math.random() * 2 + 1;
        this.speedY = Math.random() * 3 + 1;
        this.alpha = Math.random() * 0.6 + 0.4;
      }
      update() {
        this.y += this.speedY;
        if (this.y > h + 10) this.reset();
      }
      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 150 }, () => new Particle());
    const droplets = Array.from({ length: 80 }, () => new Droplet());

    function animate() {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(10,20,32,0.05)";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      particles.forEach((p) => p.update() && p.draw());
      droplets.forEach((d) => d.update() && d.draw());

      requestAnimationFrame(animate);
    }
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  // 🌈 Skill highlighting animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div className="about-page">
      <canvas ref={canvasRef} id="fire-particles"></canvas>

      <section className="about">
        <h2 className="typewriter">🔥 About Me</h2>
        <p>
          Hi, I’m <strong>Desika S</strong> — a passionate Full Stack Developer
          creating dynamic, interactive, and user-focused web applications.
        </p>
        <p>
          I specialize in building interactive UIs, integrating Firebase, and
          crafting experiences that balance creativity with functionality.
        </p>

        <div className="skills">
          {skills.map((skill, index) => (
            <button
              key={index}
              className={`skill-btn ${index === activeSkill ? "active" : ""}`}
            >
              {skill}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
