import React from "react";
import searchStyle from "./search.module.css";

const Search = React.forwardRef(
  ({ className, status, children, ...props }, ref) => (
    <div className={searchStyle.searchBar}>
      <input type="text" placeholder="Search projects..." {...props} />
    </div>
  )
);
Search.displayName = "Search";

export default Search;
