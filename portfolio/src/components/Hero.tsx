import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-section">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <span style={{ color: '#60a5fa', fontFamily: 'monospace', fontSize: '1.125rem', display: 'block', marginBottom: '1rem' }}>
          &lt;Hello World /&gt;
        </span>
        <h2 className="hero-title">
          Crafting Modern Web & Mobile Experiences
        </h2>
      </motion.div>
      <motion.p 
        className="hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.1 }}
      >
        Frontend & Mobile Developer specializing in React, React Native, and TypeScript.
        I build scalable, performant, and user-friendly applications.
      </motion.p>
      <motion.div 
        className="hero-actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
      >
        <a href="#projects" className="btn-primary">
          View Projects
        </a>
        <a href="#contact" className="btn-secondary">
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
