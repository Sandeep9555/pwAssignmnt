function passwordValidator(password, confirmedPassword) {
    if (password === confirmedPassword) {
        console.log("Password Matched. Password validation Successful.");
    } else {
        console.log("Password didn't match. Password validation unsuccessful");
    }
}

// Example usage:
passwordValidator("password123", "password123");
