import React from "react";
import ProjectCard from "./projectCard";
import styles from "./projects.module.css";
import nextPortfolio from "../../assets/nextJS Portfolio Image.png";
import finalYearProject from "../../assets/FYP Image.png";
import eCommerceImage from "../../assets/Ecommerce Image.png";
import udemyClone from "../../assets/udemy image.png";
import quizApp from "../../assets/quiz app image.png";
import blogApp from "../../assets/blogApp image.png";
import { motion } from "framer-motion";

const Projects = () => {
  const projectsData = [
    {
      src: nextPortfolio,
      title: "Modern Next.js Portfolio",
      description:
        "A practice project using Next.js with Tailwind CSS, Framer Motion, React Router DOM, React Icons, React-slick, and React-scroll for a dynamic portfolio.",
    },
    {
      src: eCommerceImage,
      title: "Ecommerce Website",
      description:
        "Frontend-focused ecommerce site built with React JS, using Context API for state management and React Router for navigation.",
    },
    {
      src: finalYearProject,
      title: "Sportify Cricket Scoring App",
      description:
        "Final Year Project: A cricket scoring app using React JS (Frontend), Node/Express JS (Backend), and MongoDB (Database).",
    },
    {
      src: udemyClone,
      title: "Udemy Clone",
      description:
        "Early web dev project cloning Udemy using HTML5 and CSS3. Optimized for desktop/laptop viewing.",
    },
    {
      src: blogApp,
      title: "CRUD Blog App",
      description:
        "A React JS CRUD blog app with session storage for creating, editing, updating, and deleting posts.",
    },
    {
      src: quizApp,
      title: "Quiz Website",
      description:
        "Web development quiz app with 10 questions, built using HTML, CSS, and JavaScript fundamentals.",
    },
  ];

  return (
    <section className={styles.projectsSection} id="projects">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={(inView) => {
          console.log("Heading is in viewport:", inView);
          return { opacity: 1, x: 0 };
        }}
        transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h5 className={styles["projects_heading"]}>Projects</h5>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1.0, delay: 0.5 }}
      >
        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              src={project.src}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
