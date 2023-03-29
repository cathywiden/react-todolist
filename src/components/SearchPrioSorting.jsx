import React from "react";

const SearchPrioSorting = ({
  handleSort,
  sortByPriority,
  searchTerm,
  setSearchTerm,
  todos,
  setFilteredTodos,
}) => {
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filteredTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
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
