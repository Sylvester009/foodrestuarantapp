import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnhA3yibD2_rIwiUZYk2FOmsJAZ2yCAAI",
  authDomain: "foodrestuarant-9a2bc.firebaseapp.com",
  databaseURL: "https://foodrestuarant-9a2bc-default-rtdb.firebaseio.com",
  projectId: "foodrestuarant-9a2bc",
  storageBucket: "foodrestuarant-9a2bc.appspot.com",
  messagingSenderId: "1084296086153",
  appId: "1:1084296086153:web:e315d773afd8638584bc58"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
