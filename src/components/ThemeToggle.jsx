import React from 'react'
import { motion } from 'framer-motion'
import useTheme from '../hooks/useTheme'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="toggle-icon"
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle