import React, { useState } from "react";
import {
  buildPackageHref,
  featuredDestinationPackages,
} from "../../../data/tour-packages";
import TourCard from "./tourcard";
import ScreenName from "../../../shared/components/screen-name";
import { navigateTo } from "../../../shared/navigation/site-navigation";

const DestinationScreen = () => {
  const [activeBtn, setActiveBtn] = useState<"left" | "right" | null>("right");

  return (
    <>
      <section className="py-5">
        <div className="site-container d-flex flex-column flex-lg-row justify-content-between align-items-start gap-5">
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

            <button
              type="button"
              className="btn btn-warning text-dark d-inline-flex align-items-center gap-2 rounded-3"
              style={{ maxWidth: "170px" }}
              onClick={() => navigateTo("/packages/thailand")}
            >
              Explore More <i className="bi bi-box-arrow-up-right"></i>
            </button>

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

      <section className="pb-5 pt-0">
        <div className="site-container d-flex gap-4 flex-wrap justify-content-between pt-0">
          {featuredDestinationPackages.map((pkg) => (
            <TourCard
              key={pkg.slug}
              image={pkg.cardImage}
              tag={pkg.destinationTag}
              title={pkg.destinationTitle}
              description={pkg.destinationDescription}
              price={pkg.startingPrice}
              href={buildPackageHref(pkg.slug)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default DestinationScreen;
