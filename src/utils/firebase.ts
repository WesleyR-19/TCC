import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import initializeApps from '../initialize-app.json';

const app = initializeApp(initializeApps);
console.log(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

import { collection, doc, getDocs, initializeFirestore, setDoc  } from "firebase/firestore"
