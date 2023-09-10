import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCIh6q1VHRyCgcYrHLrfmwJSUIVzT_a64Y",
  authDomain: "durachok-795b8.firebaseapp.com",
  projectId: "durachok-795b8",
  storageBucket: "durachok-795b8.appspot.com",
  messagingSenderId: "387283317811",
  appId: "1:387283317811:web:c83e896d05a0c93826df46"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage();