import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="education-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="section-subtitle">EDUCATION</span>
        <h3 className="section-title-large">Academic foundation and degrees.</h3>
      </motion.div>

      <div className="education-list">
        <motion.div 
          className="education-large-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <h3 className="education-degree">B.E. Computer Science Engineering</h3>
          <p className="education-university">DMI Engineering College, Kanyakumari District.</p>
        </motion.div>
      </div>
    </section>
  );
}
