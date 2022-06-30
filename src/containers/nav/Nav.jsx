import React from 'react';

import './nav.css'

import Navbar from '../../components/navbar/Navbar'
import Links from '../../components/links/Links'

export default function Nav({toggleDarkMode}){
  return (
    <div id="Nav">
      <Navbar toggleDarkMode={toggleDarkMode} />
      <Links />
    </div>
  )
}