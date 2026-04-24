const readTrimmed = (value: string | undefined): string | undefined => {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

const isLocalhost = (): boolean =>
  typeof window !== "undefined" &&
  /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname);

const DEFAULT_WHATSAPP_NUMBER = "919791244717";
const DEFAULT_WHATSAPP_MESSAGE =
  "Hi PopUp Tours! I would like to know more about your tour packages.";
const DEFAULT_INSTAGRAM_URL =
  "https://www.instagram.com/popuptours.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const DEFAULT_YOUTUBE_URL = "https://www.youtube.com/@PopUpTours";

export const env = {
  emailJs: {
    serviceId: readTrimmed(process.env.REACT_APP_EMAILJS_SERVICE_ID),
    templateId: readTrimmed(process.env.REACT_APP_EMAILJS_TEMPLATE_ID),
    publicKey: readTrimmed(process.env.REACT_APP_EMAILJS_PUBLIC_KEY),
  },
  whatsapp: {
    apiUrl: readTrimmed(process.env.REACT_APP_WHATSAPP_API_URL),
    chatNumber: (
      readTrimmed(process.env.REACT_APP_WHATSAPP_CHAT_NUMBER) ??
      DEFAULT_WHATSAPP_NUMBER
    ).replace(/\D/g, ""),
    chatMessage:
      readTrimmed(process.env.REACT_APP_WHATSAPP_CHAT_MESSAGE) ??
      DEFAULT_WHATSAPP_MESSAGE,
  },
  reviewsApiUrl:
    readTrimmed(process.env.REACT_APP_REVIEWS_API_URL) ??
    (isLocalhost() ? null : "/api/google-reviews"),
  social: {
    facebook: readTrimmed(process.env.REACT_APP_SOCIAL_FACEBOOK_URL) ?? "",
    instagram:
      readTrimmed(process.env.REACT_APP_SOCIAL_INSTAGRAM_URL) ??
      DEFAULT_INSTAGRAM_URL,
    x: readTrimmed(process.env.REACT_APP_SOCIAL_X_URL) ?? "",
    youtube:
      readTrimmed(process.env.REACT_APP_SOCIAL_YOUTUBE_URL) ?? DEFAULT_YOUTUBE_URL,
  },
} as const;

export const hasEmailJsConfig = (): boolean =>
  Boolean(env.emailJs.serviceId && env.emailJs.templateId && env.emailJs.publicKey);
