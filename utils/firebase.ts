import firebase from 'firebase/compat/app';
import 'Firebase/auth';

const FirebaseCredentials = {
  apiKey: `${process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY}`,
  authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`,
  storageBucket: "next-news-323d6.appspot.com",
  messagingSenderId: "221017226385",
  appId: "1:221017226385:web:32707f2aa3c747c3655330",
  measurementId: "G-3TQQS0G7KP"
}
// if a Firebase instance doesn't exist, create one
// Initialize Firebase
export default function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(FirebaseCredentials);
    }
}