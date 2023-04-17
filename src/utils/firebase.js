// **** authentication firebase ****
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// ****firestore****
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  writeBatch,
  getDocs,
  query,
} from "firebase/firestore";

// =======Initialize Firebase==========
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU9PolwV6-CVTaCTYHkT5bJnDfLGWSpdk",
  authDomain: "my-project-2-6ffa3.firebaseapp.com",
  projectId: "my-project-2-6ffa3",
  storageBucket: "my-project-2-6ffa3.appspot.com",
  messagingSenderId: "282685260459",
  appId: "1:282685260459:web:957c6919059bec5aa76dee",
};
const app = initializeApp(firebaseConfig);
// =======Initialize Firebase==========
//#########################################################################

//#########################################################################
const auth = getAuth(app);

// sign in with google
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () =>
  await signInWithPopup(auth, googleProvider);
//#########################################################################

//#########################################################################
// sign in with facebook
const facebookProvider = new FacebookAuthProvider();

export const signInWithFacebook = async () =>
  await signInWithPopup(auth, facebookProvider);
//#########################################################################

//#########################################################################
// create user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) =>
  await createUserWithEmailAndPassword(auth, email, password);

//#########################################################################

//#########################################################################
// sign in  with email and password
export const signInAuthWithEmailAndPassword = async (email, password) =>
  await signInWithEmailAndPassword(auth, email, password);

//#########################################################################
// SIGN OUT
export const SignOutUser = async () => await signOut(auth);
//#########################################################################
export const onAuthStateChangedListener = async (callback) =>
  await onAuthStateChanged(auth, callback);

//#########################################################################
//==== FIRESTORE ====
//#########################################################################
// create firestore documuent users
const db = getFirestore(app);
// create user document from auth
export const createUserDocumentFromAuth = async (user, getName) => {
  let { uid, displayName, email } = user;

  if (displayName === null) {
    displayName = getName;
  }

  // user doc ref
  const userDocRef = doc(db, "users", uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    try {
      const userData = {
        displayName,
        email,
        id: new Date(),
      };

      await setDoc(userDocRef, userData);
    } catch (error) {
      console.log(error);
    }
  }

  return userDocRef;
};

// =========== create catagories collection ==============
export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  // catagories ref
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  // write in db
  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    // set new document
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};
// =========== get catagories collection ==============
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const catagoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return catagoryMap;
};
