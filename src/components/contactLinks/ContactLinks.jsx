import React from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

import "./contactLinks.scss";

import { ThemeContext } from "../../context/ThemeContext";

export default function Links({ links, isInViewport, refe }) {
  const { theme } = React.useContext(ThemeContext);

  return (
    <React.Fragment>
      <div ref={refe} id="Contact_Links" className={theme}>
        <AnimatePresence>
          {links && isInViewport && (
            <>
              <div className="contact">
                <motion.div
                  className="contact_link"
                  whileTap={{ scale: 0.5 }}
                  initial={{ y: "60vh" }}
                  animate={{ y: 0 }}
                  exit={{ y: "60vh", transition: { duration: 0.5, delay: 0 } }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.a
                    href={links[0].linkedin}
                    className="contact_link"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Icon icon="akar-icons:linkedin-fill" height="24" />
                  </motion.a>
                </motion.div>
                <motion.h2
                  className="contact_name"
                  href={links[0].linkedin}
                  initial={{ y: "-40", scale: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  exit={{ scale: "0", transition: { duration: 0.5, delay: 0 } }}
                >
                  Linkedin
                </motion.h2>
              </div>
              <div className="contact">
                <motion.div
                  className="contact_link"
                  whileTap={{ scale: 0.5 }}
                  initial={{ y: "60vh" }}
                  animate={{ y: 0 }}
                  exit={{
                    y: "60vh",
                    transition: { duration: 0.5, delay: 0.1 },
                  }}
                  transition={{ duration: 0.5, delay: 0 }}
                >
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={links[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact_link"
                  >
                    <Icon icon="uim:github-alt" height="24" />
                  </motion.a>
                </motion.div>
                <motion.h2
                  className="contact_name"
                  initial={{ y: "-40", scale: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  exit={{
                    scale: "0",
                    transition: { duration: 0.5, delay: 0.1 },
                  }}
                >
                  Github
                </motion.h2>
              </div>
              <div className="contact">
                <motion.div
                  className="contact_link"
                  whileTap={{ scale: 0.5 }}
                  initial={{ y: "60vh" }}
                  animate={{ y: 0 }}
                  exit={{
                    y: "60vh",
                    transition: { duration: 0.5, delay: 0.2 },
                  }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={"mailto:" + links[0].mail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact_link"
                  >
                    <Icon icon="fluent:mail-28-filled" height="24" />
                  </motion.a>
                </motion.div>
                <motion.h2
                  className="contact_name"
                  initial={{ y: "-40", scale: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  exit={{
                    scale: "0",
                    transition: { duration: 0.5, delay: 0.2 },
                  }}
                >
                  Email
                </motion.h2>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </React.Fragment>
  );
}
