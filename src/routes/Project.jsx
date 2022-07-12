import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import Links from "../components/links/Links";

import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from "../context/DataContext";
import "./styles/Project.scss";

//Single project page
export default function Project() {
  const [project, setProject] = useState("");
  const { projectName } = useParams();

  const { theme } = React.useContext(ThemeContext);

  const { projects, links } = React.useContext(DataContext);
  
  var r = document.querySelector(":root");
  r.style.setProperty(
    "--scrollbar-background-track",
    theme === "light" ? "#EAEFD3" : "#505168"
  );
  r.style.setProperty(
    "--scrollbar-background",
    theme === "light" ? "#27233A" : "#EAEFD3"
  );

  useEffect(() => {
    setProject(projects.find((project) => project.slug === projectName));
  }, [projects, projectName]);

  return (
    <section id="Project" className={theme}>
      <Links links={links} />
      {project && (
        <>
          <motion.h1
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="project_title"
          >
            {project.title}
          </motion.h1>
          <motion.div
            className="project_imgbox"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0 }}
          >
            <img
              className="project_img"
              src={project.image}
              alt={project.title}
            />
          </motion.div>
          <div className="project_links">
            {project.live && (
              <motion.a
                href={project.live || ""}
                target="_blank"
                rel="noopener noreferrer"
                className="project_button-link"
                initial={{ y: "60vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0 }}
              >
                <Icon
                  className="project_link-icon"
                  icon="ant-design:eye-filled"
                  height="24"
                />
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github || ""}
                target="_blank"
                rel="noopener noreferrer"
                className="project_button-link"
                initial={{ y: "60vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                <Icon
                  className="project_link-icon"
                  icon="uim:github-alt"
                  height="24"
                />
              </motion.a>
            )}
          </div>
          <motion.div
            className="project_content"
            initial={{ y: "60vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p>{project.body}</p>
            <div className="project_skills">
              {project.tech &&
                project.tech.map((tech) => (
                  <div className="project_skill" key={tech}>
                    <h3>{tech}</h3>
                  </div>
                ))}
            </div>
          </motion.div>
        </>
      )}
    </section>
  );
}
