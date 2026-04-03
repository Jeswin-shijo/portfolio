import { useEffect, useState } from "react";
import "./header.css";
import logo from "../../../assets/logo/popup-logo-light.svg";
import {
  navigateTo,
  siteNavItems,
} from "../../../shared/navigation/site-navigation";
const SHOW_AFTER_Y = 140;

const PopHeader = () => {
  const [navScrolled, setNavScrolled] = useState(false);

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
      <button
        type="button"
        className="pop-header-logo-btn"
        onClick={() => navigateTo("/")}
      >
        <img
          className="my-2"
          src={logo}
          alt="Pop Up Tours"
          style={{ height: 70, width: 270 }}
        />
      </button>
      <div className="d-flex gap-4 text-white align-items-center">
        {siteNavItems.map((item) => (
          <button
            key={item.key}
            type="button"
            className="header-nav-link"
            onClick={() => navigateTo(item.href)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <button
        className="btn btn-warning fw-semibold px-4"
        onClick={() => navigateTo("/contact")}
      >
        Get in Touch
      </button>
    </nav>
  );
};

export default PopHeader;
