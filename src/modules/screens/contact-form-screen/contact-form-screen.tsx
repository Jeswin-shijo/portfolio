import React from "react";
import "./contact-form-screen.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import GradientContainer from "../../../shared/components/gradient-container";

const ContactFormScreen = () => {

  return (
    <section className="py-5 bg-white p-5">
      <div className="row align-items-center ps-5 pe-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <h2 className="screen-title mb-3">
            Ready to Find Your Next <br /> Destination?
          </h2>
          <p className="text-muted secondary-text">
            "Have questions or need help planning your next trip? Fill out the
            form below and our travel experts will get back to you shortly."
          </p>
          <div className="my-4" style={{ maxWidth: "400px" }}>
              <GradientContainer className="gradient-hover p-4 rounded">
              <h3 className="sub-title-text">Contact Details</h3>
              <div className="gradient-line-1"></div>
              <div className="gradient-line-2 mb-3"></div>
              <div className="d-flex align-items-center mb-4 mt-4">
                <i className="fas fa-envelope me-2"></i>
                <span>Info@popuptours.com</span>
              </div>

              <div className="d-flex align-items-center mb-4 mt-2">
                <i className="fas fa-phone me-2"></i>
                <span>+971 18 919891 &nbsp; | &nbsp; +971 18 946281</span>
              </div>
            </GradientContainer>
          </div>
        </div>

        <div className="col-md-6 pt-5 pb-5 p-5">
          <div className="p-4 shadow rounded-3">
            <h1
              style={{
                fontFamily: "Ivy mode",
                fontWeight: 600,
              }}
            >
              Let's Talk
            </h1>
            <div>
              <div className="container mt-5">
                <form className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label mb-3 secondary-text">
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

                  <div className="col-md-6">
                    <label className="form-label mb-3 secondary-text">
                      Email
                    </label>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                        style={{ height: 50, borderRadius: 8 }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label mb-3 secondary-text">
                      Whatsapp
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">🇮🇳 +91</span>
                      <input
                        type="text"
                        className="form-control"
                        style={{ height: 50, borderTopRightRadius: 8 }}
                        inputMode="numeric"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label mb-3 secondary-text">
                      Phone
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">🇮🇳 +91</span>
                      <input
                        type="text"
                        className="form-control"
                        style={{ height: 50, borderTopRightRadius: 8 }}
                        inputMode="numeric"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label mb-3 secondary-text">
                      Travel Destination
                    </label>{" "}
                    <div className="input-group">
                      <select
                        className="form-select form-control"
                        style={{ height: 50, borderRadius: 8 }}
                      >
                        <option selected disabled className="secondary-text">
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
                        className="form-control"
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
                        className="form-control"
                        placeholder="Enter No of People"
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
                        className="form-select form-control"
                        style={{ height: 50, borderRadius: 8 }}
                      >
                        <option selected disabled className="secondary-text">
                          Select Type
                        </option>
                        <option>Family</option>
                        <option>Couple</option>
                        <option>Group</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="submit-btn align-item-center">
                      <p className="secondary-text mb-0">Submit</p>{" "}
                      <i className="bi bi-arrow-up-right mt-1 fs-5 fw-1"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormScreen;
