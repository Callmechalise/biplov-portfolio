// src/sections/Contact.jsx
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const contacts = [
    { type: "Email", value: "biplobsedai@gmail.com", icon: "📧", link: "mailto:biplobsedai@gmail.com" },
    { type: "Phone", value: "+977 9868119461", icon: "📱", link: "tel:+9779868119461" },
    { type: "GitHub", value: "/biplov-sedhai", icon: "💻", link: "https://github.com/biplobsedai-Lgtm" },
    { type: "LinkedIn", value: "Biplov Sedhai", icon: "🔗", link: "https://www.linkedin.com/in/biplob-sedai-07022b3a6/" }
  ]

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2>Get In Touch</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div 
          className="contact-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.type}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="contact-icon">{contact.icon}</div>
              <h3 className="contact-type">{contact.type}</h3>
              <p className="contact-value">{contact.value}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact