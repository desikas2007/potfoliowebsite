import React, { useState } from "react";
import "../styles/Projects.css";
import cert1 from "../assets/certificates1.jpeg";
import cert2 from "../assets/certificates2.jpeg";
import cert3 from "../assets/certificates3.jpeg";
export default function Projects() {
  const [filter, setFilter] = useState("web");

  const webProjects = [
    {
      title: "Food Stall",
      desc: "A cute and modern food ordering app with smooth animations and clean UI.",
      img: "https://img.freepik.com/free-psd/food-menu-restaurant-web-banner-template_120329-4909.jpg?semt=ais_hybrid&w=740&q=80",
      demo: "https://desikas2007.github.io/Food-Stall/",
      repo: "https://github.com/desikas2007/Food-Stall"
    },
    {
      title: "My Portfolio",
      desc: "Personal portfolio website with glassmorphism, neon glow.",
      img: "https://image.slidesdocs.com/responsive-images/slides/0-blue-simple-personal-portfolio-powerpoint-background_d30f33114b__960_540.jpg",
      demo: "https://desikas2007.github.io/PORTFOLIO/",
      repo: "https://github.com/desikas2007/PORTFOLIO"
    },
    {
      title: "E-commerce Website",
      desc: "Online shopping platform with product filtering, cart system, and responsive design.",
      img: "https://img.freepik.com/free-photo/black-friday-sales-sign-neon-light_23-2151833076.jpg?semt=ais_hybrid&w=740&q=80",
      demo: "https://desikas2007.github.io/pothys-mart/",
      repo: "https://github.com/desikas2007/pothys-mart"
    },
  ];

  const mobileProjects = [
    {
      title: "Sakura Notes",
      desc: "Beautiful anime-themed note-taking app with cloud sync, stickers, and pastel themes.",
      img: "https://cdn.dribbble.com/userupload/15861996/file/original-dffe52a7ba5b3062923ef5ae2f995064.png?resize=400x0",
      demo: "#",
      repo: "#"
    },
    {
      title: "Kawaii Weather",
      desc: "Adorable weather app with anime characters that change with mood and seasons.",
      img: "https://static.vecteezy.com/system/resources/thumbnails/003/774/267/small/weather-check-cartoon-smartphone-interface-templates-set-winter-overcast-mobile-app-screen-page-day-and-dark-mode-design-forecast-ui-for-application-phone-display-with-flat-character-vector.jpg",
      demo: "#",
      repo: "#"
    },
    {
      title: "Anime Habit",
      desc: "Cute habit tracker with anime rewards, daily quests, and kawaii animations.",
      img: "https://cdn.dribbble.com/userupload/17261365/file/original-82743882490cdb98157f2f2e3e6d0030.png?resize=400x0",
      demo: "#",
      repo: "#"
    },
  ];

  const certificates = [
    {
      title: "Data Driven program",
      issuer: "NoviTech R&D Private Limited",
      date: "Oct 2nd 2025",
      img: cert1 , // Replace with your actual cert image
      link: "#" // Add certificate PDF or verification link
    },
    {
      title: "Masterclass in Full Stack",
      issuer: "NoviTech R&D Private Limited",
      date: "Aug 27th -Sept 30th 2025",
      img: cert2,
      link: "https://ude.my/UC-xxxxxxxx" // Replace with your real Udemy cert link
    },
    {
      title: "PowerBI Workshop",
      issuer: "Office Master",
      date: "Oct 25th 2025",
      img: cert3,
      link: "#"
    },
  ];

  const getCurrentContent = () => {
    if (filter === "web") return webProjects;
    if (filter === "mobile") return mobileProjects;
    if (filter === "certificates") return certificates;
  };

  const currentItems = getCurrentContent();

  return (
    <div className="projects-page">
      <h1 className="projects-title sketch-title">
        {filter === "certificates" ? "MY CERTIFICATES" : "MY PROJECTS"}
      </h1>

      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === "web" ? "active" : ""}`}
          onClick={() => setFilter("web")}
        >
          Web Apps
        </button>
        <button
          className={`filter-btn ${filter === "mobile" ? "active" : ""}`}
          onClick={() => setFilter("mobile")}
        >
          Mobile Apps
        </button>
        <button
          className={`filter-btn ${filter === "certificates" ? "active" : ""}`}
          onClick={() => setFilter("certificates")}
        >
          Certificates
        </button>
      </div>

      <div className="projects-grid">
        {currentItems.map((item, index) => (
          <div
            className={`project-card ${filter === "certificates" ? "cert-card" : ""}`}
            key={index}
          >
            <img
              src={item.img}
              alt={item.title}
              className="card-image"
            />

            <div className="card-content">
              <h3>{item.title}</h3>

              {filter === "certificates" ? (
                <>
                  <p className="cert-issuer">{item.issuer}</p>
                  <p className="cert-date">{item.date}</p>
                </>
              ) : (
                <p>{item.desc}</p>
              )}

              <div className="card-actions">
                {filter === "certificates" ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="action-btn demo-btn full-width"
                    onClick={(e) => item.link === "#" && e.preventDefault()}
                  >
                    View Certificate
                  </a>
                ) : (
                  <>
                    <a
                      href={item.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="action-btn repo-btn"
                      onClick={(e) => item.repo === "#" && e.preventDefault()}
                    >
                      Repository
                    </a>
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="action-btn demo-btn"
                      onClick={(e) => item.demo === "#" && e.preventDefault()}
                    >
                      Demo
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
