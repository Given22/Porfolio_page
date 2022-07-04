import "./App.scss";

/* Importing the React library and the useState and useEffect hooks from the React library. */
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Project, CV } from "./routes";

import { collection, getDocs } from 'firebase/firestore/lite';
import { ref,  getDownloadURL } from "firebase/storage";
import { storage, db } from './firebase';

import Navigation from "./components/navigation/navigation";


async function getDataFromFirestore(db, name) {
  const Col = collection(db, name);
  const Snapshot = await getDocs(Col);
  const List = Snapshot.docs.map(doc => doc.data());
  return List;
}

async function getDataFromStorage(storage, name) {
  if(!name) return
  let img = getDownloadURL(ref(storage, `images/${name}`))
    .then((url) => {
      return url;
    })
    .catch((e) => console.error(e));
  return img;
}

export default function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState("");
  const [links, setLinks] = useState(null);

  useEffect(() => {
    getDataFromFirestore(db, 'projects').then( (data) => {
      data.forEach(async (item) => {
        const img = await getDataFromStorage(storage, item.image)
        const newItem = { ...item, image: img }
        
        setProjects(prev => [...prev.filter(i => i.title !== newItem.title), newItem]);
      })
    }).catch((e) => console.error(e));
    getDataFromFirestore(db, 'skills').then(data => setSkills(data)).catch((e) => console.error(e));
    getDataFromFirestore(db, 'links').then(data => setLinks(data)).catch((e) => console.error(e));
    
  }, []);  
  
  useEffect(() => {console.log(projects,skills,links)},[projects,skills,links]);

  return (
    <BrowserRouter>
      <Navigation links={links} />
      <Routes>
        <Route element={<Home projects={projects} skills={skills} links={links} />} path="/" exact />
        <Route element={<About />} path="/about" />
        <Route
          element={<Project projects={projects} links={links}/>}
          path="/project/:projectName"
        />
        <Route element={<CV />} path="/cv" />
      </Routes>
    </BrowserRouter>
  );
}
