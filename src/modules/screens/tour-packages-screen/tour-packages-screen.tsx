import React, { useState } from "react";
import {
  buildPackageHref,
  getPackagesByCategory,
  type PackageCategory,
} from "../../../data/tour-packages";
import LocationCard from "../../../shared/components/location-card";
import ScreenName from "../../../shared/components/screen-name";
import "./tour-packages-screen.css";

const tabs = [
  { label: "International", value: "international" },
  { label: "Domestic", value: "domestic" },
  { label: "Honeymoon", value: "honeymoon" },
] as const;

const TourPackagesScreen = () => {
  const [activeTab, setActiveTab] = useState<PackageCategory>("international");
  const [activeBtn, setActiveBtn] = useState<"left" | "right" | null>("right");

  const places = getPackagesByCategory(activeTab);

  return (
    <div className="py-5">
      <div className="site-container">
        <ScreenName name={"Our tour packages"}/>

        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <h2
             className="screen-title"
            >
              Explore Our Popular <br /> Places
            </h2>
          </div>
          <div className="col-md-6">
            <p className="text-muted secondary-text">
              Embark on a journey through our most sought-after destinations —
              from serene hill stations and sun-kissed beaches to vibrant cities
              and cultural wonders.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="d-flex justify-content-between border-bottom mb-4 w-100">
          {tabs.map((tab) => (
            <div
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex-fill text-center pb-2 tour-packages-tab ${
                activeTab === tab.value
                  ? "active border-bottom border-warning fw-bold"
                  : "text-secondary"
              }`}
            >
              <h3 className="sub-title-text">{tab.label}</h3>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div key={activeTab} className="row g-4 tour-packages-cards">
          {places.map((place) => (
            <div className="col-12 col-sm-6 col-md-4" key={place.slug}>
              <LocationCard
                imageSrc={place.cardImage}
                locationName={place.title}
                href={buildPackageHref(place.slug)}
              />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-end gap-2 mt-4">
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
  );
};

export default TourPackagesScreen;
