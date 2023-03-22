// // google authentication
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// // ====== create Firestore ======
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// ===== Initialize Firebase ======
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaxmd3rpyF5YmyE83U9Cxl3S5ck7v6v_o",
  authDomain: "crown-clothing-db-2ed75.firebaseapp.com",
  projectId: "crown-clothing-db-2ed75",
  storageBucket: "crown-clothing-db-2ed75.appspot.com",
  messagingSenderId: "373992124142",
  appId: "1:373992124142:web:651536c7bb24756f8fcdff",
};
const app = initializeApp(firebaseConfig);
// ===== Initialize Firebase ======

// =========== Google Sign In Authentication ===========
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(app);

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
// =========== Google Sign In Authentication ===========

// =========== Google Sign In Authentication ===========
const fbProvider = new FacebookAuthProvider();

fbProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithFacebookPopup = () => signInWithPopup(auth, fbProvider);
// =========== Google Sign In Authentication ===========

// =========== create Users Document From Auth ===========
// create db
const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
  // create user document reference
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // if user not exist
  if (!userSnapshot.exists()) {
    //get user info
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      // create user document and add to firestore
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  // user exist
  return userDocRef;
};

// =========== sign up with email and password ===========
export const createAuthUserWithEmailAndPassword = (email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};

// =========== sign In with email and password ===========
export const signInAuthUserWithEmailAndPassword = (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};
