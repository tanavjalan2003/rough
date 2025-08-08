// Initialize AOS animations
AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out-quart'
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Fade in on page load
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
