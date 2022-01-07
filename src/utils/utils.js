import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const config = {
  apiKey: "AIzaSyASlAHOLbA1XkhdPpj3X9b1JJuqeT519_0",
  authDomain: "caviar-1ba18.firebaseapp.com",
  projectId: "caviar-1ba18",
  storageBucket: "caviar-1ba18.appspot.com",
  messagingSenderId: "337025320058",
  appId: "1:337025320058:web:270c8d3f392cba949027c3",
  measurementId: "G-3FBM6G7FQ7"
}

const app = initializeApp(config)

const firebaseAuth = getAuth(app)
const firestore = getFirestore(app)

export { firebaseAuth, firestore }
