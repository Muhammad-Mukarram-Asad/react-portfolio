import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo192.png";
// import nameLogo from "../../assets/name_logo1.png"
// import { Link } from "react-router-dom";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Show nav items by default if screen size is greater than 768px
      if (window.innerWidth > 768) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    // Call handleResize initially and add event listener for resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigation = () => {
    setShowNav(!showNav);
  };

  return (
    <main>
      <nav className={styles["nav_wrapper"]}>
        <section className={styles["nav_content"]}>
          {/* <img className={styles["logo_img"]} src={logo} alt="logo" /> */}
          <div className={styles["img_heading_div"]}>
            <img
              className={styles["logo_img"]}
              src="https://cdn-icons-png.flaticon.com/128/4997/4997543.png"
              alt="logo"
            />
            <h1 className={styles["logo_text"]}>Web & App Developer</h1>
          </div>

          {/* Conditionally render navigation items based on showNav state */}
          {(window.innerWidth <= 768 && showNav) || window.innerWidth > 768 ? (
            <ul>
              <li className={styles["menu_link"]}>
                <a href="/" className={styles["menu_item"]}>
                  Home
                </a>
              </li>
              <li className={styles["menu_link"]}>
                <a href="#skills" className={styles["menu_item"]}>
                  Skills
                </a>
              </li>
              <li className={styles["menu_link"]}>
                <a href="#workExperience" className={styles["menu_item"]}>
                  Work Experience
                </a>
              </li>
              <li className={styles["menu_link"]}>
                <a href="#contact" className={styles["menu_item"]}>
                  Contact Me
                </a>
              </li>
              <button className={styles["contact_btn"]}>Hire Me</button>
            </ul>
          ) : null}

          {/* Toggle button for showing/hiding navigation */}
          <div className={styles["menu_btn"]} onClick={handleNavigation}>
            {showNav ? <FaTimes /> : <FaBars />}
          </div>
        </section>
      </nav>
    </main>
  );
};

export default Navbar;
