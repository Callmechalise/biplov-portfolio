// src/components/ScrollProgress.jsx
import React from 'react'
import { motion, useScroll } from 'framer-motion'
import './ScrollProgress.css'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

export default ScrollProgress