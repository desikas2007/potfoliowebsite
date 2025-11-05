import React from "react";
import "./Projects.css";

const projects = [
  { id: 1, title: "Food Stall Website", desc: "Online ordering using Firebase", link: "https://github.com/yourusername/foodstall" },
  { id: 2, title: "Portfolio UI", desc: "Responsive React portfolio site", link: "https://github.com/yourusername/portfolio" },
  { id: 3, title: "Pothy’s Mart", desc: "E-commerce app using Firebase", link: "https://github.com/yourusername/pothysmart" },
];

export default function Projects() {
  return (
    <section className="projects container" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}
