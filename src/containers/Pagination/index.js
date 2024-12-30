import React from "react";
import "./pagination.css";
import Arrows from "../../assets/Arrows";
import StatusButton from "../../components/StatusButton";

const Pagination = ({ className, ...props }) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={`pagination-container ${className}`}
    {...props}
  />
);

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
  <ul ref={ref} className={`pagination-content ${className}`} {...props} />
));

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={`pagination-item ${className}`} {...props} />
));

const PaginationLink = ({
  isActive,
  size = "icon",
  className,
  children,
  ...props
}) => (
  <StatusButton
    className={`pagination-link ${
      isActive ? "active" : ""
    } ${size} ${className}`}
    {...props}
  >
    {children}
  </StatusButton>
);

const PaginationPrevious = ({ className, ...props }) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={`pagination-prev icon ${className}`}
    {...props}
  >
    <Arrows className="rotate-180" />
  </PaginationLink>
);

const PaginationNext = ({ className, ...props }) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={`pagination-next icon ${className}`}
    {...props}
  >
    <Arrows />
  </PaginationLink>
);

const PaginationEllipsis = ({ className, ...props }) => (
  <span aria-hidden className={`pagination-ellipsis ${className}`} {...props}>
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
