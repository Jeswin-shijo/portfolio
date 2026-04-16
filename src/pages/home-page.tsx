import AboutUsSection from "../modules/screens/about-us-screen/about-us-section";
import AdvertiseScreen from "../modules/screens/advertise-screen";
import DestinationScreen from "../modules/screens/destination-screen";
import FAQScreen from "../modules/screens/faq-screen";
import HomeScreen from "../modules/screens/home-screen";
import LandingScreen from "../modules/screens/landing-screen";
import PopularPlacesScreen from "../modules/screens/popular-places-screen";
import ReviewScreen from "../modules/screens/reviews-screen/review-screen";
import TourPackagesScreen from "../modules/screens/tour-packages-screen";
import TravelBlogScreen from "../modules/screens/travel-blog-screen";
import TravelGalleryScreen from "../modules/screens/travel-gallery-screen";

const HomePage = () => {
  return (
    <>
      <HomeScreen />
      <AboutUsSection />
      <section id="domestic" className="header-scroll-target">
        <DestinationScreen />
      </section>
      <section id="honeymoon" className="header-scroll-target">
        <PopularPlacesScreen />
      </section>
      <TourPackagesScreen />
      <TravelGalleryScreen />
      <AdvertiseScreen />
      <ReviewScreen />
      <FAQScreen />
      <TravelBlogScreen />
      <LandingScreen />
    </>
  );
};

export default HomePage;
