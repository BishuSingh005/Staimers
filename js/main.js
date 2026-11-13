// Modals ko open, close aur switch karne ka logic
window.setupModalControls = function () {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const forgotModal = document.getElementById('forgotModal');

    const openLogin = document.getElementById('openLoginBtn');
    const openRegister = document.getElementById('openRegisterBtn');
    const openForgot = document.getElementById('openForgotBtn');

    const closeLogin = document.getElementById('closeLoginBtn');
    const closeRegister = document.getElementById('closeRegisterBtn');
    const closeForgot = document.getElementById('closeForgotBtn');

    const toRegister = document.getElementById('switchToRegister');
    const toLogin = document.getElementById('switchToLogin');
    const backToLogin = document.getElementById('backToLogin');

    if (openLogin) openLogin.onclick = () => (loginModal.style.display = 'flex');
    if (openRegister) openRegister.onclick = () => (registerModal.style.display = 'flex');

    if (openForgot) {
        openForgot.onclick = (e) => {
            e.preventDefault();
            loginModal.style.display = 'none';
            forgotModal.style.display = 'flex';
        };
    }

    if (closeLogin) closeLogin.onclick = () => (loginModal.style.display = 'none');
    if (closeRegister) closeRegister.onclick = () => (registerModal.style.display = 'none');
    if (closeForgot) closeForgot.onclick = () => (forgotModal.style.display = 'none');

    if (toRegister) {
        toRegister.onclick = (e) => {
            e.preventDefault();
            loginModal.style.display = 'none';
            registerModal.style.display = 'flex';
        };
    }

    if (toLogin) {
        toLogin.onclick = (e) => {
            e.preventDefault();
            registerModal.style.display = 'none';
            loginModal.style.display = 'flex';
        };
    }

    if (backToLogin) {
        backToLogin.onclick = (e) => {
            e.preventDefault();
            forgotModal.style.display = 'none';
            loginModal.style.display = 'flex';
        };
    }

    // Modal ke bahar click karne par band ho jaye
    window.onclick = (e) => {
        if (e.target === loginModal) loginModal.style.display = 'none';
        if (e.target === registerModal) registerModal.style.display = 'none';
        if (e.target === forgotModal) forgotModal.style.display = 'none';
    };
};

document.addEventListener('DOMContentLoaded', () => {
    window.setupModalControls();

    // Contact page inquiry form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Aapki inquiry submit ho gayi hai. Humari team jald hi aapse contact karegi.');
            contactForm.reset();
        });
    }
});
