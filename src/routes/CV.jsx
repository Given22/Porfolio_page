import React from "react";

<<<<<<< HEAD
import Links from "../components/links/Links";

import "./styles/CV.scss";

import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
=======

import Links from '../components/links/Links';

import './styles/CV.scss';

import { ref,  getDownloadURL } from "firebase/storage";
import { storage } from '../firebase';
>>>>>>> 135710730589fafc3a74ee88f5e2147d50ee2f6b

import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from "../context/DataContext";

export default function CV() {
<<<<<<< HEAD
  const { theme } = React.useContext(ThemeContext);
  const { links } = React.useContext(DataContext);

  const [cvImageURL, setImageURL] = React.useState("");
  const [cvImagePDF, setImagePDF] = React.useState("");

  React.useEffect(() => {
    async function getCV() {
      setImageURL(await getCVFromStorage("CV.webp"));
      setImagePDF(await getCVFromStorage("CV.pdf"));
    }
    getCV();
  }, []);

=======
  const { theme } = React.useContext(ThemeContext)
  const { links } = React.useContext(DataContext)
  
  const [cvImageURL, setImageURL] = React.useState('');
  const [cvImagePDF, setImagePDF] = React.useState('');
  
  React.useEffect(() => {
    async function getCV(){
      setImageURL(await getCVFromStorage('CV.webp'));
      setImagePDF(await getCVFromStorage('CV.pdf'));
    }
    getCV();
  }, []);
  
>>>>>>> 135710730589fafc3a74ee88f5e2147d50ee2f6b
  return (
    <React.Fragment>
      <Links links={links} theme={theme} />
      <div id="CV" className={theme}>
        <h2>Damian Sroczyński</h2>
        <a href={cvImagePDF} target="_blank" download rel="noreferrer">
          <img src={cvImageURL} alt="CV" />
        </a>
      </div>
    </React.Fragment>
  );
}

async function getCVFromStorage(name) {
  let img = getDownloadURL(ref(storage, `images/${name}`))
    .then((url) => {
      return url;
    })
    .catch((e) => console.error(e));
  return img;
<<<<<<< HEAD
}
=======
}
>>>>>>> 135710730589fafc3a74ee88f5e2147d50ee2f6b
