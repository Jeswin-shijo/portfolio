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
  { label: "Blog", href: "/blog/maldives-packing-guide", key: "blog" },
  { label: "Contact Us", href: "/contact", key: "contact" },
] as const;

export const normalizePath = (pathname: string) => {
  const normalized = pathname.replace(/\/+$/, "");
  return normalized || "/";
};

export const getLocationKey = () =>
  `${normalizePath(window.location.pathname)}${window.location.hash}`;

export const scrollToHash = (hash: string, behavior: ScrollBehavior = "smooth") => {
  const targetId = hash.replace(/^#/, "");
  if (!targetId) return;

  const section = document.getElementById(targetId);
  if (!section) return;

  section.scrollIntoView({ behavior, block: "start" });
};

export const navigateTo = (href: string) => {
  const url = new URL(href, window.location.origin);
  const nextLocation = `${normalizePath(url.pathname)}${url.hash}`;
  const currentLocation = getLocationKey();

  if (nextLocation === currentLocation) {
    if (url.hash) {
      scrollToHash(url.hash);
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return;
  }

  window.history.pushState({}, "", `${normalizePath(url.pathname)}${url.hash}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
};
