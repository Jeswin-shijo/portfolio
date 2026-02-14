import { useState } from "react";
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
import InternationalPackageDetailScreen from "./modules/Details-screens/international-package-detail-screen/international-package-detail-screen";
import MiniContactForm from "./shared/components/mini-contact-form";
import WhyWeBetterScreen from "./modules/screens/why-we-better-screen";
import AboutWhoWeAreScreen from "./modules/screens/about-who-we-are-screen";
import SearchBar from "./shared/components/search-bar/search-bar";
import LocationScreen from "./modules/screens/location-screen";
import ContactFormScreen from "./modules/screens/contact-form-screen";
import PopHeader from "./modules/screens/pop-header";
import GalleryPage, {
  type Album as GalleryAlbum,
} from "./modules/screens/gallery-page-screen/gallery-man-screen";
import GalleryViewPage from "./modules/screens/gallery-page-screen/sub-screen/gallery-view-page";

function App() {
  const [selectedAlbum, setSelectedAlbum] = useState<GalleryAlbum | null>(null);

  return (
    <div>
      <PopHeader/>
      <HomeScreen />
      <div id="about" className="header-scroll-target">
        <AboutUsSection />
      </div>
      <div id="international" className="header-scroll-target">
        <DestinationScreen />
      </div>
      <div id="domestic" className="header-scroll-target">
        <PopularPlacesScreen />
      </div>
      <div id="honeymoon" className="header-scroll-target">
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
        <InternationalPackageDetailScreen/>
        
        <WhyWeBetterScreen/>
        <AboutWhoWeAreScreen/>
        <SearchBar/>
        <LocationScreen/>
        <div id="contact" className="header-scroll-target">
          <ContactFormScreen/>
        </div>
        <div id="gallery" className="header-scroll-target">
          {!selectedAlbum ? (
            <GalleryPage onAlbumSelect={setSelectedAlbum} />
          ) : (
            <GalleryViewPage
              albumTitle={selectedAlbum.title}
              images={selectedAlbum.images}
              onBack={() => setSelectedAlbum(null)}
            />
          )}
        </div>
      </div>
      <StickyWhatsApp />
    </div>
  );
}

export default App;
