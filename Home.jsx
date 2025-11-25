import React from "react";
import "../styles/theme.css";
import "../styles/Home.css";
import profileImg from "../assets/homecute.jpeg";

export default function Home() {
  return (
    <div className="home-page">
     <header className="header-bar">
  <h2 className="logo">Desika sekar</h2>
  <nav className="nav-links">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
  </nav>
</header>


      <div className="home-container">
        <div className="home-left">
          <img src={profileImg} className="home-sticker" alt="profile" />
        </div>

        <div className="home-right">
          <h1 className="name-title">DESIKA SEKAR</h1>
          <div className="animated-titles">
            <span className="word">WEB DESIGNER</span>
            <span className="word">FULL STACK DEVELOPER</span>
            <span className="word">UI/UX ENTHUSIAST</span>
          </div>
          <p className="home-tagline">
            I craft modern, user-friendly websites and beautiful web experiences.
          </p>
          <a href="/projects" className="btn">View My Work</a>
        </div>
      </div>
    </div>
  );
}
