document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const usernameInput = document.getElementById('username')
            .value.trim();
        const emailInput = document.getElementById('email')
            .value.trim();
        const passwordInput = document.getElementById('password')
            .value.trim();

        isValid = true;
        const messages = [];

        if (usernameInput.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        if (emailInput.includes('.') && emailInput.includes('@')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        if (passwordInput.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        feedbackDiv.style.display = 'block';

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = '#28a745';
            form.reset();
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    })
 });