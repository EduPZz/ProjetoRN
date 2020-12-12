 import firebase from 'firebase';
 import 'firebase/firestore';

 const firebaseConfig = {
    apiKey: "AIzaSyDYWJd3d3WYjAHkngoGryDMGcyA8uuZe6c",
    authDomain: "projetorn-fb-85123.firebaseapp.com",
    projectId: "projetorn-fb-85123",
    storageBucket: "projetorn-fb-85123.appspot.com",
    messagingSenderId: "679357104178",
    appId: "1:679357104178:web:060c206a0b147c94223c2b",
    measurementId: "G-EEZ5525DYY"
  };

 var app = firebase.initializeApp(firebaseConfig);

 export const conexaoFS = app.firestore();