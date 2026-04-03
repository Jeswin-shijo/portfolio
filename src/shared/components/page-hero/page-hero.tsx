import type { ReactNode } from "react";
import "./page-hero.css";
import logo from "../../../assets/logo/popup-logo-light.svg";
import {
  navigateTo,
  siteNavItems,
  type NavKey,
} from "../../navigation/site-navigation";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  activeNav?: NavKey;
  height?: string;
  meta?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
};

const PageHero = ({
  title,
  subtitle,
  backgroundImage,
  activeNav,
  height = "56vh",
  meta,
  actions,
  children,
}: PageHeroProps) => {
  return (
    <section
      className="page-hero"
      style={{ minHeight: height, backgroundImage }}
    >
      <div className="page-hero__inner">
        <div className="page-hero__nav">
          <button
            type="button"
            className="page-hero__logo"
            onClick={() => navigateTo("/")}
            aria-label="Go to Pop Up Tours home"
          >
            <img src={logo} alt="Pop Up Tours" style={{ height: 74 }} />
          </button>

          <div className="page-hero__links">
            {siteNavItems.map((item) => (
              <button
                key={item.key}
                type="button"
                className={`page-hero__nav-link ${
                  item.key === activeNav ? "is-active" : ""
                }`}
                onClick={() => navigateTo(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="page-hero__cta"
            onClick={() => navigateTo("/contact")}
          >
            Get in Touch
          </button>
        </div>

        <div className="page-hero__content">
          <h1 className="page-hero__title">{title}</h1>
          {subtitle ? <p className="page-hero__subtitle">{subtitle}</p> : null}
          {meta ? <div className="page-hero__meta">{meta}</div> : null}
          {actions ? <div className="page-hero__actions">{actions}</div> : null}
          {children ? <div className="page-hero__body">{children}</div> : null}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
