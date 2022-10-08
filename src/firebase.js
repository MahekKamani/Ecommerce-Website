import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBM4lwCFe9ycBVRK-XnXsfDQ9BgGSlAl54",
    authDomain: "clown-f0432.firebaseapp.com",
    projectId: "clown-f0432",
    storageBucket: "clown-f0432.appspot.com",
    messagingSenderId: "56609624561",
    appId: "1:56609624561:web:600aa8c1af524ff6023450"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);  

export { db, auth };