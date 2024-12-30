import React from "react";
import "./popover.css";
import { filterType } from "../../utilities/constants";

const PopOver = ({ children, handleFilter, type }) => {
  return (
    <div className="popover__wrapper">
      {children}
      <div className="popover__content">
        <ul className="popover__list">
          {Object.entries(filterType).map((item, idx) => (
            <li
              key={idx}
              onClick={() =>
                handleFilter({
                  type,
                  value: item[0],
                })
              }
            >
              {item[1]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopOver;
