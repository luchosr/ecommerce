import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCAMU9hOOWaDRxGZjaIPNSPvEUAXwfsAPM",
  authDomain: "crwn-db-244a8.firebaseapp.com",
  databaseURL: "https://crwn-db-244a8.firebaseio.com",
  projectId: "crwn-db-244a8",
  storageBucket: "crwn-db-244a8.appspot.com",
  messagingSenderId: "646489910223",
  appId: "1:646489910223:web:2c892edb81d959f9bf00ba",
  measurementId: "G-NY8SF0SJ7B",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
