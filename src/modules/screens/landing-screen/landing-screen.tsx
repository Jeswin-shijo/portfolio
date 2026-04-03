import React from "react";
import "./landing-screen.css";
import FooterScreen from "../footer-screen";
import bgScreen from "../../../assets/sample.jpg";
import { navigateTo } from "../../../shared/navigation/site-navigation";

const LandingScreen = () => {
  return (
    <div className="landing-screen">
      <section
        className="hero-section text-white text-center d-flex align-items-center justify-content-center position-relative"
        style={{
          height: "50vh",
          backgroundImage: `url(${bgScreen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="overlay position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        ></div>

        <div className="z-1 position-relative px-3">
          <h1
            className="title-text"
          >
            Ready to Start Your Journey?
          </h1>
          <p className="lead mt-3 secondary-text">
            Let’s plan your dream vacation — hassle-free and tailor-made just
            for you.
          </p>
          <button
            className="btn btn-warning fw-semibold mt-4 d-inline-flex align-items-center gap-2"
            onClick={() => navigateTo("/contact")}
          >
            Get in Touch <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </section>

      <FooterScreen />
    </div>
  );
};

export default LandingScreen;
