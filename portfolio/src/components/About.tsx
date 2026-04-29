import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section 
      id="about"
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
        Enthusiastic and detail-oriented Mobile App and Frontend Developer with experience in building cross-platform apps using React Native, React.js, and TypeScript. Skilled in creating responsive UIs, integrating REST APIs, and contributing to performance-optimized applications.
      </p>
    </motion.section>
  );
}
