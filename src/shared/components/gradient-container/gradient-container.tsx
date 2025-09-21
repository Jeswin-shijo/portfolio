import React, { useState } from "react";

const GradientContainer = ({
  className = "",
  style = {},
  children,
  primary = "#09152F",
  secondary = "#1B4963",
}:any) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPos({ x, y });
  };
  
  return (
    <div
      className={className}
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, ${primary}, ${secondary}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default GradientContainer;
