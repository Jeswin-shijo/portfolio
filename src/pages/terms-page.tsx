import FooterScreen from "../modules/screens/footer-screen";
import PageHero from "../shared/components/page-hero/page-hero";
import "./legal-page.css";

const TermsPage = () => {
  return (
    <>
      <PageHero
        title="Terms and Conditions"
        subtitle="The core booking, payment, and usage terms for planning travel with Popup Tours."
        backgroundImage='url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80")'
        height="48vh"
      />
      <section className="legal-page__section">
        <div className="legal-page__inner">
          <p className="legal-page__eyebrow">Effective date: April 17, 2026</p>
          <p className="legal-page__intro">
            These terms apply when you browse this website, submit an enquiry, or
            confirm a travel service with Popup Tours. Final inclusions,
            exclusions, hotel categories, transport details, and payment
            schedules may vary by itinerary and will be confirmed in your
            quotation or booking communication.
          </p>

          <div className="legal-page__stack">
            <article className="legal-page__card">
              <h2>Enquiries and Quotations</h2>
              <p>
                Website forms and package pages are invitation-to-enquire tools.
                Prices, availability, hotel options, and schedules remain subject
                to reconfirmation until a booking is formally accepted by our
                team.
              </p>
            </article>

            <article className="legal-page__card">
              <h2>Bookings and Payments</h2>
              <p>
                A booking is treated as confirmed only after the required advance
                payment is received and acknowledged. Balance payment timelines
                may differ by supplier, destination, and travel date.
              </p>
              <ul>
                <li>Quoted prices may change if supplier costs change before confirmation.</li>
                <li>Government taxes, local levies, and seasonal surcharges may apply.</li>
                <li>Late payments may result in release of services or repricing.</li>
              </ul>
            </article>

            <article className="legal-page__card">
              <h2>Cancellations and Changes</h2>
              <p>
                Cancellation charges depend on how close the change is to the
                travel date and on the supplier policies attached to flights,
                hotels, transport, activities, and permits.
              </p>
              <ul>
                <li>Amendments are subject to availability and supplier approval.</li>
                <li>Non-refundable items may remain non-refundable after booking.</li>
                <li>Refund timelines depend on partner processing timelines.</li>
              </ul>
            </article>

            <article className="legal-page__card">
              <h2>Traveller Responsibilities</h2>
              <p>
                Travellers are responsible for providing accurate names, contact
                details, document information, and destination preferences when
                making an enquiry or confirming a trip.
              </p>
              <ul>
                <li>Valid passports, visas, IDs, and permits remain the traveller’s responsibility.</li>
                <li>Travel insurance is recommended unless specifically included.</li>
                <li>Special requests are not guaranteed unless confirmed in writing.</li>
              </ul>
            </article>

            <article className="legal-page__card">
              <h2>Third-Party Services and Liability</h2>
              <p>
                Popup Tours coordinates services through hotels, transport
                providers, activity operators, and destination partners. While we
                work carefully with our network, delays, closures, weather
                changes, strikes, or supplier-side issues may require itinerary
                adjustments.
              </p>
            </article>

            <article className="legal-page__card">
              <h2>Website Use</h2>
              <p>
                Website content, itinerary wording, images, and branding are for
                informational and promotional use. You may not misuse the site,
                copy content for commercial use, or interfere with the site’s
                normal operation.
              </p>
            </article>
          </div>

          <p className="legal-page__contact">
            For booking-related questions, reach us at{" "}
            <a href="mailto:info@popuptours.com">info@popuptours.com</a>.
          </p>
        </div>
      </section>
      <FooterScreen />
    </>
  );
};

export default TermsPage;
