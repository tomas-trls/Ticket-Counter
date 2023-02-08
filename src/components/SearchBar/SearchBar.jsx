import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = (props) => {
  const { handleSearch } = props;

  return (
    <div className="ticket-counter__searchbar">
      <label htmlFor="searchBar" className="search__label">
        Search Bar
      </label>
      <input
        type="text"
        className="ticket-counter__searchbar--input"
        id="searchBar"
        placeholder="Please enter a name"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
