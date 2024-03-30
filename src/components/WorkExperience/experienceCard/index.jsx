import React from "react";
import styles from "./experienceCard.module.css";
const ExperienceCard = ({ details }) => {
  return (
    <main className={styles["experience_card"]}>
      <h5>{details.title}</h5>
      <h6>{details.company}</h6>
      <div className={styles["duration"]}>{details.duration}</div>
      <ul>
        {details.description?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </main>
  );
};

export default ExperienceCard;
