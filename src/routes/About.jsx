import React from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../firebase";

import { Year } from '../components'
import Links from '../components/links/Links';

import './styles/About.scss';

import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from "../context/DataContext";

async function getDataFromFirestore(db, name) {
  const Col = collection(db, name);
  const Snapshot = await getDocs(Col);
  const List = Snapshot.docs.map((doc) => doc.data());
  return List;
}

export default function About() {
  const [about, setAbout] = React.useState([]);
  const [years, setYears] = React.useState([]);
  
  const { theme } = React.useContext(ThemeContext)
  const { links } = React.useContext(DataContext)

  React.useEffect(() => {
    getDataFromFirestore(db, "about")
      .then((data) => {
        setAbout(data);
      })
      .catch((e) => console.error(e));

    getDataFromFirestore(db, "years")
      .then((data) => {
        setYears([...data].sort((a, b) => b.year - a.year));
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <React.Fragment>
      <Links links={links} theme={theme} />
      <div id="About" className={theme}>
        <h2>Damian Sroczyński</h2>
        {about[0] && <p>{about[0].body}</p>}
        <div className="years">
          {years && years.map((data)=> {
            return <Year key={data.year} year={data} theme={theme}/>
          })}
        </div>
        {about[0] && <p>{about[0].hobby}</p>}
      </div>
    </React.Fragment>
  );
}
