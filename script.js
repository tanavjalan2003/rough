// Initialize AOS animations
AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out-quart'
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Lazy load images
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img[data-src]");
    const imgOptions = { threshold: 0, rootMargin: "0px 0px 50px 0px" };

    const loadImage = (image) => {
        image.src = image.dataset.src;
        image.removeAttribute("data-src");
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            loadImage(entry.target);
            observer.unobserve(entry.target);
        });
    }, imgOptions);

    images.forEach(img => {
        observer.observe(img);
    });
});

// Highlight active nav link on scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop - 100 && scrollPos < section.offsetTop + section.offsetHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove("active"));
            const activeLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
            if (activeLink) activeLink.classList.add("active");
        }
    });
});
