import React from 'react'
import styles from "./contactInfo.module.css"

const ContactInfoCard = ({iconUrl,text}) => {
    console.log("iconUrl", iconUrl)
  return (
    <main className={styles["contact_detail_card"]}>

        <div className={styles["icon"]}>
            <img src={iconUrl} alt='contact_icons' width={30} height={30} />
        </div>

        <p>{text}</p>
    
    </main>
  )
}

export default ContactInfoCard