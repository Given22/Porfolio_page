import "./App.scss";

/* Importing the React library and the useState and useEffect hooks from the React library. */
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Project, CV } from "./routes";

/* Importing the sanityClient from the client.js file. */
import sanityClient from "./client.js";

import Navigation from "./components/navigation/navigation";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState("");
  const [links, setLinks] = useState("");
  

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
        slug,
        body,
        mainImage{
          asset->{
          _id,
          url
        }},
        tech,
        github
      
    }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "skills"]{
        name,
        icon
      }`
      )
      .then((data) => setSkills(data))
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "links"]{
        linkedin,
        mail,
        github
      }`
      )
      .then((data) => setLinks(data))
      .catch(console.error);
  }, []);
  
  useEffect(() => {console.log(projects,skills,links)},[projects,skills,links]);

  return (
    <BrowserRouter>
      <Navigation links={links} />
      <Routes>
        <Route element={<Home projects={projects} />} path="/" exact />
        <Route element={<About />} path="/about" />
        <Route
          element={<Project projects={projects} />}
          path="/project/:projectName"
        />
        <Route element={<CV />} path="/cv" />
      </Routes>
    </BrowserRouter>
  );
}
