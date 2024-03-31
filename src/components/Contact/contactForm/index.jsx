import React, {useState} from "react";
import styles from "./contactForm.module.css";

const ContactForm = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('firstname', fName);
    formData.append('lastname', lName);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch('https://formspree.io/f/mbjnzzno', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // Handle success
        console.log('Form submitted successfully');
        setFName("");
        setLName("");
        setEmail("");
        setMessage("");
      } else {
        // Handle error
        console.log('Form submission failed');
      }
    } catch (error) {
      console.log('Error submitting form:', error);
      setFName("");
      setLName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <main className={styles["contact_form_container"]}>
      <form onSubmit={handleSubmit}>
        <div className={styles["input_name_div"]}>
          <input type="text" name="firstname" value={fName} placeholder="First Name" onChange={(e) => setFName(e.target.value)} />
          <input type="text" name="lastname" value={lName} placeholder="Last Name" onChange={(e) => setLName(e.target.value)} />
        </div>
        <input type="email" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <textarea
          name="message"
          id=""
          cols="50"
          rows="8"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </main>
  );
};

export default ContactForm;
