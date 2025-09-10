import React from "react";
import BlogCard from "../components/blog-card/blog-card";
import ScreenName from "../../../shared/components/screen-name";
const blogPosts = [
  {
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    category: "Townhome",
    title: "Unveils the Best Canadian Cities for Biking and Walk",
    date: "2025-07-27",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    category: "Villa",
    title: "Diamond Manor Apartment in the New York and Service",
    date: "2025-07-27",
  },
  {
    image: "https://images.unsplash.com/photo-1523958203904-cdcb402031fd",
    category: "Townhome",
    title: "7 Simple Ways to Keep Your Kids’ Toys From Taking Over Your Home",
    date: "2025-07-27",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    category: "Villa",
    title: "Diamond Manor Apartment in the New York and Service",
    date: "2025-07-27",
  },
  {
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    category: "Townhome",
    title: "Unveils the Best Canadian Cities for Biking and Walk",
    date: "2025-07-27",
  },
];
const TravelBlogScreen = () => {
  return (
    <section className="py-5 p-5 bg-light">
      <div className="p-5">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelBlogScreen;
