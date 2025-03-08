import React, { useRef } from "react";
import styles from "./experience.module.css";
import ExperienceCard from "./experienceCard";
import { WorkExperienceData } from "../../utils/data";
import Slider from "react-slick";
import { motion } from "framer-motion";

const WorkExperience = () => {
  const sliderRef = useRef();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };
  return (
     <motion.div
          initial="hidden"
          animate="visible"
          className={styles["main_motion_div"]}
        >
    <div className={styles["experience_container"]} id="workExperience">
          <motion.div
                  initial={{ opacity: 0, x: -1000 }} // Starts from extreme left of viewport
                  whileInView={{ opacity: 1, x: 0 }} // Ends at center
                  transition={{ duration: 1.0, delay: 0.5 }}
                >

      <h5 className={styles["experience_heading"]}>Work Experience</h5>
      </motion.div>
      <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.0, delay: 0.5 }}
        >
      <div className={styles["experience_content"]}>
        <div className={styles["arrow_right"]}>
          <span className="material-symbols-outlined" onClick={slideRight}>
            {">"}
          </span>
        </div>
        <div className={styles["arrow_left"]}>
          <span
            className={styles["material-symbols-outlined"]}
            onClick={slideLeft}
          >
            {"<"}
          </span>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {WorkExperienceData.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
      </motion.div>
    </div>
    </motion.div>
  );
};

export default WorkExperience;
