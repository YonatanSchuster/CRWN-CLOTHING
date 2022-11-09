import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx5ypHDr34c8O9-QZ_SvfAFs7b3LSa1jI",
  authDomain: "crwn-clothing-db-a1e1a.firebaseapp.com",
  projectId: "crwn-clothing-db-a1e1a",
  storageBucket: "crwn-clothing-db-a1e1a.appspot.com",
  messagingSenderId: "685099887544",
  appId: "1:685099887544:web:d65a3ab2277aafe6707d4d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account", // when sombody interacts with our provider, we allways want to force them to select account.
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "userd", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef); // allows us to check whether or not there is an instance of it that exists inside of our database, And it also allows us to access the data.
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //if user data !exist -> create/set the document with data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  //if user data exist -> return userDocRef
  return userDocRef;
};
