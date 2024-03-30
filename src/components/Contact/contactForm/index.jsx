import React from "react";
import styles from "./contactForm.module.css";

const ContactForm = () => {
  return (
    <main className={styles["contact_form_container"]}>
      <form>
        <div className={styles["input_name_div"]}>
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>
        <input type="email" name="email" placeholder="Email" />
        <textarea
          name="message"
          id=""
          cols="50"
          rows="8"
          placeholder="Message"
        ></textarea>
        <button>Send</button>
      </form>
    </main>
  );
};

export default ContactForm;
