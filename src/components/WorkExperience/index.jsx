import React, { useRef } from "react";
import styles from "./experience.module.css";
import ExperienceCard from "./experienceCard";
import { WorkExperienceData } from "../../utils/data";
import Slider from "react-slick";

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
    <div className={styles["experience_container"]}>
      <h5>Work Experience</h5>
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
    </div>
  );
};

export default WorkExperience;
