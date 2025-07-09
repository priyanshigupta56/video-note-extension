// API Configuration
const API_BASE_URL = 'http://localhost:5000'; // Update this with your backend URL

// DOM Elements
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const appContent = document.getElementById('app-content');

// Show/Hide Forms
document.getElementById('show-signup').addEventListener('click', () => {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
});

document.getElementById('show-login').addEventListener('click', () => {
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
});

// Login Handler
document.getElementById('login-btn').addEventListener('click', async () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorElement = document.getElementById('login-error');

    try {
        const response = await fetch(`${API_BASE_URL}/user/authenticate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // Decode JWT to get userId
            const token = data.token;
            let userId = null;
            try {
                const payload = JSON.parse(atob(token.split('.')[1]));
                userId = payload._id;
            } catch (e) {
                console.error('Failed to decode JWT:', e);
            }
            // Store token and userId in chrome storage
            chrome.storage.local.set({ 'authToken': token, 'userId': userId }, () => {
                showAppContent();
            });
        } else {
            errorElement.textContent = data.message || 'Login failed';
            errorElement.style.display = 'block';
        }
    } catch (error) {
        errorElement.textContent = 'Network error. Please try again.';
        errorElement.style.display = 'block';
    }
});

// Signup Handler
document.getElementById('signup-btn').addEventListener('click', async () => {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const city = document.getElementById('signup-city').value;
    const errorElement = document.getElementById('signup-error');

    try {
        const response = await fetch(`${API_BASE_URL}/user/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, city }),
        });

        const data = await response.json();

        if (response.ok) {
            // Switch to login form after successful signup
            signupForm.classList.remove('active');
            loginForm.classList.add('active');
            errorElement.style.display = 'none';
        } else {
            errorElement.textContent = data.message || 'Signup failed';
            errorElement.style.display = 'block';
        }
    } catch (error) {
        errorElement.textContent = 'Network error. Please try again.';
        errorElement.style.display = 'block';
    }
});

// Logout Handler
document.getElementById('logout-btn').addEventListener('click', () => {
    chrome.storage.local.remove(['authToken', 'userId'], () => {
        showLoginForm();
    });
});

// Helper Functions
function showAppContent() {
    loginForm.classList.remove('active');
    signupForm.classList.remove('active');
    appContent.classList.add('active');
}

function showLoginForm() {
    appContent.classList.remove('active');
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
}

// Check Authentication Status on Load
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(['authToken'], (result) => {
        if (result.authToken) {
            showAppContent();
        } else {
            showLoginForm();
        }
    });
});

// Add Note Button Handler
document.getElementById('add-note-btn').addEventListener('click', () => {
    // Your existing add note logic here
});

// View Notes Button Handler
document.getElementById('view-notes-btn').addEventListener('click', () => {
    // Your existing view notes logic here
});