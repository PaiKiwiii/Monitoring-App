import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC86XBdtq-SuRwZ7CSSJQ5viTd_sybg4ek",
    authDomain: "thesis-raspi.firebaseapp.com",
    databaseURL: "https://thesis-raspi-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "thesis-raspi",
    storageBucket: "thesis-raspi.appspot.com",
    messagingSenderId: "154991516906",
    appId: "1:154991516906:web:67db4d7dafa98658a14b93",
    measurementId: "G-VQFKY3E7P3"
};

const app = firebase.initializeApp(firebaseConfig);

export async function signInWithEmailAndPassword(email, password) {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        window.location.href = "dashboard.html";
    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error code: ${errorCode}\nError message: ${errorMessage}`);
    }
}

export async function login(event) {
    event.preventDefault();

    // Retrieve input values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    await signInWithEmailAndPassword(email, password);
}

// attach event listener to login form
document.getElementById('loginForm').addEventListener('submit', login);
