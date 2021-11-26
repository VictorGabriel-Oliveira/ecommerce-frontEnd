import {initializeApp} from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyACji9zUFVBg89YFO1rBy4PQaUUhwrGTbY",
  authDomain: "ecommerce-137f4.firebaseapp.com",
  projectId: "ecommerce-137f4",
  storageBucket: "ecommerce-137f4.appspot.com",
  messagingSenderId: "72015595701",
  appId: "1:72015595701:web:fa0bcee9317897732496fc"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)








