import react from "react";
import ProjectCard from "./projectCard";
import styles from "./projects.module.css"
import nextWebsite from "../../assets/NextWebsite.png"
import cardImage from "../../assets/CardImage.png"
import spaceImage from "../../assets/SpaceWebsite.png"

const Projects = () => {
    return (
      <div
        className={styles["projects_main_div"]}
        id="projects"
      >
        <h1>
          My Projects
        </h1>
  
        {/* 1st 3 projects */}
        <div className={styles["projectsCard_main_div_holder"]}>
          <ProjectCard
            src={nextWebsite}
            title="Modern Next.js Portfolio"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            src={cardImage}
            title="Interactive Website Cards"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            src={spaceImage}
            title="Space Themed Website"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
  
  
        {/* 2nd 3 projects */}
  
        <div className={styles["projectsCard_main_div_holder"]}>

        <ProjectCard
            src={nextWebsite}
            title="Modern Next.js Portfolio"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            src={cardImage}
            title="Interactive Website Cards"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            src={spaceImage}
            title="Space Themed Website"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    );
  };
  
  export default Projects;