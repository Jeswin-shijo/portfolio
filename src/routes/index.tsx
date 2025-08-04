import { Routes, Route } from "react-router-dom";
import React from 'react'
import HomeScreen from "../modules/screens/home-screen";
import AboutUsSection from "../modules/screens/about-us-screen";
import DestinationScreen from "../modules/screens/destination-screen";
import PopularPlacesScreen from "../modules/screens/popular-places-screen";
import TourPackagesScreen from "../modules/screens/tour-packages-screen";
import AdvertiseScreen from "../modules/screens/advertise-screen";
import ReviewScreen from "../modules/screens/reviews-screen";
import FAQScreen from "../modules/screens/faq-screen";
import TravelBlogScreen from "../modules/screens/travel-blog-screen";
import LandingScreen from "../modules/screens/landing-screen";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomeScreen/>}></Route>
        <Route path="/about" element={<AboutUsSection/>}></Route>
        <Route path="/destination" element={<DestinationScreen/>}></Route>
        <Route path="/popular_places" element={<PopularPlacesScreen/>}></Route>
        <Route path="/packages" element={<TourPackagesScreen/>}></Route>
        <Route path="/advertise" element={<AdvertiseScreen/>}></Route>
        <Route path="/review" element={<ReviewScreen/>}></Route>
        <Route path="/faq" element={<FAQScreen/>}></Route>
        <Route path="/travel_blog" element={<TravelBlogScreen/>}></Route>
        <Route path="/landing" element={<LandingScreen/>}></Route>
    </Routes>
  )
}

export default AppRoutes