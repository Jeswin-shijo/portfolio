import React from "react";
import "./advertise-screen.css";
import VideoSection from "../components/video-section/video-section";
import ScreenName from "../../../shared/components/screen-name";
const AdvertiseScreen = () => {
  return (
    <section className="section-bg py-5 px-3 px-md-5">
      <div className="px-lg-5">
       <ScreenName name={"Why choose us"}/>
        <div className="row align-items-center g-5">
          <div className="advertise-screen__intro d-flex flex-column flex-xl-row justify-content-between align-items-start gap-4">
            <h2
             className="screen-title"
            >
              Travel made easy, with <br /> experts you can trust
            </h2>
            <p className="text-muted mb-0 secondary-text advertise-screen__intro-copy">
              Embark on a journey through our most sought-after destinations –
              from serene hill stations and sun-kissed beaches to vibrant cities
              and cultural wonders,
            </p>
          </div>
          <div className="row justify-content-between align-items-center">
          <div className="col-lg-12 col-md-12 col-12 col-xl-12 col-xxl-6 mb-3">
            <div className="row g-4">
              <div className="col-md-12 col-lg-6 col-12 col-sm-12">
                <div className="d-flex align-items-start gap-3">
                  <i
                    className="bi bi-person-badge fs-1"
                    style={{ color: "#0c2d57" }}
                  ></i>
                  <div>
                    <h3 className="mb-3 sub-title-text">Expert Local Knowledge</h3>
                    <p className="mb-0 text-muted secondary-text">
                      Our team knows the destinations beyond the brochure. We
                      help travelers choose the right season, the right stays,
                      and the right pace for each journey.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-12 col-sm-12">
                <div className="d-flex align-items-start gap-3">
                  <i
                    className="bi bi-house-check fs-1"
                    style={{ color: "#0c2d57" }}
                  ></i>
                  <div>
                    <h3 className="mb-3" style={{ fontFamily: "Ivy Mode" }}>Personalized Service</h3>
                    <p className="mb-0 text-muted secondary-text">
                      Every itinerary is shaped around your interests, travel
                      dates, group size, and comfort level instead of forcing
                      you into a one-size-fits-all package.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-12 col-sm-12">
                <div className="d-flex align-items-start gap-3">
                  <i
                    className="bi bi-shield-check fs-1"
                    style={{ color: "#0c2d57" }}
                  ></i>
                  <div>
                    <h3 className="mb-3" style={{ fontFamily: "Ivy Mode" }}>
                      Transparent & Trustworthy
                    </h3>
                    <p className="mb-0 text-muted secondary-text">
                      Clear communication, thoughtful guidance, and dependable
                      coordination mean you always know what to expect before
                      and during your trip.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-12 col-sm-12">
                <div className="d-flex align-items-start gap-3">
                  <i
                    className="bi bi-award fs-1"
                    style={{ color: "#0c2d57" }}
                  ></i>
                  <div>
                    <h3 className="mb-3" style={{ fontFamily: "Ivy Mode" }}>Proven Track Record</h3>
                    <p className="mb-0 text-muted secondary-text">
                      From quick weekend escapes to longer international plans,
                      we focus on smooth execution, reliable support, and
                      memorable experiences that bring travelers back.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <VideoSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertiseScreen;
