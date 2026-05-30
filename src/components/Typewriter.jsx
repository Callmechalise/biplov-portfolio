// src/components/Typewriter.jsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Typewriter.css'

const Typewriter = ({ words, delay = 2000 }) => {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[index]
    let timeout
    
    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1))
      }, 50)
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1))
      }, 100)
    }

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), delay)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, index, words, delay])

  return (
    <div className="typewriter">
      <span className="typewriter-text">{text}</span>
      <span className="cursor">|</span>
    </div>
  )
}

export default Typewriter