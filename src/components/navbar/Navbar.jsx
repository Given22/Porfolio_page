import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

// import Iconify for fancy icons
import { Icon } from "@iconify/react";

import { ThemeContext } from "../../context/ThemeContext";

import { isMobile } from "react-device-detect";

import Menu from "../menu/Menu";
import MobileMenu from "../mobileMenu/MobileMenu";

import "./navbar.scss";

//Navbar Component
export default function Navbar() {
  const { theme } = React.useContext(ThemeContext);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <React.Fragment>
      <motion.nav
        id="Navbar"
        className={theme}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div className="logo" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}>
          <a href="/#Header" className="navbar_link">
            <h1>D</h1>
          </a>
        </motion.div>
        {!isMobile && <Menu />}
        {isMobile && (
          <>
            <div className="mobile_menu_switch">
              <Icon
                className="mobile_menu_switch-icon"
                icon={showMenu ? "bx:x" : "heroicons-solid:menu-alt-4"}
                onClick={() => setShowMenu(!showMenu)}
              />
            </div>
            {showMenu && (
              <AnimatePresence>
                <MobileMenu />
              </AnimatePresence>
            )}
          </>
        )}
      </motion.nav>
    </React.Fragment>
  );
}
