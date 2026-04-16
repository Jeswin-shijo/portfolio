import "./blog-page.css";
import FooterScreen from "../modules/screens/footer-screen";
import BlogCard from "../modules/screens/components/blog-card/blog-card";
import PageHero from "../shared/components/page-hero/page-hero";
import SearchBar from "../shared/components/search-bar/search-bar";
import CategoryCard from "../shared/components/category-card/category-card";
import {
  buildBlogHref,
  buildBlogListHref,
  filterBlogPosts,
  getBlogCategories,
  getMatchingBlogCategories,
  getMatchingBlogTags,
  getBlogTags,
  getSortedBlogPosts,
} from "../data/blog-posts";
import { navigateTo } from "../shared/navigation/site-navigation";

const BlogPage = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const search = searchParams.get("search") ?? "";
  const activeCategory = searchParams.get("category");
  const activeTag = searchParams.get("tag");
  const matchedCategories = getMatchingBlogCategories(search);
  const matchedTags = getMatchingBlogTags(search);

  const posts = getSortedBlogPosts();
  const filteredPosts = filterBlogPosts(posts, {
    search,
    category: activeCategory,
    tag: activeTag,
  }, {
    matchingCategories: matchedCategories,
    matchingTags: matchedTags,
  });

  const hasFilters = Boolean(search || activeCategory || activeTag);

  return (
    <>
      <PageHero
        title="Travel Stories, Guides & Planning Notes"
        subtitle="Explore destination ideas, planning tips, and travel inspiration curated for couples, families, and relaxed explorers."
        backgroundImage='url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80")'
        activeNav="blog"
      />

      <section className="blog-page">
        <div className="blog-page__container">
          <aside className="blog-page__sidebar">
            <SearchBar
              initialValue={search}
              onLiveSearch={(value) =>
                navigateTo(
                  buildBlogListHref({
                    search: value || undefined,
                    category: activeCategory,
                    tag: activeTag,
                  }),
                  { replace: true }
                )
              }
              onSearch={(value) =>
                navigateTo(
                  buildBlogListHref({
                    search: value || undefined,
                    category: activeCategory,
                    tag: activeTag,
                  })
                )
              }
            />

            <CategoryCard
              categories={getBlogCategories()}
              tags={getBlogTags()}
              activeCategory={activeCategory}
              activeTag={activeTag}
              matchedCategories={matchedCategories}
              matchedTags={matchedTags}
              onCategorySelect={(value) =>
                navigateTo(
                  buildBlogListHref({
                    search: search || undefined,
                    category: value,
                    tag: activeTag,
                  })
                )
              }
              onTagSelect={(value) =>
                navigateTo(
                  buildBlogListHref({
                    search: search || undefined,
                    category: activeCategory,
                    tag: value,
                  })
                )
              }
            />
          </aside>

          <div className="blog-page__content">
            <div className="blog-page__toolbar">
              <div>
                <h2>Latest Articles</h2>
                <p>
                  {filteredPosts.length} article
                  {filteredPosts.length === 1 ? "" : "s"} found
                  {search ? ` for "${search}"` : ""}
                </p>
              </div>
              {hasFilters ? (
                <button
                  type="button"
                  className="blog-page__clear"
                  onClick={() => navigateTo("/blog")}
                >
                  Clear Filters
                </button>
              ) : null}
            </div>

            {filteredPosts.length ? (
              <div className="blog-page__grid">
                {filteredPosts.map((post) => (
                  <BlogCard
                    key={post.slug}
                    image={post.cardImage}
                    category={post.category}
                    title={post.title}
                    date={post.date}
                    href={buildBlogHref(post.slug)}
                    fullWidth
                  />
                ))}
              </div>
            ) : (
              <div className="blog-page__empty">
                <h3>No matching blog posts yet</h3>
                <p>
                  Try a different search term, remove one of the filters, or
                  browse all articles again.
                </p>
                <button type="button" onClick={() => navigateTo("/blog")}>
                  View All Blogs
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <FooterScreen />
    </>
  );
};

export default BlogPage;
