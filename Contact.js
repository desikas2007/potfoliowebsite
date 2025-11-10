import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      console.log("Form submitted:", form);
      setSent(true);
      setSending(false);
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section className="contact-section">
      {/* Background flower effect */}
      <div className="background-flower"></div>

      {/* 🖋️ Large translucent left label */}
      <div className="big-contact">CONTACT</div>

      <div className="contact-content">
        <h2>Get in Touch 🤖</h2>
        <span className="email-address">📧 desikas2007@gmail.com</span>

        {sent && <div className="notice">✅ Message sent successfully!</div>}

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            type="email"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="5"
            required
          />
          <button type="submit" className="btn" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>

        <footer className="social-footer">
          <a
            href="https://www.linkedin.com/in/desika-s-370b55363"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://github.com/desikas2007" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.instagram.com/_itz_desika_s/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </footer>
      </div>
    </section>
  );
}
