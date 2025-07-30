import React from "react";
import "./home-screen.css";
import bgImage from "../../../assets/background/view-beautiful-rainbow-appearing-end-road.jpg"; // Replace with actual path
import FilterSection from "../components/filter-section/filter-section";
import logo from "../../../assets/logo/popup-logo-light.svg";

const HomeScreen = () => {
  return (
    <div className="container home-screen bg-danger" style={{ backgroundImage: `url(${bgImage})` }}>
      <nav className="navbar px-5 py-3 d-flex align-items-center justify-content-between">
        <img
          src={logo}
          alt="Pop Up Tours"
          style={{ height: 100, width: 270, marginBottom: 20 }}
        />{" "}
        <div className="nav-links d-flex gap-4 text-white">
          <a href="#">About Us</a>
          <a href="#">International</a>
          <a href="#">Domestic</a>
          <a href="#">Honeymoon</a>
          <a href="#">Gallery</a>
          <a href="#">Contact Us</a>
        </div>
        <button className="btn btn-warning fw-semibold px-4">
          Get in Touch
        </button>
      </nav>

      <div className="hero-content text-white text-start d-flex flex-column align-items-start justify-content-start ">
        <h1
          className="fw-semibold"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 60 }}
        >
          Start your unforgettable
          <br />
          journey with us.
        </h1>
        <p className="lead ">The best travel for your journey begins now</p>

        <div className="d-flex justify-content-start mt-5">
          <FilterSection />
        </div>
      </div>

      <div className="dot-navigation position-absolute end-0 top-50 translate-middle-y pe-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`dot mb-2 rounded-circle ${i === 1 ? "active" : ""}`}
          ></div>
        ))}
        <div className="arrow-down text-warning mt-2">
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
