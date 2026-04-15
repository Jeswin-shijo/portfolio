import { useState } from "react";
import "./filter-section.css";
import {
  buildPackageHref,
  tourPackages,
  type PackageCategory,
} from "../../../../data/tour-packages";
import { navigateTo } from "../../../../shared/navigation/site-navigation";

type FiltersState = {
  destination: string;
  tourType: PackageCategory | "";
  date: string;
  duration: string;
};

const FilterSection = () => {
  const [filters, setFilters] = useState<FiltersState>({
    destination: "",
    tourType: "",
    date: "",
    duration: "",
  });
  const [feedback, setFeedback] = useState<string | null>(null);

  const getUpcomingDates = () => {
    const today = new Date();
    const dates: string[] = [];

    for (let i = 0; i < 14; i++) {
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

  const dateOptions = getUpcomingDates();
  const destinationOptions = tourPackages.map((pkg) => ({
    value: pkg.slug,
    label: pkg.title,
  }));
  const durationOptions = Array.from(
    new Set(tourPackages.map((pkg) => String(pkg.days)))
  )
    .sort((left, right) => Number(left) - Number(right))
    .map((value) => ({
      value,
      label: `${value} Day${value === "1" ? "" : "s"}`,
    }));
  const tourTypeOptions: Array<{ value: PackageCategory | ""; label: string }> = [
    { value: "", label: "Any type" },
    { value: "international", label: "International" },
    { value: "domestic", label: "Domestic" },
    { value: "honeymoon", label: "Honeymoon" },
  ];

  const updateFilter = (name: keyof FiltersState, value: string) => {
    setFilters((current) => ({
      ...current,
      [name]: value,
    }));
    setFeedback(null);
  };

  const matchingPackages = tourPackages.filter((pkg) => {
    const matchesDestination =
      !filters.destination || pkg.slug === filters.destination;
    const matchesTourType =
      !filters.tourType || pkg.category === filters.tourType;
    const matchesDuration =
      !filters.duration || String(pkg.days) === filters.duration;

    return matchesDestination && matchesTourType && matchesDuration;
  });

  const hasTripCriteria = Boolean(
    filters.destination || filters.tourType || filters.duration
  );

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!hasTripCriteria) {
      setFeedback("Choose a destination, tour type, or travel duration first.");
      return;
    }

    if (matchingPackages.length === 0) {
      setFeedback("No matching packages found yet. Try another combination.");
      return;
    }

    const preferredPackage =
      matchingPackages.find((pkg) => pkg.slug === filters.destination) ||
      matchingPackages[0];

    window.sessionStorage.setItem(
      "popupTours:lastSearch",
      JSON.stringify({
        ...filters,
        matchedSlug: preferredPackage.slug,
        searchedAt: new Date().toISOString(),
      })
    );

    navigateTo(buildPackageHref(preferredPackage.slug));
  };

  return (
    <div className="filter-panel-shell">
      <form
        className="filter-panel-container d-flex flex-wrap align-items-end gap-3 p-4 rounded-4"
        onSubmit={handleSearch}
      >
        <div className="filter-item d-flex flex-column">
          <label className="text-white-50 small mb-1" htmlFor="filter-destination">
            Destination
          </label>
          <select
            id="filter-destination"
            className="form-select text-white-50 bg-transparent border border-white"
            value={filters.destination}
            onChange={(event) => updateFilter("destination", event.target.value)}
          >
            <option value="">Any destination</option>
            {destinationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-item d-flex flex-column">
          <label className="text-white-50 small mb-1" htmlFor="filter-tour-type">
            Tour Type
          </label>
          <select
            id="filter-tour-type"
            className="form-select text-white-50 bg-transparent border border-white"
            value={filters.tourType}
            onChange={(event) =>
              updateFilter("tourType", event.target.value as PackageCategory | "")
            }
          >
            {tourTypeOptions.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-item d-flex flex-column">
          <label className="text-white-50 small mb-1" htmlFor="filter-date">
            Date
          </label>
          <select
            id="filter-date"
            className="form-select text-white-50 bg-transparent border border-white"
            value={filters.date}
            onChange={(event) => updateFilter("date", event.target.value)}
          >
            <option value="">Any date</option>
            {dateOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-item d-flex flex-column">
          <label className="text-white-50 small mb-1" htmlFor="filter-duration">
            Travel Duration
          </label>
          <select
            id="filter-duration"
            className="form-select text-white-50 bg-transparent border border-white"
            value={filters.duration}
            onChange={(event) => updateFilter("duration", event.target.value)}
          >
            <option value="">Any duration</option>
            {durationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="search-btn d-flex align-items-center justify-content-center border border-white rounded-3"
          aria-label="Search matching tour packages"
        >
          <i className="bi bi-search text-white"></i>
        </button>
      </form>

      <p className="filter-panel-feedback">
        {feedback
          ? feedback
          : hasTripCriteria
            ? `${matchingPackages.length} matching package${
                matchingPackages.length === 1 ? "" : "s"
              } found`
            : ""}
      </p>
    </div>
  );
};

export default FilterSection;
