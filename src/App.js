import './App.scss';

import { React, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Project, CV } from './routes'

import sanityClient from "./client.js";

import Navbar from './components/navbar/Navbar'

export default function App() {

  const [projects, setProjects] = useState('')
  const [skills, setSkills] = useState('')
  
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        },
        body
      }
    }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
    
    sanityClient
      .fetch(
      `*[_type == "skills"]{
        name,
        icon
      }`)
      .then((data) => setSkills(data))
      .catch(console.error);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route element={<Home />} path="/" exact />
        <Route element={<About />} path="/about" />
        <Route element={<Project />} path="/:slug" />
        <Route element={<CV />} path="/cv" />
      </Routes>
    </BrowserRouter>
  );
}

