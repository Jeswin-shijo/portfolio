import React, { useState } from "react";
import TourCard from "./tourcard";
import ScreenName from "../../../shared/components/screen-name";

const DestinationScreen = () => {
  const [activeBtn, setActiveBtn] = useState<"left" | "right" | null>("right");

  return (
    <>
      <section className="py-5 p-5">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-5 p-5">
          <div className="text-start">
            <ScreenName name={"Destination"}/>
            <h2
              className="screen-title"
            >
              Explore Our Popular <br /> destination
            </h2>
          </div>

          <div
            className="d-flex flex-column gap-3"
          >
            <p className="text-muted secondary-text">
              Embark on a journey through our most sought-after destinations —
              from serene hill stations and sun-kissed beaches to vibrant cities
              and cultural wonders, each
            </p>

            <a
              href="explore more"
              className="btn btn-warning text-dark d-inline-flex align-items-center gap-2 rounded-3"
              style={{ maxWidth: "170px" }}
            >
              Explore More <i className="bi bi-box-arrow-up-right"></i>
            </a>

            <div className="d-flex justify-content-end gap-3">
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

      <section className="pb-5 p-5 pt-0">
        <div className="d-flex gap-4 flex-wrap justify-content-between p-5 pt-0">
          <TourCard
            image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            tag="Munnar"
            title="Kerala Backwater Escape"
            description="Experience the serene beauty of Kerala’s canals, coconut groves, and floating dreams."
            price="500"
          />

          <TourCard
            image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            tag="Alleppey"
            title="Sunset Beach Retreat"
            description="Relax by the sea with breathtaking sunsets and peaceful surroundings."
            price="650"
          />

          <TourCard
            image="https://images.unsplash.com/photo-1473625247510-8ceb1760943f"
            tag="Thailand"
            title="Tropical Island Adventure"
            description="Discover pristine beaches, coral reefs, and vibrant island culture."
            price="750"
          />

          <TourCard
            image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            tag="Srilanka"
            title="Cultural Wonders Tour"
            description="Explore ancient temples, tea plantations, and scenic mountain vistas."
            price="600"
          />
        </div>
      </section>
    </>
  );
};

export default DestinationScreen;
