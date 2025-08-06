import React, { useEffect, useRef, useState } from "react";
import "./home-screen.css";
import bgImage1 from "../../../assets/background/view-beautiful-rainbow-appearing-end-road.jpg"; // Replace with actual path
import bgImage2 from "../../../assets/background/0ZUBmNNVLRCfn3NdU55nQ00UF64m2ObtcDS0grx02fA.avif"; // Replace with actual path
import bgImage3 from "../../../assets/background/360_F_270350073_WO6yQAdptEnAhYKM5GuA9035wbRnVJSr.jpg"; // Replace with actual path
import bgImage4 from "../../../assets/background/images (1).jpeg"; // Replace with actual path
import bgImage5 from "../../../assets/background/images.jpeg"; // Replace with actual path
import FilterSection from "../components/filter-section/filter-section";
import logo from "../../../assets/logo/popup-logo-light.svg";

const HomeScreen = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
 const [navScrolled, setNavScrolled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const backgroundImages = [bgImage1, bgImage2, bgImage3, bgImage4, bgImage5];

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const onSliderDotClick = (index: number) => {
    setCurrentIndex(index);
    startAutoSlide(); // Reset timer
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="container home-screen"
      style={{
        backgroundImage: `url(${backgroundImages[currentIndex]})`,
        transition: "background-image 1s ease-in-out",
      }}
    >
      <nav
        className={`navbar px-5 py-3 d-flex align-items-center justify-content-between top-0 w-100 z-3 ${
          navScrolled ? "navbar-scrolled" : "bg-transparent"
        }`}
      >
        <img
          src={logo}
          alt="Pop Up Tours"
          style={{ height: 100, width: 270, marginBottom: 20 }}
        />
        <div className="nav-links d-flex gap-4 text-white">
          <a href="#about">About Us</a>
          <a href="#domestic">International</a>
          <a href="#domestic">Domestic</a>
          <a href="#tours">Honeymoon</a>
          <a href="#reviews">Gallery</a>
          <a href="#faq">Contact Us</a>
        </div>
        <button className="btn btn-warning fw-semibold px-4">
          Get in Touch
        </button>
      </nav>
      <div className="hero-content text-white text-start d-flex flex-column align-items-start justify-content-start ">
        <h1
          className="fw-semibold"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 60 }}
        >
          Start your unforgettable
          <br />
          journey with us.
        </h1>
        <p className="lead ">The best travel for your journey begins now</p>

        <div className="d-flex justify-content-start mt-5">
          <FilterSection />
        </div>
      </div>
      <div className="d-flex dot-navigation position-absolute bottom-0 start-50">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            onClick={() => onSliderDotClick(i)}
            className={`dot mb-3 me-3 rounded-circle ${
              i === currentIndex ? "active" : ""
            }`}
          ></div>
        ))}
        {/* <div className="arrow-down text-warning mt-2">
          <i className="bi bi-chevron-down"></i>
        </div> */}
      </div>
    </div>
  );
};

export default HomeScreen;
