import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "jeswindonoo7@gmail.com",
      link: "mailto:jeswindonoo7@gmail.com",
    },
    {
      label: "Phone",
      value: "+91 8925171697",
      link: "tel:+918925171697",
    },
    {
      label: "GitHub",
      value: "github.com/Jeswin-shijo",
      link: "https://github.com/Jeswin-shijo",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/jeswin-shijo",
      link: "https://www.linkedin.com/in/jeswin-shijo-544a543a1/",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="section-subtitle">CONTACT</span>
        <h3 className="section-title-large">
          Open to building thoughtful products and solving meaningful problems.
        </h3>
      </motion.div>

      <div className="contact-grid">
        {contacts.map((contact, i) => (
          <motion.a
            href={contact.link}
            target={contact.link.startsWith("mailto") || contact.link.startsWith("tel") ? "_self" : "_blank"}
            rel="noreferrer"
            key={i}
            className="contact-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
          >
            <span className="contact-label">{contact.label}</span>
            <span className="contact-value">{contact.value}</span>
          </motion.a>
        ))}
      </div>

      <div className="footer-credits">
        Designed and built with React by Jeswin Shijo.
      </div>
    </section>
  );
}