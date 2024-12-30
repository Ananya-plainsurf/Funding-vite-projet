import React from "react";
import "./statusButton.css";
import { statusText } from "../../utilities/constants";

const StatusButton = React.forwardRef(
  ({ className, status, children, ...props }, ref) => (
    <button
      ref={ref}
      className={`status-badge ${status} ${className}`}
      {...props}
    >
      {Boolean(status) ? statusText[status] : children}
    </button>
  )
);
StatusButton.displayName = "StatusButton";

export default StatusButton;
