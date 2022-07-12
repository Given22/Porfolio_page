import React from "react";

import { motion } from "framer-motion";

// import Iconify for fancy icons
import { Icon } from "@iconify/react";

import "./scrollbar.scss";

//Navbar Component
export default function Scrollbar({ theme, InViewport }) {
  var r = document.querySelector(":root");
  r.style.setProperty(
    "--scrollbar-background",
    theme === "light" ? "#27233A" : "#EAEFD3"
  );
  r.style.setProperty(
    "--scrollbar-background-track",
    theme === "light" ? "none" : "none"
  );

  return (
    <nav id="ScrollBar" className={theme}>
      <motion.div className="dots" transition={{ duration: 0.5, delay: 0.2 }} initial={{ x: -200 }} animate={{ x: 0 }}>
        <motion.a
          href="#Header"
          className="dot"
          whileHover={{ scale: InViewport.headerInV ? 2 : 1.5 }}
          whileTap={{ scale: 0.5 }}
          animate={{ scale: InViewport.headerInV ? 1.5 : 1 }}
        >
          <Icon icon="carbon:dot-mark" className="dot_icon" />
        </motion.a>
        <motion.a
          href="#Projects"
          className="dot"
          whileHover={{ scale: InViewport.projectsInV ? 2 : 1.5 }}
          whileTap={{ scale: 0.5 }}
          animate={{ scale: InViewport.projectsInV ? 1.5 : 1 }}
        >
          <Icon icon="carbon:dot-mark" className="dot_icon" />
        </motion.a>
        <motion.a
          href="#Skills"
          className="dot"
          whileHover={{ scale: InViewport.skillsInV ? 2 : 1.5 }}
          whileTap={{ scale: 0.5 }}
          animate={{ scale: InViewport.skillsInV ? 1.5 : 1 }}
        >
          <Icon icon="carbon:dot-mark" className="dot_icon" />
        </motion.a>
        <motion.a
          href="#Contact"
          className="dot"
          whileHover={{ scale: InViewport.contactInV ? 2 : 1.5 }}
          whileTap={{ scale: 0.5 }}
          animate={{ scale: InViewport.contactInV ? 1.5 : 1 }}
        >
          <Icon icon="carbon:dot-mark" className="dot_icon" />
        </motion.a>
      </motion.div>
    </nav>
  );
}
