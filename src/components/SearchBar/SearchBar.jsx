import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = (props) => {
  const { handleSearch } = props;

  return (
    <>
      <input
        type="text"
        className="ticket-counter__filter--search"
        id="searchBar"
        placeholder="Please enter a name"
        onChange={handleSearch}
      />
    </>
  );
};

export default SearchBar;
