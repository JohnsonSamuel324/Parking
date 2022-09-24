// Import the functions you need from the SDKs you need

import * as firebase from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_OkieiWknvGpvsCM0nVqJ9UfA_XaQxBk",
  authDomain: "parking-app-c63e7.firebaseapp.com",
  databaseURL: "https://parking-app-c63e7-default-rtdb.firebaseio.com",
  projectId: "parking-app-c63e7",
  storageBucket: "parking-app-c63e7.appspot.com",
  messagingSenderId: "743092365075",
  appId: "1:743092365075:web:0f446def06ff6346615ce6",
  measurementId: "G-3FJ88FDZPF",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { firebase };
