// Toggle between login and register forms
function toggle() {
    document.getElementById("container").classList.toggle("active");
}

// Login function → go to surprise.html if form is filled
function login() {
    // Get login form inputs
    const container = document.getElementById("container");
    const username = container.querySelector(".login input[type='text']").value.trim();
    const password = container.querySelector(".login input[type='password']").value.trim();

    if (username === "" || password === "") {
        alert("Please enter both username and password to login!");
    } else {
        // All fields filled, go to surprise.html
        window.location.href = "surprise.html";
    }
}

// Register function → show success alert, then switch to Login form
function register() {
    const container = document.getElementById("container");
    const username = container.querySelector(".register input[type='text']").value.trim();
    const email = container.querySelector(".register input[type='email']").value.trim();
    const password = container.querySelector(".register input[type='password']").value.trim();

    if (username === "" || email === "" || password === "") {
        alert("Please fill all registration fields!");
    } else {
        alert("Registration successful!");
        toggle(); // Switch to login form
    }
}
