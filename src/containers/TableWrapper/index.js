import React, { useState } from "react";
import StatusButton from "../../components/StatusButton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/Table";
import { currencyCode } from "../../utilities/constants";
import "./tableWrapper.css";
import Modal from "../Modal";
import PopOver from "../../components/PopOver";
import FilterIcon from "../../assets/Filter";

const TableWrapper = ({ projectDetails, handleFilter }) => {
  const [popoverIndex, setPopoverIndex] = useState(null);

  const PercentageDisplay = (value) => {
    let className = "low";
    if (value > 50 && value <= 99) className = "moderate";
    else if (value >= 100 && value < 150) className = "high";
    else if (value >= 150) className = "exceptional";
    return className;
  };

  return (
    <div className="table-wrapper-container">
      <PopOver />
      <Table>
        <TableCaption className={"table-header-caption"}>
          <h2>list of Crowd Funding</h2>
        </TableCaption>
        <TableHeader>
          <TableRow className={"table-header-row"}>
            <TableHead className="w-100px">S.no</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>
              <span>Amount Pledged</span>
              <PopOver handleFilter={handleFilter} type={"amount"}>
                <FilterIcon />
              </PopOver>
            </TableHead>
            <TableHead className="text-right">
              <span>Percentage Funded</span>
              <PopOver handleFilter={handleFilter} type={"per"}>
                <FilterIcon />
              </PopOver>
            </TableHead>
            <TableHead className="text-right ">Funding Status</TableHead>
            <TableHead className="text-right">View More</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projectDetails.map((project, index) => (
            <TableRow key={index}>
              <TableCell className="w-100px">{project["s.no"] + 1}</TableCell>
              <TableCell>{project.title}</TableCell>
              <TableCell className="text-center">{`${
                currencyCode[project.currency]
              } ${project["amt.pledged"]}`}</TableCell>
              <TableCell className="text-center">
                {project["percentage.funded"]}%
              </TableCell>
              <TableCell className="text-center">
                <StatusButton
                  key={index}
                  status={PercentageDisplay(project["percentage.funded"])}
                />
              </TableCell>
              <TableCell className="text-center">
                <StatusButton
                  key={index}
                  status={"more"}
                  className="cursor"
                  onClick={() => {
                    setPopoverIndex(index);
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {popoverIndex !== null && (
        <Modal
          projectDetails={projectDetails[popoverIndex]}
          setPopoverIndex={setPopoverIndex}
        />
      )}
    </div>
  );
};

export default TableWrapper;
