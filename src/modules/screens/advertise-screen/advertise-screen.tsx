import React from "react";
import "./advertise-screen.css";
import VideoSection from "../components/video-section/video-section";
const AdvertiseScreen = () => {
  return (
    <section className="section-bg py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <span className="border border-secondary text-secondary px-3 py-1 rounded-3 small d-inline-block mb-3">
              Why Choose Us
            </span>
            
            <h2
              className="fw-semibold"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 50, color:"#0c2d57" }}
            >
              Travel made easy, with <br /> experts you can trust
            </h2>
            <p className="text-muted mb-5">
              Embark on a journey through our most sought-after destinations –
              from serene hill stations and sun-kissed beaches to vibrant cities
              and cultural wonders,
            </p>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="d-flex align-items-start gap-3">
                  <i className="bi bi-person-badge fs-2" style={{color:"#0c2d57"}}></i>
                  <div>
                    <h5 className="fw-semibold mb-1">Expert Local Knowledge</h5>
                    <p className="mb-0 text-muted">
                      Nullam sollicitudin blandit eros eu pretium. Nullam
                      maximus ultricies
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-start gap-3">
                  <i className="bi bi-house-check fs-2" style={{color:"#0c2d57"}}></i>
                  <div>
                    <h5 className="fw-semibold mb-1">Personalized Service</h5>
                    <p className="mb-0 text-muted">
                      Nullam sollicitudin blandit eros eu pretium. Nullam
                      maximus ultricies
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-start gap-3">
                  <i className="bi bi-shield-check fs-2" style={{color:"#0c2d57"}}></i>
                  <div>
                    <h5 className="fw-semibold mb-1">
                      Transparent & Trustworthy
                    </h5>
                    <p className="mb-0 text-muted">
                      Nullam sollicitudin blandit eros eu pretium. Nullam
                      maximus ultricies
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-start gap-3">
                  <i className="bi bi-award fs-2" style={{color:"#0c2d57"}}></i>
                  <div>
                    <h5 className="fw-semibold mb-1">Proven Track Record</h5>
                    <p className="mb-0 text-muted">
                      Nullam sollicitudin blandit eros eu pretium. Nullam
                      maximus ultricies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <VideoSection/>
        </div>
      </div>
    </section>
  );
};

export default AdvertiseScreen;
