import React from 'react';
import './filter-section.css';

const FilterSection = () => {
  return (
    <div className="filter-panel-container d-flex flex-wrap align-items-end gap-3 p-4 rounded-4">
      {['Destination', 'Tour Type', 'Date', 'Travel Duration'].map((label, idx) => (
        <div className="filter-item d-flex flex-column" key={idx}>
          <label className="text-white-50 small mb-1">{label}</label>
          <select className="form-select text-white-50 bg-transparent border border-white">
            <option>Select</option>
          </select>
        </div>
      ))}
      <button className="search-btn d-flex align-items-center justify-content-center border border-white rounded-3">
        <i className="bi bi-search text-white"></i>
      </button>
    </div>
  );
};

export default FilterSection;
