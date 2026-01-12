document.addEventListener('DOMContentLoaded', () => {
    // Show welcome message for 4 seconds
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.style.display = 'block';
    setTimeout(() => {
        welcomeMessage.style.display = 'none';
    }, 2000);

    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');

    // Open login modal when login button is clicked
    const loginButton = document.querySelector('.btn-login');
    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        signupModal.style.display = 'none'; // Ensure signup modal is hidden
        loginModal.style.display = 'flex';
    });

    // Open signup modal when sign up button is clicked
    const signupButton = document.querySelector('.btn-signup');
    signupButton.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'none'; // Ensure login modal is hidden
        signupModal.style.display = 'flex';
    });

    // Switch from login modal to signup modal when register link is clicked
    const registerLink = document.getElementById('register-link');
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'none';
        signupModal.style.display = 'flex';
    });

    // Close modals when close button is clicked
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            loginModal.style.display = 'none';
            signupModal.style.display = 'none';
        });
    });

    // Close modals when clicking outside of the modal content
    window.addEventListener('click', (e) => {
        if (e.target === loginModal || e.target === signupModal) {
            loginModal.style.display = 'none';
            signupModal.style.display = 'none';
        }
    });
});

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function openLoginPopup() {
    document.getElementById("login-popup").style.display = "block";
}

function closeLoginPopup() {
    document.getElementById("login-popup").style.display = "none";
}

// Close pop-up when clicking outside
window.onclick = function(event) {
    var popup = document.getElementById("login-popup");
    if (event.target === popup) {
        closeLoginPopup();
    }
}
