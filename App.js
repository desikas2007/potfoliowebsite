import React, { useEffect, useRef } from "react";
import "./About.css";

export default function About() {
  const canvasRef = useRef(null);

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
        gradient.addColorStop(
          0,
          `hsla(${this.hue}, 100%, 80%, ${this.life})`
        );
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

  return (
    <div className="about-page">
      {/* 🔥 Blue Fire Canvas Background */}
      <canvas ref={canvasRef} id="fire-particles"></canvas>

      {/* ✨ About Section Content */}
      <section className="about">
        <h2>About Me</h2>
        <p>Hello! I'm Desika s, a passionate designer and a budding computer science and engineer pursuing my BE in CSE at KSRCE. When I'm not immersed in academics, you can find me creating sharing my knowledge and experiences with the world. I'm driven by a desire to harness technology for social impact, and I enjoy working on innovative mini-projects that can make a real difference in people's lives. I'm excited to share my journey, projects, and insights with you through this portfolio.</p>
            <p>Education: B.E in Computer Science and Engineering [2024-2028]</p>
            <p>Skills: C, C++, Python, Java, JavaScript, CSS, Database</p>
      </section>
    </div>
  );
}
