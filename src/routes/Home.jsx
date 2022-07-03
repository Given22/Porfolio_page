import React from "react";

import { Header, Projects, Skills, Contact } from "../components"


import "./styles/Home.scss";

//Home page
export default function Home({projects, skills, links}) {
  
  return (
    <div id="Home">
      <Header />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact links={links} />
    </div>
  );
}
