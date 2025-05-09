document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const formData = new FormData(registerForm);
            fetch("/api/register", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Registration successful! Please check your email for activation instructions.");
                    window.location.href = "/login";
                } else {
                    alert(data.message);
                }
            })
            .catch(error => console.error("Error:", error));
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const formData = new FormData(loginForm);
            fetch("/api/login", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = "/dashboard";
                } else {
                    alert(data.message);
                }
            })
            .catch(error => console.error("Error:", error));
        });
    }
});
