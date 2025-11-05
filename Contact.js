import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact container" data-aos="fade-up">
      <h2>Contact Me</h2>
      {sent && <div className="notice">Thanks! I will respond soon.</div>}
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Your email" type="email" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message" rows="5" required />
        <button type="submit" className="btn">Send Message</button>
      </form>

      <footer className="social-footer">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer">Instagram</a>
      </footer>
    </section>
  );
}
