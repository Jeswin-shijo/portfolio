import { useEffect, useState } from "react";
import "./header.css";
import logo from "../../../assets/logo/popup-logo-light.svg";
const SHOW_AFTER_Y = 140;

const navItems = [
  { label: "About Us", targetId: "about" },
  { label: "International", targetId: "international" },
  { label: "Domestic", targetId: "domestic" },
  { label: "Honeymoon", targetId: "honeymoon" },
  { label: "Gallery", targetId: "gallery" },
  { label: "Contact Us", targetId: "contact" },
] as const;

const PopHeader = () => {
  const [navScrolled, setNavScrolled] = useState(false);

  const scrollToSection = (targetId: string) => {
    const section = document.getElementById(targetId);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > SHOW_AFTER_Y);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`pop-header-nav d-flex align-items-center justify-content-between w-100 px-5 ${
        navScrolled
          ? "pop-header-scrolled pop-header-visible"
          : "pop-header-hidden"
      }`}
      aria-hidden={!navScrolled}
    >
      <img
        className="my-2"
        src={logo}
        alt="Pop Up Tours"
        style={{ height: 70, width: 270 }}
      />
      <div className="d-flex gap-4 text-white align-items-center">
        {navItems.map((item) => (
          <button
            key={item.targetId}
            type="button"
            className="header-nav-link"
            onClick={() => scrollToSection(item.targetId)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <button
        className="btn btn-warning fw-semibold px-4"
        onClick={() => scrollToSection("contact")}
      >
        Get in Touch
      </button>
    </nav>
  );
};

export default PopHeader;
