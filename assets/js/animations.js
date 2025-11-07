/**
 * Ocean FG - Animations Module
 * Intersection Observer for scroll animations (minimal, performance-focused)
 */

export function initAnimations() {
    // Setup Intersection Observer for scroll animations
    setupScrollAnimations();
}

/**
 * Scroll Animations using Intersection Observer
 */
function setupScrollAnimations() {
    // Elements to animate
    const animatedElements = [
        // Section headers
        ...document.querySelectorAll('.section-header'),

        // Cards
        ...document.querySelectorAll('.stat-card'),
        ...document.querySelectorAll('.service-card'),
        ...document.querySelectorAll('.cert-badge'),
        ...document.querySelectorAll('.leader-card'),
        ...document.querySelectorAll('.client-logo'),

        // Vision/Mission
        ...document.querySelectorAll('.vision-card, .mission-card'),

        // Timeline
        ...document.querySelectorAll('.timeline-item'),

        // Contact
        ...document.querySelectorAll('.contact-info, .contact-form'),
    ];

    // Intersection Observer options
    const observerOptions = {
        root: null, // viewport
        threshold: 0.1, // 10% of element visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before entering viewport
    };

    // Intersection Observer callback
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class
                entry.target.classList.add('aos-animate');

                // Optional: Unobserve after animation (performance optimization)
                observer.unobserve(entry.target);
            }
        });
    };

    // Create observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all elements
    animatedElements.forEach(element => {
        // Add base animation attribute
        if (!element.hasAttribute('data-aos')) {
            element.setAttribute('data-aos', 'fade-up');
        }

        // Start observing
        observer.observe(element);
    });

    // Add stagger effect to grid items
    addStaggerEffect();
}

/**
 * Add Stagger Animation Effect to Grid Items
 */
function addStaggerEffect() {
    const grids = [
        document.querySelector('.about-stats'),
        document.querySelector('.services-grid'),
        document.querySelector('.certifications-grid'),
        document.querySelector('.leadership-grid'),
        document.querySelector('.clients-grid'),
    ];

    grids.forEach(grid => {
        if (!grid) return;

        const items = grid.children;
        Array.from(items).forEach((item, index) => {
            // Add stagger delay (100ms increments)
            item.style.transitionDelay = `${index * 100}ms`;
        });
    });
}

/**
 * Parallax Effect (Subtle, for hero diagonal)
 */
export function setupParallax() {
    const heroBackground = document.querySelector('.hero-background');

    if (heroBackground) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3; // Parallax speed

            if (scrolled <= window.innerHeight) {
                heroBackground.style.transform = `translateY(${rate}px)`;
            }
        });
    }
}

console.log('✅ Animations module loaded');
