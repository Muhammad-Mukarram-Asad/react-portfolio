import React from "react";
import styles from "./skillsInfo.module.css";

const SkillsInfoSection = ({ heading, skills }) => {
  return (
    <main className={styles["skills_info_card"]}>
      <h1> {heading}</h1>
      <div className={styles["skills_info_content"]}>
        {skills.map((item, index) => {
            return(
            <>
          <div className={styles["skill_info"]} key={index}>
            <h3>{item.skill}</h3>
            <p>{item.percentage}</p>
          </div>

            <div className={styles["skill_progress_bar"]}>
              <div
                className={styles["progress"]}
                style={{ width: `${item.percentage}` }}
              ></div>
          </div>
          </>
            )
        })}
      </div>
    </main>
  );
};

export default SkillsInfoSection;
