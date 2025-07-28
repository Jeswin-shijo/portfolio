import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './modules/screens/home-screen';
import AboutUsSection from './modules/screens/about-us-screen/about-us-section';
import DestinationScreen from './modules/screens/destination-screen';

function App() {
  return (
    // <div className="App">
     
     <>
      {/* // <div className="App"> */}
      <HomePage /><AboutUsSection /><DestinationScreen/></>

    // </div>
  );
}

export default App;
