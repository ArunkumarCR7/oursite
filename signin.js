// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to handle sign-in
async function signIn(event) {
    event.preventDefault();  // Prevent the default form submission
    
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Sign in successful!');
        window.location.href = 'welcome.html';
    } catch (error) {
        alert('Invalid email or password!');
    }
}

// Attach the signIn function to the sign-in form submit event
document.querySelector('.signin-form').addEventListener('submit', signIn);
