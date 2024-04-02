import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVnAQTA7_bq0AkUwZEg8Kcp11zwWMX-k8",
  authDomain: "cloudnest-98968.firebaseapp.com",
  projectId: "cloudnest-98968",
  storageBucket: "cloudnest-98968.appspot.com",
  messagingSenderId: "84102388824",
  appId: "1:84102388824:web:7cc01639d0d3ea73dd3e2d",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
