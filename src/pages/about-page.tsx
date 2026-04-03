import AboutWhoWeAreScreen from "../modules/screens/about-who-we-are-screen";
import AdvertiseScreen from "../modules/screens/advertise-screen";
import ContactFormScreen from "../modules/screens/contact-form-screen";
import FooterScreen from "../modules/screens/footer-screen";
import ReviewScreen from "../modules/screens/reviews-screen/review-screen";
import WhyWeBetterScreen from "../modules/screens/why-we-better-screen";
import PageHero from "../shared/components/page-hero/page-hero";

const AboutPage = () => {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="The best travel for your journey begins now"
        backgroundImage='url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80")'
        activeNav="about"
      />
      <AboutWhoWeAreScreen />
      <WhyWeBetterScreen />
      <AdvertiseScreen />
      <ReviewScreen />
      <section id="contact" className="header-scroll-target">
        <ContactFormScreen />
      </section>
      <FooterScreen />
    </>
  );
};

export default AboutPage;
