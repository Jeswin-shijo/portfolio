import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import "./search-bar.css";

type SearchBarProps = {
  initialValue?: string;
  placeholder?: string;
  onSearch?: (value: string) => void;
  onLiveSearch?: (value: string) => void;
};

const SearchBar = ({
  initialValue = "",
  placeholder = "Search Blogs",
  onSearch,
  onLiveSearch,
}: SearchBarProps) => {
  const [query, setQuery] = useState(initialValue);
  const skipLiveSearchRef = useRef(true);
  const liveSearchHandlerRef = useRef(onLiveSearch);

  useEffect(() => {
    skipLiveSearchRef.current = true;
    setQuery(initialValue);
  }, [initialValue]);

  useEffect(() => {
    liveSearchHandlerRef.current = onLiveSearch;
  }, [onLiveSearch]);

  useEffect(() => {
    if (!liveSearchHandlerRef.current) {
      return;
    }

    if (skipLiveSearchRef.current) {
      skipLiveSearchRef.current = false;
      return;
    }

    const timeoutId = window.setTimeout(() => {
      liveSearchHandlerRef.current?.(query.trim());
    }, 220);

    return () => window.clearTimeout(timeoutId);
  }, [query]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch?.(query.trim());
  };

  return (
    <form className="input-group search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control p-2 ps-4"
        placeholder={placeholder}
        aria-label={placeholder}
        value={query}
        onChange={(event) => {
          skipLiveSearchRef.current = false;
          setQuery(event.target.value);
        }}
      />
      <button className="btn btn-warning" type="submit" aria-label="Search blogs">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
