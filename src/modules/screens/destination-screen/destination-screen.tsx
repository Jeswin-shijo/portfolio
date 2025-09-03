import React, { useState } from "react";
import ExpandableCard from "../../../shared/components/expand-card";

const DestinationScreen = () => {
  const [activeBtn, setActiveBtn] = useState<"left" | "right" | null>("right");

  return (
    <>
      <section className="py-5 p-5">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-5">
          <div className="text-start">
            <span className="border border-secondary text-secondary px-3 py-1 rounded-3 small d-inline-block mb-3">
              Destination
            </span>
            <h2
              className="fw-semibold"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 50,
                color: "#0c2d57",
              }}
            >
              Explore Our Popular <br /> destination
            </h2>
          </div>

          <div
            className="d-flex flex-column gap-3"
            style={{ maxWidth: "500px" }}
          >
            <p className="text-muted">
              Embark on a journey through our most sought-after destinations —
              from serene hill stations and sun-kissed beaches to vibrant cities
              and cultural wonders, each
            </p>

            <a
              href="#"
              className="btn btn-warning text-dark d-inline-flex align-items-center gap-2 rounded-3"
              style={{ maxWidth: "170px" }}
            >
              Explore More <i className="bi bi-box-arrow-up-right"></i>
            </a>

            <div className="d-flex justify-content-end gap-2">
              <button
                className={`btn rounded-3 ${
                  activeBtn === "left"
                    ? "btn-warning text-white"
                    : "btn-outline-secondary"
                }`}
                onClick={() => setActiveBtn("left")}
              >
                <i className="bi bi-arrow-left"></i>
              </button>

              <button
                className={`btn rounded-3 ${
                  activeBtn === "right"
                    ? "btn-warning text-white"
                    : "btn-outline-secondary"
                }`}
                onClick={() => setActiveBtn("right")}
              >
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid pb-5">
        <div className="row g-4 justify-content-center">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center">
                <ExpandableCard
                  image="https://picsum.photos/200/300"
                  location="Alanchi"
                  title="Beach Paradise"
                  price="₹56,567"
                  description="Escape to the tranquil shores of Alanchi, where sun-kissed sands meet vibrant culture and seaside serenity."
                />
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default DestinationScreen;
