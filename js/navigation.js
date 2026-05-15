const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("active");
}));

// 1. SMOOTH SCROLLING LOGIC
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 2. CONTACT FORM VALIDATION & SUBMISSION
const contactForm = document.querySelector("#contact-form");
const statusMsg = document.querySelector("#form-status");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page refresh

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    // Basic Validation Check
    if (name.length < 2) {
        showStatus("Please enter a valid name.", "error");
        return;
    }

    // If validation passes
    showStatus("Thanks, Gaurav will get back to you soon!", "success");
    contactForm.reset(); // Clear the form
});

function showStatus(message, type) {
    statusMsg.innerText = message;
    statusMsg.className = type === "success" ? "status-success" : "status-error";
    statusMsg.classList.remove("hidden");
    
    // Hide message after 5 seconds
    setTimeout(() => { statusMsg.classList.add("hidden"); }, 5000);
}
