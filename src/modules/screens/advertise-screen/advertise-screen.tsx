import React from "react";
import "./advertise-screen.css";
import VideoSection from "../components/video-section/video-section";
const AdvertiseScreen = () => {
  return (
    <section className="section-bg py-5 p-5">
      <div className="p-5">
        <span className="border border-secondary text-secondary px-3 py-1 rounded-3 small d-inline-block mb-3">
          Why Choose Us
        </span>
        <div className="row align-items-center g-5">
          <div className="d-flex justify-content-between">
            <h2
              className="fw-semibold"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 50,
                color: "#0c2d57",
              }}
            >
              Travel made easy, with <br /> experts you can trust
            </h2>
            <p className="text-muted mb-5">
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
                    <h3 className="fw-semibold mb-3">Expert Local Knowledge</h3>
                    <p className="mb-0 text-muted">
                      The first use of Lorem ipsum is uncertain, though some
                      have suggested the 1500s, when sections of Classical works
                      were often used as dummy texts by printers to make type
                      specimen books demonstrating different fonts. According to
                      this account, the material was chosen based on Latin’s
                      familiarity as a lingua franca across Europe and the
                      popularity of Classical works during the Middle Ages.
                      Whenever it was first created, Lorem ipsum did not gain
                      widespread popularity until the 1960s, when Letraset
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
                    <h3 className="fw-semibold mb-3">Personalized Service</h3>
                    <p className="mb-0 text-muted">
                      The first use of Lorem ipsum is uncertain, though some
                      have suggested the 1500s, when sections of Classical works
                      were often used as dummy texts by printers to make type
                      specimen books demonstrating different fonts. According to
                      this account, the material was chosen based on Latin’s
                      familiarity as a lingua franca across Europe and the
                      popularity of Classical works during the Middle Ages.
                      Whenever it was first created, Lorem ipsum did not gain
                      widespread popularity until the 1960s, when Letraset
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
                    <h3 className="fw-semibold mb-3">
                      Transparent & Trustworthy
                    </h3>
                    <p className="mb-0 text-muted">
                      The first use of Lorem ipsum is uncertain, though some
                      have suggested the 1500s, when sections of Classical works
                      were often used as dummy texts by printers to make type
                      specimen books demonstrating different fonts. According to
                      this account, the material was chosen based on Latin’s
                      familiarity as a lingua franca across Europe and the
                      popularity of Classical works during the Middle Ages.
                      Whenever it was first created, Lorem ipsum did not gain
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
                    <h3 className="fw-semibold mb-3">Proven Track Record</h3>
                    <p className="mb-0 text-muted">
                      The first use of Lorem ipsum is uncertain, though some
                      have suggested the 1500s, when sections of Classical works
                      were often used as dummy texts by printers to make type
                      specimen books demonstrating different fonts. According to
                      this account, the material was chosen based on Latin’s
                      familiarity as a lingua franca across Europe and the
                      popularity of Classical works during the Middle Ages.
                      Whenever it was first created, Lorem ipsum did not gain
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
