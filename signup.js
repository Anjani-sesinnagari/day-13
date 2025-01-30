// Enhanced email validation using regex
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Password strength check
function isStrongPassword(password) {
    return password.length >= 6 && /[A-Z]/.test(password) && /[0-9]/.test(password);
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";

    if (username.trim() === "") {
        document.getElementById("usernameError").innerText = "Username is required";
        isValid = false;
    }

    if (email.trim() === "" || !isValidEmail(email)) {
        document.getElementById("emailError").innerText = "Valid email is required";
        isValid = false;
    }

    if (!isStrongPassword(password)) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters long and contain at least one uppercase letter and one number";
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        // Optionally reset the form
        document.getElementById("myForm").reset();
    }
});