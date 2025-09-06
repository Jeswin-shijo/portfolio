import React from "react";
import "./footer-screen.css";
import logo from "../../../assets/logo/popup-logo-light.svg";

const FooterScreen = () => {
  return (
    <footer className="bg-dark text-light pt-5 p-5 pb-3">
      <div className="container-fluid">
        <div className="row g-4 justify-content-center">
          {/* Logo and About */}
          <div className="col-md-2 col-sm-2 col-lg-2">
            <img
              src={logo}
              className="col-md-12 col-sm-12 col-12 col-lg-12"
              alt="Pop Up Tours"
              style={{ height: 100, marginBottom: 20 }}
            />
            <p className=" small">
              Casa View is your trusted partner in modern living – delivering
              premium homes, smart communities, and exceptional service for a
              better lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 col-sm-2 col-lg-2 col-6">
            <h6 className="text-uppercase fw-semibold mb-3" style={{ fontFamily: "Ivy Mode" }}>Quick Link</h6>
            <ul className="list-unstyled small ">
              <li>Home</li>
              <li>About Us</li>
              <li>Projects</li>
              <li>Properties</li>
              <li>Location</li>
              <li>Agent</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Packages */}
          <div className="col-md-2 col-sm-2 col-lg-2 col-6">
            <h6 className="text-uppercase fw-semibold mb-3" style={{ fontFamily: "Ivy Mode" }}>Packages</h6>
            <ul className="list-unstyled small ">
              <li>Domestic Tours</li>
              <li>International Tours</li>
              <li>Honeymoon Packages</li>
              <li>Family Holidays</li>
              <li>Group Tours</li>
              <li>Beach Holidays</li>
            </ul>
          </div>

          {/* Cities */}
          <div className="col-md-2 col-sm-2 col-lg-2 col-6">
            <h6 className="text-uppercase fw-semibold mb-3" style={{ fontFamily: "Ivy Mode" }}>Cities</h6>
            <ul className="list-unstyled small ">
              <li>Thailand</li>
              <li>Bali</li>
              <li>Srilanka</li>
              <li>Munnar</li>
              <li>Ooty</li>
              <li>Mali</li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="col-md-2 col-sm-2 col-lg-2 col-6">
            <h6 className="text-uppercase fw-semibold mb-3" style={{ fontFamily: "Ivy Mode" }}>Destination</h6>
            <ul className="list-unstyled small">
              <li>Alleppey Backwaters</li>
              <li>Fort Aguada</li>
              <li>Botanical Garden</li>
              <li>Amber Fort</li>
              <li>Radhanagar Beach</li>
              <li>Srinagar, Pahalgam</li>
            </ul>
          </div>
        </div>

        <hr className="text-secondary mt-5" />

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

        <hr className="text-secondary mt-4" />
        <div className="text-center small ">
          &copy; Copyright © popuptours &nbsp; | &nbsp;
          <a href="#" className=" text-decoration-none">
            Terms and Conditions
          </a>{" "}
          &nbsp;|&nbsp;
          <a href="#" className=" text-decoration-none">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterScreen;
