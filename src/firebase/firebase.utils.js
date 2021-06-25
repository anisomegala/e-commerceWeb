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

  export const createUserProfileDocument = async (userAuth, addtionalData) => {
    if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot =  await userRef.get();
      console.log(snapShot);

      if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const creatAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            creatAt,
            ...addtionalData
          })
        }catch(err) {
          console.log('Something went wrong', err.message);
        }
      }

      return userRef;
  };


  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});


  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;

