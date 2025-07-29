import React from "react";
import Stylesheet from "./contact-card.module.scss";

const ContactCard = () => {
  return (
    <div className={Stylesheet.contactCard}>
      <h2 className={Stylesheet.title}>You Have Any Questions?</h2>
      <p className={Stylesheet.text}>
        our team will answer all your questions. <br />
        we ensure a quick response
      </p>
      <button className={Stylesheet.button}>
        Contact Us <i className="bi bi-arrow-up-right"></i>
      </button>
    </div>
  );
};

export default ContactCard;
