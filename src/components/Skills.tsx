import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React Js", "Redux-toolkit", "React Native", "HTML", "CSS", "Java-script", "TypeScript", "Bootstrap", "Tailwind-css"]
    },
    {
      title: "Backend",
      skills: [
        "Node.js", "Express.js", "MongoDB", 
        "REST APIs", "SQL", 
        "MySQL", "Microservices", 
      ]
    },
    {
      title: "Tools and Cloud",
      skills: ["Git", "Docker", "VS code", "Anti-gravity", "Android studio", "Xcode", "Postman"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="section-subtitle">SKILLS</span>
        <h3 className="section-title-large">Technologies and tools I work with.</h3>
      </motion.div>
      
      <div className="skills-grid">
        {skillCategories.map((category, i) => (
          <motion.div 
            key={i}
            className="skills-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
          >
            <div className="skills-category-title">
              {category.title}
            </div>
            <div className="skills-tags">
              {category.skills.map((skill, j) => (
                <motion.span 
                  key={j} 
                  className="skill-tag"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
