// src/sections/Projects.jsx
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "GCD Solver Visualizer",
      description: "Interactive visualization of Euclidean algorithm for finding greatest common divisor with step-by-step animation.",
      tech: ["C++", "SDL2", "Algorithm"],
      
    },
    {
      title: "Josephus Problem Simulator",
      description: "Simulation of Josephus elimination problem with visual queue representation and mathematical analysis.",
      tech: ["Java", "Data Structures"],
      
    },
    {
      title: "Student Management System",
      description: "Console-based application for managing student records, grades, and attendance with file persistence.",
      tech: ["C", "File I/O", "Data Structures"],
      
    },
    {
      title: "Number Theory Toolkit",
      description: "Collection of number theory algorithms including prime factorization, sieve of Eratosthenes, and modular arithmetic.",
      tech: ["C++", "Mathematics"],
      
    },
    {
      title: "Simple Calculator in C++",
      description: "Feature-rich calculator supporting basic arithmetic operations with expression parsing and error handling.",
      tech: ["C++", "STL"],
      
    },
    {
      title: "Portfolio Website",
      description: "Modern responsive portfolio built with React, featuring smooth animations and theme switching.",
      tech: ["React", "Framer Motion", "CSS"],
      
    },
    {
      title: "Basic Java CLI Application",
      description: "Command-line tool for managing inventory with CRUD operations and data validation.",
      tech: ["Java", "OOP", "Collections"],
      
    }
  ]

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2>Projects</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects