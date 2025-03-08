import React from 'react'
import styles from "./skillCard.module.css"
const SkillsCardSection = ({title, iconUrl,isActive, handleClick}) => {
    console.log("iconUrl", iconUrl)
  return (
    <main className={styles[`skills_card`] + " " + (isActive ? "active" : "")} onClick={() => handleClick()}>
        <div className={styles["skill_icon"]}>
            <img src={`${iconUrl}`} width={30} height={30} alt="skill_icon" />
        </div>

        <span>{title}</span>

    </main>
  )
}

export default SkillsCardSection