import ReviewCard from "../../../shared/components/review-card";
import Marquee from "../../../shared/components/marquee";
import ScreenName from "../../../shared/components/screen-name";

type Props = {};

const ReviewScreen = (props: Props) => {
  return (
    <div className="bg-blu py-5 p-5">
      <div className="p-5">
       <ScreenName name={"Testimonial"}/>

        <div className="d-flex justify-content-between flex-wrap align-items-center mb-4">
          <h2
            className="screen-title"
          >
            Regards From <br /> Travelers
          </h2>
          <p className="text-muted secondary-text" style={{ maxWidth: "50%" }}>
            Embark on a journey through our most sought-after destinations -
            from serene hill stations and sun-kissed beaches to vibrant cities
            and cultural wonders.
          </p>
        </div>
        <div className="d-flex w-100 justify-content-around">
          <Marquee speed={50} pauseOnHover>
            <ReviewCard cardStyle={{width: '390px', margin: '10px'}}/>
            <ReviewCard cardStyle={{width: '390px', margin: '10px'}}/>
            <ReviewCard cardStyle={{width: '390px', margin: '10px'}}/>
            <ReviewCard cardStyle={{width: '390px', margin: '10px'}}/>
            <ReviewCard cardStyle={{width: '390px', margin: '10px'}}/>
            <ReviewCard cardStyle={{width: '390px', margin: '10px'}}/>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default ReviewScreen;
