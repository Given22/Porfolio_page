import React, { useEffect, useRef, useState, useMemo } from "react";

import { Header, Projects, Skills, Contact, Scrollbar } from "../components"

import {isMobile} from 'react-device-detect';

import "./styles/Home.scss";

import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from "../context/DataContext";

//Home page
export default function Home() {

  const { theme } = React.useContext(ThemeContext)
  const { projects, links, skills } = React.useContext(DataContext)

  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  
  const routes = new Map([
    ["Projects", projectsRef],
    ["Skills", skillsRef],
    ["Contact", contactRef],
    ["Header", headerRef],
  ])
  
  const InViewport = {
    headerInV : useIsInViewport(headerRef),
    projectsInV : useIsInViewport(projectsRef),
    skillsInV : useIsInViewport(skillsRef),
    contactInV : useIsInViewport(contactRef)
  }

  useEffect(() => {
    if(window.location.hash) {
      var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
      routes.get(hash).current.scrollIntoView()  
      window.history.replaceState(null, null, ' ');
    } 
  })
  
  return (
    <div id="Home" className={theme}>
      {!isMobile && <Scrollbar theme={theme} InViewport={InViewport}/>}
      <Header refLink={headerRef} theme={theme}/>
      <Projects refLink={projectsRef} projects={projects} theme={theme}/>
      <Skills refLink={skillsRef} skills={skills} theme={theme}/>
      <Contact refLink={contactRef} links={links} theme={theme}/>
    </div>
  );
}

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}