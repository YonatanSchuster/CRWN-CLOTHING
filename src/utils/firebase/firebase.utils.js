import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

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
  prompt: "select_account", //when sombody interacts with our provider, we allways want to force them to select account.
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
