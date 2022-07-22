import React from "react";
import agent from "../../agent";

const SearchBar = (props) => {
  function handleSearchTermChange(ev) {
    let term = ev.target.value;
    if (term.length >= 3) {
      props.onSearchBoxUpdate(
        term,
        (page) => agent.Items.byTitleSearch(term, page),
        agent.Items.byTitleSearch(term)
      );
    }
  }

  return (
    <span className="product-search-form has-search">
      <input
        id="search-box"
        type="text"
        placeholder="What is it that you truly desire?"
        value={props.searchTerm}
        onChange={handleSearchTermChange}
      ></input>
    </span>
  );
};

export default SearchBar;
