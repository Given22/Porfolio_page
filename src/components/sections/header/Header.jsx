import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./header.scss";

export default function Header({ refLink, theme }) {
  return (
    <section ref={refLink} id="Header" className={theme}>
      <motion.div
        className="header_text"
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8}}
      >
        <h1>Hi i’m Damian </h1>
        <h2>Front-end Developer</h2>
        <p>JavaScript & React developer</p>
      </motion.div>
      <motion.div
        className="header_links"
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ duration: 1}}
      >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
      >
        <Link to="/cv" className="header_link header_cv">
          CV
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
      >
        <Link to="/about" className="header_link header_about">
          About
        </Link>
      </motion.div>
      </motion.div>
    </section>
  );
}
