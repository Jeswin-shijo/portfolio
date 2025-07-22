import React from "react";
import "./hover-button.css"; // Custom styles

const HoverButton = ({ children, className = "", ...props }: any) => {
  return (
    <button
      className={`hover-button position-relative overflow-hidden rounded-4 border-0 px-4 py-2 fw-semibold text-dark ${className}`}
      {...props}
    >
      {/* First layer (default) */}
      <span className="default-layer d-flex align-items-center gap-2 position-relative z-1">
        <div
          className="rounded-circle bg-dark"
          style={{ width: "8px", height: "8px" }}
        />
        {children}
      </span>

      {/* Second layer (hover state) */}
      <span className="hover-layer position-absolute top-50 start-50 translate-middle d-flex align-items-center gap-2">
        {children}
        <span className="arrow">→</span>
      </span>
    </button>
  );
};

export default HoverButton;
