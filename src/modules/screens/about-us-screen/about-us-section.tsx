import React from "react";
import AnimatedParagraph from "../components/animated-paragraph";

const AboutUsSection: React.FC = () => {
  return (
    <section className="container py-5">
      {/* About Button */}
      <div className="d-flex justify-content-between">
      <div className="mb-4">
        <button className="btn btn-outline-secondary rounded-3 px-4">About us</button>
      </div>

      {/* Description */}
      <div className="mb-5" style={{ maxWidth: "900px" }}>
        <AnimatedParagraph text={"Popup Tours and Travels is your trusted travel companion, offering tailor-made holiday experiences across India and abroad.With years of expertise, local partnerships, and 24/7 customer support, we ensure your journey is smooth, safe, and unforgettable."}/>
      </div>
      </div>
      {/* Stats */}
      <div className="row text-center">
        <div className="col-md-3 mb-4">
          <h3 style={{ color: "#f4c200", fontWeight: 600, fontSize: "2rem" }}>10K+</h3>
          <p className="text-dark">Happy Travelers</p>
        </div>
        <div className="col-md-3 mb-4">
          <h3 style={{ color: "#f4c200", fontWeight: 600, fontSize: "2rem" }}>1,200+</h3>
          <p className="text-dark">Customized Trips Completed</p>
        </div>
        <div className="col-md-3 mb-4">
          <h3 style={{ color: "#f4c200", fontWeight: 600, fontSize: "2rem" }}>7+ Years</h3>
          <p className="text-dark">In Travel & Tourism</p>
        </div>
        <div className="col-md-3 mb-4">
          <h3 style={{ color: "#f4c200", fontWeight: 600, fontSize: "2rem" }}>4.9/5</h3>
          <p className="text-dark">Customer Rating</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;