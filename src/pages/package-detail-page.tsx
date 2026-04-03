import { useState } from "react";
import "./package-detail-page.css";
import {
  buildPackageHref,
  getPackageBySlug,
  tourPackages,
} from "../data/tour-packages";
import InternationalPackageDetailScreen from "../modules/Details-screens/international-package-detail-screen/international-package-detail-screen";
import LandingScreen from "../modules/screens/landing-screen";
import ReviewScreen from "../modules/screens/reviews-screen/review-screen";
import PhotoGalleryModal from "../shared/components/photo-gallery-modal/photo-gallery-modal";
import PageHero from "../shared/components/page-hero/page-hero";
import SharePopup from "../shared/components/share-popup/share-popup";
import { navigateTo } from "../shared/navigation/site-navigation";

type Props = {
  slug: string;
};

const navKeyByCategory = {
  international: "international",
  domestic: "domestic",
  honeymoon: "honeymoon",
} as const;

const PackageDetailPage = ({ slug }: Props) => {
  const packageData = getPackageBySlug(slug) ?? tourPackages[0];
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const relatedTrips = packageData.relatedSlugs
    .map((item) => getPackageBySlug(item))
    .filter(
      (item): item is NonNullable<ReturnType<typeof getPackageBySlug>> =>
        Boolean(item)
    );
  const galleryImages = packageData.galleryImages;

  const openGalleryAt = (index: number) => {
    setActiveGalleryIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <>
      <PageHero
        title={`${packageData.title} Tour Packages`}
        backgroundImage={`url("${packageData.heroBackgroundImage}")`}
        activeNav={navKeyByCategory[packageData.category]}
        meta={
          <>
            <div className="package-detail-page__hero-meta">
              <span>
                <i className="bi bi-sun"></i>
                {packageData.days} Days
              </span>
              <span>
                <i className="bi bi-moon"></i>
                {packageData.nights} Nights
              </span>
            </div>
            <div className="package-detail-page__hero-price">
              <span>Starts From</span>
              <strong>{packageData.startingPrice}</strong>
            </div>
          </>
        }
        actions={
          <div className="package-detail-page__hero-actions">
            <SharePopup
              className="package-detail-page__share-popup"
              buttonClassName="package-detail-page__share"
              title={`${packageData.title} Tour Packages`}
              text={`Check out this ${packageData.title} package on Popup Tours`}
            />
            <button
              type="button"
              className="package-detail-page__enquire"
              onClick={() => navigateTo("/contact")}
            >
              Enquire Now
            </button>
          </div>
        }
      >
        <div className="package-detail-page__gallery">
          <button
            type="button"
            className="package-detail-page__gallery-shot package-detail-page__gallery-shot--main"
            onClick={() => openGalleryAt(0)}
            aria-label={`Open ${packageData.title} photo 1`}
          >
            <img
              className="package-detail-page__gallery-main"
              src={galleryImages[0]}
              alt={`${packageData.title} featured view`}
            />
          </button>
          <div className="package-detail-page__gallery-side">
            <button
              type="button"
              className="package-detail-page__gallery-shot"
              onClick={() => openGalleryAt(1)}
              aria-label={`Open ${packageData.title} photo 2`}
            >
              <img
                src={galleryImages[1]}
                alt={`${packageData.title} gallery view 1`}
              />
            </button>
            <button
              type="button"
              className="package-detail-page__gallery-shot"
              onClick={() => openGalleryAt(2)}
              aria-label={`Open ${packageData.title} photo 3`}
            >
              <img
                src={galleryImages[2]}
                alt={`${packageData.title} gallery view 2`}
              />
            </button>
            <button
              type="button"
              className="package-detail-page__gallery-shot"
              onClick={() => openGalleryAt(3)}
              aria-label={`Open ${packageData.title} photo 4`}
            >
              <img
                src={galleryImages[3]}
                alt={`${packageData.title} gallery view 3`}
              />
            </button>
            <button
              type="button"
              className="package-detail-page__see-photos"
              onClick={() => openGalleryAt(0)}
              aria-label={`See all ${galleryImages.length} photos`}
            >
              <img
                src={packageData.cardImage}
                alt={`${packageData.title} extra preview`}
              />
              <span className="d-flex">See all {galleryImages.length} Photos</span>
            </button>
          </div>
        </div>
      </PageHero>

      <PhotoGalleryModal
        isOpen={isGalleryOpen}
        title={`${packageData.title} Tour Package`}
        images={galleryImages}
        activeIndex={activeGalleryIndex}
        onClose={() => setIsGalleryOpen(false)}
        onSelect={setActiveGalleryIndex}
      />

      <InternationalPackageDetailScreen packageData={packageData} />

      <section className="package-detail-page__related">
        <div className="package-detail-page__related-inner">
          <h2 className="package-detail-page__related-title">
            Related trips you might be interested in
          </h2>
          <div className="package-detail-page__related-grid">
            {relatedTrips.map((trip) => (
              <button
                key={trip.slug}
                type="button"
                className="package-detail-page__related-card"
                onClick={() => navigateTo(buildPackageHref(trip.slug))}
              >
                <img src={trip.cardImage} alt={trip.title} />
                <span className="package-detail-page__related-price">
                  {trip.startingPrice}
                </span>
                <div className="package-detail-page__related-content">
                  <h3>{trip.destinationTitle}</h3>
                  <p>
                    {trip.days} Days  •  {trip.nights} Nights
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ReviewScreen />
      <LandingScreen />
    </>
  );
};

export default PackageDetailPage;
