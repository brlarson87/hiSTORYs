// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  query,
  where,
  getDocs,
  collection,
  getDoc,
  doc,
} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxqFW0pMi_zXMZbzBBudAZEWjLpQU_SBc",
  authDomain: "historys-98605.firebaseapp.com",
  projectId: "historys-98605",
  storageBucket: "historys-98605.appspot.com",
  messagingSenderId: "308756961319",
  appId: "1:308756961319:web:b74ab1e25398a596951602",
  measurementId: "G-FS8E334GJT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export const fetchStoryById = async (collectionName, storyId) => {
  const docRef = doc(db, collectionName, storyId);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export { app };
