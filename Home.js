import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const navigate = useNavigate();
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="home-page">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            color: { value: "#00FFFF" },
            links: { color: "#00FFFF", distance: 150, enable: true, opacity: 0.3 },
            move: { enable: true, speed: 1 },
            number: { value: 50 },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
          },
        }}
      />
      <div className="home-content" data-aos="fade-up">
        <img src="profilephoto.jpeg" alt="DESIKA S" className="profile-photo" />
        <h2>Welcome to My Portfolio</h2>
        <p>Full Stack Developer</p>
        <button className="btn" onClick={() => navigate("/projects")}>
          Explore My Work
        </button>
      </div>
    </section>
  );
}
