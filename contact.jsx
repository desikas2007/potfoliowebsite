import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">

      <div className="contact-content">
        <h1 className="main-title">GET IN TOUCH</h1>

        <p className="small-text">
          Please contact me at this e-mail address to discuss your site creation needs.
        </p>

        {/* Click email → open Google Form */}
        <h2
          className="email-text"
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSew-QhFrSl-aIQDD5D4G4xrUn198eDMv_yEs5t-11l_kYk59Q/viewform?usp=publish-editor",
              "_blank"
            )
          }
        >
          desikas209@gmail.com
        </h2>

        {/* Icons */}
        <footer className="social-footer">
          <a href="https://www.linkedin.com/in/desika-s-370b55363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a href="https://github.com/desikas2007" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>

          <a href="https://www.instagram.com/_itz_desika_s/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </footer>

        {/* COPYRIGHT */}
        <p className="copyright">
          © 2025 Desika | All Rights Reserved
        </p>
      </div>
    </section>
  );
}
