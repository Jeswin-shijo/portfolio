import React, { useState } from "react";
import LocationCard from "../../../shared/components/location-card";
import ScreenName from "../../../shared/components/screen-name";
import "./tour-packages-screen.css";

const tabs = ["International", "Domestic", "Honeymoon"] as const;
type TourTab = (typeof tabs)[number];

const tourData: Record<TourTab, { title: string; image: string }[]> = {
  International: [
    {
      title: "Sri Lanka",
      image: "https://picsum.photos/id/77/450/300",
    },
    {
      title: "Bali",
      image: "https://picsum.photos/seed/picsum/450/300",
    },
    {
      title: "Thailand",
      image: "https://picsum.photos/id/10/2500/1667",
    },
  ],
  Domestic: [
    {
      title: "Munnar",
      image: "https://picsum.photos/id/10/2500/1667",
    },
    {
      title: "Wayanad",
      image: "https://picsum.photos/id/10/2500/1667",
    },
    {
      title: "Coorg",
      image: "https://picsum.photos/id/10/2500/1667",
    },
  ],
  Honeymoon: [
    {
      title: "Maldives",
      image: "https://picsum.photos/id/10/2500/1667",
    },
    {
      title: "Kashmir",
      image: "https://picsum.photos/id/10/2500/1667",
    },
    {
      title: "Manali",
      image: "https://picsum.photos/id/10/2500/1667",
    },
  ],
};

const TourPackagesScreen = () => {
  const [activeTab, setActiveTab] = useState<TourTab>("International");
  const [activeBtn, setActiveBtn] = useState<"left" | "right" | null>("right");

  const places = tourData[activeTab];

  return (
    <div className="p-5 py-5">
      <div className="p-5">
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
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-fill text-center pb-2 tour-packages-tab ${
                activeTab === tab
                  ? "active border-bottom border-warning fw-bold"
                  : "text-secondary"
              }`}
            >
              <h3 className="sub-title-text">{tab}</h3>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div key={activeTab} className="row g-4 tour-packages-cards">
          {places.map((place, index) => (
            <div className="col-12 col-sm-6 col-md-4" key={index}>
              <LocationCard imageSrc={place.image} locationName={place.title} />
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
