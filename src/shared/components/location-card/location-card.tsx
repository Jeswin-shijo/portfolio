import React from "react";

interface LocationCardProps {
  imageSrc: string;
  locationName: string;
}

const LocationCard = ({ imageSrc, locationName }: LocationCardProps) => {
  return (
    <div className="card border-0 shadow rounded overflow-hidden">
      <div className="position-relative">
        <img
          src={imageSrc}
          className="card-img-top"
          alt={locationName}
        />
        <span className="position-absolute top-0 end-0 m-3 bg-white text-dark px-2 py-1 rounded-3 bg-opacity-50 shadow-sm" style={{fontSize:20}}>
          {locationName}
        </span>
      </div>
    </div>
  );
};

export default LocationCard;
