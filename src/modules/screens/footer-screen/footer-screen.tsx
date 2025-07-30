import React from "react";
import "./footer-screen.css";
import logo from "../../../assets/logo/popup-logo-light.svg";

const FooterScreen = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          {/* Logo and About */}
          <div className="col-md-3">
            <img
              src={logo}
              alt="Pop Up Tours"
              style={{ height: 100, width: 270, marginBottom: 20 }}
            />
            <p className=" small">
              Casa View is your trusted partner in modern living – delivering
              premium homes, smart communities, and exceptional service for a
              better lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h6 className="text-uppercase fw-semibold mb-3">Quick Link</h6>
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
          <div className="col-md-2">
            <h6 className="text-uppercase fw-semibold mb-3">Packages</h6>
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
          <div className="col-md-2">
            <h6 className="text-uppercase fw-semibold mb-3">Cities</h6>
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
          <div className="col-md-3">
            <h6 className="text-uppercase fw-semibold mb-3">Destination</h6>
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
        <div className="row  small">
          <div className="col-md-3">
            <strong>MOBILE</strong>
            <br />
            +971 18 919891 | +971 18 946281
          </div>
          <div className="col-md-3">
            <strong>EMAIL</strong>
            <br />
            info@popup.com
          </div>
          <div className="col-md-3">
            <strong>ADDRESS</strong>
            <br />
            61, 14d Street
            <br />
            Nadd Al Hamar, Dubai
            <br />
            United Arab Emirates
          </div>
          <div className="col-md-3 d-flex flex-column align-items-start align-items-md-end">
            <strong>SOCIAL NETWORK</strong>
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
