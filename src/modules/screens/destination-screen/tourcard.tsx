import React from "react";
import "./tour-card.css";
import { navigateTo } from "../../../shared/navigation/site-navigation";

const TourCard = ({ image, tag, title, description, price, href }: any) => {
  return (
    <div className="tour-card rounded-4 overflow-hidden position-relative">
      <img src={image} alt={title} className="tour-card-img" />
      <div className="tour-card-tag position-absolute top-0 end-0 m-3 px-3 py-1 rounded-3 bg-white bg-opacity-50 text-dark fw-medium small shadow-sm">
        {tag}
      </div>
      <div className="tour-card-content p-4">
        <h5 className="fw-semibold">{title}</h5>
        <p className="text-muted small">{description}</p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="fw-bold">{price}</span>
          <button
            className="btn btn-warning rounded-circle"
            onClick={() => href && navigateTo(href)}
          >
            <i className="bi bi-arrow-right fs-4"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
