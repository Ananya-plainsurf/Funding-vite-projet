import React, { useEffect, useState, useMemo, useCallback } from "react";
import TableWrapper from "../TableWrapper";
import { getProjectDetailResolver } from "../../api/apiResolver";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../Pagination";
import Search from "../../components/Search";

const ParentWrapper = () => {
  const [projectDetails, setProjectDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDetails, setFilteredDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchProjectDetails = async () => {
      const response = await getProjectDetailResolver();
      setProjectDetails(response);
      setFilteredDetails(response);
    };

    fetchProjectDetails();
  }, []);

  const handleSearch = useCallback(
    (e) => {
      const searchValue = e.target.value;
      setSearchTerm(searchValue);
      const filtered = projectDetails.filter((project) =>
        project.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredDetails(filtered);
      setCurrentPage(1);
    },
    [projectDetails]
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
        const sortedProjects = [...projectDetails].sort(
          (a, b) => a[filterOn] - b[filterOn]
        );

        setFilteredDetails(sortedProjects);
      } else if (data?.value === "highLow") {
        const sortedProjects = [...projectDetails].sort(
          (a, b) => b[filterOn] - a[filterOn]
        );

        setFilteredDetails(sortedProjects);
      } else {
        setFilteredDetails(projectDetails);
      }
    },
    [projectDetails]
  );

  return (
    <div className="parent-wrapper">
      <Search value={searchTerm} onChange={handleSearch} />
      <TableWrapper projectDetails={currentItems} handleFilter={handleFilter} />
      <Pagination>
        <PaginationPrevious
          onClick={() => paginate(currentPage - 1)}
          className={`${currentPage === 1 ? "disabled" : ""}`}
          disabled={currentPage === 1}
        />
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" className={currentPage === 1 && "active"}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className={currentPage === 2 && "active"}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis
              className={
                currentPage > 2 && currentPage < totalPagesToShow && "active"
              }
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className={currentPage === totalPagesToShow && "active"}
            >
              {totalPagesToShow}
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
        <PaginationNext
          onClick={() => paginate(currentPage + 1)}
          className={`${
            indexOfLastItem >= projectDetails.length ? "disabled" : ""
          }`}
          disabled={indexOfLastItem >= projectDetails.length}
        />
      </Pagination>
    </div>
  );
};

export default ParentWrapper;
