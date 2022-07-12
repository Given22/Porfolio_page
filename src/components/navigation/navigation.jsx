import React from 'react';

import './navigation.scss'

import Navbar from '../navbar/Navbar'

import {ThemeContext} from '../../context/ThemeContext'

export default function Navigation({ setTheme}){

  const {theme} = React.useContext(ThemeContext)
  
  return (
    <div id="Navigation">
      <Navbar setTheme={setTheme} theme={theme}/>
    </div>
  )
}