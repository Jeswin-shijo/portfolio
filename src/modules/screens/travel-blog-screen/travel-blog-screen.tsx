import React from "react";
import BlogCard from "../components/blog-card/blog-card";
import ScreenName from "../../../shared/components/screen-name";
import {
  buildBlogHref,
  getSortedBlogPosts,
} from "../../../data/blog-posts";

const TravelBlogScreen = () => {
  const blogPosts = getSortedBlogPosts().slice(0, 3);

  return (
    <section className="py-5 bg-light">
      <div className="site-container">
       <ScreenName name={"Our Travel Blog"}/>

        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <h2
              className="screen-title"
            >
              Inspiration for Your <br /> Next Adventure
            </h2>
          </div>
          <div className="col-md-6">
            <p className="text-muted secondary-text">
              Embark on a journey through our most sought-after destinations —
              from serene hill stations and sun-kissed beaches to vibrant cities
              and cultural wonders.
            </p>
          </div>
        </div>
        <div className="d-flex flex-wrap gap-4 justify-content-between">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.slug}
              image={post.cardImage}
              category={post.category}
              title={post.title}
              date={post.date}
              href={buildBlogHref(post.slug)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelBlogScreen;
