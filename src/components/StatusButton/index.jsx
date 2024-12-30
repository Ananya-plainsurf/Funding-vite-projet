import React from "react";
import styles from "./statusButton.module.css";
import { statusText } from "@utilities/constants";

const StatusButton = React.forwardRef(
  ({ className, status, children, ...props }, ref) => (
    <button
      ref={ref}
      className={`${styles.statusBadge} ${status ? styles[status] : ''} ${className}`}
      {...props}
    >
      {Boolean(status) ? statusText[status] : children}
    </button>
  )
);
StatusButton.displayName = "StatusButton";

export default StatusButton;