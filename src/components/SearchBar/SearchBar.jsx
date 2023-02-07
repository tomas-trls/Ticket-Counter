import React from "react";
import "./SearchBar.scss";

const SearchBar = (props) => {
  const { action } = props;
  return (
    <>
      <input
        type="text"
        className="ticket-counter__filter--search"
        id="searchBar"
        placeholder="Please enter a name"
        onChange={action}
      />
    </>
  );
};

export default SearchBar;
