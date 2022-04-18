import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAjb4-nWE0NTA8x-F59feB0zF_WMFn3lAA",
    authDomain: "api-3eece.firebaseapp.com",
    projectId: "api-3eece",
    storageBucket: "api-3eece.appspot.com",
    messagingSenderId: "998816318659",
    appId: "1:998816318659:web:711931956fdfb366cd8e76",
  }).auth();
