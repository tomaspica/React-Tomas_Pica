
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBjD0O2usae8uSXn6W-iZUqVSmU81bVdsQ",
  authDomain: "boxeoreact-app.firebaseapp.com",
  projectId: "boxeoreact-app",
  storageBucket: "boxeoreact-app.appspot.com",
  messagingSenderId: "27057867254",
  appId: "1:27057867254:web:57b7740bd3b85f7db49fd7",
  measurementId: "G-CJ6YMXSCS8"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);