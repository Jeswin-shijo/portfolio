import "./travel-gallery-screen.css";
import ScreenName from "../../../shared/components/screen-name";
import { navigateTo } from "../../../shared/navigation/site-navigation";

type Place = {
  title: string;
  image: string;
  albumSlug?: string;
};

const places: Place[] = [
  {
    title: "Munnar",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    albumSlug: "munnar",
  },
  {
    title: "Thailand",
    image: "https://picsum.photos/400/500?random=2",
    albumSlug: "thailand",
  },
  {
    title: "Munnar",
    image: "https://picsum.photos/400/500?random=3",
    albumSlug: "munnar",
  },
  {
    title: "Srilanka",
    image: "https://picsum.photos/400/450?random=4",
    albumSlug: "sri-lanka",
  },
  {
    title: "Varkala",
    image: "https://picsum.photos/400/350?random=5",
  },
  {
    title: "Munnar",
    image: "https://picsum.photos/400/480?random=6",
    albumSlug: "munnar",
  },
  {
    title: "Munnar",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    albumSlug: "munnar",
  },
];

const buildGalleryHref = (albumSlug?: string) =>
  albumSlug ? `/gallery?album=${albumSlug}` : "/gallery";

const TravelGalleryScreen = () => {
  return (
    <div className="travel-gallery-section py-5">
      <div className="site-container">
        <ScreenName name={"Travel gallery"}/>

        <div className="d-flex flex-column flex-lg-row justify-content-between gap-3 gap-lg-5 mb-4">
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
            <button
              type="button"
              key={`${place.image}-${index}`}
              className="masonry-item position-relative overflow-hidden rounded-4 mb-4 p-0 border-0 bg-transparent w-100 d-block"
              onClick={() => navigateTo(buildGalleryHref(place.albumSlug))}
              aria-label={`View full ${place.title} gallery`}
            >
              <img
                src={place.image}
                alt={place.title}
                className="image-card img-fluid w-100 rounded-4"
              />
              <span className="image-tag position-absolute top-0 end-0 m-2 px-3 py-1 rounded-pill bg-white text-dark fw-medium small shadow-sm">
                {place.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelGalleryScreen;
