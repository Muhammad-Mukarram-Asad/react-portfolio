import react from "react";
import ProjectCard from "./projectCard";
import styles from "./projects.module.css"
import nextWebsite from "../../assets/NextWebsite.png"
import cardImage from "../../assets/CardImage.png"
import spaceImage from "../../assets/SpaceWebsite.png"
import nextPortfolio from "../../assets/nextJS Portfolio Image.png"
import finalYearProject from "../../assets/FYP Image.png"
import eCommerceImage from "../../assets/Ecommerce Image.png"
import udemyClone from "../../assets/udemy image.png"
import quizApp from "../../assets/quiz app image.png"


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
            src={nextPortfolio}
            title="Modern Next.js Portfolio"
            description="The project is basically for practicing Next.js which is a React framework. So try to make a portfolio which consist of different technologies like Tailwind css, 
            Framer motion, React router dom, React icons, React-slick, React-scroll, and more. "
          />
          <ProjectCard
            src={eCommerceImage}
            title="Ecommerce Website"
            description="The project is related to my Frontend Development. It's basically an Ecommerce Website which is made using React JS. So try to practicing the state management so for that
             I used React Context API for state management and React Router for routing."
          />
          <ProjectCard
            src={finalYearProject}
            title="Sportify Cricket Scoring App"
            description="This project is related to myFinal Year Project(FYP) of my Bachelor's Degree in Computer Science(BSCS). It's basically a cricket scoring app 
            which is made using React JS for Frontend, Node & Express JS for Backend and MongoDB for Database. "
          />
        </div>
  
  
        {/* 2nd 3 projects */}
  
        <div className={styles["projectsCard_main_div_holder"]}>

        <ProjectCard
            src={udemyClone}
            title="Udemy Clone"
            description="During my initial stage of learning web development, I made the clone of a very popular educational platform Udemy. I made this clone
            from scratch and used only Two technologies, HTML5 & CSS3. It's not responsive but it's worth looking in Laptop/Desktop screens "
          />
          <ProjectCard
            src={cardImage}
            title="Interactive Website Cards"
            description="This is a random project in which I just try to make a cards with good UI for better experience and practicing my skills. "
          />
          <ProjectCard
            src={quizApp}
            title="Quiz Website"
            description="It's an assignment project in which I have to make a quiz app related to web development. It consists of total
            ten questions and at the end you can easily know your result as well. This project was made by using the core 
            fundamentals of web development which are HTML, CSS, and JavaScript. "
          />
        </div>
      </div>
    );
  };
  
  export default Projects;