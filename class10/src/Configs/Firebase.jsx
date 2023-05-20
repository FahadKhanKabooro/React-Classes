import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';



const firebaseConfig = {
    apiKey: "AIzaSyAYf_LD5qotNwUrEMut5ppDOUuuCnrwvuk",
    authDomain: "reactauth-49c12.firebaseapp.com",
    projectId: "reactauth-49c12",
    storageBucket: "reactauth-49c12.appspot.com",
    messagingSenderId: "488279017825",
    appId: "1:488279017825:web:bfcf6887d28c0f31721d20",
    databaseURL: "https://reactauth-49c12-default-rtdb.firebaseio.com",
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getDatabase(app);

  export {auth,db}