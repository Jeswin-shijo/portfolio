import "./home-screen.css";
import FilterSection from "../components/filter-section/filter-section";
import logo from "../../../assets/logo/popup-logo-light.svg";
import heroVideo from "../../../assets/background/back.mp4";

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <video className="home-background-video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="home-video-overlay" />

      <nav
        className={`navbar px-5 pt-3 d-flex align-items-end justify-content-between top-0 w-100 z-3 bg-transparent`}
      >
        <img
          src={logo}
          alt="Pop Up Tours"
          style={{ height: 100, width: 270 }}
        />
        <div className="nav-links pb-3 d-flex gap-4 text-white">
          <a href="#about">About Us</a>
          <a href="#international">International</a>
          <a href="#domestic">Domestic</a>
          <a href="#honeymoon">Honeymoon</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact Us</a>
        </div>
        <button className="btn btn-warning fw-semibold px-4 mb-2">
          Get in Touch
        </button>
      </nav>
      <hr style={{ color:"#fff", borderTop: '2px solid #fff' }}/>
      <div className="hero-content text-white text-start d-flex flex-column align-items-start justify-content-start ">
        <h1
          className="title-text"
        >
          Start your unforgettable
          <br />
          journey with us.
        </h1>
        <p className="sub-text">The best travel for your journey begins now</p>

        <div className="d-flex justify-content-start mt-5">
          <FilterSection />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
