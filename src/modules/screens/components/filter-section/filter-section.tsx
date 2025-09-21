import React from "react";
import "./filter-section.css";

const FilterSection = () => {
  
  const getCurrentWeekDays = () => {
    const today = new Date();
    const dates: string[] = [];

    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);

      const day = String(nextDate.getDate()).padStart(2, "0");
      const month = String(nextDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
      const year = nextDate.getFullYear();

      const formatted = `${day}.${month}.${year}`;
      dates.push(formatted);
    }

    return dates;
  };

  const options = getCurrentWeekDays();

  const staticData = [
    {
      label: "Destination",
      options: ["Chennai", "Munnar", "New Delhi", "Kashmir", "Ladakh"],
    },
    {
      label: "Tour Type",
      options: [
        "Family",
        "Solo Ride",
        "Couples",
        "Group of Friends",
        "Honeymoon",
      ],
    },
    {
      label: "Date",
      options: options,
    },
    {
      label: "Travel Duration",
      options: ["1 Day", "2 Days", "1 Week"],
    },
  ];

  return (
    <div className="filter-panel-container d-flex flex-wrap align-items-end gap-3 p-4 rounded-4">
      {staticData.map((item, idx) => (
        <div className="filter-item d-flex flex-column" key={idx}>
          <label className="text-white-50 small mb-1">{item.label}</label>
          <select className="form-select text-white-50 bg-transparent border border-white">
            {item.options.map((label, i) => (
              <option key={i}>{label}</option>
            ))}
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
