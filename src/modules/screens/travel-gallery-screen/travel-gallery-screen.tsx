import React from "react";
import "./travel-gallery-screen.css";
import ScreenName from "../../../shared/components/screen-name";

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
    <div className="travel-gallery-section py-5 px-3 px-md-5">
      <div className="px-lg-5">
        <ScreenName name={"Travel gallery"}/>

        <div className="d-flex flex-column flex-lg-row justify-content-between gap-3 gap-lg-5">
          <h2
           className="screen-title"
          >
            Captured Moments <br /> from Our Tours
          </h2>
          <p className="gallery-subtext secondary-text">
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
