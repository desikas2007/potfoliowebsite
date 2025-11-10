import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NeuralBackground from "../components/NeuralBackground";
import "./About.css";

const slides = [
  {
    title: "Who Am I?",
    text: "I'm Desika S — a creative full-stack developer who loves turning ideas into interactive digital experiences.",
  },
  {
    title: "My Mission",
    text: "I build AI-inspired, intuitive, and efficient web systems that merge technology with human imagination.",
  },
  {
    title: "My Skills",
    text: "React, Firebase, Node.js, Python,c.c++,java— each one a piece of my evolving digital toolkit.",
  },
  {
    title: "My Vision",
    text: "To craft intelligent interfaces where design, motion, and data work together like neural connections.",
  },
];

export default function About() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  return (
    <div className="about-page">
      <NeuralBackground />

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="ai-slide"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          onClick={nextSlide}
        >
          <h2 className="slide-title">🤖 {slides[index].title}</h2>
          <p className="slide-text">{slides[index].text}</p>
          <span className="slide-hint">(Tap to reveal next)</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
