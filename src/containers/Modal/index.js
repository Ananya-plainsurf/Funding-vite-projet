import React from "react";
import "./modal.css";

const Modal = ({ projectDetails, setPopoverIndex }) => {
  console.log({ projectDetails });

  return (
    <div id="myModal" className="modal" style={{ display: "block" }}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={() => setPopoverIndex(null)}>
            &times;
          </span>
          <h2 className="modal-header-text text-center">Funding Details</h2>
        </div>
        <div className="modal-body">
          <p>
            <strong className="text-style">Title:</strong>{" "}
            {projectDetails?.title}
          </p>
          <p>
            <strong className="text-style">Description:</strong>{" "}
            {projectDetails?.blurb || "No description available."}
          </p>
          <p>
            <strong className="text-style">Location:</strong>{" "}
            {projectDetails?.location || "No location available."}
          </p>
          <p>
            <strong className="text-style">By:</strong>{" "}
            {projectDetails?.by || "No by available."}{" "}
            <a
              href={`https://www.kickstarter.com/${projectDetails.url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              For more details please check kickstart
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Modal;
