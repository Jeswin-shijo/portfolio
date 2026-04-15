export type ReviewItem = {
  id: string;
  authorName: string;
  authorUri?: string | null;
  authorPhotoUri?: string | null;
  rating: number;
  text: string;
  relativePublishTimeDescription?: string | null;
  googleMapsUri?: string | null;
};

export type ReviewsApiResponse = {
  source: "google-places";
  placeId: string;
  placeName?: string | null;
  rating?: number | null;
  userRatingCount?: number | null;
  reviewsSortedBy: "relevance";
  fetchedAt: string;
  reviews: ReviewItem[];
};

export const fallbackReviews: ReviewItem[] = [
  {
    id: "sample-1",
    authorName: "Ananya",
    authorPhotoUri: "https://picsum.photos/seed/popup-review-1/120",
    rating: 5,
    text: "Our trip was smooth from planning to checkout. The team helped us choose the right stay and kept the schedule relaxed without missing the highlights.",
    relativePublishTimeDescription: "Sample review",
  },
  {
    id: "sample-2",
    authorName: "Rahul",
    authorPhotoUri: "https://picsum.photos/seed/popup-review-2/120",
    rating: 5,
    text: "Everything felt well organized and easy to follow. Transfers, hotel coordination, and quick support during the trip made a big difference for our family.",
    relativePublishTimeDescription: "Sample review",
  },
  {
    id: "sample-3",
    authorName: "Nithya",
    authorPhotoUri: "https://picsum.photos/seed/popup-review-3/120",
    rating: 4,
    text: "We wanted a calm vacation without the usual rush, and the itinerary matched that perfectly. The recommendations for stays and timing were really helpful.",
    relativePublishTimeDescription: "Sample review",
  },
  {
    id: "sample-4",
    authorName: "Arjun",
    authorPhotoUri: "https://picsum.photos/seed/popup-review-4/120",
    rating: 5,
    text: "The experience felt personalized instead of generic. We always knew what was included, what to expect next, and where to reach out if we needed help.",
    relativePublishTimeDescription: "Sample review",
  },
  {
    id: "sample-5",
    authorName: "Meera",
    authorPhotoUri: "https://picsum.photos/seed/popup-review-5/120",
    rating: 5,
    text: "A very dependable team to plan with. The holiday felt polished, thoughtful, and comfortable throughout, especially for a couple trip where pacing matters.",
    relativePublishTimeDescription: "Sample review",
  },
];
