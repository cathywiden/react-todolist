import React from "react";

// Sorting according to prio flag and search are bundled in here
const SearchPrioSorting = ({
  handleSort,
  sortByPriority,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="sort-button" onClick={handleSort}>
        {sortByPriority ? <span>&#x2605;</span> : "default"}
      </button>
    </div>
  );
};

export default SearchPrioSorting;
