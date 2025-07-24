import React, { useState } from "react";
import "./ExpandableCard.css";

interface ExpandableCardProps {
  image: string;
  location: string;
  title: string;
  price: string;
  description: string;
}

const ExpandableCard = ({
  image,
  location,
  title,
  price,
  description,
}: ExpandableCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card-container ${isHovered ? "expanded" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`image-wrapper ${isHovered ? "expanded" : ""}`}>
        <img
          src={image}
          alt="Destination"
          className="card-image"
        />
        <div className="location-badge">{location}</div>
      </div>

      <div className={`card-content ${isHovered ? "show" : ""}`}>
        <h3 className="text-dark">{title}</h3>
        <p>{description}</p>
        <div className="price-button">
          <span className="text-dark">${price}</span>
          <button className="action-button">→</button>
        </div>
      </div>
    </div>
  );
};

export default ExpandableCard;
