// Import and configure Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Function to save account details
function saveAccountDetails(event) {
    event.preventDefault();  // Prevent the default form submission
    
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const companyName = document.getElementById('company-name').value;
    const address = document.getElementById('address').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;

            // Save additional user data to Firestore
            const userData = {
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                companyName: companyName,
                address: address
            };
            setDoc(doc(db, "users", user.uid), userData);

            // Redirect to the sign-in page after saving
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error('Error signing up:', error.message);
        });
}

// Attach the saveAccountDetails function to the sign-up form submit event
document.querySelector('.signup-form').addEventListener('submit', saveAccountDetails);
