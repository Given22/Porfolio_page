import React from "react";

import { motion, AnimatePresence } from "framer-motion";

// import Iconify for fancy icons
import { Icon } from "@iconify/react";

import { ThemeContext } from "../../context/ThemeContext";

import "./menu.scss";

//Navbar Component
export default function Menu() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <AnimatePresence>
    <motion.nav
      id="Menu"
      className={theme}
      initial={{ x: 100 }}
      animate={{ x: [0, -1, 1, 0] }}
    >
      <motion.a
        href="/#Projects"
        className="menu_link"
        whileTap={{ scale: 0.5 }}
      >
        Projects
      </motion.a>
      <motion.a
        href="/#Skills"
        className="menu_link"
        whileTap={{ scale: 0.5 }}
      >
        Skills
      </motion.a>
      <motion.a
        href="/#Contact"
        className="menu_link"
        whileTap={{ scale: 0.5 }}
      >
        Contact
      </motion.a>
      <motion.div
        className="menu_darkModeSwitch"
        onClick={toggleTheme}
        whileTap={{ scale: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <Icon
          className="menu_darkoModeIcon"
          icon={theme === "dark" ? "akar-icons:sun-fill" : "bi:moon-fill"}
          height="18"
        />
      </motion.div>
    </motion.nav>
  </AnimatePresence>
  );
}
