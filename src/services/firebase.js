// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail, // 1. Import
} from "firebase/auth";
import {
    getFirestore,
    doc,
    setDoc,
    getDoc
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();


/**
 * Create or update a user's document in Firestore.
 * @param {string} uid - Firebase Auth user UID
 * @param {object} data - Additional user data to store
 */

const handleGoogleLogin = async () => {
    console.log("Google sign-in clicked");
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        // check if the user already exists in firestore
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);
        // if not, add them to firestore
        if (!userDoc.exists()) {
            await setDoc(userRef, {
                email: user.email,
                name: user.displayName,
                createdAt: new Date(),
            });
        }
        console.log("User", user.email, "signed in successfully!");
    } catch (error) {
        console.error("Error signing in with Google:", error);
    }
}


const handleEmailAndPasswordLogin = async (email, password) => {
    console.log("Login button clicked");

    try {
        await signInWithEmailAndPassword(auth, email, password)
        console.log("User", email, "successfully logged in!")
    } catch (error) {
        console.error("Error signing in with Google:", error);
    }
}

export {
    app,
    auth,
    db,
    googleProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    handleGoogleLogin,
    handleEmailAndPasswordLogin,
    doc,
    setDoc,
    getDoc,
    getFirestore,
    getAuth,
    GoogleAuthProvider,
};