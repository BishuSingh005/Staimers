import { auth } from './firebase-config.js';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Alert message dikhane ke liye helper
function showMessage(boxId, text, isSuccess = false) {
    const box = document.getElementById(boxId);
    if (!box) return;
    box.style.display = 'block';
    box.className = isSuccess ? 'alert-box alert-success' : 'alert-box alert-error';
    box.textContent = text;
}

function hideAllMessages() {
    const alerts = document.querySelectorAll('.alert-box');
    alerts.forEach(item => {
        item.style.display = 'none';
        item.textContent = '';
    });
}

// --- New Student Registration ---
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        hideAllMessages();

        const email = document.getElementById('regEmail').value.trim();
        const password = document.getElementById('regPassword').value;
        const submitBtn = document.getElementById('registerSubmitBtn');

        submitBtn.disabled = true;
        submitBtn.textContent = 'Creating account...';

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            showMessage('registerAlert', 'Account created! Logging you in...', true);
            
            setTimeout(() => {
                document.getElementById('registerModal').style.display = 'none';
                registerForm.reset();
                hideAllMessages();
            }, 1400);
        } catch (err) {
            let msg = 'Something went wrong. Please try again.';
            if (err.code === 'auth/email-already-in-use') {
                msg = 'Ye email pehle se registered hai. Login karein.';
            } else if (err.code === 'auth/weak-password') {
                msg = 'Password kam se kam 6 characters ka hona chahiye.';
            } else if (err.code === 'auth/invalid-email') {
                msg = 'Please enter a valid email address.';
            }
            showMessage('registerAlert', msg);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Create Account';
        }
    });
}

// --- Student Login ---
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        hideAllMessages();

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        const submitBtn = document.getElementById('loginSubmitBtn');

        submitBtn.disabled = true;
        submitBtn.textContent = 'Checking...';

        try {
            await signInWithEmailAndPassword(auth, email, password);
            showMessage('loginAlert', 'Login successful! Welcome back.', true);
            
            setTimeout(() => {
                document.getElementById('loginModal').style.display = 'none';
                loginForm.reset();
                hideAllMessages();
            }, 1200);
        } catch (err) {
            let msg = 'Invalid email or password.';
            if (err.code === 'auth/too-many-requests') {
                msg = 'Too many failed attempts. Thodi der baad try karein.';
            }
            showMessage('loginAlert', msg);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Login';
        }
    });
}

// --- Forgot Password (Reset Link / OTP Verification) ---
const forgotForm = document.getElementById('forgotForm');
if (forgotForm) {
    forgotForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        hideAllMessages();

        const email = document.getElementById('forgotEmail').value.trim();
        const submitBtn = document.getElementById('forgotSubmitBtn');

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        try {
            await sendPasswordResetEmail(auth, email);
            showMessage('forgotAlert', 'Password reset link aapke email par bhej diya gaya hai. Inbox ya Spam folder check karein.', true);
            forgotForm.reset();
        } catch (err) {
            let msg = 'Reset link bhejne me dikkat aayi.';
            if (err.code === 'auth/user-not-found') {
                msg = 'Is email se koi account nahi mila.';
            } else if (err.code === 'auth/invalid-email') {
                msg = 'Sahi email address daalein.';
            }
            showMessage('forgotAlert', msg);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Reset Code';
        }
    });
}

// --- Track Login State Across All Pages ---
onAuthStateChanged(auth, (user) => {
    const navContainer = document.getElementById('navAuthContainer');
    if (!navContainer) return;

    if (user) {
        navContainer.innerHTML = `
            <span class="user-email-tag"><i class="fa-solid fa-circle-user"></i> ${user.email}</span>
            <button class="btn btn-outline" id="logoutBtn">Logout</button>
        `;

        document.getElementById('logoutBtn').addEventListener('click', async () => {
            await signOut(auth);
            window.location.reload();
        });
    } else {
        navContainer.innerHTML = `
            <button class="btn btn-outline" id="openLoginBtn">Login</button>
            <button class="btn btn-secondary" id="openRegisterBtn">Register</button>
        `;
        if (window.setupModalControls) {
            window.setupModalControls();
        }
    }
});