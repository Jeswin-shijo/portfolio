export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
  listStyle?: "checklist" | "tips";
};

export type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: string;
  cardImage: string;
  heroImage: string;
  lead: string;
  sections: BlogSection[];
  closing: string;
};

export type BlogFilterOptions = {
  search?: string;
  category?: string | null;
  tag?: string | null;
};

export const buildBlogHref = (slug: string) => `/blog/${slug}`;

export const buildBlogListHref = ({
  search,
  category,
  tag,
}: BlogFilterOptions = {}) => {
  const params = new URLSearchParams();

  if (search?.trim()) {
    params.set("search", search.trim());
  }

  if (category?.trim()) {
    params.set("category", category.trim());
  }

  if (tag?.trim()) {
    params.set("tag", tag.trim());
  }

  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
};

export const blogPosts: BlogPost[] = [
  {
    slug: "maldives-packing-guide",
    title: "Crystal Clear Waters, Overwater Villas & Sunset Dreams Await!",
    subtitle:
      "A soft-paced Maldives guide for travelers planning a stylish island stay without the guesswork.",
    excerpt:
      "What to pack, how to choose the right island, and the small decisions that make a Maldives trip feel effortless.",
    date: "2025-08-08",
    category: "International",
    tags: ["Maldives", "Honeymoon", "Packing", "Island"],
    readingTime: "5 min read",
    cardImage:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=900&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1600&q=80",
    lead:
      "Close your eyes: you wake up to the gentle lapping of waves beneath your overwater villa. The turquoise waters stretch endlessly before you, and as you sip on fresh coconut water, you realize you are in paradise. Welcome to the Maldives.",
    sections: [
      {
        heading: "Packing Checklist for the Maldives",
        listStyle: "checklist",
        items: [
          "Breezy beachwear, light kaftans, swimwear, and sandals are all you need for effortless resort days.",
          "An underwater camera helps you capture reef moments and the Maldives' vivid marine life while snorkeling.",
          "A waterproof dry bag keeps your essentials safe on speedboat rides, sandbank stops, and beach days.",
          "A sun hat and good sunglasses matter more than you think. The island light gets bright quickly.",
        ],
      },
      {
        heading: "Pro Tips for a Seamless Maldives Experience",
        listStyle: "tips",
        items: [
          "Choose the right island for your pace. Some islands are best for honeymooners, while others suit active travelers or families.",
          "All-inclusive stays can save money if you plan to dine, relax, and enjoy property activities without moving around much.",
          "Seaplane rides deliver incredible aerial views, while speedboats can be more practical for shorter transfers and tighter budgets.",
          "Book a private sandbank picnic if you want one signature memory that feels intimate, cinematic, and completely removed from the usual resort rhythm.",
        ],
      },
    ],
    closing:
      "The Maldives is waiting for you. From floating breakfasts to sunset decks and island-hopping moments, the right plan turns a beautiful destination into a calm and unforgettable escape.",
  },
  {
    slug: "dubai-travel-tricks",
    title: "Dubai Unveiled: Smart Travel Tricks for a Luxurious Arabian Escape",
    subtitle:
      "A practical guide to enjoying Dubai's polished side without overspending time, energy, or budget.",
    excerpt:
      "Timing, neighborhoods, transport, and easy planning ideas for travelers who want Dubai to feel smooth instead of overwhelming.",
    date: "2025-08-06",
    category: "International",
    tags: ["Dubai", "Luxury", "City Break", "Shopping"],
    readingTime: "6 min read",
    cardImage:
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=900&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=1600&q=80",
    lead:
      "Dubai feels cinematic from the very first evening: glass towers glowing at sunset, desert light softening the skyline, and a city that moves quickly but rewards travelers who plan with intention.",
    sections: [
      {
        heading: "Choose the Right Area for Your Stay",
        paragraphs: [
          "Downtown Dubai works well if you want major attractions, polished dining, and a central base. Marina and JBR are better if you want a more resort-like rhythm with easy waterfront walks.",
          "If shopping is your priority, stay somewhere with quick metro or taxi access so you are not losing time in traffic between malls, old souks, and evening plans.",
        ],
      },
      {
        heading: "Easy Ways to Make the Trip Feel Premium",
        listStyle: "tips",
        items: [
          "Book Burj Khalifa or fountain-view experiences ahead of time instead of deciding on the day.",
          "Schedule desert safari and old-city exploration on different days so the trip feels balanced.",
          "Use indoor plans during the hottest hours and keep outdoor views, marina walks, and rooftop dinners for the evening.",
          "Reserve one or two signature meals instead of trying to make every outing feel like a luxury event.",
        ],
      },
    ],
    closing:
      "Dubai feels best when the itinerary stays sharp and uncluttered. A few well-chosen experiences will leave a stronger memory than trying to do everything at once.",
  },
  {
    slug: "long-haul-family-trips",
    title: "7 Ways to Keep Long-Haul Family Trips Smooth and Memorable",
    subtitle:
      "Family travel gets easier when the journey is designed around comfort, not just the destination.",
    excerpt:
      "Simple strategies for pacing airport days, choosing the right flights, and keeping children engaged without turning travel into stress.",
    date: "2025-08-04",
    category: "Travel Tips",
    tags: ["Family", "Planning", "Long Haul", "Comfort"],
    readingTime: "4 min read",
    cardImage:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=900&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1600&q=80",
    lead:
      "Long-haul family travel can feel daunting, but most of the stress comes from rushed decisions. Once the timing, packing, and airport pacing are handled, the trip becomes far more enjoyable for everyone.",
    sections: [
      {
        heading: "Make the Journey Predictable",
        paragraphs: [
          "Choose flights that match your family's energy instead of chasing the cheapest option. A slightly easier layover or better arrival time can completely change how the first day feels.",
          "Keep the first evening light. Families settle faster when they are not expected to sightsee immediately after a demanding travel day.",
        ],
      },
      {
        heading: "What Helps Most in Practice",
        listStyle: "checklist",
        items: [
          "Pack one easy-to-access pouch with snacks, wipes, chargers, medicines, and one comfort item per child.",
          "Pre-book airport transfers so the arrival feels guided, not chaotic.",
          "Mix one major sightseeing block with generous downtime instead of planning full-day activity marathons.",
          "Let each child help choose one part of the trip. Small ownership often improves mood more than extra entertainment does.",
        ],
      },
    ],
    closing:
      "The goal is not a perfectly controlled family trip. The goal is a trip with enough breathing room that everyone remembers the fun parts more than the friction.",
  },
  {
    slug: "bali-villa-retreat-guide",
    title: "Bali Villa Days, Temple Mornings, and Slow Sunset Evenings",
    subtitle:
      "A calm Bali planning guide for travelers who want beauty, culture, and breathing room in the same trip.",
    excerpt:
      "How to combine scenic drives, gentle sightseeing, and villa time without turning Bali into a rushed checklist.",
    date: "2025-08-02",
    category: "Adventure",
    tags: ["Bali", "Camera", "Camp", "Temple"],
    readingTime: "5 min read",
    cardImage:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=900&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1600&q=80",
    lead:
      "Bali is at its best when you leave room for the island to breathe. Temple visits, green interiors, coastal cafés, and quiet villa afternoons all feel better when they are not squeezed into a rigid schedule.",
    sections: [
      {
        heading: "Build Around Two Good Bases",
        paragraphs: [
          "Many Bali trips feel smoother when you divide your time between one inland base and one coastal base. That reduces constant transfers and gives each part of the island a different mood.",
          "If photography matters to you, sunrise temples and late-afternoon rice terrace visits usually produce a much calmer, more flattering visual experience than midday sightseeing.",
        ],
      },
      {
        heading: "A Better Bali Rhythm",
        listStyle: "tips",
        items: [
          "Pair temple or nature mornings with lazy villa afternoons.",
          "Keep one day completely open for cafés, spa time, or a driver-led scenic detour.",
          "Reserve only a few high-demand places in advance and leave the rest flexible.",
          "Choose stays with strong atmosphere instead of trying to upgrade every transfer or activity.",
        ],
      },
    ],
    closing:
      "Bali rarely rewards speed. The more thoughtfully you pace the island, the more cinematic and memorable it becomes.",
  },
  {
    slug: "singapore-night-market-guide",
    title: "Singapore After Dark: Food Streets, Skyline Views, and Easy City Planning",
    subtitle:
      "A guide to enjoying Singapore's clean, efficient rhythm while leaving space for local flavor after sunset.",
    excerpt:
      "Night markets, hawker centers, city walks, and practical planning notes for a smart Singapore city break.",
    date: "2025-07-31",
    category: "International",
    tags: ["Singapore", "Food", "City Break", "International"],
    readingTime: "4 min read",
    cardImage:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=80",
    lead:
      "Singapore is one of the easiest cities to travel through well. The transport is intuitive, the neighborhoods are distinct, and evenings are where the city becomes especially rewarding.",
    sections: [
      {
        heading: "Plan Around Neighborhoods, Not Just Attractions",
        paragraphs: [
          "Treat Marina Bay, Chinatown, Kampong Glam, and Sentosa as separate mood zones. Grouping experiences by neighborhood keeps the city from feeling like one long sequence of transit hops.",
          "Hawker centers are part of the pleasure, not just a convenience. Build evening plans around them instead of treating them as a quick stop between landmarks.",
        ],
      },
      {
        heading: "Simple Planning Tips",
        listStyle: "checklist",
        items: [
          "Keep one evening for skyline views and one for food-focused wandering.",
          "Use the MRT for most movement and taxis only when the day is already long.",
          "Choose a hotel near an MRT line so late returns stay easy.",
          "Balance iconic sights with one or two neighborhood evenings that feel more local and unhurried.",
        ],
      },
    ],
    closing:
      "Singapore works best when the plan respects its pace: clear, efficient, and polished, but still full of texture once you slow down enough to notice it.",
  },
];

export const getSortedBlogPosts = () =>
  [...blogPosts].sort(
    (first, second) =>
      new Date(second.date).getTime() - new Date(first.date).getTime()
  );

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getRelatedBlogPosts = (post: BlogPost, limit = 3) => {
  const normalizedTags = post.tags.map((tag) => tag.toLowerCase());

  return getSortedBlogPosts()
    .filter((item) => item.slug !== post.slug)
    .map((item) => {
      const sharedTagCount = item.tags.filter((tag) =>
        normalizedTags.includes(tag.toLowerCase())
      ).length;
      const sameCategory = item.category === post.category ? 1 : 0;
      const score = sharedTagCount * 3 + sameCategory * 2;

      return { item, score };
    })
    .sort((first, second) => {
      if (second.score !== first.score) {
        return second.score - first.score;
      }

      return (
        new Date(second.item.date).getTime() - new Date(first.item.date).getTime()
      );
    })
    .slice(0, limit)
    .map(({ item }) => item);
};

export const getBlogCategories = () =>
  Array.from(new Set(blogPosts.map((post) => post.category)));

export const getBlogTags = () =>
  Array.from(new Set(blogPosts.flatMap((post) => post.tags))).sort((a, b) =>
    a.localeCompare(b)
  );

export const getMatchingBlogCategories = (search: string) => {
  const normalizedSearch = search.trim().toLowerCase();

  if (!normalizedSearch) {
    return [];
  }

  return getBlogCategories().filter((category) =>
    category.toLowerCase().includes(normalizedSearch)
  );
};

export const getMatchingBlogTags = (search: string) => {
  const normalizedSearch = search.trim().toLowerCase();

  if (!normalizedSearch) {
    return [];
  }

  return getBlogTags().filter((tag) =>
    tag.toLowerCase().includes(normalizedSearch)
  );
};

export const filterBlogPosts = (
  posts: BlogPost[],
  { search, category, tag }: BlogFilterOptions,
  options?: {
    matchingCategories?: string[];
    matchingTags?: string[];
  }
) => {
  const normalizedSearch = search?.trim().toLowerCase() ?? "";
  const normalizedCategory = category?.trim().toLowerCase() ?? "";
  const normalizedTag = tag?.trim().toLowerCase() ?? "";
  const normalizedMatchingCategories =
    options?.matchingCategories?.map((item) => item.toLowerCase()) ?? [];
  const normalizedMatchingTags =
    options?.matchingTags?.map((item) => item.toLowerCase()) ?? [];

  return posts.filter((post) => {
    const matchesSearch =
      !normalizedSearch ||
      [
        post.title,
        post.subtitle,
        post.excerpt,
        post.category,
        post.tags.join(" "),
        post.lead,
        post.closing,
        post.sections
          .map((section) =>
            [section.heading, section.paragraphs?.join(" "), section.items?.join(" ")]
              .filter(Boolean)
              .join(" ")
          )
          .join(" "),
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch);

    const matchesCategory =
      normalizedMatchingCategories.length > 0
        ? normalizedMatchingCategories.includes(post.category.toLowerCase())
        : !normalizedCategory ||
          post.category.toLowerCase() === normalizedCategory;

    const matchesTag =
      normalizedMatchingTags.length > 0
        ? post.tags.some((postTag) =>
            normalizedMatchingTags.includes(postTag.toLowerCase())
          )
        : !normalizedTag ||
          post.tags.some((postTag) => postTag.toLowerCase() === normalizedTag);

    return matchesSearch && matchesCategory && matchesTag;
  });
};
