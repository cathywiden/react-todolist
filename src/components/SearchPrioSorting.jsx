import React from "react";

const SearchPrioSorting = ({ handleSort, sortByPriority, searchTerm, setSearchTerm }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search"
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
