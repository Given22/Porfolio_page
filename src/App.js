import './App.scss';

import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, About, Project, CV } from './routes'

export default function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route element={<Home />} path="/" exact />
        <Route element={<About />} path="/about" />
        <Route element={<Project />} path="/:slug" />
        <Route element={<CV />} path="/cv" />
      </Routes>
    </BrowserRouter>
  );
}

