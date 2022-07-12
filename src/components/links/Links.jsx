import React from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

import { isMobile } from "react-device-detect";

import "./links.scss";

import { ThemeContext } from "../../context/ThemeContext";

export default function Links({ links, isInViewport }) {
  const { theme } = React.useContext(ThemeContext);
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <React.Fragment>
      <div id="Links" className={theme}>
        <AnimatePresence>
          {!isMobile && links && !isInViewport &&(
            <>
              <motion.div
                className="link"
                whileTap={{ scale: 0.5 }}
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                exit={{ x: 200, transition: { duration: 0.5, delay: 0 } }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.a
                  href={links[0].linkedin}
                  className="links_link"
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon icon="akar-icons:linkedin-fill" height="24" />
                </motion.a>
              </motion.div>
              <motion.div
                className="link"
                whileTap={{ scale: 0.5 }}
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                exit={{ x: 200, transition: { duration: 0.5, delay: 0.1 } }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={links[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links_link"
                >
                  <Icon icon="uim:github-alt" height="24" />
                </motion.a>
              </motion.div>
              <motion.div
                className="link"
                whileTap={{ scale: 0.5 }}
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                exit={{ x: 200, transition: { duration: 0.5, delay: 0.2 } }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={"mailto:" + links[0].mail}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links_link"
                >
                  <Icon icon="fluent:mail-28-filled" height="24" />
                </motion.a>
              </motion.div>
            </>
          )}
          {isMobile && !isInViewport && links && showMenu  && (
            <>
              <motion.div
                className="link"
                whileTap={{ scale: 0.5 }}
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                exit={{ x: 200, transition: { duration: 0.5, delay: 0 } }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.a
                  href={links[0].linkedin}
                  className="links_link"
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon icon="akar-icons:linkedin-fill" height="24" />
                </motion.a>
              </motion.div>
              <motion.div
                className="link"
                whileTap={{ scale: 0.5 }}
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                exit={{ x: 200, transition: { duration: 0.5, delay: 0.1 } }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={links[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links_link"
                >
                  <Icon icon="uim:github-alt" height="24" />
                </motion.a>
              </motion.div>
              <motion.div
                className="link"
                whileTap={{ scale: 0.5 }}
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                exit={{ x: 200, transition: { duration: 0.5, delay: 0.2 } }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={"mailto:" + links[0].mail}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links_link"
                >
                  <Icon icon="fluent:mail-28-filled" height="24" />
                </motion.a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        <AnimatePresence>
        {!isInViewport && isMobile && (
          <motion.div
          className="link"
          whileTap={{ scale: 0.5 }}
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          exit={{ x: 200, transition: { duration: 0.5, delay: 0 } }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => setShowMenu(!showMenu)}
          >
            <motion.div className="links_link" whileHover={{ scale: 1.2 }}>
              <Icon icon="fa-solid:info" height="24" />
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </React.Fragment>
  );
}
