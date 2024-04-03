import React from "react";
import styles from "./heroSection.module.css";
import logo from "../../assets/logo192.png";
import heroImage from "../../assets/hero_image_1.jpg"

const HeroSection = () => {
  return (
    <main className={styles["hero_section"]}>
      <section className={styles["hero_content"]}>
        <h2>Harmonizing Frontend Flair with Backend Brilliance 
          for Exceptional Digital Experiences</h2>
        <p>
          Dedicated Full-Stack Developer | Crafting Innovative Solutions 
          with a Harmonious Blend of Frontend Artistry and Backend Brilliance
          {/* Passionate Frontend Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions */}
        </p>
      </section>

      <section className={styles["hero_img"]}>
        <div>
          <div className={styles["tech_icon"]}>
            <img src={logo} alt="tech_icon" />
          </div>
          {/* <img
            src="https://as1.ftcdn.net/v2/jpg/05/90/59/88/1000_F_590598870_TOcGd4cUZzPoEMlxSc7XYwcupHOE0vLM.jpg"
            alt="tech_icon"
          /> */}
          {/* <img src="https://ideogram.ai/api/images/direct/RcPE-Tj2Rv-tJBon3ESteA.png" alt="tech_icon" /> */}
          <img src={heroImage} alt="tech_icon" />
          
        </div>

        <div>
          <div className={styles["tech_icon"]}>
            <img src="https://cdn1.iconfinder.com/data/icons/programing-development-7/24/html_html5_web_programing_developer-512.png" alt="html" />
          </div>
          <div className={styles["tech_icon"]}>
            <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" alt="css" />
          </div>
          <div className={styles["tech_icon"]}>
            <img src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/javascript-3.png" alt="js" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
