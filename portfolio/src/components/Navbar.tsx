import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("");

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      {/* <h1 className="navbar-brand">Jeswin Shijo J</h1> */}
      <span style={{ color: 'var(--text-main)', fontFamily: 'monospace', fontSize: '1.125rem', display: 'block' }}>
          &lt;Hello World /&gt;
        </span>
      <div className="navbar-links">
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            className={activeTab === link.href ? "active-link" : ""}
            onClick={() => setActiveTab(link.href)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
