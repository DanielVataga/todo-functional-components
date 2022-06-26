import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ onSearchHandler, searchValue }) => (
  <div className="search-box-wrapper">
    <input
      type="text"
      value={searchValue}
      onChange={onSearchHandler}
      className="search-box"
      placeholder="Type to find"
    />
  </div>
);

export default SearchBox;
