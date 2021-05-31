import firebase from 'firebase/app';
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBy10AWMdl9m8dOwgef73GESYY8o70fvwU",
    authDomain: "dux-calculadora.firebaseapp.com",
    projectId: "dux-calculadora",
    storageBucket: "dux-calculadora.appspot.com",
    messagingSenderId: "971805833840",
    appId: "1:971805833840:web:9abeeb97d9cb29d9d492b5",
    measurementId: "G-D4K302WVGD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  
  export default db;