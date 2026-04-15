const http = require("node:http");
const { URL } = require("node:url");

const port = Number(process.env.REVIEWS_PORT || 5002);
const cacheTtlMs = Number(process.env.GOOGLE_REVIEWS_CACHE_MS || 15 * 60 * 1000);

let cachedPayload = null;
let cacheExpiresAt = 0;

const setCorsHeaders = (response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
};

const sendJson = (response, statusCode, payload) => {
  setCorsHeaders(response);
  response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
};

const normalizeReview = (review, fallbackId) => ({
  id: review.name || fallbackId,
  authorName: review.authorAttribution?.displayName || "Google user",
  authorUri: review.authorAttribution?.uri || null,
  authorPhotoUri: review.authorAttribution?.photoUri || null,
  rating: typeof review.rating === "number" ? review.rating : 0,
  text: review.text?.text || review.originalText?.text || "",
  relativePublishTimeDescription: review.relativePublishTimeDescription || null,
  googleMapsUri: review.googleMapsUri || null,
});

const fetchGoogleReviews = async () => {
  if (cachedPayload && Date.now() < cacheExpiresAt) {
    return cachedPayload;
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  const languageCode = process.env.GOOGLE_PLACES_LANGUAGE_CODE || "en";
  const regionCode = process.env.GOOGLE_PLACES_REGION_CODE || "IN";

  if (!apiKey || !placeId) {
    const error = new Error(
      "Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID for Google review sync."
    );
    error.statusCode = 500;
    throw error;
  }

  const requestUrl = new URL(`https://places.googleapis.com/v1/places/${placeId}`);
  requestUrl.searchParams.set("languageCode", languageCode);
  requestUrl.searchParams.set("regionCode", regionCode);

  const googleResponse = await fetch(requestUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "id,displayName,rating,userRatingCount,reviews",
    },
  });

  if (!googleResponse.ok) {
    const errorText = await googleResponse.text();
    const error = new Error(
      errorText || "Google Places request failed while loading reviews."
    );
    error.statusCode = googleResponse.status;
    throw error;
  }

  const place = await googleResponse.json();

  cachedPayload = {
    source: "google-places",
    placeId: place.id || placeId,
    placeName: place.displayName?.text || null,
    rating: typeof place.rating === "number" ? place.rating : null,
    userRatingCount:
      typeof place.userRatingCount === "number" ? place.userRatingCount : null,
    reviewsSortedBy: "relevance",
    fetchedAt: new Date().toISOString(),
    reviews: Array.isArray(place.reviews)
      ? place.reviews
          .map((review, index) =>
            normalizeReview(review, `${placeId}-review-${index + 1}`)
          )
          .filter((review) => review.text)
      : [],
  };

  cacheExpiresAt = Date.now() + cacheTtlMs;
  return cachedPayload;
};

const server = http.createServer(async (request, response) => {
  setCorsHeaders(response);

  if (request.method === "OPTIONS") {
    response.writeHead(204);
    response.end();
    return;
  }

  const requestUrl = new URL(request.url || "/", `http://${request.headers.host}`);

  if (request.method !== "GET" || requestUrl.pathname !== "/api/google-reviews") {
    sendJson(response, 404, {
      error: "Not found",
    });
    return;
  }

  try {
    const payload = await fetchGoogleReviews();
    sendJson(response, 200, payload);
  } catch (error) {
    sendJson(response, error.statusCode || 500, {
      error: "Unable to load Google reviews",
      details: error.message,
      hint: "Set GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID before starting the proxy.",
    });
  }
});

server.listen(port, () => {
  console.log(`Google reviews proxy listening on http://localhost:${port}`);
});
