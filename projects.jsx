import React from "react";
import "./Projects.css";

// Importing images
import foodImg from "../assets/foodimage.jpeg";
import portImg from "../assets/portimage.jpeg";
import pothysImg from "../assets/pothysimage.jpeg";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Food Stall",
      imgBack: foodImg,
      github: "https://desikas2007.github.io/Food-Stall/",
    },
    {
      id: 2,
      title: "My portfolio",
      imgBack: portImg,
      github: "https://desikas2007.github.io/PORTFOLIO/",
    },
    {
      id: 3,
      title: "E-commerce website",
      imgBack: pothysImg,
      github: "https://desikas2007.github.io/pothys-mart/",
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-row">
        {projects.map((p) => (
          <div className="project-card" key={p.id}>
            <div className="card-inner">

              {/* FRONT → PROJECT NAME */}
              <div className="card-front">
                <h2>{p.title}</h2>
              </div>

              {/* BACK → IMAGE + GITHUB LINK */}
              <div className="card-back">
                <img src={p.imgBack} alt={p.title} className="back-img" />
                <a href={p.github} target="_blank" rel="noreferrer" className="github-btn">
                  🔗 GitHub Link
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
