import React from 'react'
import styles from "./projectCard.module.css"
const ProjectCard = ({ src, title, description }) => {
    return (
      <div className={styles["projectCard_main_div"]}>
        <img
          src={src}
          alt={title}
        />
  
        <div className={styles["projectCard_content"]}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;