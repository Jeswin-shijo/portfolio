import React from "react";
import Stylesheet from "./contact-card.module.scss";
import { navigateTo } from "../navigation/site-navigation";

const ContactCard = () => {
  return (
    <div className={Stylesheet.contactCard}>
      <h2 className={Stylesheet.title}>You Have Any Questions?</h2>
      <p className={Stylesheet.text}>
        Our team will answer your questions. <br />
        We make sure you get a quick response.
      </p>
      <button
        type="button"
        className={Stylesheet.button}
        onClick={() => navigateTo("/contact")}
      >
        Contact Us <i className="bi bi-arrow-up-right"></i>
      </button>
    </div>
  );
};

export default ContactCard;
