import "./home-screen.css";
import FilterSection from "../components/filter-section/filter-section";
import logo from "../../../assets/logo/popup-logo-light.svg";
import heroVideo from "../../../assets/background/back.mp4";
import {
  navigateTo,
  siteNavItems,
} from "../../../shared/navigation/site-navigation";

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <video className="home-background-video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="home-video-overlay" />
      <div className="home-screen__inner site-container">
        <nav
          className="navbar home-screen__nav d-flex justify-content-between top-0 w-100 z-3 bg-transparent"
        >
          <button
            type="button"
            className="home-hero-logo"
            onClick={() => navigateTo("/")}
          >
            <img
              className="home-hero-logo-image"
              src={logo}
              alt="Pop Up Tours"
            />
          </button>
          <div className="nav-links home-screen__links d-flex gap-4 text-white">
            {siteNavItems.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => navigateTo(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            className="btn btn-warning fw-semibold px-4 home-screen__cta"
            onClick={() => navigateTo("/contact")}
          >
            Get in Touch
          </button>
        </nav>
        <hr className="home-screen__divider" />
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
    </div>
  );
};

export default HomeScreen;
