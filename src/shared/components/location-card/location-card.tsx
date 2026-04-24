import React from "react";
import { navigateTo } from "../../navigation/site-navigation";
import "./location-card.css";

interface LocationCardProps {
  imageSrc: string;
  locationName: string;
  style?: Record<string, string>;
  href?: string;
}

const LocationCard = ({
  imageSrc,
  locationName,
  style = {},
  href,
}: LocationCardProps) => {
  return (
    <button
      type="button"
      className="card border-0 shadow rounded overflow-hidden text-start w-100 pt-press location-card-btn"
      style={style}
      onClick={() => href && navigateTo(href)}
    >
      <div className="position-relative location-card-img-wrap">
        <img
          src={imageSrc}
          className="card-img-top location-card-img"
          alt={locationName}
        />
        <span
          className="position-absolute top-0 end-0 m-3 bg-white text-dark px-2 py-1 rounded-3 bg-opacity-50 shadow-sm location-card-tag"
          style={{ fontSize: 20 }}
        >
          {locationName}
        </span>
      </div>
    </button>
  );
};

export default LocationCard;
