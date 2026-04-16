import { useEffect, useState } from "react";
import "./header.css";
import logo from "../../../assets/logo/popup-logo-light.svg";
import {
  navigateTo,
  siteNavItems,
  type NavKey,
} from "../../../shared/navigation/site-navigation";
const SHOW_AFTER_Y = 140;

type PopHeaderProps = {
  activeNav?: NavKey;
};

const PopHeader = ({ activeNav }: PopHeaderProps) => {
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > SHOW_AFTER_Y);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`pop-header-nav ${
        navScrolled
          ? "pop-header-scrolled pop-header-visible"
          : "pop-header-hidden"
      }`}
      aria-hidden={!navScrolled}
    >
      <div className="pop-header-nav__inner site-container">
        <button
          type="button"
          className="pop-header-logo-btn"
          onClick={() => navigateTo("/")}
        >
          <img
            className="pop-header-logo-image"
            src={logo}
            alt="Pop Up Tours"
          />
        </button>
        <div className="pop-header-links">
          {siteNavItems.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`header-nav-link ${
                item.key === activeNav ? "is-active" : ""
              }`}
              aria-current={item.key === activeNav ? "page" : undefined}
              onClick={() => navigateTo(item.href)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          className="btn btn-warning fw-semibold px-4 pop-header-cta"
          onClick={() => navigateTo("/contact")}
        >
          Get in Touch
        </button>
      </div>
    </nav>
  );
};

export default PopHeader;
