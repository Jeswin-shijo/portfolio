import React from "react";
import "./travel-gallery-screen.css";

const places = [
  {
    title: "Munnar",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Thailand",
    image: "https://picsum.photos/400/500?random=2",
  },
  {
    title: "Munnar",
    image: "https://picsum.photos/400/500?random=3",
  },
  {
    title: "Srilanka",
    image: "https://picsum.photos/400/450?random=4",
  },
  {
    title: "Varkala",
    image: "https://picsum.photos/400/350?random=5",
  },
  {
    title: "Munnar",
    image: "https://picsum.photos/400/480?random=6",
  },
  {
    title: "Munnar",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
];

const TravelGalleryScreen = () => {
  return (
    <div className="travel-gallery-section py-5 p-5">
      <div className="p-5">
        {/* Section label */}
        <span className="border border-secondary text-secondary px-3 py-1 rounded-3 small d-inline-block mb-3">
          Travel Gallery
        </span>

        {/* Heading + subtext */}
        <div className="d-flex justify-content-between ">
          <h2
            className="fw-semibold"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 50,
              color: "#0c2d57",
            }}
          >
            Captured Moments <br /> from Our Tours
          </h2>
          <p className="gallery-subtext">
            Embark on a journey through our most sought-after destinations —
            from serene hill stations and sun-kissed beaches to vibrant cities
            and cultural wonders.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="masonry">
          {places.map((place, index) => (
            <div
              key={index}
              className="masonry-item position-relative overflow-hidden rounded-4 mb-4"
            >
              <img
                src={place.image}
                alt={place.title}
                className="image-card img-fluid w-100 rounded-4"
              />
              <div className="image-tag position-absolute top-0 end-0 m-2 px-3 py-1 rounded-pill bg-white text-dark fw-medium small shadow-sm">
                {place.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelGalleryScreen;
