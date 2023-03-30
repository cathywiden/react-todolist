import React from "react";

const SearchPrioSorting = ({
  handleSort,
  sortByPriority,
  searchTerm,
  setSearchTerm,
  originalTodos,
  setFilteredTodos,
}) => {
  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    const filteredTodos = originalTodos.filter((todo) =>
      todo.text.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredTodos(filteredTodos);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button className="sort-button" onClick={handleSort}>
        {sortByPriority ? <span>&#x2605;</span> : "default"}
      </button>
    </div>
  );
};

export default SearchPrioSorting;
