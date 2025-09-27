import React from 'react';
import './search-bar.css'; // If you want to override styles

const SearchBar = () => {
  return (
    <div className="input-group search-bar">
      <input
        type="text"
        className="form-control p-2 ps-4"
        placeholder="Search Blogs"
        aria-label="Search Blogs"
      />
      <button className="btn btn-warning" type="button">
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
