export type PackageCategory = "international" | "domestic" | "honeymoon";

export type PackageItineraryDetail = {
  time: string;
  text: string;
};

export type PackageItineraryDay = {
  day: number;
  title: string;
  details: PackageItineraryDetail[];
};

export type TourPackage = {
  slug: string;
  title: string;
  category: PackageCategory;
  days: number;
  nights: number;
  startingPrice: string;
  heroBackgroundImage: string;
  galleryImages: [string, string, string, string];
  cardImage: string;
  destinationTag: string;
  destinationTitle: string;
  destinationDescription: string;
  overview: string;
  highlights: string[];
  itinerary: PackageItineraryDay[];
  costIncludes: string[];
  costExcludes: string[];
  mapQuery: string;
  relatedSlugs: string[];
};

const defaultCostIncludes = [
  "Accommodation in quality stays selected for the route",
  "Daily breakfast and essential local transfers",
  "Sightseeing and guided experiences listed in the itinerary",
  "On-trip support for coordination and assistance",
];

const defaultCostExcludes = [
  "Personal expenses, shopping, and optional add-ons",
  "Travel insurance unless specifically included",
  "Activities not mentioned in the itinerary",
];

const day = (
  index: number,
  title: string,
  morning: string,
  afternoon: string,
  evening: string
): PackageItineraryDay => ({
  day: index,
  title,
  details: [
    { time: "Morning", text: morning },
    { time: "Afternoon", text: afternoon },
    { time: "Evening", text: evening },
  ],
});

export const buildPackageHref = (slug: string) => `/packages/${slug}`;

export const tourPackages: TourPackage[] = [
  {
    slug: "thailand",
    title: "Thailand",
    category: "international",
    days: 5,
    nights: 6,
    startingPrice: "₹ 50,000",
    heroBackgroundImage:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1300&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=900&q=80",
    ],
    cardImage:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=80",
    destinationTag: "Thailand",
    destinationTitle: "Thailand Coastline Escape",
    destinationDescription:
      "Discover island views, ornate temples, food markets, and a balance of city energy with easy beach downtime.",
    overview:
      "Discover the vibrant culture, tropical coastlines, and warm hospitality of Thailand with a journey that blends Bangkok highlights, temple visits, and island moments into one easy-paced escape.",
    highlights: [
      "Immersive cultural experiences with local guidance",
      "Comfortable stays and seamless transfers",
      "A balanced itinerary with city, food, and coastal time",
    ],
    itinerary: [
      day(
        1,
        "Arrival in Bangkok",
        "Arrive in Bangkok and settle into your hotel after a smooth airport transfer.",
        "Explore nearby markets and get your first taste of Thai street food.",
        "Unwind with a relaxed evening walk through the city."
      ),
      day(
        2,
        "Temple and City Highlights",
        "Visit landmark temples and historic city corners with a local guide.",
        "Enjoy a riverfront lunch and time for shopping or café stops.",
        "Take in the city lights with a dinner cruise or night market visit."
      ),
      day(
        3,
        "Island Transfer",
        "Head toward the coast for a slower beachside stretch of the trip.",
        "Check in, relax at the resort, and enjoy the shoreline.",
        "Watch sunset by the water and settle into an easy evening."
      ),
    ],
    costIncludes: [
      "Selected hotel stays in Bangkok and the island region",
      "Airport pickups, local transfers, and intercity movement",
      "Breakfast and sightseeing listed in the plan",
      "Basic local assistance throughout the trip",
    ],
    costExcludes: defaultCostExcludes,
    mapQuery: "Bangkok, Thailand",
    relatedSlugs: ["bali", "sri-lanka", "maldives"],
  },
  {
    slug: "bali",
    title: "Bali",
    category: "international",
    days: 5,
    nights: 6,
    startingPrice: "₹ 52,000",
    heroBackgroundImage:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1300&q=80",
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=900&q=80",
    ],
    cardImage:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80",
    destinationTag: "Bali",
    destinationTitle: "Bali Temple and Villa Retreat",
    destinationDescription:
      "From rice terraces and cliff temples to calm villa stays, Bali brings together culture and a soft resort rhythm.",
    overview:
      "Bali offers a rich blend of lush interiors, coastal stays, temple visits, and slow afternoons. This package is designed for travelers who want both scenic beauty and a peaceful vacation rhythm.",
    highlights: [
      "Temple visits, scenic drives, and curated villa stays",
      "Flexible pace with time for cafés, spas, and shopping",
      "A balanced mix of iconic and quieter Bali experiences",
    ],
    itinerary: [
      day(
        1,
        "Arrival in Bali",
        "Arrive in Bali and transfer to your stay with time to refresh.",
        "Take a short orientation drive through the nearby area.",
        "Enjoy a relaxed dinner with tropical views."
      ),
      day(
        2,
        "Cultural and Temple Day",
        "Visit a signature temple and scenic countryside viewpoints.",
        "Pause for lunch and a rice terrace walk or swing experience.",
        "Return for a calm evening and optional spa time."
      ),
      day(
        3,
        "Leisure by the Coast",
        "Start with a slow breakfast and beachside time.",
        "Explore boutiques, cafés, or a local art market.",
        "Watch sunset from a clifftop setting."
      ),
    ],
    costIncludes: defaultCostIncludes,
    costExcludes: defaultCostExcludes,
    mapQuery: "Bali, Indonesia",
    relatedSlugs: ["thailand", "sri-lanka", "maldives"],
  },
  {
    slug: "sri-lanka",
    title: "Sri Lanka",
    category: "international",
    days: 5,
    nights: 6,
    startingPrice: "₹ 48,000",
    heroBackgroundImage:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1300&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=900&q=80",
    ],
    cardImage:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
    destinationTag: "Sri Lanka",
    destinationTitle: "Sri Lanka Heritage and Hills",
    destinationDescription:
      "Blend tea country, heritage sites, and coastal stretches into one trip with a calm and scenic pace.",
    overview:
      "Sri Lanka is ideal for travelers who want diversity without rushing. This route brings together cultural heritage, green hill landscapes, and coast-facing downtime in one well-paced itinerary.",
    highlights: [
      "Tea country scenery and heritage-focused sightseeing",
      "Flexible stops across city, hills, and coast",
      "Comfortable pacing for couples, families, and small groups",
    ],
    itinerary: [
      day(
        1,
        "Arrival and Transfer",
        "Arrive and travel to your first stay with a comfortable check-in.",
        "Explore the nearby neighborhood or a heritage site.",
        "Settle in with a relaxed dinner."
      ),
      day(
        2,
        "Hill Country Journey",
        "Travel through greener inland stretches and tea landscapes.",
        "Stop at viewpoints and local cafés along the route.",
        "Enjoy a cooler evening in the hills."
      ),
      day(
        3,
        "Culture and Coast",
        "Visit a cultural landmark or local market in the morning.",
        "Move toward the coast for a change of pace.",
        "Spend the evening with a quiet beach walk."
      ),
    ],
    costIncludes: defaultCostIncludes,
    costExcludes: defaultCostExcludes,
    mapQuery: "Colombo, Sri Lanka",
    relatedSlugs: ["thailand", "bali", "munnar"],
  },
  {
    slug: "munnar",
    title: "Munnar",
    category: "domestic",
    days: 4,
    nights: 5,
    startingPrice: "₹ 22,000",
    heroBackgroundImage:
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1300&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    ],
    cardImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
    destinationTag: "Munnar",
    destinationTitle: "Munnar Tea Valley Escape",
    destinationDescription:
      "Cool mountain air, tea estates, winding roads, and misty sunrise moments make this an easy hill retreat.",
    overview:
      "Munnar is perfect for travelers looking for fresh air, slower mornings, and scenic drives through tea country. This package keeps the pace relaxed while covering the region's most loved viewpoints.",
    highlights: [
      "Tea plantations, cool weather, and mountain-view stays",
      "Leisure-first itinerary with scenic road trips",
      "Ideal for quick breaks, couples, and family travel",
    ],
    itinerary: [
      day(
        1,
        "Arrival in the Hills",
        "Travel into Munnar and check in to your stay.",
        "Take a light drive through tea estate roads and viewpoints.",
        "Relax with a quiet evening overlooking the hills."
      ),
      day(
        2,
        "Tea Trails and Viewpoints",
        "Start with a fresh hillside morning and local breakfast.",
        "Visit tea gardens, a museum, or top viewpoints in the area.",
        "Return for bonfire time or a calm dinner."
      ),
      day(
        3,
        "Nature and Leisure",
        "Head out for a waterfall stop or lake-facing visit.",
        "Keep the afternoon free for rest, cafés, or light shopping.",
        "Wrap up with sunset views over the valley."
      ),
    ],
    costIncludes: defaultCostIncludes,
    costExcludes: defaultCostExcludes,
    mapQuery: "Munnar, Kerala",
    relatedSlugs: ["wayanad", "coorg", "sri-lanka"],
  },
  {
    slug: "wayanad",
    title: "Wayanad",
    category: "domestic",
    days: 4,
    nights: 5,
    startingPrice: "₹ 24,000",
    heroBackgroundImage:
      "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?auto=format&fit=crop&w=1300&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80",
    ],
    cardImage:
      "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?auto=format&fit=crop&w=1000&q=80",
    destinationTag: "Wayanad",
    destinationTitle: "Wayanad Forest and Falls Journey",
    destinationDescription:
      "A green, slow, and refreshing route through forest roads, lookouts, and waterfall-backed stays.",
    overview:
      "Wayanad brings together greenery, cooler weather, and a nature-heavy mood that works beautifully for relaxed domestic travel. This package keeps things scenic and easy.",
    highlights: [
      "Forest roads, waterfalls, and hillside viewpoints",
      "Great for nature lovers and slower group trips",
      "Comfortable stays with time for local discovery",
    ],
    itinerary: [
      day(
        1,
        "Arrival and Check-in",
        "Arrive in Wayanad and settle into your property.",
        "Head out for a light local drive and scenic stop.",
        "Enjoy the calm pace of the hills in the evening."
      ),
      day(
        2,
        "Waterfalls and Viewpoints",
        "Visit a waterfall or forest-side attraction in the morning.",
        "Continue to a lookout point or heritage spot nearby.",
        "Return for a quiet resort evening."
      ),
      day(
        3,
        "Leisure and Local Finds",
        "Start the day at your own pace with a relaxed breakfast.",
        "Explore local produce shops, cafés, or short nature walks.",
        "Spend the evening unwinding in the cool weather."
      ),
    ],
    costIncludes: defaultCostIncludes,
    costExcludes: defaultCostExcludes,
    mapQuery: "Wayanad, Kerala",
    relatedSlugs: ["munnar", "coorg", "manali"],
  },
  {
    slug: "coorg",
    title: "Coorg",
    category: "domestic",
    days: 4,
    nights: 5,
    startingPrice: "₹ 23,000",
    heroBackgroundImage:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1300&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80",
    ],
    cardImage:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    destinationTag: "Coorg",
    destinationTitle: "Coorg Coffee Trail Retreat",
    destinationDescription:
      "Coffee estates, mist, winding roads, and estate-style stays make Coorg an easy mountain reset.",
    overview:
      "Coorg is a strong choice for travelers who want a green domestic break without a rushed schedule. Coffee estate scenery and quiet resort stays set the tone throughout the trip.",
    highlights: [
      "Estate stays and coffee-country views",
      "Easy-paced local sightseeing and nature time",
      "Good fit for short domestic escapes",
    ],
    itinerary: [
      day(
        1,
        "Arrival in Coorg",
        "Travel into Coorg and check in to your stay.",
        "Take a short orientation drive through estate roads.",
        "Enjoy an early evening in the cool air."
      ),
      day(
        2,
        "Estate and Viewpoint Day",
        "Visit coffee estates or nearby gardens in the morning.",
        "Continue to a scenic viewpoint or riverside stop.",
        "Return for a warm dinner and rest."
      ),
      day(
        3,
        "Slow Exploration",
        "Keep the morning flexible for leisure or short walks.",
        "Explore a local market, café, or cultural landmark nearby.",
        "Wrap up with one final hill-view evening."
      ),
    ],
    costIncludes: defaultCostIncludes,
    costExcludes: defaultCostExcludes,
    mapQuery: "Coorg, Karnataka",
    relatedSlugs: ["munnar", "wayanad", "kashmir"],
  },
  {
    slug: "maldives",
    title: "Maldives",
    category: "honeymoon",
    days: 5,
    nights: 5,
    startingPrice: "₹ 68,000",
    heroBackgroundImage:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1300&q=80",
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=900&q=80",
    ],
    cardImage:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1000&q=80",
    destinationTag: "Maldives",
    destinationTitle: "Maldives Overwater Escape",
    destinationDescription:
      "For honeymooners and slow travelers, this trip is all about turquoise water, quiet stays, and signature resort moments.",
    overview:
      "The Maldives is built for travelers who want beautiful simplicity. This package leans into resort time, sea views, and a relaxed island pace with minimal friction.",
    highlights: [
      "Overwater or island-style resort stays",
      "Low-stress pacing with plenty of free time",
      "Great fit for honeymoon and celebratory travel",
    ],
    itinerary: [
      day(
        1,
        "Arrival and Island Transfer",
        "Arrive and connect to your island transfer with resort assistance.",
        "Check in and spend the afternoon taking in the property.",
        "Ease into the trip with a sunset dinner by the water."
      ),
      day(
        2,
        "Leisure in Paradise",
        "Enjoy a slow breakfast and time on the deck or beach.",
        "Choose a spa session, snorkeling, or simply rest at the resort.",
        "Wrap up with golden-hour views and dinner."
      ),
      day(
        3,
        "Signature Island Experience",
        "Keep the morning open for water activities or photos.",
        "Add a sandbank picnic, cruise, or private resort activity.",
        "Spend the evening in a calm, intimate setting."
      ),
    ],
    costIncludes: [
      "Resort stay with breakfast and selected transfers",
      "Welcome assistance and curated island coordination",
      "Leisure-focused itinerary with room for optional add-ons",
      "Trip support for confirmations and planning help",
    ],
    costExcludes: defaultCostExcludes,
    mapQuery: "Male, Maldives",
    relatedSlugs: ["bali", "thailand", "kashmir"],
  },
  {
    slug: "kashmir",
    title: "Kashmir",
    category: "honeymoon",
    days: 5,
    nights: 6,
    startingPrice: "₹ 38,000",
    heroBackgroundImage:
      "https://images.unsplash.com/photo-1626621331169-b7b8b0f2e548?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1626621331169-b7b8b0f2e548?auto=format&fit=crop&w=1300&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
    ],
    cardImage:
      "https://images.unsplash.com/photo-1626621331169-b7b8b0f2e548?auto=format&fit=crop&w=1000&q=80",
    destinationTag: "Kashmir",
    destinationTitle: "Kashmir Valley Romance",
    destinationDescription:
      "Houseboats, mountain air, gardens, and long scenic drives make Kashmir feel cinematic and unhurried.",
    overview:
      "Kashmir works beautifully for travelers looking for cool weather, mountain scenery, and a romantic pace. This route balances sightseeing with time to simply enjoy the landscape.",
    highlights: [
      "Valley views, gardens, and scenic water-side stays",
      "Flexible pace with mountain drives and local stops",
      "Ideal for honeymoon and calm group travel",
    ],
    itinerary: [
      day(
        1,
        "Arrival in Srinagar",
        "Arrive and transfer into Srinagar with time to settle in.",
        "Enjoy a relaxed shikara ride or lakeside stop.",
        "Spend the evening soaking in the mountain air."
      ),
      day(
        2,
        "Gardens and Local Sights",
        "Visit some of Kashmir's best-known gardens and viewpoints.",
        "Take your time with lunch, photos, and local shopping.",
        "Return for a quiet evening back at the stay."
      ),
      day(
        3,
        "Valley Excursion",
        "Head out for a scenic drive deeper into the valley.",
        "Stop at meadows, riversides, or seasonal snow viewpoints.",
        "Come back to Srinagar for a cozy dinner."
      ),
    ],
    costIncludes: defaultCostIncludes,
    costExcludes: defaultCostExcludes,
    mapQuery: "Srinagar, Kashmir",
    relatedSlugs: ["manali", "maldives", "coorg"],
  },
  {
    slug: "manali",
    title: "Manali",
    category: "honeymoon",
    days: 5,
    nights: 6,
    startingPrice: "₹ 28,000",
    heroBackgroundImage:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1300&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    ],
    cardImage:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1000&q=80",
    destinationTag: "Manali",
    destinationTitle: "Manali Mountain Getaway",
    destinationDescription:
      "Snowline views, pine-covered roads, and quiet resort evenings make Manali an easy romantic hill escape.",
    overview:
      "Manali is a go-to mountain break for travelers who want crisp weather, scenic roads, and simple time away. This package stays easy, romantic, and well-paced.",
    highlights: [
      "Hill views, pine forests, and cozy weather",
      "Low-stress pacing with sightseeing and leisure",
      "A strong fit for couples and mountain lovers",
    ],
    itinerary: [
      day(
        1,
        "Arrival and Check-in",
        "Reach Manali and settle into your stay with time to unwind.",
        "Take a short local drive or market stroll in the afternoon.",
        "Relax into the mountain air over dinner."
      ),
      day(
        2,
        "Valley Sightseeing",
        "Visit river-facing spots and local attractions in the morning.",
        "Continue with a scenic drive through the surrounding roads.",
        "Return for a slow evening in town or at the resort."
      ),
      day(
        3,
        "Leisure in the Hills",
        "Keep the morning free for café time or a short walk.",
        "Choose an optional viewpoint excursion or rest day.",
        "Watch the light change over the hills before dinner."
      ),
    ],
    costIncludes: defaultCostIncludes,
    costExcludes: defaultCostExcludes,
    mapQuery: "Manali, Himachal Pradesh",
    relatedSlugs: ["kashmir", "wayanad", "munnar"],
  },
];

export const getPackageBySlug = (slug: string) =>
  tourPackages.find((item) => item.slug === slug);

export const getPackagesByCategory = (category: PackageCategory) =>
  tourPackages.filter((item) => item.category === category);

export const featuredDestinationPackages = [
  "munnar",
  "sri-lanka",
  "bali",
  "thailand",
]
  .map((slug) => getPackageBySlug(slug))
  .filter((item): item is TourPackage => Boolean(item));
