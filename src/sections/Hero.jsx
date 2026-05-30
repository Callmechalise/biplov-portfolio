// src/sections/Hero.jsx
import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from '../components/Typewriter'
import './Hero.css'
import heroImage from '../assets/hero-image.png' // Replace with actual image

const Hero = () => {
  const roles = [
    "Software Engineering Student",
    "Aspiring Software Engineer",
    "Problem Solver",
    "Future IT Professional"
  ]

  const handleDownloadCV = () => {
    // Replace with actual CV file URL
    const cvUrl = '../assets/CV.pdf'
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'Biplov_Sedhai_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            👋 Welcome to my digital space
          </motion.div>
          
          <h1 className="hero-name">Biplov Sedhai</h1>
          
          <div className="hero-role">
            <Typewriter words={roles} />
          </div>
          
          <p className="hero-description">
            Passionate about crafting elegant software solutions and solving complex problems. 
            Currently pursuing Software Engineering with a keen interest in development and quality assurance.
          </p>
          
          <div className="hero-buttons">
            <motion.a 
              href="#projects" 
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
            <motion.button 
              className="btn-secondary"
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download CV
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="image-wrapper">
            <img src={heroImage} alt="Biplov Sedhai - AI styled portrait" />
            <div className="floating-bg"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero