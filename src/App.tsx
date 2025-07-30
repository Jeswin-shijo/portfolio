import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './modules/screens/home-screen';
import AboutUsSection from './modules/screens/about-us-screen/about-us-section';
import DestinationScreen from './modules/screens/destination-screen';
import PopularPlacesScreen from './modules/screens/popular-places-screen';
import TourPackagesScreen from './modules/screens/tour-packages-screen';
import AdvertiseScreen from './modules/screens/advertise-screen';
import ReviewScreen from './modules/screens/reviews-screen/review-screen';
import FAQScreen from './modules/screens/faq-screen';
import TravelBlogScreen from './modules/screens/travel-blog-screen';
import LandingScreen from './modules/screens/landing-screen';

function App() {
  return (
    // <div className="App">
     
     <>
      {/* // <div className="App"> */}
      <HomeScreen /><AboutUsSection /><DestinationScreen/><PopularPlacesScreen/><TourPackagesScreen/><AdvertiseScreen/><ReviewScreen/><FAQScreen/><TravelBlogScreen/><LandingScreen/></>

    // </div>
  );
}

export default App;
