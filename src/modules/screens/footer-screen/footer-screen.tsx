import React from "react";
import "./footer-screen.css";
import logo from "../../../assets/logo/popup-logo-light.svg";
import { navigateTo } from "../../../shared/navigation/site-navigation";
import { buildPackageHref } from "../../../data/tour-packages";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const buildContactPrefillHref = (
  destination: string,
  vacationType?: "Family" | "Group" | "Couple"
) => {
  const params = new URLSearchParams();
  params.set("destination", destination);

  if (vacationType) {
    params.set("vacationType", vacationType);
  }

  return `/contact?${params.toString()}`;
};

const renderFooterLink = (link: FooterLink, className = "footer-link-btn") => {
  if (link.external) {
    return (
      <a
        href={link.href}
        className={className}
        target="_blank"
        rel="noreferrer"
      >
        {link.label}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={() => navigateTo(link.href)}
    >
      {link.label}
    </button>
  );
};

const FooterScreen = () => {
  const address =
    "61, 14d Street, Nadd Al Hamar, Dubai, United Arab Emirates";
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  const footerData = [
    {
      title: "Quick Link",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "International", href: "/packages/thailand" },
        { label: "Domestic", href: "/#domestic" },
        { label: "Honeymoon", href: "/#honeymoon" },
        { label: "Gallery", href: "/gallery" },
        { label: "Blogs", href: "/blog" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Packages",
      links: [
        { label: "Domestic Tours", href: "/#domestic" },
        { label: "International Tours", href: buildPackageHref("thailand") },
        { label: "Honeymoon Packages", href: "/#honeymoon" },
        {
          label: "Family Holidays",
          href: buildContactPrefillHref("Munnar", "Family"),
        },
        {
          label: "Group Tours",
          href: buildContactPrefillHref("Sri Lanka", "Group"),
        },
        { label: "Beach Holidays", href: buildPackageHref("maldives") },
      ],
    },
    {
      title: "Cities",
      links: [
        { label: "Thailand", href: buildPackageHref("thailand") },
        { label: "Bali", href: buildPackageHref("bali") },
        { label: "Sri Lanka", href: buildPackageHref("sri-lanka") },
        { label: "Munnar", href: buildPackageHref("munnar") },
        { label: "Ooty", href: buildContactPrefillHref("Ooty") },
        { label: "Maldives", href: buildPackageHref("maldives") },
      ],
    },
    {
      title: "Destination",
      links: [
        {
          label: "Alleppey Backwaters",
          href: buildContactPrefillHref("Alleppey Backwaters"),
        },
        {
          label: "Fort Aguada",
          href: buildContactPrefillHref("Fort Aguada"),
        },
        {
          label: "Botanical Garden",
          href: buildContactPrefillHref("Botanical Garden"),
        },
        { label: "Amber Fort", href: buildContactPrefillHref("Amber Fort") },
        {
          label: "Radhanagar Beach",
          href: buildContactPrefillHref("Radhanagar Beach"),
        },
        { label: "Srinagar, Pahalgam", href: buildPackageHref("kashmir") },
      ],
    },
  ] satisfies Array<{ title: string; links: FooterLink[] }>;

  const socialLinks = [
    {
      label: "Facebook",
      href: process.env.REACT_APP_SOCIAL_FACEBOOK_URL || "",
      iconClassName: "fab fa-facebook-f",
      external: true,
    },
    {
      label: "Instagram",
      href:
        process.env.REACT_APP_SOCIAL_INSTAGRAM_URL ||
        "https://www.instagram.com/popuptours.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      iconClassName: "fab fa-instagram",
      external: true,
    },
    {
      label: "X / Twitter",
      href: process.env.REACT_APP_SOCIAL_X_URL || "",
      iconClassName: "fab fa-twitter",
      external: true,
    },
    {
      label: "YouTube",
      href:
        process.env.REACT_APP_SOCIAL_YOUTUBE_URL ||
        "https://www.youtube.com/@PopUpTours",
      iconClassName: "fab fa-youtube",
      external: true,
    },
  ];

  return (
    <footer className="footer-screen bg-dark text-light pt-5 pb-3">
      <div className="site-container">
        <div className="container-fluid px-0">
          <div className="row g-4 justify-content-center">
            <div className="footer-screen__brand col-md-4 col-sm-6 col-lg-4">
              <button
                type="button"
                className="footer-screen__brand-home"
                onClick={() => navigateTo("/")}
                aria-label="Go to Pop Up Tours home"
              >
                <img
                  src={logo}
                  className="footer-screen__brand-logo mb-5"
                  alt="Pop Up Tours"
                />
              </button>
              <p className="footer-screen__brand-copy secondary-text">
                Popup Tours is your trusted travel companion for curated escapes,
                family holidays, honeymoon journeys, and tailor-made adventures
                across India and beyond.
              </p>
            </div>

            {footerData.map((section, index) => (
              <div
                key={index}
                className={`footer-screen__section col-md-2 col-sm-2 col-lg-2 col-6 p-0 ${
                  index === 3 ? "pe-2" : ""
                }`}
              >
                <h6
                  className="text-uppercase fw-semibold mb-3"
                  style={{ fontFamily: "Ivy Mode" }}
                >
                  {section.title}
                </h6>
                <div className="border mb-3"></div>
                <ul className="list-unstyled small footer-links">
                  {section.links.map((link, i) => (
                    <li key={i}>{renderFooterLink(link)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border mt-5 mb-5" />

          {/* Bottom Section */}
          <div className="footer-screen__meta row justify-content-center small gy-4">
            <div className="footer-screen__meta-item col-md-2 col-sm-2 col-lg-2 col-6">
              <strong style={{ fontFamily: "Ivy Mode" }}>MOBILE</strong>
              <div className="footer-screen__meta-links">
                <a href="tel:+97118919891" className="footer-screen__meta-link">
                  +971 18 919891
                </a>
                <a href="tel:+97118946281" className="footer-screen__meta-link">
                  +971 18 946281
                </a>
              </div>
            </div>
            <div className="footer-screen__meta-item col-md-2 col-sm-2 col-lg-2 col-6">
              <strong style={{ fontFamily: "Ivy Mode" }}>EMAIL</strong>
              <div className="footer-screen__meta-links">
                <a
                  href="mailto:info@popuptours.com"
                  className="footer-screen__meta-link"
                >
                  info@popuptours.com
                </a>
              </div>
            </div>
            <div className="footer-screen__meta-item col-md-2 col-sm-2 col-lg-2 col-6">
              <strong style={{ fontFamily: "Ivy Mode" }}>ADDRESS</strong>
              <div className="footer-screen__meta-links">
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-screen__meta-link"
                >
                  61, 14d Street
                  <br />
                  Nadd Al Hamar, Dubai
                  <br />
                  United Arab Emirates
                </a>
              </div>
            </div>
            <div className="footer-screen__meta-item col-md-2 col-sm-2 col-6 col-lg-2 d-flex flex-column align-items-start align-items-md-center">
              <strong style={{ fontFamily: "Ivy Mode" }}>SOCIAL NETWORK</strong>
              <div className="footer-screen__social d-flex gap-2 mt-2">
                {socialLinks.map((link) =>
                  link.href ? (
                    <a
                      key={link.label}
                      href={link.href}
                      className="footer-screen__social-link"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.label}
                      title={link.label}
                    >
                      <i className={link.iconClassName}></i>
                    </a>
                  ) : (
                    <span
                      key={link.label}
                      className="footer-screen__social-link footer-screen__social-link--disabled"
                      aria-label={link.label}
                      title={link.label}
                    >
                      <i className={link.iconClassName}></i>
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <hr className="text-secondary mt-5 mb-3" />
          <div className="footer-screen__legal text-center small ">
            &copy; Copyright © popuptours &nbsp; | &nbsp;
            {renderFooterLink(
              { label: "Terms and Conditions", href: "/terms" },
              "footer-link-btn footer-link-btn--inline"
            )}{" "}
            &nbsp;|&nbsp;
            {renderFooterLink(
              { label: "Privacy Policy", href: "/policy" },
              "footer-link-btn footer-link-btn--inline"
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterScreen;
