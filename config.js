import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBC_eUStBNmw80UFmjMgRxpFLKbUhOqN_k",
  authDomain: "ciclista-eletronico-6aefd.firebaseapp.com",
  projectId: "ciclista-eletronico-6aefd",
  storageBucket: "ciclista-eletronico-6aefd.appspot.com",
  messagingSenderId: "496432284602",
  appId: "1:496432284602:web:b4cb8efe8df6112e009383"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
