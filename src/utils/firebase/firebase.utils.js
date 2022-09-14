import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyCAMU9hOOWaDRxGZjaIPNSPvEUAXwfsAPM',
  authDomain: 'crwn-db-244a8.firebaseapp.com',
  databaseURL: 'https://crwn-db-244a8.firebaseio.com',
  projectId: 'crwn-db-244a8',
  storageBucket: 'crwn-db-244a8.appspot.com',
  messagingSenderId: '646489910223',
  appId: '1:646489910223:web:3f86c64ecf76bc32bf00ba',
  measurementId: 'G-VDZRCKCMCF',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

// import "firebase/firestore";
// import "firebase/auth";

// const config = {
//   apiKey: "AIzaSyCAMU9hOOWaDRxGZjaIPNSPvEUAXwfsAPM",
//   authDomain: "crwn-db-244a8.firebaseapp.com",
//   databaseURL: "https://crwn-db-244a8.firebaseio.com",
//   projectId: "crwn-db-244a8",
//   storageBucket: "crwn-db-244a8.appspot.com",
//   messagingSenderId: "646489910223",
//   appId: "1:646489910223:web:2c892edb81d959f9bf00ba",
//   measurementId: "G-NY8SF0SJ7B",
// };

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   const userRef = firestore.doc(`users/${userAuth.uid}`);
//   const collectionRef = firestore.collection("users");

//   const snapShot = await userRef.get();
//   const collectionSnapShot = await collectionRef.get();
//   console.log({ collectionSnapShot });

//   console.log(snapShot);

//   if (!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additionalData,
//       });
//     } catch (error) {
//       console.log("error creating user ", error.message);
//     }
//   }

//   return userRef;
// };

// firebase.initializeApp(config);

// export const addCollectionsAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = firestore.collection(collectionKey);

//   const batch = firestore.batch();
//   objectsToAdd.forEach((obj) => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });
//   return await batch.commit();
// };
// export const convertCollectionsSnapshotToMap = (collections) => {
//   const transformedCollection = collections.doc.map((doc) => {
//     const { title, items } = doc.data();
//     return {
//       routeName: encodeURI(title.toLowerCase()),
//       id: doc.id,
//       title,
//       items,
//     };
//   });
//   return transformedCollection.reduce((accumulator, collection) => {
//     accumulator[collection.title.toLowerCase()] = collection;
//     return accumulator;
//   }, {});
// };

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;
