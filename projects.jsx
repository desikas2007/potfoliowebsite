import React, { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import "./Projects.css";
import foodImg from "../assets/foodimage.jpeg";
import portImg from "../assets/portimage.jpeg";
import pothysImg from "../assets/pothysimage.jpeg";

// Single draggable item
function SortableItem({ id }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    background: "rgba(255,255,255,0.2)",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "grab",
    color: "#fff",
    textAlign: "center",
    marginBottom: "8px",
    userSelect: "none"
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {id}
    </div>
  );
}

// Single card component with drag & drop puzzle
function PuzzleCard({ project }) {
  const [items, setItems] = useState([]);
  const [unlocked, setUnlocked] = useState(false);

  // Initialize puzzle items
  useEffect(() => {
    resetPuzzle();
  }, []);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = items.indexOf(active.id);
    const newIndex = items.indexOf(over.id);
    const newItems = arrayMove(items, oldIndex, newIndex);
    setItems(newItems);

    // Unlock if correctly arranged
    if (newItems.join() === project.puzzle.join()) {
      setUnlocked(true);
    } else {
      setUnlocked(false);
    }
  };

  const resetPuzzle = () => {
    setItems([...project.puzzle].sort(() => Math.random() - 0.5));
    setUnlocked(false);
  };

  return (
    <div className="project-card">
      <div className="card-front" style={{ position: "relative" }}>
        <h2>{project.title}</h2>
        {!unlocked && <p>Arrange these correctly to unlock!</p>}

        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {items.map((item) => (
              <SortableItem key={item} id={item} />
            ))}
          </SortableContext>
        </DndContext>

        {unlocked && (
          <div className="unlocked-content">
            <button className="close-btn" onClick={resetPuzzle}>
              ✖
            </button>
            <img src={project.imgBack} alt={project.title} className="back-img" />
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              🔗 View Live
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Food Stall",
      imgBack: foodImg,
      github: "https://desikas2007.github.io/Food-Stall/",
      puzzle: ["Order food", "Responsive design", "Live deployment"]
    },
    {
      id: 2,
      title: "My Portfolio",
      imgBack: portImg,
      github: "https://desikas2007.github.io/PORTFOLIO/",
      puzzle: ["React", "CSS", "JavaScript"]
    },
    {
      id: 3,
      title: "E-commerce Website",
      imgBack: pothysImg,
      github: "https://desikas2007.github.io/pothys-mart/",
      puzzle: ["Products Page", "Shopping Cart", "Payment Integration"]
    }
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-row">
        {projects.map((p) => (
          <PuzzleCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
