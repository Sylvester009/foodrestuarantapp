import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOl-Hh1aDXFCJIoEANJ40e8o6yKjLkYDQ",
  authDomain: "foodrestuarantapp.firebaseapp.com",
  projectId: "foodrestuarantapp",
  storageBucket: "foodrestuarantapp.appspot.com",
  messagingSenderId: "658029116248",
  appId: "1:658029116248:web:839a9fbbe09b998b33c32d"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
