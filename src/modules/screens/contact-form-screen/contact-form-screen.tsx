import React, { useState } from "react";
import "./contact-form-screen.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import GradientContainer from "../../../shared/components/gradient-container";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Dayjs } from "dayjs";

type SubmitStatus = {
  type: "success" | "error";
  message: string;
} | null;

type ContactFormData = {
  name: string;
  email: string;
  whatsapp: string;
  phone: string;
  destination: string;
  travelDate: Dayjs | null;
  people: string;
  vacationType: string;
  website: string;
};

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  whatsapp: "",
  phone: "",
  destination: "",
  travelDate: null,
  people: "",
  vacationType: "",
  website: "",
};

const ContactFormScreen = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const emailJsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const emailJsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const isEmailJsConfigured = Boolean(
    emailJsServiceId && emailJsTemplateId && emailJsPublicKey
  );
  const whatsappApiUrl =
    process.env.REACT_APP_WHATSAPP_API_URL ||
    "http://localhost:5001/api/whatsapp-lead";
  const isWhatsappConfigured = Boolean(whatsappApiUrl);

  const updateField = (name: keyof ContactFormData, value: string | Dayjs | null) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildTemplateParams = () => ({
    name: formData.name,
    email: formData.email,
    whatsapp: formData.whatsapp || "Not provided",
    phone: formData.phone || "Not provided",
    destination: formData.destination,
    date_of_travel: formData.travelDate
      ? formData.travelDate.format("DD MMM YYYY")
      : "Not provided",
    no_of_people: formData.people || "Not provided",
    vacation_type: formData.vacationType || "Not provided",
    submitted_at: new Date().toLocaleString(),
  });

  const sendEmailLead = async () => {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: emailJsServiceId,
        template_id: emailJsTemplateId,
        user_id: emailJsPublicKey,
        template_params: buildTemplateParams(),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Unable to send email lead.");
    }
  };

  const sendWhatsappLead = async () => {
    const response = await fetch(whatsappApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(buildTemplateParams()),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Unable to send WhatsApp lead.");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus(null);

    if (formData.website.trim()) {
      return;
    }

    if (!isEmailJsConfigured && !isWhatsappConfigured) {
      setSubmitStatus({
        type: "error",
        message: "Form channels are not configured yet.",
      });
      return;
    }

    if (!formData.name || !formData.email || !formData.destination) {
      setSubmitStatus({
        type: "error",
        message: "Please fill Name, Email, and Travel Destination.",
      });
      return;
    }

    setIsSubmitting(true);

    let emailSent = false;
    let whatsappSent = false;
    const errors: string[] = [];

    try {
      if (isEmailJsConfigured) {
        try {
          await sendEmailLead();
          emailSent = true;
        } catch {
          errors.push("email");
        }
      }

      if (isWhatsappConfigured) {
        try {
          await sendWhatsappLead();
          whatsappSent = true;
        } catch {
          errors.push("whatsapp");
        }
      }

      if (emailSent || whatsappSent) {
        setSubmitStatus({
          type: "success",
          message:
            errors.length > 0
              ? "Lead submitted. One channel failed, please verify integrations."
              : "Thanks! Your request was sent successfully.",
        });
        setFormData(initialFormData);
      } else {
        setSubmitStatus({
          type: "error",
          message: "Submission failed. Please check EmailJS/Twilio configuration.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form-screen py-5 bg-white">
      <div className="site-container">
        <div className="contact-form-screen__inner row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="screen-title mb-3">
              Ready to Find Your Next <br /> Destination?
            </h2>
            <p className="text-muted secondary-text">
              "Have questions or need help planning your next trip? Fill out the
              form below and our travel experts will get back to you shortly."
            </p>
            <div className="contact-form-screen__details my-4">
              <GradientContainer className="gradient-hover p-4 rounded-4">
                <h3 className="sub-title-text">Contact Details</h3>
                <div className="gradient-line-1"></div>
                <div className="gradient-line-2 mb-3"></div>
                <div className="d-flex align-items-center mb-4 mt-4">
                  <i className="fas fa-envelope me-2"></i>
                  <span>Info@popuptours.com</span>
                </div>

                <div className="contact-form-screen__phone-row d-flex align-items-center mb-4 mt-2">
                  <i className="fas fa-phone me-2"></i>
                  <span>+971 18 919891 &nbsp; | &nbsp; +971 18 946281</span>
                </div>
              </GradientContainer>
            </div>
          </div>

          <div className="contact-form-screen__form-column col-md-6">
            <div className="contact-form-screen__form-shell p-4 shadow rounded-3">
              <h1
                style={{
                  fontFamily: "Ivy mode",
                  fontWeight: 600,
                }}
              >
                Let's Talk
              </h1>
              <div>
                <div className="contact-form-screen__form-container mt-4">
                  <form className="row g-4" onSubmit={handleSubmit}>
                  <div className="honeypot-field" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={(e) => updateField("website", e.target.value)}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label mb-3 secondary-text">
                      Name
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        required
                        style={{ height: 50, borderRadius: 8 }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label mb-3 secondary-text">
                      Email
                    </label>
                    <div className="input-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        required
                        style={{ height: 50, borderRadius: 8 }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label mb-3 secondary-text">
                      Whatsapp
                    </label>
                    <div className="input-group">
                      <PhoneInput
                        country={"in"}
                        value={formData.whatsapp}
                        onChange={(phone) => updateField("whatsapp", phone)}
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

                  <div className="col-md-6">
                    <label className="form-label mb-3 secondary-text">
                      Phone
                    </label>
                    <div className="input-group">
                      <PhoneInput
                        country={"in"}
                        value={formData.phone}
                        onChange={(phone) => updateField("phone", phone)}
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

                  <div className="col-md-6">
                    <label className="form-label mb-3 secondary-text">
                      Travel Destination
                    </label>{" "}
                    <div className="input-group">
                      <select
                        name="destination"
                        className="form-select form-control"
                        value={formData.destination}
                        onChange={(e) => updateField("destination", e.target.value)}
                        required
                        style={{ height: 50, borderRadius: 8 }}
                      >
                        <option value="" disabled className="secondary-text">
                          Select Destination
                        </option>
                        <option>Sri Lanka</option>
                        <option>Bali</option>
                        <option>Thailand</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label mb-3 secondary-text">
                      Date of Travel
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Select date"
                        value={formData.travelDate}
                        onChange={(value) => updateField("travelDate", value)}
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            InputProps: {
                              sx: {
                                height: 50,
                                borderRadius: 2,
                                backgroundColor: "white",
                              },
                            },
                          },
                        }}
                      />
                    </LocalizationProvider>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label mb-3 secondary-text">
                      No. of People
                    </label>
                    <div className="input-group">
                      <input
                        type="number"
                        name="people"
                        className="form-control"
                        placeholder="Enter No of People"
                        min={1}
                        value={formData.people}
                        onChange={(e) => updateField("people", e.target.value)}
                        style={{ height: 50, borderRadius: 8 }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label mb-3 secondary-text">
                      Vacation Type
                    </label>
                    <div className="input-group">
                      <select
                        name="vacationType"
                        className="form-select form-control"
                        value={formData.vacationType}
                        onChange={(e) => updateField("vacationType", e.target.value)}
                        style={{ height: 50, borderRadius: 8 }}
                      >
                        <option value="" disabled className="secondary-text">
                          Select Type
                        </option>
                        <option>Family</option>
                        <option>Couple</option>
                        <option>Group</option>
                      </select>
                    </div>
                  </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="contact-form-screen__submit-btn"
                        disabled={isSubmitting}
                      >
                        <span className="contact-form-screen__submit-label">
                          {isSubmitting ? "Sending..." : "Submit"}
                        </span>
                        <i className="bi bi-arrow-up-right fs-5"></i>
                      </button>
                      {submitStatus && (
                        <p
                          className={`contact-submit-status ${
                            submitStatus.type === "success"
                              ? "contact-submit-success"
                              : "contact-submit-error"
                          }`}
                          role="status"
                        >
                          {submitStatus.message}
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormScreen;
