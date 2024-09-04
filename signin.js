// Function to handle sign-in
function signIn(event) {
    event.preventDefault();  // Prevent the default form submission
    
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    // Retrieve the saved account details from localStorage
    const savedAccount = JSON.parse(localStorage.getItem('accountDetails'));

    // Simple validation for sign-in (In real life, validation should be more robust)
    if (savedAccount && savedAccount.email === email && savedAccount.password === password) {
        alert('Sign in successful!');
        // Redirect to a welcome page or dashboard
        window.location.href = 'welcome.html';
    } else {
        alert('Invalid email or password!');
    }
}

// Attach the signIn function to the sign-in form submit event
document.querySelector('.signin-form').addEventListener('submit', signIn);
