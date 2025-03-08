"use client";
import React from "react";
import styles from "./heroSection.module.css";
import logo from "../../assets/logo192.png";
import heroImage from "../../assets/hero_image_1.jpg";
import { motion } from "framer-motion";
// import { slideInFromLeft, slideInFromRight } from "../../utils/motion";

const HeroSection = () => {
  const frontendTech = [
    {
      icon: logo,
      alt: "react",
    },

    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s",
      alt: "Next.js",
    },
    {
      icon: "https://www.svgrepo.com/show/303360/nodejs-logo.svg",
      alt: "node.js",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2Cl7TKrJZnqIcySObGhSToz0G8jAHbfryA&s",
      alt: "express.js",
    },
  ];

  const backendTech = [
    {
      icon: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/javascript-3.png",
      alt: "js",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={styles["main_motion_div"]}
    >
      <main className={styles["hero_section"]} id="home">
        <motion.div
          // variants={slideInFromLeft(0.5)}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1.0, delay: 0.5 }}
        >
          <section className={styles["hero_content"]}>
            <h2>
              Harmonizing Frontend Flair with Backend Brilliance for Exceptional
              Digital Experiences
            </h2>
            <p>
              Dedicated Full-Stack Developer | Crafting Innovative Solutions
              with a Harmonious Blend of Frontend Artistry and Backend
              Brilliance
              {/* Passionate Frontend Developer | Transforming Ideas into Seamless and
              Visually Stunning Web Solutions */}
            </p>
          </section>
        </motion.div>

        <motion.div
          // variants={slideInFromRight(0.5)}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.5 }}
        >
          <section className={styles["hero_img"]}>
            <div className={styles["tech_icon_main_div"]}>
              {backendTech.map((item) => {
                return (
                  <div className={styles["tech_icons_img_div"]}>
                    <img src={item.icon} alt={item.alt} />
                  </div>
                );
              })}
              <img src={heroImage} alt="tech_icon" />
            </div>

            <div className={styles["tech_icon_main_div"]}>
              {frontendTech.map((item) => {
                return (
                  <div className={styles["tech_icons_img_div"]}>
                    <img src={item.icon} alt={item.alt} />
                  </div>
                );
              })}
            </div>
          </section>
        </motion.div>
      </main>
    </motion.div>
  );
};

export default HeroSection;
