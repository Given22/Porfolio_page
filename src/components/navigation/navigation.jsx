import React from 'react';

import './navigation.scss'

import Navbar from '../navbar/Navbar'
import Links from '../links/Links'
import Scrollbar from '../scrollbar/Scrollbar'

export default function Navigation({links}){
  console.log(links)
  return (
    <div id="Navigation">
      <Navbar />
      <Links links={links} />
      <Scrollbar />
    </div>
  )
}