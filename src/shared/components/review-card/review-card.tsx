import Avatar from "../avatar";
import Stylesheet from "./style.module.scss";
import { Rating } from "@mui/material";
import type { ReviewItem } from "../../../data/reviews";

type Props = {
  cardStyle?: React.CSSProperties;
  review: ReviewItem;
};

const ReviewCard = ({ cardStyle, review }: Props) => {
  const profilePhoto = review.authorPhotoUri || "https://picsum.photos/seed/popup-review-avatar/120";

  return (
    <article className={Stylesheet.card} style={cardStyle}>
      <div className={Stylesheet.quoteMark} aria-hidden="true">
        &ldquo;
      </div>

      <h4 className={Stylesheet.title}>Google Review</h4>

      <p className={Stylesheet.copy}>
        &ldquo;{review.text}&rdquo;
      </p>

      <div className={Stylesheet.ratingRow}>
        <Rating readOnly value={review.rating} precision={0.5} />
      </div>

      <hr className={Stylesheet.divider} />

      <div className={Stylesheet.authorRow}>
        <Avatar file={profilePhoto} />
        <div className={Stylesheet.authorMeta}>
          {review.authorUri ? (
            <a
              className={Stylesheet.authorLink}
              href={review.authorUri}
              target="_blank"
              rel="noreferrer"
            >
              {review.authorName}
            </a>
          ) : (
            <h5 className={Stylesheet.authorName}>{review.authorName}</h5>
          )}
          <p className={Stylesheet.authorSubline}>
            {review.relativePublishTimeDescription || "Google review"}
          </p>
        </div>
      </div>

      {review.googleMapsUri ? (
        <a
          className={Stylesheet.reviewLink}
          href={review.googleMapsUri}
          target="_blank"
          rel="noreferrer"
        >
          View on Google
        </a>
      ) : null}
    </article>
  );
};

export default ReviewCard;
