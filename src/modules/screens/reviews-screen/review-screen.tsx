import { useEffect, useState } from "react";
import ReviewCard from "../../../shared/components/review-card";
import Marquee from "../../../shared/components/marquee";
import ScreenName from "../../../shared/components/screen-name";
import "./review-screen.css";
import {
  fallbackReviews,
  type ReviewsApiResponse,
} from "../../../data/reviews";

type Props = {};

const configuredReviewsApiUrl = process.env.REACT_APP_REVIEWS_API_URL?.trim();
const isLocalDevelopment =
  process.env.NODE_ENV === "development" &&
  typeof window !== "undefined" &&
  /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname);
const reviewsApiUrl =
  configuredReviewsApiUrl || (isLocalDevelopment ? null : "/api/google-reviews");

const ReviewScreen = (props: Props) => {
  const [reviewsData, setReviewsData] = useState<ReviewsApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    if (!reviewsApiUrl) {
      setIsLoading(false);
      setLoadError(null);
      return;
    }

    const controller = new AbortController();

    const loadReviews = async () => {
      try {
        const response = await fetch(reviewsApiUrl, {
          signal: controller.signal,
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || "Unable to load Google reviews.");
        }

        const payload = (await response.json()) as ReviewsApiResponse;
        setReviewsData(payload);
        setLoadError(null);
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        setLoadError(
          error instanceof Error ? error.message : "Unable to load Google reviews."
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadReviews();

    return () => controller.abort();
  }, []);

  const reviews =
    reviewsData && reviewsData.reviews.length > 0
      ? reviewsData.reviews
      : fallbackReviews;
  const isUsingFallback = !reviewsData || reviewsData.reviews.length === 0;

  return (
    <div className="review-screen bg-blu py-5">
      <div className="review-screen__inner site-container">
        <ScreenName name={"Testimonial"} />

        <div className="review-screen__header d-flex flex-column flex-lg-row justify-content-between align-items-start gap-3 gap-lg-4 mb-4">
          <div className="review-screen__lead">
            <h2 className="screen-title">
            Regards From <br /> Travelers
            </h2>
            <p className="text-muted secondary-text mb-0">
              {reviewsData?.placeName
                ? `${reviewsData.placeName} Google reviews, sorted by relevance.`
                : "Live Google reviews can be shown here once your Places API details are configured."}
            </p>
          </div>

          <div className="review-screen__meta text-muted secondary-text">
            {reviewsData?.rating && reviewsData?.userRatingCount ? (
              <p className="mb-2">
                Rated {reviewsData.rating.toFixed(1)} from{" "}
                {reviewsData.userRatingCount.toLocaleString()} Google ratings.
              </p>
            ) : null}
            <p className="mb-0">
              {isUsingFallback
                ? isLoading
                  ? "Loading live review data..."
                  : "Showing sample reviews until Google Places is configured."
                : "Live review feed is active."}
            </p>
          </div>
        </div>
        <div className="review-screen__marquee d-flex w-100 justify-content-around">
          <Marquee speed={50} pauseOnHover>
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
                cardStyle={{ width: "min(390px, calc(100vw - 48px))", margin: "10px" }}
              />
            ))}
          </Marquee>
        </div>
        {loadError && !isLoading ? (
          <p className="text-muted secondary-text mt-3 mb-0">
            Google review sync is not configured yet. Sample testimonials are
            showing for now.
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default ReviewScreen;
