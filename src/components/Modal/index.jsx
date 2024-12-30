import React from "react";
import styles from "./modal.module.css";

const Modal = ({ fundingDetails, setPopoverIndex }) => {
  return (
    <div id="myModal" className={styles.modal} style={{ display: "block" }}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <span
            className={styles.closeButton}
            onClick={() => setPopoverIndex(null)}
          >
            &times;
          </span>
          <h2 className={styles.headerText}>Funding Details</h2>
        </div>
        <div className={styles.body}>
          <p>
            <strong className={styles.textStyle}>Title:</strong>{" "}
            {fundingDetails?.title}
          </p>
          <p>
            <strong className={styles.textStyle}>Description:</strong>{" "}
            {fundingDetails?.blurb || "No description available."}
          </p>
          <p>
            <strong className={styles.textStyle}>Location:</strong>{" "}
            {fundingDetails?.location || "No location available."}
          </p>
          <p>
            <strong className={styles.textStyle}>By:</strong>{" "}
            {fundingDetails?.by || "No by available."}{" "}
            <a
              href={`https://www.kickstarter.com/${fundingDetails.url}`}
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
