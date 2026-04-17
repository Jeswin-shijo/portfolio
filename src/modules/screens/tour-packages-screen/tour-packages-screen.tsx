import React, { useEffect, useMemo, useState } from "react";
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

const visiblePackageCount = 3;

const TourPackagesScreen = () => {
  const [activeTab, setActiveTab] = useState<PackageCategory>("international");
  const [packageOffset, setPackageOffset] = useState(0);
  const places = getPackagesByCategory(activeTab);
  const canRotatePackages = places.length > 1;

  useEffect(() => {
    setPackageOffset(0);
  }, [activeTab]);

  const visiblePlaces = useMemo(() => {
    if (places.length === 0) {
      return [];
    }

    const rotatedPlaces = [
      ...places.slice(packageOffset),
      ...places.slice(0, packageOffset),
    ];

    return rotatedPlaces.slice(0, Math.min(visiblePackageCount, places.length));
  }, [packageOffset, places]);

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
        <div key={`${activeTab}-${packageOffset}`} className="row g-4 tour-packages-cards">
          {visiblePlaces.map((place) => (
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
            type="button"
            className={`btn rounded-3 ${
              canRotatePackages ? "btn-warning text-white" : "btn-outline-secondary"
            }`}
            onClick={() =>
              canRotatePackages &&
              setPackageOffset((current) =>
                current === 0 ? places.length - 1 : current - 1
              )
            }
            disabled={!canRotatePackages}
            aria-label="Show previous packages in this category"
          >
            <i className="bi bi-arrow-left"></i>
          </button>

          <button
            type="button"
            className={`btn rounded-3 ${
              canRotatePackages ? "btn-warning text-white" : "btn-outline-secondary"
            }`}
            onClick={() =>
              canRotatePackages &&
              setPackageOffset((current) => (current + 1) % places.length)
            }
            disabled={!canRotatePackages}
            aria-label="Show next packages in this category"
          >
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourPackagesScreen;
