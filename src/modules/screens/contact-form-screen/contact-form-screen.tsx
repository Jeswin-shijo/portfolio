import React, { useEffect, useState } from "react";
import "./contact-form-screen.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import GradientContainer from "../../../shared/components/gradient-container";
import PhoneInputField from "../../../shared/components/phone-input-field";
import { Dayjs } from "dayjs";
import { tourPackages } from "../../../data/tour-packages";
import {
  submitLeadForm,
  type LeadFormPayload,
  type LeadSubmitStatus,
} from "../../../shared/contact/lead-submission";
import { env, hasEmailJsConfig } from "../../../config/env";

type ContactFormData = LeadFormPayload & {
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

const vacationTypeOptions = ["Family", "Couple", "Group"] as const;

const destinationOptions = Array.from(
  new Set([
    ...tourPackages.map((item) => item.title),
    "Ooty",
    "Alleppey Backwaters",
    "Fort Aguada",
    "Botanical Garden",
    "Amber Fort",
    "Radhanagar Beach",
    "Srinagar, Pahalgam",
  ])
);

const ContactFormScreen = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<LeadSubmitStatus | null>(null);
  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : new URLSearchParams();
  const prefilledDestination = searchParams.get("destination")?.trim() || "";
  const prefilledVacationType = searchParams.get("vacationType")?.trim() || "";

  const isEmailJsConfigured = hasEmailJsConfig();
  const whatsappApiUrl = env.whatsapp.apiUrl;

  const updateField = (name: keyof ContactFormData, value: string | Dayjs | null) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setFormData({
      ...initialFormData,
      destination: destinationOptions.includes(prefilledDestination)
        ? prefilledDestination
        : "",
      vacationType: vacationTypeOptions.includes(
        prefilledVacationType as (typeof vacationTypeOptions)[number]
      )
        ? prefilledVacationType
        : "",
    });
    setSubmitStatus(null);
  }, [prefilledDestination, prefilledVacationType]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus(null);

    if (formData.website.trim()) {
      return;
    }

    if (!isEmailJsConfigured && !whatsappApiUrl) {
      setSubmitStatus({
        type: "error",
        message: "Form channels are not configured yet.",
      });
      return;
    }

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.whatsapp.trim() ||
      !formData.destination.trim()
    ) {
      setSubmitStatus({
        type: "error",
        message:
          "Please fill Name, Email, WhatsApp number, and Travel Destination.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { status, shouldReset } = await submitLeadForm(formData, {
        emailJsServiceId: env.emailJs.serviceId,
        emailJsTemplateId: env.emailJs.templateId,
        emailJsPublicKey: env.emailJs.publicKey,
        whatsappApiUrl,
      });

      setSubmitStatus(status);

      if (shouldReset) {
        setFormData({
          ...initialFormData,
          destination: destinationOptions.includes(prefilledDestination)
            ? prefilledDestination
            : "",
          vacationType: vacationTypeOptions.includes(
            prefilledVacationType as (typeof vacationTypeOptions)[number]
          )
            ? prefilledVacationType
            : "",
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
                      <PhoneInputField
                        value={formData.whatsapp}
                        onChange={(phone) => updateField("whatsapp", phone)}
                        name="whatsapp"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label mb-3 secondary-text">
                      Phone
                    </label>
                    <div className="input-group">
                      <PhoneInputField
                        value={formData.phone}
                        onChange={(phone) => updateField("phone", phone)}
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
                        {destinationOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
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
                        {vacationTypeOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
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
