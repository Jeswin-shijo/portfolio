import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Smart Bill System",
      desc: "Invoice management system with a clean UI for creating and tracking invoices.",
      tech: ["React Js", "TypeScript", 'My SQL', 'Express Js'],
      link: "https://smartbill-system-2.onrender.com/#/invoices/new",
    },
    {
      title: "Pop Up Tours Website",
      desc: "Modern travel website with responsive UI and smooth UX.",
      tech: ["React Js", "Tailwind Css", "TypeScript"],
      link: "https://popup-tours.vercel.app/",
    },
    {
      title: "Sonik Music Player (Web & Mobile)",
      desc: "Full-stack music streaming platform with web and mobile apps, featuring an admin dashboard for content management, user analytics, and playlist administration.",
      tech: ["React Js", "React Native", "TypeScript", "Nest jsx", "My SQL"],
      // link: "https://popup-tours.vercel.app/",
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="section-subtitle">PROJECTS</span>
        <h3 className="section-title-large">
          Featured work and recent builds.
        </h3>
      </motion.div>
      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((p, i) => {
          const CardContent = (
            <>
              <h4 className="project-title">{p.title}</h4>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map((t, j) => (
                  <span key={j}>{t}</span>
                ))}
              </div>
            </>
          );

          return p.link ? (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateX: 2, rotateY: 2, zIndex: 10 }}
              className="project-card"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              {CardContent}
            </motion.a>
          ) : (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateX: 2, rotateY: 2, zIndex: 10 }}
              className="project-card"
            >
              {CardContent}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
