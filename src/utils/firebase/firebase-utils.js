// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// google authentication
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

// ====== create Firestore ======
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaxmd3rpyF5YmyE83U9Cxl3S5ck7v6v_o",
  authDomain: "crown-clothing-db-2ed75.firebaseapp.com",
  projectId: "crown-clothing-db-2ed75",
  storageBucket: "crown-clothing-db-2ed75.appspot.com",
  messagingSenderId: "373992124142",
  appId: "1:373992124142:web:651536c7bb24756f8fcdff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// ======= setup firestore =========

// create db
export const db = getFirestore();
// create user document
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  // user data not exixts
  if (!userSnapshot.exists()) {
    // create user and set user
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (err) {
      console.log("error catching the user ", err.massage);
    }
  }

  // user data exixts
  return userDocRef;
};
