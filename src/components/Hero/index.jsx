"use client";

import React from "react";
import styles from "./heroSection.module.css";
import logo from "../../assets/logo192.png";
import heroImage from "../../assets/hero_image_1.jpg";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";

const HeroSection = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={styles["main_motion_div"]}
    >
      <main className={styles["hero_section"]}>
        <motion.div
          variants={slideInFromLeft(0.5)}
          // className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
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

        <motion.div variants={slideInFromRight(0.5)}>
          <section className={styles["hero_img"]}>
            <div>
              <div className={styles["tech_icon"]}>
                <img src={logo} alt="tech_icon" />
              </div>
              <img src={heroImage} alt="tech_icon" />
            </div>

            <div>
              <div className={styles["tech_icon"]}>
                <img
                  src="https://cdn1.iconfinder.com/data/icons/programing-development-7/24/html_html5_web_programing_developer-512.png"
                  alt="html"
                />
              </div>
              <div className={styles["tech_icon"]}>
                <img
                  src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
                  alt="css"
                />
              </div>
              <div className={styles["tech_icon"]}>
                <img
                  src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/javascript-3.png"
                  alt="js"
                />
              </div>
            </div>
          </section>
        </motion.div>
      </main>
    </motion.div>
  );
};

export default HeroSection;
