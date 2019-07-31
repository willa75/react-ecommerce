import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBvRZycVCVHPJTC-pyTAg_OJJuPWyAf4bE",
    authDomain: "react-crwn-ecommerce.firebaseapp.com",
    databaseURL: "https://react-crwn-ecommerce.firebaseio.com",
    projectId: "react-crwn-ecommerce",
    storageBucket: "",
    messagingSenderId: "336346496945",
    appId: "1:336346496945:web:8863a340874defce"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
