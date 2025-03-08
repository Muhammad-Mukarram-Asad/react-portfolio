// ProjectCard.jsx
import React from 'react';
import styles from '../projects.module.css';

const ProjectCard = ({ src, title, description }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.cardImageWrapper}>
        <img src={src} alt={title} className={styles.cardImage} />
        <div className={styles.cardOverlay}></div>
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;