import React from "react";

import { motion } from "framer-motion";

import { Icon } from "@iconify/react";

import "./card.scss";

export default function Card({ src, title, slug, github, live, theme }) {
  return (
    <div className={`card ${theme}`}>
      <div className="card_top">
        <h2 className="card_title">{title}</h2>
        <img className="card_img" src={src} alt={slug} />
      </div>
      <div className="card_bottom">
        {slug && (
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
            href={`/project/${slug}`}
            className="card_button-link"
          >
            <Icon className="card_link-icon" icon="fa-solid:info" height="24" />
          </motion.a>
        )}
        {live && (
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="card_button-link"
          >
            <Icon
              className="card_link-icon"
              icon="ant-design:eye-filled"
              height="24"
            />
          </motion.a>
        )}
        {github && (
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="card_button-link"
          >
            <Icon
              className="card_link-icon"
              icon="uim:github-alt"
              height="24"
            />
          </motion.a>
        )}
      </div>
    </div>
  );
}
