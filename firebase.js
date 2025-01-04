import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCN5ikCSe42YA1d36E647zVpbLy6LLJJ5o",
    authDomain: "mini-hackathon-a089e.firebaseapp.com",
    projectId: "mini-hackathon-a089e",
    storageBucket: "mini-hackathon-a089e.firebasestorage.app",
    messagingSenderId: "571349234998",
    appId: "1:571349234998:web:4204ec6ac6e18e4158ef97"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Example: User Signup
function signup(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("User signed up:", userCredential.user);
        })
        .catch((error) => {
            console.error("Error signing up:", error.message);
        });
}