import React from 'react';

import './navigation.scss'

import Navbar from '../navbar/Navbar'
import Scrollbar from '../scrollbar/Scrollbar'

export default function Navigation({links}){
  console.log(links)
  return (
    <div id="Navigation">
      <Navbar />
      <Scrollbar />
    </div>
  )
}