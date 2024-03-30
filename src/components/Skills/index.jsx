import React, {useState} from 'react'
import styles from "./skills.module.css"
import { SKILLS } from '../../utils/data'
import SkillsCardSection from '../SkillsCard'
import SkillsInfoSection from '../SkillsInfo'
const SkillSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };
  return (
    <main className={styles["skills_section"]}>
            <h5>Technical Proficiency</h5>
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

    </main>
  )
}

export default SkillSection