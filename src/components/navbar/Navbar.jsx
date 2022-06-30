import React from 'react';

import './navbar.css'

export default function Navbar({toggleDarkMode}){
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
      <div className="darkModeSwitch" onClick={() => toggleDarkMode()}>
      </div>
    </div>
  )
}