import React from "react";
import styles from "./contact.module.css";
import ContactInfoCard from "./contactInfo";
import ContactForm from "./contactForm";
// import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
const ContactMe = () => {
  return (
    <main className={styles["contact_container"]} id="contact">
      <h5>ContactMe</h5>
      <section className={styles["contact_content"]}>
        <div style={{ flex: 1 }}>
          <ContactInfoCard iconUrl={"https://media.istockphoto.com/id/1456825464/vector/%C3%B0%C3%B1%C3%B0%C3%B0%C3%B0%C3%B0%C3%B1%C3%B0%C2%B5-rgb.jpg?s=612x612&w=0&k=20&c=SlsmakXzy1QqsIJC7UFWNfOUoO3ih0bqNFrTK7MTDXg="} text={"Email"} />
          <ContactInfoCard iconUrl={"https://banner2.cleanpng.com/20180518/yk/kisspng-computer-icons-linkedin-5aff0283a31f04.0344839015266617636682.jpg"} text={"LinkedIn"} />
          <ContactInfoCard iconUrl={"https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"} text={"Github"} />
        </div>
        <div style={{ flex: 1 }}>
            <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default ContactMe;
