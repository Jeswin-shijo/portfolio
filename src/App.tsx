import "./App.css";
import HomeScreen from "./modules/screens/home-screen";
import AboutUsSection from "./modules/screens/about-us-screen/about-us-section";
import DestinationScreen from "./modules/screens/destination-screen";
import PopularPlacesScreen from "./modules/screens/popular-places-screen";
import TourPackagesScreen from "./modules/screens/tour-packages-screen";
import AdvertiseScreen from "./modules/screens/advertise-screen";
import ReviewScreen from "./modules/screens/reviews-screen/review-screen";
import FAQScreen from "./modules/screens/faq-screen";
import TravelBlogScreen from "./modules/screens/travel-blog-screen";
import LandingScreen from "./modules/screens/landing-screen";
import StickyWhatsApp from "./common/sticky-whatsapp";
import TravelGalleryScreen from "./modules/screens/travel-gallery-screen";

function App() {
  return (
    <div>
      <HomeScreen />
      <div id="about">
        <AboutUsSection />
      </div>
      <div id="domestic">
        <DestinationScreen />
      </div>
      <div id="popular">
        <PopularPlacesScreen />
      </div>
      <div id="tours">
        <TourPackagesScreen />
      </div>
      <div id="ads">
        <AdvertiseScreen />
      </div>
      <div>
        <TravelGalleryScreen/>
      </div>
      <div id="reviews">
        <ReviewScreen />
      </div>
      <div id="faq">
        <FAQScreen />
      </div>
      <div id="blogs">
        <TravelBlogScreen />
      </div>
      <div id="landing">
        <LandingScreen />
      </div>
      <StickyWhatsApp />
    </div>
  );
}

export default App;
