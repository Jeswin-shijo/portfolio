import React from "react";
import AnimatedParagraph from "../components/animated-paragraph/animated-paragraph";
import ScreenName from "../../../shared/components/screen-name";

const AboutUsSection: React.FC = () => {
  return (
    <section className="py-5 px-3 px-md-5">
      <div className="px-lg-5">
      <div className="d-flex flex-column flex-xl-row justify-content-between align-items-start gap-4 gap-xl-5">
        <ScreenName name={"About us"}/>

        <div className="mb-5" style={{ maxWidth: "900px" }}>
          <AnimatedParagraph
            text={
              "Popup Tours and Travels is your trusted travel companion, offering tailor-made holiday experiences across India and abroad.With years of expertise, local partnerships, and 24/7 customer support, we ensure your journey is smooth, safe, and unforgettable."
            }
          />
        </div>
      </div>
      <div className="row text-center justify-content-around gy-4">
        <div className="col-lg-2 col-md-3 mb-4">
          <h3 style={{ color: "#f4c200", fontWeight: 400, fontSize: 50, fontFamily: "Ivy Mode" }}>
            10K+
          </h3>
          <p className="text-dark">Happy Travelers</p>
        </div>
        <div className="col-lg-2 col-md-3 mb-4">
          <h3 style={{ color: "#f4c200", fontWeight: 400, fontSize: 50, fontFamily: "Ivy Mode" }}>
            1,200+
          </h3>
          <p className="text-dark">Customized Trips Completed</p>
        </div>
        <div className="col-lg-2 col-md-3 mb-4">
          <h3 style={{ color: "#f4c200", fontWeight: 400, fontSize: 50, fontFamily: "Ivy Mode" }}>
            7+ Years
          </h3>
          <p className="text-dark">In Travel & Tourism</p>
        </div>
        <div className="col-lg-2 col-md-3 mb-4">
          <h3 style={{ color: "#f4c200", fontWeight: 400, fontSize: 50, fontFamily: "Ivy Mode" }}>
            4.9/5
          </h3>
          <p className="text-dark">Customer Rating</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
