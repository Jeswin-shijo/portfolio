import Avatar from "../avatar";
import Stylesheet from "./style.module.scss";
import { Rating } from "@mui/material";

type Props = {
  cardStyle?: any;
};

const ReviewCard = ({cardStyle}: Props) => {
  return (
    <div className={`${Stylesheet.card} px-4`} style={cardStyle}>
      <h1 className="title-font pwdr-blu p-0 m-0">
        <span style={{ fontSize: "5rem", float: "right" }}>
          &ldquo;
        </span>
      </h1>
      <h4 className="title-font blu-txt pt-4" style={{ fontFamily: "Ivy Mode" }}>Great Work</h4>

      <p className="sub-font overflow-hidden" style={{ height: "37%" }}>
        &ldquo;
        {
          "Fontsource can be configured to load specific subsets, weights and styles.Embark on a journey from sun-kissed beaches to vibrant cities and cultural wonders"
        }
        &rdquo;
      </p>
      <Rating readOnly value={4} precision={0.1} />

      <hr className="" />
      <div className="d-flex pb-3">
        <Avatar file={"https://picsum.photos/id/64/200/300"} />
        <div>
          <h5 className="title-font blu-txt ps-2 w-100 py-0 my-0" style={{ fontFamily: "Ivy Mode" }}>Ali Tufan</h5>
          <p className="sub-font fw-lighter text-muted ps-2 w-100 py-0 my-0">
            Marketing
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
