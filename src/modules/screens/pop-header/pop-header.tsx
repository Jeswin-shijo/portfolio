import { useEffect, useState } from "react";
import "./header.css";
import logo from "../../../assets/logo/popup-logo-light.svg";
import { Fade } from "@mui/material";

type Props = {};

const PopHeader = (props: Props) => {
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY, navScrolled);

      // if (navScrolled) {
      setNavScrolled(window.scrollY > 140);
      // } else {
      //   setNavScrolled(window.scrollY > 70);
      // }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fade in={navScrolled} timeout={700}>
      <nav
        className={` pe-5 d-flex align-items-center justify-content-between sticky-navbar w-100 ${
          navScrolled ? "navbar-scrolled" : "d-none"
        }`}
      >
        <img
          className="my-2"
          src={logo}
          alt="Pop Up Tours"
          style={{ height: 70, width: 270 }}
        />
        <div className="  d-flex gap-4 text-white">
          <div>About Us</div>
          <div>International</div>
          <div>Domestic</div>
          <div>Honeymoon</div>
          <div>Gallery</div>
          <div>Contact Us</div>
        </div>
        <button className="btn btn-warning fw-semibold px-4">
          Get in Touch
        </button>
      </nav>
    </Fade>
  );
};

export default PopHeader;
