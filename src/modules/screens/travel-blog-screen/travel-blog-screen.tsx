import React from "react";
import BlogCard from "../components/blog-card/blog-card";
import ScreenName from "../../../shared/components/screen-name";
const blogPosts = [
  {
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
    category: "Island Guide",
    title: "Crystal Clear Waters, Overwater Villas & Sunset Dreams Await!",
    date: "2025-07-27",
    href: "/blog/maldives-packing-guide",
  },
  {
    image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be",
    category: "City Break",
    title: "Dubai Unveiled: Smart Travel Tricks for a Luxurious Arabian Escape",
    date: "2025-07-27",
    href: "/blog/maldives-packing-guide",
  },
  {
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
    category: "Family Travel",
    title: "7 Ways to Keep Long-Haul Family Trips Smooth and Memorable",
    date: "2025-07-27",
    href: "/blog/maldives-packing-guide",
  },
];
const TravelBlogScreen = () => {
  return (
    <section className="py-5 px-3 px-md-5 bg-light">
      <div className="px-lg-5">
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
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              category={post.category}
              title={post.title}
              date={post.date}
              href={post.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelBlogScreen;
