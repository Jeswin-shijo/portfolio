import React, { useState } from "react";
import "./international-package-detail-screen.css";

const InternationalPackageDetailScreen = () => {
  const [openAccordion, setOpenAccordion] = useState<any>([0]);
  const [activeTab, setActiveTab] = useState("Overview");

  const itinerary = [
    {
      day: 1,
      title: "Arrival in Bangkok",
      details: [
        {
          time: "Morning",
          text: "Arrive at Suvarnabhumi Airport, where our friendly guide will welcome you with a traditional Thai garland.",
        },
        {
          time: "Afternoon",
          text: "Transfer to your luxurious hotel. Relax and refresh.",
        },
        {
          time: "Evening",
          text: "Explore the vibrant night markets, where the aroma of street food and the energy of the crowd will captivate your senses.",
        },
      ],
    },
    {
      day: 2,
      title: "Arrival in Bangkok",
      details: [
        {
          time: "Morning",
          text: "Arrive at Suvarnabhumi Airport, where our friendly guide will welcome you with a traditional Thai garland.",
        },
        {
          time: "Afternoon",
          text: "Transfer to your luxurious hotel. Relax and refresh.",
        },
        {
          time: "Evening",
          text: "Explore the vibrant night markets, where the aroma of street food and the energy of the crowd will captivate your senses.",
        },
      ],
    },
    {
      day: 3,
      title: "Arrival in Bangkok",
      details: [
        {
          time: "Morning",
          text: "Arrive at Suvarnabhumi Airport, where our friendly guide will welcome you with a traditional Thai garland.",
        },
        {
          time: "Afternoon",
          text: "Transfer to your luxurious hotel. Relax and refresh.",
        },
        {
          time: "Evening",
          text: "Explore the vibrant night markets, where the aroma of street food and the energy of the crowd will captivate your senses.",
        },
      ],
    },
  ];

  const setAccIndex = (index: number) => {
    setOpenAccordion((prev: number[]) => {
      // if already open, remove it
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        // otherwise add it
        return [...prev, index];
      }
    });
  };

  return (
    <div
      className="container                                                                                                                                                                                                                        py-5"
      style={{ maxWidth: "950px" }}
    >
      {/* ---------- Tabs ---------- */}
      <ul className="nav nav-tabs mb-4 border-0 justify-content-start">
        {["Overview", "Itinerary", "Cost", "Map"].map((tab, i) => (
          <li className="nav-item" key={i}>
            <button
              onClick={() => setActiveTab(tab)}
              className={`nav-link fw-semibold border-0 ${
                activeTab === tab
                  ? "active border-bottom border-2 border-dark"
                  : "text-dark"
              }`}
              style={{
                fontFamily: "Ivy Mode",
                fontSize: "30px",
                background: "transparent",
                transition: "all 0.8s ease",
              }}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* ---------- Overview ---------- */}
      <h4
        className="fw-semibold mb-3"
        style={{ color: "#0C2D57", fontFamily: "Ivy Mode" }}
      >
        Overview
      </h4>
      <p className="text-muted small mb-4">
        Discover the vibrant culture, stunning landscapes, and warm hospitality
        of Thailand with our carefully curated package. From the bustling city
        life of Bangkok to the serene beaches of Phuket and the cultural heart
        of Chiang Mai, this journey promises a perfect blend of relaxation,
        adventure, and cultural immersion.
      </p>

      {/* ---------- Highlights ---------- */}
      <h5
        className="fw-semibold mb-3"
        style={{ color: "#0C2D57", fontFamily: "Ivy Mode" }}
      >
        Highlights
      </h5>
      <ul className="list-unstyled small text-muted mb-5">
        {[
          "Immersive cultural experiences with knowledgeable guides",
          "Premium accommodations and seamless transfers",
          "24/7 customer support ensuring a stress-free journey",
        ].map((text, i) => (
          <li key={i} className="mb-3 d-flex align-items-start">
            <span
              className="material-symbols-outlined me-2"
              style={{ color: "#f4b400", fontSize: "22px", marginTop: "2px" }}
            >
              task_alt
            </span>
            <span>{text}</span>
          </li>
        ))}
      </ul>

      <div className=" py-5" style={{ maxWidth: "900px" }}>
        <h3
          className="fw-semibold mb-5"
          style={{ color: "#0C2D57", fontFamily: "Ivy Mode" }}
        >
          Itinerary
        </h3>

        <div className="position-relative">
          {/* Vertical Dotted Line */}
          <div
            className="position-absolute"
            style={{
              left: "20px",
              top: "10px",
              bottom: "0",
              width: "2px",
              borderLeft: "2px dotted #f4b400",
              zIndex: "0",
            }}
          ></div>

          {itinerary.map((item, index) => (
            <div
              key={index}
              className="position-relative ps-5 mb-5"
              style={{ zIndex: "1" }}
            >
              {/* Map Icon Circle */}
              <div
                className="position-absolute rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#F9CF02",
                  left: "0",
                  top: "0",
                  zIndex: "1",
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ color: "#fff", fontSize: "22px" }}
                >
                  location_on
                </span>
              </div>

              {/* Accordion */}
              <div className="accordion" id={`accordion${index}`}>
                <div className="accordion-item border-0">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button shadow-none ms-3 ps-0 pt-2 fw-semibold ${
                        !openAccordion.includes(index) ? "collapsed" : ""
                      }`}
                      type="button"
                      aria-expanded={
                        openAccordion.includes(index) ? "true" : "false"
                      }
                      style={{
                        background: "transparent",
                        color: "#0C2D57",
                        fontSize: "18px",
                        fontFamily: "Ivy Mode",
                      }}
                      onClick={() => setAccIndex(index)}
                    >
                      Day {item.day}: {item.title}
                    </button>
                  </h2>

                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse ${
                      openAccordion.includes(index) ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body ps-0 pt-3 small">
                      <ul className="list-unstyled mb-0">
                        {item.details.map((detail, i) => (
                          <li key={i} className="mb-3 d-flex align-items-start">
                            <span
                              className="material-symbols-outlined me-2 mt-1"
                              style={{
                                fontSize: "8px",
                                color: "#0C2D57",
                              }}
                            >
                              fiber_manual_record
                            </span>
                            <p className="mb-0 text-muted">
                              <strong>{detail.time}:</strong> {detail.text}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider Line */}
              {index < itinerary.length - 1 && (
                <hr className="mt-4" style={{ color: "#ddd" }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Cost Section ---------- */}
      <h4
        className="fw-semibold mb-3"
        style={{ color: "#0C2D57", fontFamily: "Ivy Mode" }}
      >
        Cost
      </h4>
      <div className="row d-flex flex-column">
        {/* Includes */}
        <div className="col-md-6 mb-4">
          <h6
            className="fw-semibold mb-3"
            style={{ color: "#0C2D57", fontFamily: "Ivy Mode" }}
          >
            The Cost Includes
          </h6>
          <ul className="list-unstyled small text-muted">
            {[
              "Round-trip airfare from major cities",
              "Accommodation in 4-star and 5-star hotels",
              "Daily breakfast and select meals",
              "Private transfers and guided tours",
              "Entry fees to all listed attractions",
            ].map((text, i) => (
              <li key={i} className="mb-2 d-flex align-items-start">
                <span
                  className="material-symbols-outlined me-2"
                  style={{ color: "#429945" }}
                >
                  task_alt
                </span>
                <span className="ms-2">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Excludes */}
        <div className="col-md-6 mb-4">
          <h6
            className="fw-semibold mb-3"
            style={{ color: "#0C2D57", fontFamily: "Ivy Mode" }}
          >
            The Cost Excludes
          </h6>
          <ul className="list-unstyled small text-muted">
            {[
              "Personal expenses (e.g., souvenirs, extra meals)",
              "Travel insurance (highly recommended)",
              "Optional activities not mentioned in the itinerary",
            ].map((text, i) => (
              <li key={i} className="mb-2 d-flex align-items-start">
                <span
                  className="material-symbols-outlined me-2"
                  style={{ color: "#E73B36", fontWeight: "100" }}
                >
                  cancel
                </span>
                <span className="ms-2">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InternationalPackageDetailScreen;
