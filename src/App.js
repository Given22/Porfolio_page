import "./App.scss";

/* Importing the React library and the useState and useEffect hooks from the React library. */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Project, CV } from "./routes";

import Navigation from "./components/navigation/navigation";

import { ThemeProvider } from "./context/ThemeContext";
import { DataProvider } from "./context/DataContext";

export default function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
              <Route element={<Home />} path="/" exact />
              <Route element={<Project />} path="/project/:projectName" />
            <Route element={<About />} path="/about" />
            <Route element={<CV />} path="/cv" />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </ThemeProvider>
  );
}
