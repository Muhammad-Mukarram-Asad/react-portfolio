import React from "react";
import styles from "./contact.module.css";
import ContactInfoCard from "./contactInfo";
import ContactForm from "./contactForm";
import linkedIn_logo from "../../assets/linkedin.svg";
import instagram_logo from "../../assets/instagram.png";
import github_logo from "../../assets/github.png";
import { motion } from "framer-motion";

// import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
const ContactMe = () => {
  const linkedInLink = "https://www.linkedin.com/in/mukarram-asad";
  const githubLink = "https://github.com/Muhammad-Mukarram-Asad";
  const instagramLink =
    "https://www.instagram.com/mukarram.asad15?igsh=aTFzMWkweHV6djMy";
  return (
    <main className={styles["contact_container"]} id="contact">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={(inView) => {
          console.log("Heading is in viewport:", inView);
          return { opacity: 1, x: 0 };
        }}
        transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h5 className={styles["contact_heading"]}>Contact Me</h5>
      </motion.div>
      <section className={styles["contact_content"]}>
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl={linkedIn_logo}
            text={"LinkedIn"}
            redirection={linkedInLink}
          />
          <ContactInfoCard
            iconUrl={github_logo}
            text={"Github"}
            redirection={githubLink}
          />
          <ContactInfoCard
            iconUrl={instagram_logo}
            text={"Instagram"}
            redirection={instagramLink}
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default ContactMe;
