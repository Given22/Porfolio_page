import React from 'react';

import { Icon } from "@iconify/react";

import './card.scss'

export default function Card({src, title, slug, github, live}) {

return (
  <div className="card">
    <div className="card_top">
      <h2 className="card_title">{title}</h2>
      <img className="card_img" src={src} alt={slug}/>
    </div>
    <div className="card_bottom">
      <a href={`/project/${slug}`}  className="card_button-link">
        <Icon className="card_link-icon" icon="fa-solid:info" height="24" /> 
      </a>
      <a href={live} target="_blank" rel="noopener noreferrer" className="card_button-link">
        <Icon className="card_link-icon" icon="ant-design:eye-filled" height="24" />
      </a>
      <a href={github} target="_blank" rel="noopener noreferrer" className="card_button-link">
        <Icon className="card_link-icon" icon="uim:github-alt" height="24" />
      </a>
    </div>
  </div>
)}
