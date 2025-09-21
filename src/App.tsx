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
import ContactFormScreen from "./modules/screens/contact-form-screen";

function App() {
  return (
    <div>
      <HomeScreen />
      <div>
        <AboutUsSection />
      </div>
      <div>
        <DestinationScreen />
      </div>
      <div>
        <PopularPlacesScreen />
      </div>
      <div>
        <TourPackagesScreen />
      </div>
      <div>
        <AdvertiseScreen />
      </div>
      <div>
        <TravelGalleryScreen/>
      </div>
      <div>
        <ReviewScreen />
      </div>
      <div>
        <FAQScreen />
      </div>
      <div>
        <TravelBlogScreen />
      </div>
      <div>
        <LandingScreen />
        <ContactFormScreen/>
      </div>
      <StickyWhatsApp />
    </div>
  );
}

export default App;
