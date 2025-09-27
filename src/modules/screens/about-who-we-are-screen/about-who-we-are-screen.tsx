import React from "react";
import "./about-who-we-are-screen.css";
import flight from "../../../assets/essentials/flight.png";

const AboutWhoWeAreScreen = () => {
  return (
    <section className="p-5 py-5 d-flex gap-5">
      <div className="col-md-3 col-lg-3  mb-4 col-xxl-3">
        <div className="d-flex justify-content-center">
          <h2 className="screen-title mb-5">Who We Are</h2>
        </div>
        <img className="mt-5" src={flight}></img>
      </div>
      <div>
        <p className="text-muted secondary-text mb-5 pb-5">
          Popup Tours and Travels is more than just a travel agency — we are
          your trusted partner in creating journeys that inspire, excite, and
          leave lasting memories. With years of expertise in the travel and
          tourism industry, we specialize in offering domestic and international
          tour packages, honeymoon getaways, family holidays, adventure trips,
          and customized itineraries tailored to your needs.
        </p>
        <div className="d-flex gap-5">
          <div>
            <h3 className="sub-title-text mb-4">Our Mission</h3>
            <p className="secondary-text">
              To make travel affordable, stress-free, and unforgettable by
              offering well-curated packages, personalized services, and 24/7
              assistance.
            </p>
          </div>

          <div>
            <h3 className="sub-title-text mb-4">Our Vision</h3>
            <p className="secondary-text">
              To become the most trusted travel partner, delivering happiness
              and seamless experiences to every traveler across the globe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAreScreen;
