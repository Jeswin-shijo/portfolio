import { useEffect, useState } from "react";
import "./App.css";
import StickyWhatsApp from "./common/sticky-whatsapp";
import { getPackageBySlug } from "./data/tour-packages";
import PopHeader from "./modules/screens/pop-header";
import AboutPage from "./pages/about-page";
import BlogDetailPage from "./pages/blog-detail-page";
import ContactPage from "./pages/contact-page";
import GalleryRoutePage from "./pages/gallery-route-page";
import HomePage from "./pages/home-page";
import PackageDetailPage from "./pages/package-detail-page";
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
      case "/blog/maldives-packing-guide":
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
        activeNav = undefined;
        break;
    }
  }

  let page = <HomePage />;

  if (packageSlug) {
    page = <PackageDetailPage slug={packageSlug} />;
  } else {
    switch (pathname) {
      case "/about":
        page = <AboutPage />;
        break;
      case "/gallery":
        page = <GalleryRoutePage />;
        break;
      case "/blog/maldives-packing-guide":
        page = <BlogDetailPage />;
        break;
      case "/contact":
        page = <ContactPage />;
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
