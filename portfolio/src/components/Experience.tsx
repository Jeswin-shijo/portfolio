import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      period: "DEC 2023 - AUGUST 2025",
      role: "Web & Mobile App Developer",
      company: "SODISYS (S J S Business Solutions)",
      description:
        "Developed cross-platform mobile apps using React Native, TypeScript, and Android SDK. Built reusable components, integrated REST APIs, implemented Socket.io for real-time features, and optimized app performance and rendering techniques.",
    },
    {
      period: "AUGUST 2025 - PRESENT",
      role: "Full Stack Developer",
      company: "SODISYS (S J S Business Solutions)",
      description:
        "Worked across frontend and backend systems to ship web applications, APIs, and maintainable production features.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <section id="experience" className="experience-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="section-subtitle">EXPERIENCE</span>
        <h3 className="section-title-large">
          Professional journey across full stack and mobile development.
        </h3>
      </motion.div>

      <motion.div
        className="experience-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="experience-card"
          >
            <span className="experience-period">{exp.period}</span>
            <h4 className="experience-role">
              {exp.role}
              <br />
              <span className="experience-company">{exp.company}</span>
            </h4>
            <p className="experience-desc">{exp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
