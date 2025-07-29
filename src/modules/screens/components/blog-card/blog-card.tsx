import React from "react";

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  date: string;
}

const BlogCard = ({ image, category, title, date = "2025-07-27" }: BlogCardProps) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("default", { month: "short" }); 
  const day = dateObj.getDate(); 

  return (
    <div className="rounded-4 bg-light p-2 shadow-sm" style={{ maxWidth: 400 }}>
      <div className="position-relative">
        <img
          src={image}
          alt={title}
          className="img-fluid rounded-2"
          style={{ objectFit: "cover", height: "230px", width: "100%" }}
        />
        <div
          className="position-absolute m-2 bg-white rounded-2 text-center shadow-sm"
          style={{
            width: "50px",
            padding: "5px 0",
            top: "85%",
            left: "90%",
            transform: "translateX(-50%)",
          }}
        >
          <div className="small text-muted">{month}</div>
          <div className="fw-bold">{day}</div>
        </div>
      </div>
      <div className="px-2 pt-3">
        <div className="text-muted small">{category}</div>
        <div className="fw-semibold">{title}</div>
      </div>
    </div>
  );
};

export default BlogCard;
