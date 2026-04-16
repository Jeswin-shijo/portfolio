import React from "react";
import "./why-we-better-screen.css";
import ScreenName from "../../../shared/components/screen-name";

const WhyWeBetterScreen = () => {
  const features = [
    "International office network",
    "Global availability management",
    "Control Management",
    "24/7 support all year",
    "Travel Service",
    "Digital management platform",
  ];
  return (
    <div className="py-5">
      <div className="site-container">
        <ScreenName name={"Why we are better"} />

        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <h2 className="screen-title">
              Discover What Makes Us <br /> The Most Trusted Partner
            </h2>
          </div>
          <div className="col-md-6">
            <p className="text-muted secondary-text">
              Embark on a journey through our most sought-after destinations —
              from serene hill stations and sun-kissed beaches to vibrant cities
              and cultural wonders.
            </p>
          </div>
        </div>
        <section className="features-wrap">
          <div className="features-grid">
            {features.map((item, i) => (
              <div className="feature" key={i}>
                <div className="d-flex gap-5">
                <span className="number">{String(i + 1).padStart(2, "0")}</span>
                <span className="text">{item}</span>
                </div>
                <div className="line" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyWeBetterScreen;
