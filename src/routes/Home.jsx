import React from "react";
import { Link } from "react-router-dom";


import "./styles/Home.scss";

//Home page
export default function Home({projects}) {
  

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {projects.map((project) => (
        <Link to={`/project/${project.slug.current}`} key={project.slug.current}>{project.title}</Link>
      ))}
    </div>
  );
}
