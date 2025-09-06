import ReviewCard from "../../../shared/components/review-card";

type Props = {};

const ReviewScreen = (props: Props) => {
  return (
    <div className="bg-blu py-5 p-5">
      <div className="p-5">
        <span className="border border-secondary text-secondary px-3 py-1 rounded-3 small d-inline-block mb-3">
          Testimonial
        </span>

        <div className="d-flex justify-content-between flex-wrap align-items-center mb-4">
          <h2
            className="fw-semibold"
            style={{ fontFamily: "Ivy Mode", fontSize: 50, color:"#0c2d57" }}
          >
            Regards From <br /> Travelers
          </h2>
          <p className="text-muted" style={{ maxWidth: "50%" }}>
            Embark on a journey through our most sought-after destinations -
            from serene hill stations and sun-kissed beaches to vibrant cities
            and cultural wonders.
          </p>
        </div>
        <div className="d-flex w-100 justify-content-around">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </div>
  );
};

export default ReviewScreen;
