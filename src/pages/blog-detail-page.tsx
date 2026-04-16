import "./blog-detail-page.css";
import FooterScreen from "../modules/screens/footer-screen";
import PageHero from "../shared/components/page-hero/page-hero";
import CategoryCard from "../shared/components/category-card/category-card";
import SearchBar from "../shared/components/search-bar/search-bar";
import {
  buildBlogHref,
  buildBlogListHref,
  getBlogCategories,
  getBlogPostBySlug,
  getRelatedBlogPosts,
  getBlogTags,
  getSortedBlogPosts,
} from "../data/blog-posts";
import { navigateTo } from "../shared/navigation/site-navigation";

type BlogDetailPageProps = {
  slug: string;
};

const BlogDetailPage = ({ slug }: BlogDetailPageProps) => {
  const post = getBlogPostBySlug(slug) ?? getSortedBlogPosts()[0];
  const recentBlogs = getSortedBlogPosts()
    .filter((item) => item.slug !== post.slug)
    .slice(0, 4);
  const relatedBlogs = getRelatedBlogPosts(post, 3);

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={post.subtitle}
        backgroundImage={`url("${post.heroImage}")`}
        activeNav="blog"
        meta={
          <div className="blog-detail-page__hero-meta">
            <span>{new Date(post.date).toLocaleDateString("en-GB")}</span>
            <span>{post.category}</span>
            <span>{post.readingTime}</span>
          </div>
        }
      />

      <section className="blog-detail-page">
        <div className="blog-detail-page__container">
          <div className="blog-detail-page__main">
            <article className="blog-detail-page__content">
              <p className="blog-detail-page__lead">{post.lead}</p>

              {post.sections.map((section) => (
                <div key={section.heading} className="blog-detail-page__section">
                  <h2>{section.heading}</h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.items ? (
                    <ul
                      className={
                        section.listStyle === "tips"
                          ? "blog-detail-page__tips"
                          : "blog-detail-page__checklist"
                      }
                    >
                      {section.items.map((item) => (
                        <li key={item}>
                          <i
                            className={
                              section.listStyle === "tips"
                                ? "bi bi-check2"
                                : "bi bi-check-square-fill"
                            }
                          ></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}

              <p className="mt-4">{post.closing}</p>

              <div className="blog-detail-page__tags">
                {post.tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => navigateTo(buildBlogListHref({ tag }))}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </article>

            {relatedBlogs.length ? (
              <div className="blog-detail-page__related">
                <h2 className="blog-detail-page__related-title">Related Blogs</h2>
                <div className="blog-detail-page__related-grid">
                  {relatedBlogs.map((blog) => {
                    const date = new Date(blog.date);
                    const month = date.toLocaleString("default", { month: "short" });
                    const day = date.getDate();

                    return (
                      <button
                        key={blog.slug}
                        type="button"
                        className="blog-detail-page__related-card"
                        aria-label={`Open related blog: ${blog.title}`}
                        onClick={() => navigateTo(buildBlogHref(blog.slug))}
                      >
                        <div className="blog-detail-page__related-image-wrap">
                          <img src={blog.cardImage} alt={blog.title} />
                          <div className="blog-detail-page__related-date">
                            <span>{month}</span>
                            <strong>{day}</strong>
                          </div>
                        </div>
                        <div className="blog-detail-page__related-body">
                          <span className="blog-detail-page__related-category">
                            {blog.category}
                          </span>
                          <h3>{blog.title}</h3>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>

          <aside className="blog-detail-page__sidebar">
            <SearchBar
              onLiveSearch={(value) =>
                navigateTo(
                  buildBlogListHref({ search: value || undefined }),
                  { replace: true }
                )
              }
              onSearch={(value) =>
                navigateTo(buildBlogListHref({ search: value || undefined }))
              }
            />
            <CategoryCard
              categories={getBlogCategories()}
              tags={getBlogTags()}
              activeCategory={post.category}
              onCategorySelect={(value) =>
                navigateTo(buildBlogListHref({ category: value }))
              }
              onTagSelect={(value) => navigateTo(buildBlogListHref({ tag: value }))}
            />

            <div className="blog-detail-page__recent">
              <h3>Recent Blogs</h3>
              {recentBlogs.map((blog) => (
                <button
                  key={blog.slug}
                  type="button"
                  className="blog-detail-page__recent-item"
                  aria-label={`Open recent blog: ${blog.title}`}
                  onClick={() => navigateTo(buildBlogHref(blog.slug))}
                >
                  <img src={blog.cardImage} alt={blog.title} />
                  <div>
                    <span className="blog-detail-page__recent-date">
                      {new Date(blog.date).toLocaleDateString("en-GB")}
                    </span>
                    <p className="blog-detail-page__recent-title">{blog.title}</p>
                  </div>
                </button>
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
