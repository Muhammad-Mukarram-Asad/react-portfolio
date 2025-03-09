import React, { useState } from "react";
import styles from "./skills.module.css";
import { SKILLS } from "../../utils/data";
import SkillsCardSection from "../SkillsCard";
import SkillsInfoSection from "../SkillsInfo";
import { motion } from "framer-motion";
// import {slideInFromTop} from "../../utils/motion";

const SkillSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={styles["main_motion_div"]}
    >
      <main className={styles["skills_section"]} id="skills">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={(inView) => {
            console.log("Heading is in viewport:", inView);
            return { opacity: 1, x: 0 };
          }}
          transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h5 className={styles["skills_heading"]}>Technical Proficiency</h5>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.0, delay: 0.5 }}
        >
          <section className={styles["skills_content"]}>
            <div className={styles["skills"]}>
              {SKILLS.map((item, index) => (
                <SkillsCardSection
                  key={item.title}
                  title={item.title}
                  iconUrl={item.icon}
                  isActive={item.title === selectedSkill.title}
                  handleClick={() => handleSelectSkill(item)}
                />
              ))}
            </div>
            <div className={styles["skills_info"]}>
              <SkillsInfoSection
                heading={selectedSkill.title}
                skills={selectedSkill.skills}
              />
            </div>
          </section>
        </motion.div>
      </main>
    </motion.div>
  );
};

export default SkillSection;
