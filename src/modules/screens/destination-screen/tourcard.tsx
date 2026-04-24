import "./tour-card.css";
import { navigateTo } from "../../../shared/navigation/site-navigation";

type TourCardProps = {
  image: string;
  tag: string;
  title: string;
  description: string;
  price: string;
  href: string;
};

const TourCard = ({
  image,
  tag,
  title,
  description,
  price,
  href,
}: TourCardProps) => {
  return (
    <button
      type="button"
      className="tour-card rounded-4 overflow-hidden position-relative text-start border-0 bg-transparent p-0"
      onClick={() => navigateTo(href)}
      aria-label={`Open ${title} tour`}
    >
      <img src={image} alt={title} className="tour-card-img" />
      <span className="tour-card-tag position-absolute top-0 end-0 m-3 px-3 py-1 rounded-3 bg-white bg-opacity-50 text-dark fw-medium small shadow-sm">
        {tag}
      </span>
      <div className="tour-card-content p-4">
        <h5 className="fw-semibold">{title}</h5>
        <p className="text-muted small">{description}</p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="fw-bold">{price}</span>
          <span
            className="btn btn-warning rounded-circle"
            aria-hidden="true"
          >
            <i className="bi bi-arrow-right fs-4"></i>
          </span>
        </div>
      </div>
    </button>
  );
};

export default TourCard;
