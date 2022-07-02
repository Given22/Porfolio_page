import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";

// import Iconify for fancy icons
import { Icon } from "@iconify/react";

import "./navbar.scss";

//Navbar Component
export default function Navbar() {
  return (
    <nav id="Navbar">
      <div className="logo">
        <h1>D</h1>
      </div>
      <div className="menu">
        <a href="#Projects" className="navbar_link">
          Projects
        </a>
        <a href="#Skills" className="navbar_link">
          Skills
        </a>
        <a href="#Contact" className="navbar_link">
          Contact
        </a>
        <div className="darkModeSwitch">
          <Icon className="darkoModeIcon" icon="bi:moon-fill" height="18" />
        </div>
      </div>
    </nav>
  );
}
