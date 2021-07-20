import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCudU4pfapLH6TmYm6kiGSf7rrADhCmLkc",
  authDomain: "netflix-32ad4.firebaseapp.com",
  projectId: "netflix-32ad4",
  storageBucket: "netflix-32ad4.appspot.com",
  messagingSenderId: "120994315700",
  appId: "1:120994315700:web:7e6cd565971eaf6fcdc6e1",
  measurementId: "G-4FEWL7Q4V5",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
