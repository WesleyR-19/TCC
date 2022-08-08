import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import initializeApps from '../initialize-app.json';

const app = initializeApp(initializeApps);
console.log(app);
const db = getFirestore(app);
const auth = getAuth(app);
// const db = 0;
// const auth = 1;
export { db, auth };

// import { initializeApp } from "firebase/app"
// import { collection, doc, getDocs, initializeFirestore, setDoc  } from "firebase/firestore"
// import { getFirestore} from "firebase/firestore"

// const firebaseConfig = initializeApp({
//         apiKey: "AIzaSyCJN90lRGpqBwwINkmVBxy3orusDOwU4Os",
//         authDomain: "projeto-asd-77604.firebaseapp.com",
//         projectId: "projeto-asd-77604",
//         storageBucket: "projeto-asd-77604.appspot.com",
//         messagingSenderId: "541064698635",
//         appId: "1:541064698635:web:fcf34c2d794dbabce6600e",
//         measurementId: "G-W2Q52ZSTL3"
// });

// const db = getFirestore(firebaseConfig);
// const usersCollectionRef = collection(db, "Atendimento");

// export {db, usersCollectionRef}
