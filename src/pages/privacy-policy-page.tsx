import FooterScreen from "../modules/screens/footer-screen";
import PageHero from "../shared/components/page-hero/page-hero";
import "./legal-page.css";

const PrivacyPolicyPage = () => {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How Popup Tours collects, uses, and protects enquiry and booking information."
        backgroundImage='url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80")'
        height="48vh"
      />
      <section className="legal-page__section">
        <div className="legal-page__inner">
          <p className="legal-page__eyebrow">Effective date: April 17, 2026</p>
          <p className="legal-page__intro">
            This privacy policy explains how enquiry details submitted through the
            Popup Tours website may be collected, stored, and used when we help
            plan travel. It applies to website visits, enquiry forms, package
            interest actions, and communication routed through the website.
          </p>

          <div className="legal-page__stack">
            <article className="legal-page__card">
              <h2>Information We Collect</h2>
              <p>
                We may collect details you choose to share, including your name,
                email address, phone or WhatsApp number, destination interest,
                travel date, number of travellers, and vacation type.
              </p>
            </article>

            <article className="legal-page__card">
              <h2>How We Use Your Information</h2>
              <p>
                Your information is used to respond to enquiries, prepare travel
                suggestions, coordinate follow-up communication, and improve how
                we handle leads and trip planning requests.
              </p>
              <ul>
                <li>To respond to contact and booking enquiries.</li>
                <li>To prepare quotations, package suggestions, or custom plans.</li>
                <li>To send updates related to your requested travel enquiry.</li>
              </ul>
            </article>

            <article className="legal-page__card">
              <h2>Third-Party Integrations</h2>
              <p>
                This website may route enquiry information through tools such as
                EmailJS or WhatsApp lead integrations, depending on your current
                setup. Those services process data only to support your enquiry
                submission and follow-up workflow.
              </p>
            </article>

            <article className="legal-page__card">
              <h2>Retention and Security</h2>
              <p>
                We keep enquiry information only as long as reasonably necessary
                for planning, support, lead management, internal reference, or
                compliance needs. We aim to use practical safeguards to reduce
                unauthorized access or misuse.
              </p>
            </article>

            <article className="legal-page__card">
              <h2>Cookies and Analytics</h2>
              <p>
                The site may use standard browser and hosting data such as IP
                address, device type, and page interactions for performance,
                debugging, and measurement purposes. If analytics tools are added
                later, they should be governed by their own provider policies as
                well.
              </p>
            </article>

            <article className="legal-page__card">
              <h2>Your Rights</h2>
              <p>
                You may request correction or deletion of enquiry information that
                you previously shared with us, subject to any legal or operational
                requirements that require limited retention.
              </p>
            </article>
          </div>

          <p className="legal-page__contact">
            For privacy-related questions, contact{" "}
            <a href="mailto:info@popuptours.com">info@popuptours.com</a>.
          </p>
        </div>
      </section>
      <FooterScreen />
    </>
  );
};

export default PrivacyPolicyPage;
