import { useEffect, useState } from "react";
import "./App.css";
import StickyWhatsApp from "./common/sticky-whatsapp";
import { getPackageBySlug } from "./data/tour-packages";
import PopHeader from "./modules/screens/pop-header";
import AboutPage from "./pages/about-page";
import BlogPage from "./pages/blog-page";
import BlogDetailPage from "./pages/blog-detail-page";
import ContactPage from "./pages/contact-page";
import GalleryRoutePage from "./pages/gallery-route-page";
import HomePage from "./pages/home-page";
import PackageDetailPage from "./pages/package-detail-page";
import PrivacyPolicyPage from "./pages/privacy-policy-page";
import TermsPage from "./pages/terms-page";
import {
  getLocationKey,
  type NavKey,
  normalizePath,
  scrollToHash,
} from "./shared/navigation/site-navigation";

function App() {
  const [locationKey, setLocationKey] = useState(getLocationKey());

  useEffect(() => {
    const syncLocation = () => setLocationKey(getLocationKey());

    window.addEventListener("popstate", syncLocation);
    window.addEventListener("hashchange", syncLocation);

    return () => {
      window.removeEventListener("popstate", syncLocation);
      window.removeEventListener("hashchange", syncLocation);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      requestAnimationFrame(() => scrollToHash(hash, "smooth"));
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [locationKey]);

  const pathname = normalizePath(window.location.pathname);
  const hash = window.location.hash;
  const blogSlug = pathname.startsWith("/blog/")
    ? pathname.replace("/blog/", "")
    : null;
  const packageSlug = pathname.startsWith("/packages/")
    ? pathname.replace("/packages/", "")
    : null;
  const packageData = packageSlug ? getPackageBySlug(packageSlug) : null;

  let activeNav: NavKey | undefined;

  if (packageData) {
    activeNav = packageData.category;
  } else {
    switch (pathname) {
      case "/about":
        activeNav = "about";
        break;
      case "/gallery":
        activeNav = "gallery";
        break;
      case "/blog":
        activeNav = "blog";
        break;
      case "/contact":
        activeNav = "contact";
        break;
      case "/":
        if (hash === "#domestic") {
          activeNav = "domestic";
        } else if (hash === "#honeymoon") {
          activeNav = "honeymoon";
        }
        break;
      default:
        activeNav = blogSlug ? "blog" : undefined;
        break;
    }
  }

  let page = <HomePage />;

  if (packageSlug) {
    page = <PackageDetailPage slug={packageSlug} />;
  } else if (pathname === "/blog") {
    page = <BlogPage />;
  } else if (blogSlug) {
    page = <BlogDetailPage slug={blogSlug} />;
  } else {
    switch (pathname) {
      case "/about":
        page = <AboutPage />;
        break;
      case "/gallery":
        page = <GalleryRoutePage />;
        break;
      case "/contact":
        page = <ContactPage />;
        break;
      case "/terms":
      case "/terms-and-conditions":
        page = <TermsPage />;
        break;
      case "/policy":
      case "/privacy-policy":
        page = <PrivacyPolicyPage />;
        break;
      default:
        page = <HomePage />;
        break;
    }
  }

  return (
    <div>
      <PopHeader activeNav={activeNav} />
      {page}
      <StickyWhatsApp />
    </div>
  );
}

export default App;
