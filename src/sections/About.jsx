// src/sections/About.jsx
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'
import aboutImage from '../assets/about-image.png' // Replace with actual image

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    { label: "Programming Languages", value: "6+" },
    { label: "Academic Projects", value: "10+" },
    { label: "Learning Journey", value: "3+ Years" }
  ]

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2>About Me</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-grid">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="image-frame">
              <img src={aboutImage} alt="Biplov Sedhai - AI styled" />
            </div>
          </motion.div>

          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="about-intro">
              I'm a <span className="highlight">Software Engineering student</span> with a deep passion for 
              building robust software and solving challenging problems.
            </p>
            
            <p className="about-text">
              Currently pursuing my Bachelor's degree at Everest Engineering College, 
              I'm constantly exploring new technologies and refining my programming skills. 
              My interests span software development, quality assurance, and algorithmic problem-solving.
            </p>
            
            <p className="about-text">
              I pride myself on being a <strong>quick learner</strong> with strong 
              <strong> teamwork and communication skills</strong>. Whether it's collaborating on 
              group projects or diving deep into complex algorithms, I bring enthusiasm 
              and dedication to everything I do.
            </p>

            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={stat.label}
                  className="stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About