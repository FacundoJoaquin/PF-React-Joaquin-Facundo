import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDyig4B9k-8OahFuaGMntTA1KvB26r4icE",
  authDomain: "entrega-final-joaquin-facundo.firebaseapp.com",
  projectId: "entrega-final-joaquin-facundo",
  storageBucket: "entrega-final-joaquin-facundo.appspot.com",
  messagingSenderId: "349663853748",
  appId: "1:349663853748:web:a0600f1a15872e8a996be1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);