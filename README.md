# Staimers Technical Institute — Official Website & Student Portal

A responsive, 3-page informational website and student authentication portal built for **Staimers Technical Institute** (Gopalganj, Bihar)[cite: 1, 2]. The platform showcases core vocational programs—Industrial Safety Management (HSE/EHS), Computer Courses (ADCA & Hardware), and Spoken English—and includes a secure student portal powered by Firebase Authentication[cite: 2, 12, 13].

---

## Features

- **Multi-Page Responsive Architecture:** Clean, mobile-friendly navigation across Home & Courses (`index.html`), About Us (`about.html`), and Contact Us (`contact.html`)[cite: 11, 13].
- **Student Authentication System:**
  - New Student Registration with email and password validation[cite: 2, 12].
  - Secure Student Login with real-time error handling and session persistence across pages.
  - Self-service Password Reset via email verification link.
- **Branch & Inquiry Management:** Detailed location info for the Sareya (Main Office) and Jadopur Bazar branches[cite: 1], interactive Google Maps embed, and an admission inquiry form.
- **Modular Codebase:** Separation of concerns across HTML templates, centralized styling (`style.css`), and modular ES6 JavaScript files (`firebase-config.js`, `auth.js`, `main.js`)[cite: 11, 13].

---

## Project Structure

```text
Staimers/
├── js/
│   ├── firebase-config.js   # Firebase SDK initialization & project credentials
│   ├── auth.js              # Registration, login, password reset, and auth state observer
│   └── main.js              # Modal UI controls and contact form event handling
├── index.html               # Home page, hero banner, and course catalog
├── about.html               # Institute overview, mission, and core highlights
├── contact.html             # Branch details, inquiry form, and campus map
├── style.css                # Global responsive styles and modal components
└── README.md                # Project documentation
