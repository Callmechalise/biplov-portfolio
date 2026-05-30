// src/App.jsx
import React, { useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Contact from './sections/Contact'
import './App.css'

function App() {
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a')
      if (target && target.hash && target.hash.startsWith('#') && target.origin + target.pathname === window.location.origin + window.location.pathname) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          history.pushState(null, null, target.hash)
        }
      }
    }
    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <div className="app">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>© 2025 Biplov Sedhai. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://github.com/biplobsedai-Lgtm" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/biplob-sedai-07022b3a6/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <p className="built-with">Built with React + Vite</p>
        </div>
      </footer>
    </div>
  )
}

export default App