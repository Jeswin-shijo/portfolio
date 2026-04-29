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
        Enthusiastic and detail-oriented Full Stack and Mobile Developer with experience in building end-to-end applications using React Native, React.js, TypeScript, and Node.js. Skilled in creating responsive UIs, designing robust backend architectures, integrating complex REST APIs, and managing databases to deliver performance-optimized, full-stack solutions.
      </p>
    </motion.section>
  );
}
