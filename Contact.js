import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">

      {/* Background */}
      <div className="background-flower"></div>

      {/* Big left vertical text */}
      <div className="big-contact">PROFILE</div>

      <div className="contact-content">

        <h1 className="main-title">CONTACT</h1>

        <p className="small-text">
          Please contact me at this e-mail address to discuss your site creation needs.
        </p>

        {/* CLICKABLE EMAIL → GOOGLE FORM */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSew-QhFrSl-aIQDD5D4G4xrUn198eDMv_yEs5t-11l_kYk59Q/viewform?usp=publish-editor"
          target="_blank"
          rel="noreferrer"
          className="email-text email-link"
        >
          desikas2007@gmail.com
        </a>

        <p className="get-in-touch">Get in touch</p>

        {/* SOCIAL ICONS */}
        <footer className="social-footer">

          <a
            href="https://www.linkedin.com/in/desika-s-370b55363"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/desikas2007"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.instagram.com/_itz_desika_s/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

        </footer>

      </div>
    </section>
  );
}
