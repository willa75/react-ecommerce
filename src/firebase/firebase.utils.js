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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if( !userAuth ) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if( !snapShot.exists ){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
