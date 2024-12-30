import React from "react";
import paginationStyles from "./pagination.module.css";
import Arrows from "@assets/Arrows";
import StatusButton from "@components/StatusButton";

const Pagination = ({ className="", ...props }) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={`${paginationStyles.container} ${className}`}
    {...props}
  />
);

const PaginationContent = React.forwardRef(({ className="", ...props }, ref) => (
  <ul
    ref={ref}
    className={`${paginationStyles.content} ${className}`}
    {...props}
  />
));

const PaginationItem = React.forwardRef(({ className="", ...props }, ref) => (
  <li
    ref={ref}
    className={`${paginationStyles.item} ${className}`}
    {...props}
  />
));

const PaginationLink = ({
  isActive,
  size = "icon",
  className="",
  children,
  ...props
}) => (
  <StatusButton
    className={`${paginationStyles.link} ${
      isActive ? paginationStyles.active : ""
    } ${paginationStyles[size]} ${className}`}
    {...props}
  >
    {children}
  </StatusButton>
);

const PaginationPrevious = ({ className="", isActive, ...props }) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={`${paginationStyles.prev} ${paginationStyles.icon} ${
      isActive && paginationStyles.ellipsisActive
    } ${className}`}
    {...props}
  >
    <Arrows className={paginationStyles.rotate180} />
  </PaginationLink>
);

const PaginationNext = ({ className="", ...props }) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={`${paginationStyles.next} ${paginationStyles.icon} ${className}`}
    {...props}
  >
    <Arrows />
  </PaginationLink>
);

const PaginationEllipsis = ({ className="",isActive, ...props }) => (
  <span
    aria-hidden
    className={`${paginationStyles.ellipsis}  ${
      isActive && paginationStyles.ellipsisActive
    } ${className}`}
    {...props}
  >
    ...
  </span>
);

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
