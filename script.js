document.addEventListener('DOMContentLoaded', () => {
    const enterBtn = document.getElementById('enter-btn');
    const mainContent = document.getElementById('main-content');
    const heroSection = document.getElementById('hero');

    // Reveal Content Flow
    // Reveal Content Flow
    enterBtn.addEventListener('click', () => {
        // Smooth scroll to About section
        document.getElementById('about').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    // Optional: Reveal content on scroll if user scrolls down instead of clicking?
    // Let's keep it strict for now to match "first it should open only introduction"

    // Intersection Observer for fade-in elements in main content
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply observer to sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('opacity-0'); // Add a class to hide initially
        observer.observe(section);
    });
});
