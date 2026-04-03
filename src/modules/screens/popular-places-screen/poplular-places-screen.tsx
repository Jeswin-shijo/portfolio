import React, { useState } from "react";
import ScreenName from "../../../shared/components/screen-name";
import "./poplular-places-screen.css";

type Place = {
  title: string;
  description: string;
  image: string;
};

const places: Place[] = [
  {
    title: "Sri Lanka Packages",
    description:
      "Sri Lanka, historically known as Ceylon and officially the Democratic Socialist Republic of Sri Lanka, is an island country in South Asia. It lies in the Indian Ocean southwest of the Bay of Bengal.",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Bali Packages",
    description:
      "Explore Bali's ancient temples, emerald rice terraces, and iconic beaches. From spiritual retreats to lively coastal towns, Bali blends culture and relaxation beautifully.",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Wayanad Packages",
    description:
      "Discover lush greenery, misty viewpoints, wildlife sanctuaries, and hidden waterfalls in Wayanad. A perfect getaway for nature lovers and slow-travel explorers.",
    image:
      "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Munnar Package",
    description:
      "Enjoy rolling tea plantations, cool mountain air, and scenic drives through Munnar. This hill station is ideal for peaceful stays and refreshing landscapes.",
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Thailand Package",
    description:
      "Experience vibrant markets, tropical beaches, ornate temples, and rich Thai culture. Thailand offers the right mix of adventure, food, and island relaxation.",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1400&q=80",
  },
];

const PopularPlacesBootstrap = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="popular-places-section">
      <div className="popular-places-inner row">
        <div className="popular-places-left col-lg-5 col-md-12 col-12 col-xl-5 col-xxl-5">
          <ScreenName name="Popular Places" />
          <h2 className="popular-places-title screen-title">
            Explore Our Popular <br /> Places
          </h2>

          <div className="popular-places-list">
            {places.map((place, index) => (
              <button
                key={place.title}
                type="button"
                className={`popular-place-item ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span>{place.title}</span>
                <i className="bi bi-arrow-up-right"></i>
              </button>
            ))}
          </div>
        </div>

        <div className="popular-places-right col-lg-6 col-md-12 col-12 col-xl-6 col-xxl-6">
          <p className="popular-places-intro secondary-text">
            Embark on a journey through our most sought-after destinations —
            from serene hill stations and sun-kissed beaches to vibrant cities
            and cultural wonders.
          </p>

          <div className="popular-places-feature">
            <div className="popular-places-image-wrap">
              <div className="popular-places-image">
                <img
                  src={places[activeIndex].image}
                  alt={places[activeIndex].title}
                  className="img-fluid w-100 h-100"
                />
              </div>
            </div>

            <div className="popular-places-content">
              <h4 className="sub-title-text">{places[activeIndex].title}</h4>
              <p className="secondary-text">
                {places[activeIndex].description}
              </p>
              <button type="button" className="popular-places-cta">
                Explore More <i className="bi bi-box-arrow-up-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPlacesBootstrap;
