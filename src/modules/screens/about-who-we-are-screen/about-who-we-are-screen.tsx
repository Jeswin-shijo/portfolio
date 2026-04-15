import React from "react";
import "./about-who-we-are-screen.css";
import flight from "../../../assets/essentials/flight.png";
import VideoSection from "../components/video-section/video-section";

const AboutWhoWeAreScreen = () => {
  return (
    <section className="about-who-we-are p-5 py-5">
      <div className="about-who-we-are__intro d-flex gap-5">
        <div className="col-md-3 col-lg-3 mb-4 col-xxl-3">
          <div className="d-flex justify-content-center">
            <h2 className="screen-title mb-5">Who We Are</h2>
          </div>
          <img className="mt-5 about-who-we-are__flight" src={flight} alt="" />
        </div>

        <div>
          <p className="text-muted secondary-text mb-5 pb-5">
            Popup Tours and Travels is more than just a travel agency. We are
            your trusted partner in creating journeys that inspire, excite, and
            leave lasting memories. With years of expertise in the travel and
            tourism industry, we specialize in domestic and international tours,
            honeymoon escapes, family holidays, adventure trips, and customized
            itineraries built around your pace and preferences.
          </p>
          <div className="d-flex gap-5 about-who-we-are__details">
            <div>
              <h3 className="sub-title-text mb-4">Our Mission</h3>
              <p className="secondary-text">
                To make travel affordable, stress-free, and unforgettable by
                offering curated packages, dependable support, and thoughtful
                planning from start to finish.
              </p>
            </div>

            <div>
              <h3 className="sub-title-text mb-4">Our Vision</h3>
              <p className="secondary-text">
                To become the most trusted travel partner for explorers,
                couples, families, and groups looking for seamless journeys
                across India and abroad.
              </p>
            </div>
          </div>
        </div>
      </div>

      <VideoSection
        containerClassName="about-who-we-are__media"
        poster="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=80"
      />
    </section>
  );
};

export default AboutWhoWeAreScreen;
