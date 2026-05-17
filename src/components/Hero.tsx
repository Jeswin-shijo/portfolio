import { motion } from "framer-motion";
import profileImage from "../assets/portfolio.png";

export default function Hero() {
  return (
    <section id="about" className="hero-section">
      <div className="hero-intro">
        <motion.div
          className="hero-profile-frame"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -6, scale: 1.04 }}
          transition={{ type: "spring", stiffness: 220, damping: 16 }}
        >
          <img
            src={profileImage}
            alt="Jeswin Shijo J"
            className="hero-profile-image"
          />
        </motion.div>

        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.1 }}
          >
            <h2 className="hero-title">
              Jeswin Shijo J
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
          >
            <h3 className="hero-tagline">
              Crafting Modern Full Stack | Mobile Experiences
            </h3>
            <p className="hero-subtitle">
              Full Stack & Mobile Developer specializing in React, React Native, Node.js, and TypeScript.
              I build scalable, performant, and user-friendly end-to-end applications.
            </p>
          </motion.div>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
          >
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
