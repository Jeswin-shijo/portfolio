import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './modules/screens/home-screen';
import AboutUsSection from './modules/screens/about-us-screen/about-us-section';
import DestinationScreen from './modules/screens/destination-screen';
import PopularPlacesScreen from './modules/screens/popular-places-screen';
import TourPackagesScreen from './modules/screens/tour-packages-screen';
import AdvertiseScreen from './modules/screens/advertise-screen';
import ReviewScreen from './modules/screens/reviews-screen/review-screen';
import FAQScreen from './modules/screens/faq-screen';
import TravelBlogScreen from './modules/screens/travel-blog-screen';

function App() {
  return (
    // <div className="App">
     
     <>
      {/* // <div className="App"> */}
      <HomePage /><AboutUsSection /><DestinationScreen/><PopularPlacesScreen/><TourPackagesScreen/><AdvertiseScreen/><ReviewScreen/><FAQScreen/><TravelBlogScreen/></>

    // </div>
  );
}

export default App;
