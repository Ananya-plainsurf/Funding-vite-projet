import React from "react";
import tableStyles from "./table.module.css";


const Table = React.forwardRef(({ className="", ...props }, ref) => (
  <div className={tableStyles.tableContainer}>
    <table
      ref={ref}
      className={`${tableStyles.table} ${className}`}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef(({ className="", ...props }, ref) => (
  <thead ref={ref} className={` ${tableStyles.tableHeader} ${className}`} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef(({ className="", ...props }, ref) => (
  <tbody ref={ref} className={` ${tableStyles.tableBody} ${className}`} {...props} />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef(({ className="", ...props }, ref) => (
  <tfoot ref={ref} className={` ${tableStyles.tableFooter} ${className}`} {...props} />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef(({ className="", ...props }, ref) => (
  <tr ref={ref} className={` ${tableStyles.tableRow} ${className}`} {...props} />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef(({ className, ...props }, ref) => (
  <th ref={ref} className={` ${tableStyles.tableHead} ${className}`} {...props} />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef(({ className="", ...props }, ref) => (
  <td ref={ref} className={` ${tableStyles.tableCell} ${tableStyles.robotoThin} ${className}`} {...props} />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef(({ className="", ...props }, ref) => (
  <caption ref={ref} className={` ${tableStyles.tableCaption} ${className}`} {...props} />
));
TableCaption.displayName = "TableCaption";

export {
    Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow
};

