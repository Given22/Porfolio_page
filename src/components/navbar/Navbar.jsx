import React from 'react';

import './navbar.scss'

export default function Navbar(){
  return (
    <div id="Navbar">
      <div className="logo">
        <img src="me.jpg" alt="Damian"/>
        <h1>Damian Sroczyński</h1>
      </div>
      <div className="menu">
        <h3>Projects</h3>
        <h3>Skills</h3>
        <h3>Contact</h3>
      </div>
      <div className="darkModeSwitch">
      </div>
    </div>
  )
}