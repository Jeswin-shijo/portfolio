import "./blog-detail-page.css";
import FooterScreen from "../modules/screens/footer-screen";
import PageHero from "../shared/components/page-hero/page-hero";
import CategoryCard from "../shared/components/category-card/category-card";
import SearchBar from "../shared/components/search-bar/search-bar";

const recentBlogs = [
  {
    date: "08-08-2025",
    title: "Dubai Unveiled: Smart Travel Tricks for a Luxurious Arabian Escape",
    image:
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=400&q=80",
  },
  {
    date: "08-08-2025",
    title: "Bangkok After Dark: What to Know Before Your First Night Market",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=400&q=80",
  },
  {
    date: "08-08-2025",
    title: "Hidden Lagoon Stays for Travelers Who Want More Than a Resort",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    date: "08-08-2025",
    title: "Tea Trails and Mountain Roads: Planning a Calm Hill Escape",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400&q=80",
  },
];

const BlogDetailPage = () => {
  return (
    <>
      <PageHero
        title="Crystal Clear Waters, Overwater Villas & Sunset Dreams Await!"
        subtitle="A soft-paced Maldives guide for travelers planning a stylish island stay without the guesswork."
        backgroundImage='url("https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1600&q=80")'
        activeNav="blog"
      />

      <section className="blog-detail-page">
        <div className="blog-detail-page__container">
          <article className="blog-detail-page__content">
            <p className="blog-detail-page__lead">
              Close your eyes: you wake up to the gentle lapping of waves
              beneath your overwater villa. The turquoise waters stretch
              endlessly before you, and as you sip on fresh coconut water, you
              realize you are in paradise. Welcome to the Maldives.
            </p>

            <h2>Packing Checklist for the Maldives:</h2>
            <ul className="blog-detail-page__checklist">
              <li>
                <i className="bi bi-check-square-fill"></i>
                <span>
                  Breezy beachwear, light kaftans, swimwear, and sandals are
                  all you need for effortless resort days.
                </span>
              </li>
              <li>
                <i className="bi bi-check-square-fill"></i>
                <span>
                  An underwater camera helps you capture reef moments and the
                  Maldives&apos; vivid marine life while snorkeling.
                </span>
              </li>
              <li>
                <i className="bi bi-check-square-fill"></i>
                <span>
                  A waterproof dry bag keeps your essentials safe on speedboat
                  rides, sandbank stops, and beach days.
                </span>
              </li>
              <li>
                <i className="bi bi-check-square-fill"></i>
                <span>
                  A sun hat and good sunglasses matter more than you think. The
                  island light gets bright quickly.
                </span>
              </li>
            </ul>

            <h3 className="mt-5">Pro Tips for a Seamless Maldives Experience:</h3>
            <ul className="blog-detail-page__tips">
              <li>
                <i className="bi bi-check2"></i>
                <span>
                  Choose the right island for your pace. Some islands are best
                  for honeymooners, while others suit active travelers or
                  families.
                </span>
              </li>
              <li>
                <i className="bi bi-check2"></i>
                <span>
                  All-inclusive stays can save money if you plan to dine, relax,
                  and enjoy property activities without moving around much.
                </span>
              </li>
              <li>
                <i className="bi bi-check2"></i>
                <span>
                  Seaplane rides deliver incredible aerial views, while
                  speedboats can be more practical for shorter transfers and
                  tighter budgets.
                </span>
              </li>
              <li>
                <i className="bi bi-check2"></i>
                <span>
                  Book a private sandbank picnic if you want one signature
                  memory that feels intimate, cinematic, and completely removed
                  from the usual resort rhythm.
                </span>
              </li>
            </ul>

            <p className="mt-4">
              The Maldives is waiting for you. From floating breakfasts to
              sunset decks and island-hopping moments, the right plan turns a
              beautiful destination into a calm and unforgettable escape.
            </p>
          </article>

          <aside className="blog-detail-page__sidebar">
            <SearchBar />
            <CategoryCard />

            <div className="blog-detail-page__recent">
              <h3>Recent Blogs</h3>
              {recentBlogs.map((blog) => (
                <div key={blog.title} className="blog-detail-page__recent-item">
                  <img src={blog.image} alt={blog.title} />
                  <div>
                    <span className="blog-detail-page__recent-date">
                      {blog.date}
                    </span>
                    <p className="blog-detail-page__recent-title">{blog.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <FooterScreen />
    </>
  );
};

export default BlogDetailPage;
