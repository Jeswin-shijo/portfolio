export type NavKey =
  | "about"
  | "international"
  | "domestic"
  | "honeymoon"
  | "gallery"
  | "blog"
  | "contact";

export const siteNavItems: ReadonlyArray<{
  label: string;
  href: string;
  key: NavKey;
}> = [
  { label: "About Us", href: "/about", key: "about" },
  { label: "International", href: "/packages/thailand", key: "international" },
  { label: "Domestic", href: "/#domestic", key: "domestic" },
  { label: "Honeymoon", href: "/#honeymoon", key: "honeymoon" },
  { label: "Gallery", href: "/gallery", key: "gallery" },
  { label: "Blog", href: "/blog", key: "blog" },
  { label: "Contact Us", href: "/contact", key: "contact" },
] as const;

export const normalizePath = (pathname: string) => {
  const normalized = pathname.replace(/\/+$/, "");
  return normalized || "/";
};

export const getLocationKey = () =>
  `${normalizePath(window.location.pathname)}${window.location.search}${window.location.hash}`;

export const scrollToHash = (hash: string, behavior: ScrollBehavior = "smooth") => {
  const targetId = hash.replace(/^#/, "");
  if (!targetId) return;

  const section = document.getElementById(targetId);
  if (!section) return;

  section.scrollIntoView({ behavior, block: "start" });
};

type NavigateOptions = {
  replace?: boolean;
};

const isInternalHref = (href: string) =>
  href.startsWith("/") || href.startsWith("#") || href.startsWith("?");

export const navigateTo = (href: string, options: NavigateOptions = {}) => {
  if (typeof href !== "string" || href.length === 0 || !isInternalHref(href)) {
    return;
  }

  const url = new URL(href, window.location.origin);

  if (url.origin !== window.location.origin) {
    return;
  }

  const nextLocation = `${normalizePath(url.pathname)}${url.search}${url.hash}`;
  const currentLocation = getLocationKey();

  if (nextLocation === currentLocation) {
    if (url.hash) {
      scrollToHash(url.hash);
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return;
  }

  const historyMethod = options.replace ? "replaceState" : "pushState";

  window.history[historyMethod]({}, "", nextLocation);
  window.dispatchEvent(new PopStateEvent("popstate"));
};
