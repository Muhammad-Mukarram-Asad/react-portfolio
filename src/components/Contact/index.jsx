import React from "react";
import styles from "./contact.module.css";
import ContactInfoCard from "./contactInfo";
import ContactForm from "./contactForm";
// import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
const ContactMe = () => {
  return (
    <main className={styles["contact_container"]}>
      <h5>ContactMe</h5>
      <section className={styles["contact_content"]}>
        <div style={{ flex: 1 }}>
          <ContactInfoCard iconUrl={"https://cdn-icons-png.flaticon.com/512/732/732200.png"} text={"Email"} />
          <ContactInfoCard iconUrl={"https://cdn-icons-png.flaticon.com/512/174/174857.png"} text={"LinkedIn"} />
          <ContactInfoCard iconUrl={"https://cdn-icons-png.flaticon.com/512/25/25231.png"} text={"Github"} />
        </div>
        <div style={{ flex: 1 }}>
            <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default ContactMe;
