import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyD_gdHREGLkXg3dat_FBc_-sMvLeZ9gksg",
    authDomain: "redux-firebase-14992.firebaseapp.com",
    projectId: "redux-firebase-14992",
    storageBucket: "redux-firebase-14992.appspot.com",
    messagingSenderId: "631352263032",
    appId: "1:631352263032:web:7859cc06b77d017975c88d",
    measurementId: "G-ZG5L71LKBL"
};
  
const app = initializeApp(firebaseConfig)

// Test firebase connection by running ts-node firebase-config.ts

// See Readme on how to run ts files in a node environment
console.log('firbase', app) 