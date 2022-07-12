import React from "react";

import { motion } from "framer-motion";

// import Iconify for fancy icons
import { Icon } from "@iconify/react";
import { ThemeContext } from "../../context/ThemeContext";

import "./mobilemenu.scss";

//Navbar Component
export default function MobileMenu() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
      <motion.nav
        id="MobileMenu"
        className={theme}
        initial={{ x: 100 }}
        animate={{ x: [0, -1, 1, 0] }}
        exit={{ x: "60vw", transition: { duration: 0.5, delay: 0 } }}
      >
        <motion.a
          href="/#Projects"
          className="mobile_menu_link"
          whileTap={{ scale: 0.5 }}
        >
          Projects
        </motion.a>
        <motion.a
          href="/#Skills"
          className="mobile_menu_link"
          whileTap={{ scale: 0.5 }}
        >
          Skills
        </motion.a>
        <motion.a
          href="/#Contact"
          className="mobile_menu_link"
          whileTap={{ scale: 0.5 }}
        >
          Contact
        </motion.a>
        <motion.div
          className="mobile_menu_darkModeSwitch"
          onClick={toggleTheme}
          whileTap={{ scale: 0.5 }}
        >
          <Icon
            className="mobile_menu_darkoModeIcon"
            icon={theme === "dark" ? "akar-icons:sun-fill" : "bi:moon-fill"}
            height="18"
          />
        </motion.div>
      </motion.nav>
  );
}
