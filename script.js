// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

// Your Firebase configuration object
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
const db = getFirestore(app);

// Function to save account details
async function saveAccountDetails(event) {
    event.preventDefault();  // Prevent the default form submission
    
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const companyName = document.getElementById('company-name').value;
    const address = document.getElementById('address').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save user details in Firestore
        await setDoc(doc(db, "users", user.uid), {
            firstName,
            lastName,
            email,
            phoneNumber,
            companyName,
            address
        });

        // Redirect to the sign-in page after saving
        window.location.href = 'index.html';
    } catch (error) {
        console.error("Error signing up: ", error);
        alert("Error signing up. Please try again.");
    }
}

// Attach the saveAccountDetails function to the sign-up form submit event
document.querySelector('.signup-form').addEventListener('submit', saveAccountDetails);
