import React, { useEffect, useState } from "react";
import "./international-package-detail-screen.css";
import MiniContactForm from "../../../shared/components/mini-contact-form";
import type { TourPackage } from "../../../data/tour-packages";

const tabs = ["Overview", "Itinerary", "Cost", "Map"] as const;
type Tab = (typeof tabs)[number];

type Props = {
  packageData: TourPackage;
};

const InternationalPackageDetailScreen = ({ packageData }: Props) => {
  const [openAccordion, setOpenAccordion] = useState<number[]>(
    packageData.itinerary.length > 0 ? [0] : []
  );
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const getTabPaneClass = (tab: Tab) =>
    `tab-pane ${activeTab === tab ? "tab-active" : "tab-hidden"}`;

  const setAccIndex = (index: number) => {
    setOpenAccordion((prev: number[]) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      }

      return [...prev, index];
    });
  };

  useEffect(() => {
    setOpenAccordion(packageData.itinerary.length > 0 ? [0] : []);
    setActiveTab("Overview");
  }, [packageData.slug, packageData.itinerary.length]);

  return (
    <div className="international-detail-layout">
      <div className="international-detail-main">
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
            {packageData.overview}
          </p>

          <h5
            className="fw-semibold mb-3"
            style={{ color: "#0C2D57", fontFamily: "Ivy Mode" }}
          >
            Highlights
          </h5>
          <ul className="list-unstyled small text-muted mb-5">
            {packageData.highlights.map((text, i) => (
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

              {packageData.itinerary.map((item, index) => (
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

                  {index < packageData.itinerary.length - 1 && (
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
                {packageData.costIncludes.map((text, i) => (
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
                {packageData.costExcludes.map((text, i) => (
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
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  packageData.mapQuery
                )}&output=embed`}
                title={`${packageData.title} tour map`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ borderRadius: 10 }}
              ></iframe>
            </div>
          </div>
        </div>
        </div>
      </div>

      <aside className="international-detail-contact">
        <div className="international-detail-contact-sticky">
          <MiniContactForm />
        </div>
      </aside>
    </div>
  );
};

export default InternationalPackageDetailScreen;
