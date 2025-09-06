import React from "react";
import Accordion from "../../../shared/components/accordion";
import ContactCard from "../../../shared/contact-items";

function FAQScreen() {
  const tourFAQs = [
    {
      title: "What is included in the tour package?",
      children:
        "The tour package includes accommodation, transportation, guided tours, entry tickets to attractions, and daily breakfast. Detailed inclusions may vary by package.",
    },
    {
      title: "Are flights included in the package?",
      children:
        "No, flights are not typically included unless specifically mentioned. You will need to book your own airfare to the starting destination.",
    },
    {
      title: "Can I customize the tour itinerary?",
      children:
        "Yes, we offer customizable tour options. You can add or remove activities, extend your stay, or request specific accommodations based on availability.",
    },
    {
      title: "Is travel insurance included in the package?",
      children:
        "Travel insurance is not included by default, but we highly recommend purchasing one. You can add it as an optional extra during booking.",
    },
    {
      title: "What is the cancellation policy for the tour package?",
      children:
        "Cancellations made up to 15 days before departure are eligible for a full refund. Later cancellations may incur partial or full charges depending on the time of cancellation.",
    },
  ];

  return (
    <div className="pt-5 p-5">
      <div className="p-5">
        <span className="border border-secondary text-secondary px-3 py-1 rounded-3 small d-inline-block mb-3">
          FAQ
        </span>

        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <h2
              className="fw-semibold"
              style={{
                fontFamily: "Ivy Mode",
                fontSize: 50,
                color: "#0c2d57",
              }}
            >
              Simple answers to <br /> your travel doubts
            </h2>
          </div>
          <div className="col-md-6">
            <p className="text-muted">
              Embark on a journey through our most sought-after destinations —
              from serene hill stations and sun-kissed beaches to vibrant cities
              and cultural wonders.
            </p>
          </div>
        </div>

        <div className="my-2">
          <div className="row">
            <div className="col-lg-8 mb-4">
              {tourFAQs.map((item: any, index: any) => (
                <Accordion
                  title={item.title}
                  children={item.children}
                  key={index}
                />
              ))}
            </div>

            <div className="col-lg-4">
              <ContactCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQScreen;
