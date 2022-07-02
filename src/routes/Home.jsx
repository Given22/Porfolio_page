import React from "react";

import { Header, Projects } from "../components"


import "./styles/Home.scss";

//Home page
export default function Home({projects}) {
  
  return (
    <section id="Home">
      <Header />
      <Projects projects={projects}/>
    </section>
  );
}

    // 