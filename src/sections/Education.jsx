// src/sections/Education.jsx
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Education.css'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const education = [
    {
      institution: "Everest Engineering College",
      degree: "Bachelor in Software Engineering",
      period: "2022 - Present",
      status: "Studying",
      description: "Focusing on software development, algorithms, and system design."
    },
    {
      institution: "KMC College",
      degree: "Higher Secondary Education (+2)",
      period: "2020 - 2022",
      status: "Completed",
      description: "Science stream with Computer Science as major."
    }
  ]

  return (
    <section id="education" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2>Education</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="timeline">
          {education.map((edu, index) => (
            <motion.div 
              key={edu.institution}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>
              <div className="timeline-content">
                <div className="edu-header">
                  <h3>{edu.institution}</h3>
                  <span className={`edu-status ${edu.status.toLowerCase()}`}>
                    {edu.status}
                  </span>
                </div>
                <p className="edu-degree">{edu.degree}</p>
                <p className="edu-period">{edu.period}</p>
                <p className="edu-description">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education