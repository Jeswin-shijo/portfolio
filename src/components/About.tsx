import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section 
      id="about-me"
      className="about-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
    >
      <div className="section-header">
        <span className="section-subtitle">ABOUT ME</span>
        <h3 className="section-title-large">Passionate about building software that people actually enjoy using.</h3>
      </div>
      <p className="about-text">
        I'm a Full Stack and Mobile Developer based in India, currently building production-grade web and mobile apps at SODISYS. 
        I work across the full stack — from crafting responsive React interfaces to designing Node.js backends and shipping cross-platform mobile apps with React Native.
        I care about the details: clean code, fast load times, and experiences that just feel right.
        Outside of work, I'm always tinkering with side projects and exploring what's new in the JS ecosystem.
      </p>
    </motion.section>
  );
}
