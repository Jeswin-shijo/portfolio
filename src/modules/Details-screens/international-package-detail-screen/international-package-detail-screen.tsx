import React, { useState } from "react";
import "./international-package-detail-screen.css";
import MiniContactForm from "../../../shared/components/mini-contact-form";

const tabs = ["Overview", "Itinerary", "Cost", "Map"] as const;
type Tab = (typeof tabs)[number];

const InternationalPackageDetailScreen = () => {
  const [openAccordion, setOpenAccordion] = useState<number[]>([0]);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const getTabPaneClass = (tab: Tab) =>
    `tab-pane ${activeTab === tab ? "tab-active" : "tab-hidden"}`;

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
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      }

      return [...prev, index];
    });
  };

  return (
    <div className="international-detail-layout py-5 p-5">
      <div className="international-detail-main p-5">
        <ul className="nav nav-tabs mb-4 border-0 justify-content-start">
          {tabs.map((tab, i) => (
            <li className="nav-item" key={i}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`nav-link package-tab-btn border-0 ${
                  activeTab === tab ? "active" : ""
                }`}
                style={{
                  fontFamily: "Ivy Mode",
                  // fontSize: "15px",
                  background: "transparent",
                }}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-content">
        <div className={getTabPaneClass("Overview")}>
          <h4
            className="fw-semibold mb-3"
            style={{ color: "#0C2D57", fontFamily: "Ivy Mode" }}
          >
            Overview
          </h4>
          <p className="text-muted small mb-4">
            Discover the vibrant culture, stunning landscapes, and warm
            hospitality of Thailand with our carefully curated package. From the
            bustling city life of Bangkok to the serene beaches of Phuket and
            the cultural heart of Chiang Mai, this journey promises a perfect
            blend of relaxation, adventure, and cultural immersion.
          </p>

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
                  style={{
                    color: "#f4b400",
                    fontSize: "22px",
                    marginTop: "2px",
                  }}
                >
                  task_alt
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={getTabPaneClass("Itinerary")}>
          <div className="py-5" style={{ maxWidth: "900px" }}>
            <h3
              className="fw-semibold mb-5"
              style={{ color: "#0C2D57", fontFamily: "Ivy Mode" }}
            >
              Itinerary
            </h3>

            <div className="position-relative">
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
                              <li
                                key={i}
                                className="mb-3 d-flex align-items-start"
                              >
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

                  {index < itinerary.length - 1 && (
                    <hr className="mt-4" style={{ color: "#ddd" }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={getTabPaneClass("Cost")}>
          <h4
            className="fw-semibold mb-3"
            style={{ color: "#0C2D57", fontFamily: "Ivy Mode" }}
          >
            Cost
          </h4>
          <div className="row d-flex flex-column">
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

        <div className={getTabPaneClass("Map")}>
          <h4
            className="fw-semibold mb-3"
            style={{ color: "#0C2D57", fontFamily: "Ivy Mode" }}
          >
            Map
          </h4>
          <div className="international-map-wrap">
            <div className="ratio ratio-21x9 shadow rounded-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.0599167418636!2d77.23311417590673!3d8.196719291835079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04fe7ea4515e61%3A0xd45d8a362e8b7ad7!2sAlanchi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1758367754669!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ borderRadius: 10 }}
              ></iframe>
            </div>
          </div>
        </div>
        </div>
      </div>

      <aside className="international-detail-contact m-5">
        <div className="international-detail-contact-sticky">
          <MiniContactForm />
        </div>
      </aside>
    </div>
  );
};

export default InternationalPackageDetailScreen;
