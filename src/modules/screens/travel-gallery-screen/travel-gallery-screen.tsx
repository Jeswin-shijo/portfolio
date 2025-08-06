import React from "react";
import "./travel-gallery-screen.css";

const places = [
  {
    title: "Munnar",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
     height: "280px",
  },
  {
    title: "Thailand",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
     height: "350px",
  },
  {
    title: "Munnar",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
     height: "280px",
  },
  {
    title: "Srilanka",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
     height: "350px",
  },
  {
    title: "Varkala",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
     height: "280px",
  },
  {
    title: "Munnar",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
     height: "350px",
  },
];

const TravelGalleryScreen = () => {
  return (
    <div className="travel-gallery-section py-5">
      <div className="container">
        <span className="border border-secondary text-secondary px-3 py-1 rounded-3 small d-inline-block mb-3">
          Travel Gallery
        </span>

        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center mb-5 gap-4">
          <h2 className="gallery-title">
            Captured Moments <br /> from Our Tours
          </h2>
          <p className="gallery-subtext">
            Embark on a journey through our most sought-after destinations —
            from serene hill stations and sun-kissed beaches to vibrant cities
            and cultural wonders.
          </p>
        </div>

        <div className="row g-4">
          {" "}
          {/* Changed from gy-4 to g-4 for equal gap all around */}
          {places.map((place, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4">
              <div
                className="image-card position-relative overflow-hidden rounded-4"
                style={{ height: place.height }}
              >
                {" "}
                {/* Fixed height */}
                <img
                  src={place.image}
                  alt={place.title}
                  className="img-fluid w-100 h-100 object-fit-cover"
                />
                <div className="image-tag position-absolute top-0 end-0 m-3 px-3 py-1 rounded-pill bg-white text-dark fw-medium small shadow-sm">
                  {" "}
                  {/* Added shadow-sm */}
                  {place.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelGalleryScreen;
