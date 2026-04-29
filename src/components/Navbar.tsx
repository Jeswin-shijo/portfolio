import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const MOBILE_BREAKPOINT = 768;
const NAV_SCROLL_OFFSET = 160;
const MOBILE_MENU_CLOSE_DELAY = 280;

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(NAV_LINKS[0].href);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current !== null) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => ({
      href: link.href,
      element: document.getElementById(link.href.slice(1)),
    }));

    const syncActiveTab = () => {
      const navBottom = navRef.current?.getBoundingClientRect().bottom ?? NAV_SCROLL_OFFSET;
      const viewportTop = navBottom + 16;
      const viewportBottom = window.innerHeight;
      let nextActiveTab = NAV_LINKS[0].href;
      let maxVisibleHeight = 0;

      for (const { href, element } of sections) {
        if (!(element instanceof HTMLElement)) {
          continue;
        }

        const rect = element.getBoundingClientRect();
        const visibleTop = Math.max(rect.top, viewportTop);
        const visibleBottom = Math.min(rect.bottom, viewportBottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          nextActiveTab = href;
        }
      }

      setActiveTab((currentTab) => (
        maxVisibleHeight === 0 || currentTab === nextActiveTab ? currentTab : nextActiveTab
      ));
    };

    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setIsMenuOpen(false);
      }

      syncActiveTab();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    syncActiveTab();
    window.addEventListener("scroll", syncActiveTab, { passive: true });
    window.addEventListener("hashchange", syncActiveTab);
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", syncActiveTab);
      window.removeEventListener("hashchange", syncActiveTab);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [isMenuOpen]);

  const scrollToSection = (href: string) => {
    const target = document.getElementById(href.slice(1));

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const navBottom = navRef.current?.getBoundingClientRect().bottom ?? NAV_SCROLL_OFFSET;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navBottom - 16;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });
    window.history.pushState(null, "", href);
  };

  const handleLinkClick = (event: ReactMouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setActiveTab(href);

    if (scrollTimeoutRef.current !== null) {
      window.clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = null;
    }

    const shouldDelayScroll = isMenuOpen && window.innerWidth <= MOBILE_BREAKPOINT;

    setIsMenuOpen(false);

    if (shouldDelayScroll) {
      scrollTimeoutRef.current = window.setTimeout(() => {
        scrollToSection(href);
        scrollTimeoutRef.current = null;
      }, MOBILE_MENU_CLOSE_DELAY);
      return;
    }

    requestAnimationFrame(() => {
      scrollToSection(href);
    });
  };

  return (
    <motion.nav
      ref={navRef}
      className="navbar"
      aria-label="Primary"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <button
        type="button"
        className="navbar-toggle"
        aria-expanded={isMenuOpen}
        aria-controls="site-navigation"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span className="navbar-toggle-label">
          {isMenuOpen ? "Close" : "Menu"}
        </span>
        {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>
      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`} id="site-navigation">
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={activeTab === link.href ? "active-link" : ""}
            aria-current={activeTab === link.href ? "location" : undefined}
            onClick={(event) => handleLinkClick(event, link.href)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
