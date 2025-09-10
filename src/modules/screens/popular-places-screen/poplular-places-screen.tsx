import React, { useState } from "react";
import ScreenName from "../../../shared/components/screen-name";

const places = [
  {
    title: "Sri Lanka Packages",
    description:
      "Sri Lanka, historically known as Ceylon and officially the Democratic Socialist Republic of Sri Lanka, is an island country in South Asia...",
    image: "https://picsum.photos/200/300?grayscale",
  },
  {
    title: "Bali Packages",
    description:
      "Explore the exotri Lanka, historically known as Ceylon and officially the Democratic Socialist Republic of Sri Lanka, is an island country in ic temples, beaches, and nightlife of Bali.",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    title: "Wayanad Packages",
    description:
      "Discover lushri Lanka, historically known as Ceylon and officially the Democratic Socialist Republic of Sri Lanka, is an island country in  greenery, wildlife, and waterfalls in Wayanad.",
    image: "https://picsum.photos/200/300/?blur",
  },
  {
    title: "Munnar Package",
    description:
      "Enjoy teari Lanka, historically known as Ceylon and officially the Democratic Socialist Republic of Sri Lanka, is an island country in  plantations and misty hills in Munnar.",
    image: "https://source.unsplash.com/800x600/?munnar,tea",
  },
  {
    title: "Thailand Package",
    description:
      "Experience vri Lanka, historically known as Ceylon and officially the Democratic Socialist Republic of Sri Lanka, is an island country in ibrant markets, beaches, and Thai culture.",
    image: "https://source.unsplash.com/800x600/?thailand",
  },
];

const PopularPlacesBootstrap = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-light py-5 p-5">
      <div className="d-flex justify-content-between p-5">
        <div>
          <ScreenName name={"Popular Places"}/>
          <div className="d-flex flex-wrap align-items-center mb-4">
            <h2
             className="screen-title"
            >
              Explore Our Popular <br /> Places
            </h2>
          </div>

          <div className="row">
            <div className="">
              {places.map((place, index) => (
                <div
                  key={index}
                  className={`d-flex justify-content-between align-items-center mb-4 border-bottom py-2 px-2 ${
                    activeIndex === index
                      ? "text-dark fw-bold"
                      : "text-secondary"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setActiveIndex(index)}
                >
                  {place.title}
                  <i className="bi bi-arrow-up-right"></i>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8 col-lg-6 align-items-center">
          <p className="text-muted secondary-text" style={{ maxWidth: "900px" }}>
            Embark on a journey through our most sought-after destinations —
            from serene hill stations and sun-kissed beaches to vibrant cities
            and cultural wonders.
          </p>
          <div className="row g-3 align-items-center">
            <div className="col-md-6">
              <div className="card rounded-3 overflow-hidden">
                <img
                  src={places[activeIndex].image}
                  alt={places[activeIndex].title}
                  className="img-fluid"
                  style={{ height: "300px", objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="col-md-6">
              <h4 style={{ fontFamily: "Ivy Mode" }}>
                {places[activeIndex].title}
              </h4>
              <p className="text-muted secondary-text" style={{ lineHeight: 1.6 }}>
                {places[activeIndex].description}
              </p>
              <a
                href="explore more"
                className="btn p-2 btn-warning text-dark d-inline-flex align-items-center gap-2 rounded-3"
                style={{ maxWidth: "170px" }}
              >
                Explore More <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPlacesBootstrap;
