import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDBw0zgB_doAXz-U3ykqaBQZYPNjP49EyM",
    authDomain: "mystore-asg.firebaseapp.com",
    projectId: "mystore-asg",
    storageBucket: "mystore-asg.appspot.com",
    messagingSenderId: "367873199848",
    appId: "1:367873199848:web:1d4b6a454e132d886cc35d",
    measurementId: "G-NT53VLK6TE"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  const provider2 = new firebase.auth.FacebookAuthProvider();
  provider2.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export const signInWithFacebook = () => auth.signInWithPopup(provider2);

  export default firebase;

