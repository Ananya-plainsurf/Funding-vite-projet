import React, { useEffect, useState, useMemo, useCallback } from "react";
import TableWrapper from "@features/TableWrapper";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@components/Pagination";
import Search from "@components/Search";
import { useGetFundingDetails } from "@hooks/useGetFundingDetails";

const ParentWrapper = () => {
  const fundingDetails = useGetFundingDetails();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDetails, setFilteredDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setFilteredDetails(fundingDetails);
  }, [fundingDetails]);

  const handleSearch = useCallback(
    (e) => {
      const searchValue = e.target.value;
      setSearchTerm(searchValue);
      const filtered = fundingDetails?.filter((project) =>
        project.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredDetails(filtered);
      setCurrentPage(1);
    },
    [fundingDetails]
  );

  const totalPagesToShow = useMemo(() => {
    return Number.isInteger(filteredDetails.length / itemsPerPage)
      ? filteredDetails.length / itemsPerPage
      : Math.floor(filteredDetails.length / itemsPerPage) + 1;
  }, [filteredDetails.length]);

  const indexOfLastItem = useMemo(
    () => currentPage * itemsPerPage,
    [currentPage, itemsPerPage]
  );
  const indexOfFirstItem = useMemo(
    () => indexOfLastItem - itemsPerPage,
    [indexOfLastItem, itemsPerPage]
  );
  const currentItems = useMemo(
    () => filteredDetails.slice(indexOfFirstItem, indexOfLastItem),
    [filteredDetails, indexOfFirstItem, indexOfLastItem]
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleFilter = useCallback(
    (data) => {
      const filterOn =
        data.type === "amount" ? "amt.pledged" : "percentage.funded";
      if (data?.value === "lowHigh") {
        const sortedProjects = [...fundingDetails].sort(
          (a, b) => a[filterOn] - b[filterOn]
        );

        setFilteredDetails(sortedProjects);
      } else if (data?.value === "highLow") {
        const sortedProjects = [...fundingDetails].sort(
          (a, b) => b[filterOn] - a[filterOn]
        );

        setFilteredDetails(sortedProjects);
      } else {
        setFilteredDetails(fundingDetails);
      }
    },
    [fundingDetails]
  );

  return (
    <div className="parent-wrapper">
      <Search value={searchTerm} onChange={handleSearch} />
      <TableWrapper fundingDetails={currentItems} handleFilter={handleFilter} />
      <Pagination>
        <PaginationPrevious
          onClick={() => paginate(currentPage - 1)}
          className={`${currentPage === 1 ? "disabled" : ""}`}
          disabled={currentPage === 1}
        />
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" isActive={currentPage === 1}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive={currentPage === 2}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis
              isActive={currentPage > 2 && currentPage < totalPagesToShow}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={currentPage === totalPagesToShow}
            >
              {totalPagesToShow}
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
        <PaginationNext
          onClick={() => paginate(currentPage + 1)}
          className={`${
            indexOfLastItem >= fundingDetails.length ? "disabled" : ""
          }`}
          disabled={indexOfLastItem >= fundingDetails.length}
        />
      </Pagination>
    </div>
  );
};

export default ParentWrapper;
