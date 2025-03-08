import React from "react";
import styles from "./contactInfo.module.css";

const ContactInfoCard = ({ iconUrl, text, redirection }) => {
  return (
    <a className={styles["link"]} href={redirection} target="_blank" rel="noopener noreferrer">
    <main className={styles["contact_detail_card"]}>
      <div className={styles["icon"]}>
        <img src={iconUrl} alt="contact_icons" width={30} height={30} />
      </div>

      <p>{text}</p>
    </main>
    </a>
  );
};

export default ContactInfoCard;
