import ContactFormScreen from "../modules/screens/contact-form-screen";
import FooterScreen from "../modules/screens/footer-screen";
import PageHero from "../shared/components/page-hero/page-hero";

const ContactPage = () => {
  return (
    <>
      <PageHero
        title="Let's Plan Your Next Escape"
        subtitle="Share your travel ideas with us and our team will help shape the right itinerary for you."
        backgroundImage='url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80")'
        activeNav="contact"
      />
      <ContactFormScreen />
      <FooterScreen />
    </>
  );
};

export default ContactPage;
