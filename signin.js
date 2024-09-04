// Import and configure Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfyHZ8aESP1H2bx4D4YC6SpVdi0B_xYpQ",
    authDomain: "oursite-14783.firebaseapp.com",
    projectId: "oursite-14783",
    storageBucket: "oursite-14783.appspot.com",
    messagingSenderId: "729858628558",
    appId: "1:729858628558:web:cb8b2f8c1447193d97e99f"
  };
  


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to handle sign-in
function signIn(event) {
    event.preventDefault();  // Prevent the default form submission
    
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            alert('Sign in successful!');
            window.location.href = 'welcome.html';
        })
        .catch((error) => {
            alert('Invalid email or password!');
        });
}

// Attach the signIn function to the sign-in form submit event
document.querySelector('.signin-form').addEventListener('submit', signIn);
