import React from "react";
import "./footer-screen.css";
import logo from "../../../assets/logo/popup-logo-light.svg";
import { navigateTo } from "../../../shared/navigation/site-navigation";

const FooterScreen = () => {
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
        { label: "Blogs", href: "/blog/maldives-packing-guide" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Packages",
      links: [
        "Domestic Tours",
        "International Tours",
        "Honeymoon Packages",
        "Family Holidays",
        "Group Tours",
        "Beach Holidays",
      ],
    },
    {
      title: "Cities",
      links: ["Thailand", "Bali", "Srilanka", "Munnar", "Ooty", "Mali"],
    },
    {
      title: "Destination",
      links: [
        "Alleppey Backwaters",
        "Fort Aguada",
        "Botanical Garden",
        "Amber Fort",
        "Radhanagar Beach",
        "Srinagar, Pahalgam",
      ],
    },
  ];

  return (
    <footer className="bg-dark text-light pt-5 px-3 px-md-5 pb-3">
      <div className="container-fluid">
        <div className="row g-4 justify-content-center">
          <div className="col-md-4 col-sm-6 col-lg-4">
            <img
              src={logo}
              className="footer-screen__brand-logo mb-5"
              alt="Pop Up Tours"
            />
            <p className="footer-screen__brand-copy secondary-text">
              Popup Tours is your trusted travel companion for curated escapes,
              family holidays, honeymoon journeys, and tailor-made adventures
              across India and beyond.
            </p>
          </div>

          {footerData.map((section, index) => (
            <div key={index} className={`col-md-2 col-sm-2 col-lg-2 col-6 p-0 ${index === 3 && "pe-2"}`}>
              <h6
                className="text-uppercase fw-semibold mb-3"
                style={{ fontFamily: "Ivy Mode" }}
              >
                {section.title}
              </h6>
              <div className="border mb-3"></div>
              <ul className="list-unstyled small footer-links">
                {section.links.map((link, i) => (
                  <li key={i}>
                    {typeof link === "string" ? (
                      link
                    ) : (
                      <button
                        type="button"
                        className="footer-link-btn"
                        onClick={() => navigateTo(link.href)}
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border mt-5 mb-5" />

        {/* Bottom Section */}
        <div className="row justify-content-center small gy-4">
          <div className="col-md-2 col-sm-2 col-lg-2 col-6">
            <strong style={{ fontFamily: "Ivy Mode" }}>MOBILE</strong>
            <br />
            +971 18 919891 | +971 18 946281
          </div>
          <div className="col-md-2 col-sm-2 col-lg-2 col-6">
            <strong style={{ fontFamily: "Ivy Mode" }}>EMAIL</strong>
            <br />
            info@popuptours.com
          </div>
          <div className="col-md-2 col-sm-2 col-lg-2 col-6">
            <strong style={{ fontFamily: "Ivy Mode" }}>ADDRESS</strong>
            <br />
            61, 14d Street
            <br />
            Nadd Al Hamar, Dubai
            <br />
            United Arab Emirates
          </div>
          <div className="col-md-2 col-sm-2 col-6 col-lg-2 d-flex flex-column align-items-start align-items-md-center">
            <strong style={{ fontFamily: "Ivy Mode" }}>SOCIAL NETWORK</strong>
            <div className="d-flex gap-2 mt-2">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>

        <hr className="text-secondary mt-5 mb-3" />
        <div className="text-center small ">
          &copy; Copyright © popuptours &nbsp; | &nbsp;
          <a href="/terms" className=" text-decoration-none">
            Terms and Conditions
          </a>{" "}
          &nbsp;|&nbsp;
          <a href="/policy" className=" text-decoration-none">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterScreen;
