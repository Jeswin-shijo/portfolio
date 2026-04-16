import GradientContainer from "../gradient-container";
import "./mini-contact-form.css";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const MiniContactForm = () => {
  return (
    <GradientContainer
      className="gradient-hover p-4 rounded-4"
      style={{ width: "100%", maxWidth: 430 }}
    >
      <h4
        style={{ fontFamily: "Ivy mode", color: "white" }}
        className="pt-4 pb-2"
      >
        Enjoy your vacation trip at <br /> your dream place
      </h4>
      <p style={{ color: "white", fontFamily: "Manrope" }} className="mb-4">
        Tell us what kind of holiday you have in mind and we will help shape
        the right itinerary for you.
      </p>
      <form className="mb-4">
        <div className="mb-4">
          <label className="form-label mb-3 secondary-text text-white">
            Name
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              style={{ height: 50, borderRadius: 8 }}
            />
          </div>
        </div>
        <div>
          <label className="form-label mb-3 secondary-text text-white">
            Whatsapp
          </label>
          <div className="input-group">
            <PhoneInput
              country={"in"}
              value={"phone"}
              onChange={(phone) => console.log(phone)}
              containerStyle={{
                borderRadius: "8px",
              }}
              inputStyle={{
                height: "50px",
                borderRadius: "8px 8px 8px 8px",
                width: "100%",
              }}
            />
          </div>
        </div>
        <div className="col-12 pt-4 mt-2">
          <button type="button" className="mini-contact-form__submit-btn">
            <span className="mini-contact-form__submit-label">Send Message</span>
            <i className="bi bi-arrow-up-right fs-5"></i>
          </button>
        </div>
      </form>
    </GradientContainer>
  );
};

export default MiniContactForm;
