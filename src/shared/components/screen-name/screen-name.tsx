import React from "react";

const ScreenName = ({ name = "" }) => {
  return (
    <div className="mb-4">
      <span className="border border-secondary text-secondary px-2 py-2 small d-inline-block mb-3" style={{ borderRadius: 10, fontSize: 17}}>
        {name}
      </span>
    </div>
  );
};

export default ScreenName;
