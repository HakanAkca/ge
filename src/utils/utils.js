import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getDatabase } from "firebase/database";

const config = {
  apiKey: "AIzaSyC4J-OgS5PjNvSK-bQvmHwvMdBcaBIgIPo",
  authDomain: "gecaviar.firebaseapp.com",
  projectId: "gecaviar",
  storageBucket: "gecaviar.appspot.com",
  messagingSenderId: "637279564186",
  appId: "1:637279564186:web:5759630f05d5d314c8ca23",
  measurementId: "G-T03V1V5L8L",
  databaseUrl: "https://gecaviar-default-rtdb.firebaseio.com/"
}

const app = initializeApp(config)

const firebaseAuth = getAuth(app)
const firestore = getFirestore(app)
const getdatabase = getDatabase(app)

export { firebaseAuth, firestore, getdatabase }
