import React, { useState } from "react";
import "../styles/Projects.css";

export default function Projects() {
  const [filter, setFilter] = useState("web");

  const webProjects = [
    {
      title: "Food Stall",
      desc: "A cute and modern food ordering app with smooth animations and clean UI.",
      img: "https://img.freepik.com/free-psd/food-menu-restaurant-web-banner-template_120329-4909.jpg?semt=ais_hybrid&w=740&q=80", // your actual project
      demo: "https://desikas2007.github.io/Food-Stall/"
    },
    {
      title: "My Portfolio",
      desc: "Personal portfolio website with glassmorphism, neon glow, and sketch animations.",
      img: "https://image.slidesdocs.com/responsive-images/slides/0-blue-simple-personal-portfolio-powerpoint-background_d30f33114b__960_540.jpg", // your actual portfolio
      demo: "https://desikas2007.github.io/PORTFOLIO/"
    },
    {
      title: "E-commerce Website",
      desc: "Online shopping platform with product filtering, cart system, and responsive design.",
      img: "https://img.freepik.com/free-photo/black-friday-sales-sign-neon-light_23-2151833076.jpg?semt=ais_hybrid&w=740&q=80", // your actual ecom
      demo: "https://desikas2007.github.io/pothys-mart/"
    },
  ];

  const mobileProjects = [
    {
      title: "Sakura Notes",
      desc: "Beautiful anime-themed note-taking app with cloud sync, stickers, and pastel themes.",
      img: "https://cdn.dribbble.com/userupload/15861996/file/original-dffe52a7ba5b3062923ef5ae2f995064.png?resize=400x0", // cute pink notes app
      demo: "#"
    },
    {
      title: "Kawaii Weather",
      desc: "Adorable weather app with anime characters that change with mood and seasons.",
      img: "https://static.vecteezy.com/system/resources/thumbnails/003/774/267/small/weather-check-cartoon-smartphone-interface-templates-set-winter-overcast-mobile-app-screen-page-day-and-dark-mode-design-forecast-ui-for-application-phone-display-with-flat-character-vector.jpg", // anime girl + weather
      demo: "#"
    },
    {
      title: "Anime Habit",
      desc: "Cute habit tracker with anime rewards, daily quests, and kawaii animations.",
      img: "https://cdn.dribbble.com/userupload/17261365/file/original-82743882490cdb98157f2f2e3e6d0030.png?resize=400x0", // anime girl with checklist
      demo: "#"
    },
  ];

  const currentProjects = filter === "web" ? webProjects : mobileProjects;

  return (
    <div className="projects-page">
      <h1 className="projects-title sketch-title">MY PROJECTS</h1>

      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === "web" ? "active" : ""}`}
          onClick={() => setFilter("web")}
        >
          Web Application
        </button>
        <button
          className={`filter-btn ${filter === "mobile" ? "active" : ""}`}
          onClick={() => setFilter("mobile")}
        >
          Mobile Application
        </button>
      </div>

      <div className="projects-grid">
        {currentProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} className="card-image" />
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="card-actions">
                <a href="#" className="action-btn repo-btn">Repository</a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="action-btn demo-btn">
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
