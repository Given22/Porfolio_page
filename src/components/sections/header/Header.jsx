import React from "react";
import { Link } from "react-router-dom";

import './header.scss'

export default function Header(){
  return (
    <>
      <div id='Header'>
        <div className='header_text'>
          <h1>Hello i’m Damian Sroczyński</h1>
          <h2>Front-end Developer</h2>
          <p>JavaScript & React engineer</p>
        </div>
        <div className="header_links">
          <Link to="/cv" className="header_link header_cv" >CV</Link>
          <Link to='/about' className="header_link header_about">About</Link>
        </div>
      </div>
    </>
  )
}