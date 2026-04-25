import { useEffect, useMemo, useState } from "react";
import {
  buildPackageHref,
  featuredDestinationPackages,
} from "../../../data/tour-packages";
import TourCard from "./tourcard";
import ScreenName from "../../../shared/components/screen-name";
import { navigateTo } from "../../../shared/navigation/site-navigation";

const getVisibleCount = (width: number) => {
  if (width < 576) return 1;
  if (width < 992) return 2;
  return 4;
};

const DestinationScreen = () => {
  const [visibleStart, setVisibleStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(() =>
    typeof window === "undefined" ? 4 : getVisibleCount(window.innerWidth)
  );

  useEffect(() => {
    const syncVisibleCount = () => {
      setVisibleCount(getVisibleCount(window.innerWidth));
    };

    syncVisibleCount();
    window.addEventListener("resize", syncVisibleCount);
    return () => window.removeEventListener("resize", syncVisibleCount);
  }, []);

  useEffect(() => {
    setVisibleStart((current) =>
      Math.min(
        current,
        Math.max(0, featuredDestinationPackages.length - visibleCount)
      )
    );
  }, [visibleCount]);

  const maxVisibleStart = Math.max(
    0,
    featuredDestinationPackages.length - visibleCount
  );
  const canGoPrev = visibleStart > 0;
  const canGoNext = visibleStart < maxVisibleStart;
  const visiblePackages = useMemo(
    () =>
      featuredDestinationPackages.slice(
        visibleStart,
        visibleStart + visibleCount
      ),
    [visibleCount, visibleStart]
  );
  const featuredPackage =
    visiblePackages[0] || featuredDestinationPackages[0];

  return (
    <>
      <section className="py-5">
        <div className="site-container d-flex flex-column flex-lg-row justify-content-between align-items-start gap-5">
          <div className="text-start">
            <ScreenName name={"Destination"}/>
            <h2
              className="screen-title"
            >
              Explore Our Popular <br /> destination
            </h2>
          </div>

          <div
            className="d-flex flex-column gap-3"
          >
            <p className="text-muted secondary-text">
              Embark on a journey through our most sought-after destinations —
              from serene hill stations and sun-kissed beaches to vibrant cities
              and cultural wonders, each
            </p>

            <button
              type="button"
              className="btn btn-warning text-dark d-inline-flex align-items-center gap-2 rounded-3 pt-press"
              style={{ maxWidth: "170px" }}
              onClick={() => navigateTo(buildPackageHref(featuredPackage.slug))}
            >
              Explore More <i className="bi bi-box-arrow-up-right"></i>
            </button>

            <div className="d-flex justify-content-end gap-3">
              <button
                type="button"
                className={`btn rounded-3 pt-press ${
                  canGoPrev ? "btn-warning text-white" : "btn-outline-secondary"
                }`}
                onClick={() =>
                  setVisibleStart((current) => Math.max(0, current - 1))
                }
                disabled={!canGoPrev}
                aria-label="Show previous destinations"
              >
                <i className="bi bi-arrow-left"></i>
              </button>

              <button
                type="button"
                className={`btn rounded-3 pt-press ${
                  canGoNext ? "btn-warning text-white" : "btn-outline-secondary"
                }`}
                onClick={() =>
                  setVisibleStart((current) =>
                    Math.min(maxVisibleStart, current + 1)
                  )
                }
                disabled={!canGoNext}
                aria-label="Show next destinations"
              >
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-5 pt-0">
        <div
          key={visibleStart}
          className="site-container d-flex gap-4 flex-wrap justify-content-between pt-0 destination-cards"
        >
          {visiblePackages.map((pkg) => (
            <TourCard
              key={pkg.slug}
              image={pkg.cardImage}
              tag={pkg.destinationTag}
              title={pkg.destinationTitle}
              description={pkg.destinationDescription}
              price={pkg.startingPrice}
              href={buildPackageHref(pkg.slug)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default DestinationScreen;
