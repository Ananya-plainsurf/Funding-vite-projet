import React, { useState } from "react";
import StatusButton from "@components/StatusButton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/Table";
import { currencyCode } from "@utilities/constants";
import Modal from "@components/Modal";
import PopOver from "@components/PopOver";
import FilterIcon from "@assets/Filter";
import TableWrapperStyle from "./tableWrapper.module.css";
import Info from "@assets/Info";

const TableWrapper = ({ fundingDetails, handleFilter }) => {
  const [popoverIndex, setPopoverIndex] = useState(null);

  const PercentageDisplay = (value) => {
    let className = "low";
    if (value > 50 && value <= 99) className = "moderate";
    else if (value >= 100 && value < 150) className = "high";
    else if (value >= 150) className = "exceptional";
    return className;
  };
console.log(popoverIndex);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className={TableWrapperStyle.tableHeadStyle}>
            <TableHead>S.no</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>
              <div className={`${TableWrapperStyle.flexStyle}`}>
                <span>Amount Pledged</span>
                <PopOver handleFilter={handleFilter} type={"amount"}>
                  <FilterIcon />
                </PopOver>
              </div>
            </TableHead>
            <TableHead>
              <div className={`${TableWrapperStyle.flexStyle}`}>
                <span>Percentage Funded</span>
                <PopOver handleFilter={handleFilter} type={"per"}>
                  <FilterIcon />
                </PopOver>
              </div>
            </TableHead>
            <TableHead>Funding Status</TableHead>
            <TableHead>View More</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fundingDetails?.map((project, index) => (
            <TableRow key={index}>
              <TableCell>{project["s.no"] + 1}</TableCell>
              <TableCell>{project.title}</TableCell>
              <TableCell>{`${currencyCode[project.currency]} ${
                project["amt.pledged"]
              }`}</TableCell>
              <TableCell>{project["percentage.funded"]}%</TableCell>
              <TableCell>
                <StatusButton
                  key={index}
                  status={PercentageDisplay(project["percentage.funded"])}
                />
              </TableCell>
              <TableCell>
                <StatusButton
                  key={index}
                  onClick={() => {
                    setPopoverIndex(index);
                  }}
                  className={TableWrapperStyle.infoStyle}
                >
                  <Info />
                </StatusButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {popoverIndex !== null && (
        <Modal
          fundingDetails={fundingDetails[popoverIndex]}
          setPopoverIndex={setPopoverIndex}
        />
      )}
    </div>
  );
};

export default TableWrapper;
