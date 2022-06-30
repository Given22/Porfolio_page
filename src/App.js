import './App.css';

import React from 'react';
import {useState} from 'react';

import { Nav } from './components'

export default function App() {

  const [darkmode, setDarkMode] = useState(false)

  function toggleDarkMode(){
    setDarkMode(!darkmode)
    console.log(darkmode)
  }

  return (
    <div className="App">
      <Nav toggleDarkMode={toggleDarkMode}/>
    </div>
  );
}

