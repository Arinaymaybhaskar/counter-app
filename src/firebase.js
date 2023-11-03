import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh1RfveQi1YI5RRgmoI7a04a1PmO6xTYM",
  authDomain: "counter-app-9cb9d.firebaseapp.com",
  projectId: "counter-app-9cb9d",
  storageBucket: "counter-app-9cb9d.appspot.com",
  messagingSenderId: "422876175500",
  appId: "1:422876175500:web:0281a96255a79f65b26fa9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

export { app, auth, firestore, analytics };