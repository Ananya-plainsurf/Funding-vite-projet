import React from "react";
import "./search.css";

const Search = React.forwardRef(
  ({ className, status, children, ...props }, ref) => (
    <div className="search-bar">
      <input type="text" placeholder="Search projects..." {...props} />
    </div>
  )
);
Search.displayName = "Search";

export default Search;
