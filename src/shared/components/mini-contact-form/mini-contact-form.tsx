import { useState } from "react";
import GradientContainer from "../gradient-container";
import "./mini-contact-form.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  submitLeadForm,
  type LeadSubmitStatus,
} from "../../contact/lead-submission";

type MiniContactFormProps = {
  destination?: string;
};

const MiniContactForm = ({
  destination = "General enquiry",
}: MiniContactFormProps) => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<LeadSubmitStatus | null>(null);

  const emailJsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const emailJsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const whatsappApiUrl = process.env.REACT_APP_WHATSAPP_API_URL;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus(null);

    if (!name.trim() || !whatsapp.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please fill your name and WhatsApp number.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { status, shouldReset } = await submitLeadForm(
        {
          name,
          email: "",
          whatsapp,
          phone: "",
          destination,
          travelDate: null,
          people: "",
          vacationType: "",
        },
        {
          emailJsServiceId,
          emailJsTemplateId,
          emailJsPublicKey,
          whatsappApiUrl,
        }
      );

      setSubmitStatus(status);

      if (shouldReset) {
        setName("");
        setWhatsapp("");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="form-label mb-3 secondary-text text-white">
            Name
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
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
              value={whatsapp}
              onChange={(phone) => setWhatsapp(phone)}
              inputProps={{
                name: "mini-whatsapp",
                required: true,
              }}
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
          <button
            type="submit"
            className="mini-contact-form__submit-btn"
            disabled={isSubmitting}
          >
            <span className="mini-contact-form__submit-label">
              {isSubmitting ? "Sending..." : "Send Message"}
            </span>
            <i className="bi bi-arrow-up-right fs-5"></i>
          </button>
          {submitStatus ? (
            <p
              className={`mini-contact-form__status mini-contact-form__status--${submitStatus.type}`}
              role="status"
            >
              {submitStatus.message}
            </p>
          ) : null}
        </div>
      </form>
    </GradientContainer>
  );
};

export default MiniContactForm;
