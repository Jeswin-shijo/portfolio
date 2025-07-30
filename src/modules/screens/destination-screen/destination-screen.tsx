import React from "react";
import ExpandableCard from "../../../shared/components/expand-card";

const DestinationScreen = () => {
  return (
    <>
      <section className="container py-5">
        <span className="border border-secondary text-secondary px-3 py-1 rounded-3 small d-inline-block mb-3">
          Destination
        </span>

        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-5">
          <div className="text-start">
            <h2
              className="fw-semibold"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 50 }}
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

            <div className="d-flex gap-3 justify-content-end">
              <button className="btn btn-light rounded">
                <i className="bi bi-arrow-left text-primary"></i>
              </button>
              <button className="btn btn-warning rounded">
                <i className="bi bi-arrow-right text-primary"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-5">
        <div className="row g-4">
          <div className="col-12 col-sm-6 col-lg-4">
            <ExpandableCard
              image="https://picsum.photos/200/300"
              location="Alanchi"
              title="Beach Paradise"
              price="₹56,567"
              description="Escape to the tranquil shores of Alanchi, where sun-kissed sands meet vibrant culture and seaside serenity."
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <ExpandableCard
              image="https://picsum.photos/200/300"
              location="Alanchi"
              title="Beach Paradise"
              price="₹56,567"
              description="Escape to the tranquil shores of Alanchi, where sun-kissed sands meet vibrant culture and seaside serenity."
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <ExpandableCard
              image="https://picsum.photos/200/300"
              location="Alanchi"
              title="Beach Paradise"
              price="₹56,567"
              description="Escape to the tranquil shores of Alanchi, where sun-kissed sands meet vibrant culture and seaside serenity."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DestinationScreen;
