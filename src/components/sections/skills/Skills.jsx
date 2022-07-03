import React from 'react';

import { Icon } from "@iconify/react";

import './skills.scss'

export default function Skills({skills}) {

  console.log(skills)

return (
  <section id="Skills">
    {skills && skills.map(skill => (
      <div className="skill" key={skill.name}>
        <Icon
            className="skill_icon"
            icon={skill.icon}
            height="50"
          />
        <h2>{skill.name}</h2>
      </div>
    ))}
  </section>
)}