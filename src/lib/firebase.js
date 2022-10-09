import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDE0GxcmiXu_C2sntFvsjCQ4Q0L0p62UMc",
  authDomain: "instagram-ft.firebaseapp.com",
  projectId: "instagram-ft",
  storageBucket: "instagram-ft.appspot.com",
  messagingSenderId: "126474473998",
  appId: "1:126474473998:web:158c03c2612c6d82c8225f",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
