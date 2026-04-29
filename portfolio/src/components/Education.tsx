import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="education-section">
      <motion.div 
        className="education-large-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <span className="education-subtitle">EDUCATION</span>
        <h3 className="education-degree">B.E. Computer Science Engineering</h3>
        <p className="education-university">DMI Engineering College, Kanyakumari District.</p>
      </motion.div>
    </section>
  );
}
