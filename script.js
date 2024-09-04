
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

    // Store the account details in localStorage 
    const accountDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        companyName: companyName,
        address: address,
        password: password
    };

    localStorage.setItem('accountDetails', JSON.stringify(accountDetails));

    // Redirect to the sign-in page after saving
    window.location.href = 'index.html';
}

// Attach the saveAccountDetails function to the sign-up form submit event
document.querySelector('.signup-form').addEventListener('submit', saveAccountDetails);
