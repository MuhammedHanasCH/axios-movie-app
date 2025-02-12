import React, { useState } from "react";
import { FormControl, Button, Spinner } from "react-bootstrap";
import './Searchbar.css';

const SearchBar = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="search-bar-container">
      <FormControl
        type="text"
        placeholder="Search for a movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <Button
        variant="primary"
        onClick={handleSearch}
        disabled={isLoading}
        className="search-button"
      >
        {isLoading ? <Spinner animation="border" size="sm" /> : "Search"}
      </Button>
    </div>
  );
};

export default SearchBar;
