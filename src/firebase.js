import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 const firebaseConfig = {
    apiKey: "AIzaSyBYiaBJdYNrw3Bq7pn-QfjmUQJPkillxUw",
    authDomain: "linkedin-clone-42946.firebaseapp.com",
    projectId: "linkedin-clone-42946",
    storageBucket: "linkedin-clone-42946.appspot.com",
    messagingSenderId: "81110865522",
    appId: "1:81110865522:web:de5d584c7903fdfd0694eb"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  export { db, auth };