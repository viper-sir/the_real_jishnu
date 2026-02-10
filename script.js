let allowRedirect = false;

// Toggle login/register
function toggle() {
    document.getElementById("container").classList.toggle("active");
}

/* =======================
   LOGIN
======================= */
function login() {
    const container = document.getElementById("container");
    const username = container.querySelector(".login input[type='text']").value.trim();
    const password = container.querySelector(".login input[type='password']").value.trim();

    if (username === "" || password === "") {
        alert("Please enter username and password!");
        return;
    }

    // Reset state
    allowRedirect = false;
    document.getElementById("keyError").textContent = "";
    document.getElementById("encryptionKey").value = "";

    // Open encryption popup
    document.getElementById("keyModal").style.display = "flex";
}

/* =======================
   VERIFY ENCRYPTION KEY
======================= */
function verifyKey() {
    const key = document.getElementById("encryptionKey").value.trim();
    const error = document.getElementById("keyError");

    if (key === "") {
        error.textContent = "⚠️ Please enter encryption key!";
        return;
    }

    if (key === "2122") {
        allowRedirect = true;
        closeKeyModal();

        // Redirect only after verification
        window.location.href = "surprise.html";
    } else {
        allowRedirect = false;
        error.textContent = "❌ Wrong encryption key!";
    }
}

/* =======================
   CLOSE POPUP
======================= */
function closeKeyModal() {
    document.getElementById("keyModal").style.display = "none";
    document.getElementById("encryptionKey").value = "";
    document.getElementById("keyError").textContent = "";
}

/* =======================
   REGISTER
======================= */
function register() {
    const container = document.getElementById("container");
    const username = container.querySelector(".register input[type='text']").value.trim();
    const email = container.querySelector(".register input[type='email']").value.trim();
    const password = container.querySelector(".register input[type='password']").value.trim();

    if (username === "" || email === "" || password === "") {
        alert("Please fill all registration fields!");
        return;
    }

    alert("Registration successful!");
    toggle();
}
