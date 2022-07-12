// import * as firebase from "firebase/app";

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyClQIq1aIdLlDEGVIn_ptVaQgDsO8RCmjQ",
  authDomain: "damian-s-portfolio.firebaseapp.com",
  projectId: "damian-s-portfolio",
  storageBucket: "damian-s-portfolio.appspot.com",
  messagingSenderId: "167524173396",
  appId: "1:167524173396:web:2b8223b2fe6429c5dccfc1",
  measurementId: "G-3SMD5XCR71",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

