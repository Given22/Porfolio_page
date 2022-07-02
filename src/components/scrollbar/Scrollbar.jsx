import React from "react";

// import Iconify for fancy icons
import { Icon } from "@iconify/react";

import "./scrollbar.scss";

//Navbar Component
export default function Navbar() {
  return (
    <nav id="ScrollBar">
      <div className="dots">
        <a href="#Header" className="dot">
          <Icon icon="carbon:dot-mark" className="dot_icon active"/>
        </a>
        <a href="#Projects" className="dot">
          <Icon icon="carbon:dot-mark" className="dot_icon "/>
        </a>
        <a href="#Skills" className="dot">
          <Icon icon="carbon:dot-mark" className="dot_icon "/>
        </a>
        <a href="#Contact"className="dot">
          <Icon icon="carbon:dot-mark"  className="dot_icon "/>
        </a>
      </div>
    </nav>
  );
}