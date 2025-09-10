import React from "react";
import "./footer-screen.css";
import logo from "../../../assets/logo/popup-logo-light.svg";

const FooterScreen = () => {
  const footerData = [
    {
      title: "Quick Link",
      links: [
        "Home",
        "About Us",
        "Projects",
        "Properties",
        "Location",
        "Agent",
        "Blogs",
        "Contact Us",
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
    <footer className="bg-dark text-light pt-5 p-5 pb-3">
      <div className="container-fluid">
        <div className="row g-4 justify-content-center">
          {/* Logo and About */}
          <div className="col-md-4 col-sm-4 col-lg-4">
            <img
              src={logo}
              className="ps-5 mb-5"
              alt="Pop Up Tours"
              style={{ height: 120, marginBottom: 20 }}
            />
            <p className="ps-5 secondary-text">
              Casa View is your trusted partner in modern living – delivering
              premium homes, smart communities, and exceptional service for a
              better lifestyle.
            </p>
          </div>

          {/* <div className="d-flex"> */}
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
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
          {/* </div> */}
        </div>

        <div className="border mt-5 mb-5" />

        {/* Bottom Section */}
        <div className="row justify-content-center small">
          <div className="col-md-2 col-sm-2 col-lg-2 col-6">
            <strong style={{ fontFamily: "Ivy Mode" }}>MOBILE</strong>
            <br />
            +971 18 919891 | +971 18 946281
          </div>
          <div className="col-md-2 col-sm-2 col-lg-2 col-6">
            <strong style={{ fontFamily: "Ivy Mode" }}>EMAIL</strong>
            <br />
            info@popup.com
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
          <a href="terms" className=" text-decoration-none">
            Terms and Conditions
          </a>{" "}
          &nbsp;|&nbsp;
          <a href="policy" className=" text-decoration-none">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterScreen;
