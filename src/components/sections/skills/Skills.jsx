import React from 'react';

import { Icon } from "@iconify/react";

import { motion } from "framer-motion";

import './skills.scss'

export default function Skills({skills, refLink, theme}) {

return (
  <section ref={refLink} id="Skills" className={theme}>
    {skills && skills.map(skill => (
      <div className="skill" key={skill.name}>
        <motion.div whileHover={{  scale: 1.1 }} >
          <Icon
              className="skill_icon"
              icon={skill.icon}
              height="50"
            />
          <h3>{skill.name}</h3>
        </motion.div>
      </div>
    ))}
  </section>
)}