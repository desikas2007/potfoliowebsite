import React from "react";
import "../styles/theme.css";
import "../styles/Contact.css";
import { Link } from "react-router-dom";

// Left-side image
import contactImg from "../assets/contact-image.jpeg";

export default function Contact() {
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSew-QhFrSl-aIQDD5D4G4xrUn198eDMv_yEs5t-11l_kYk59Q/viewform?usp=publish-editor";

  return (
    <div className="contact-page">
      {/* Header */}
      <header className="header-bar">
        <h2 className="logo">DESIKA PORTFOLIO</h2>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {/* Main Content */}
      <div className="contact-container">
        <div className="contact-left">
          <img src={contactImg} alt="Contact" className="contact-img" />
        </div>
        <div className="contact-right">
          <h1>GET IN TOUCH</h1>
          <p>Please contact me at this e-mail address to discuss your site creation needs.</p>
          <a href={googleFormLink} target="_blank" rel="noreferrer" className="contact-email">
            desikas209@gmail.com
          </a>
        </div>
      </div>

      <footer>
        © 2025 Desika | All Rights Reserved
      </footer>
    </div>
  );
}
