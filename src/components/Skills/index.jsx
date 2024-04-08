import React, { useState } from "react";
import styles from "./skills.module.css";
import { SKILLS } from "../../utils/data";
import SkillsCardSection from "../SkillsCard";
import SkillsInfoSection from "../SkillsInfo";
import { motion } from "framer-motion";
import {
  slideInFromTop,
} from "../../utils/motion";

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
          <h5>Technical Proficiency</h5>
        <motion.div variants={slideInFromTop}>
          <section className={styles["skills_content"]}>
            <div className={styles["skills"]}>
              {SKILLS.map((item, index) => (
                <SkillsCardSection
                  key={item.title}
                  title={item.title}
                  iconUrl={item.icon}
                  isActive={item.title === selectedSkill.title}
                  onClick={() => handleSelectSkill(item)}
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
