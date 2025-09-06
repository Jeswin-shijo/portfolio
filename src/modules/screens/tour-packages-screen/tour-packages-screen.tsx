import React, { useState } from "react";
import LocationCard from "../../../shared/components/location-card";

const tourData: any = {
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
  const [activeTab, setActiveTab] = useState("International");
  const [activeBtn, setActiveBtn] = useState<"left" | "right" | null>("right");

  const places = tourData[activeTab];

  return (
    <div className="p-5 py-5">
      <div className="p-5">
        <span className="border border-secondary text-secondary px-3 py-1 rounded-3 small d-inline-block mb-3">
          Our Tour Packages
        </span>

        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <h2
              className="fw-semibold"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 50,
                color: "#0c2d57",
              }}
            >
              Explore Our Popular <br /> Places
            </h2>
          </div>
          <div className="col-md-6">
            <p className="text-muted">
              Embark on a journey through our most sought-after destinations —
              from serene hill stations and sun-kissed beaches to vibrant cities
              and cultural wonders.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="d-flex justify-content-between border-bottom mb-4 w-100">
          {["International", "Domestic", "Honeymoon"].map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-fill text-center pb-2 cursor-pointer ${
                activeTab === tab
                  ? "border-bottom border-warning fw-bold"
                  : "text-secondary"
              }`}
              style={{
                cursor: "pointer",
                ...(activeTab === tab && { color: "#0c2d57" }),
              }}
            >
              <h3>{tab}</h3>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="row g-4">
          {places.map((place: any, index: number) => (
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
