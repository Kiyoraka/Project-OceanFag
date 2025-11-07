/**
 * Ocean FG - Components Module
 * Interactive components (service cards, client logos, etc.)
 */

export function initComponents() {
    // Setup service card interactions
    setupServiceCards();

    // Setup client logo interactions
    setupClientLogos();

    // Setup statistics counter animation
    setupStatsCounter();
}

/**
 * Service Card Hover Interactions
 */
function setupServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        const overlay = card.querySelector('.service-overlay');

        if (overlay) {
            card.addEventListener('mouseenter', () => {
                // Add hover effect class
                card.classList.add('is-hovered');
            });

            card.addEventListener('mouseleave', () => {
                // Remove hover effect class
                card.classList.remove('is-hovered');
            });
        }
    });
}

/**
 * Client Logo Interactions
 */
function setupClientLogos() {
    const clientLogos = document.querySelectorAll('.client-logo');

    clientLogos.forEach(logo => {
        // Add subtle animation on hover
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = 'translateY(-8px) scale(1.05)';
        });

        logo.addEventListener('mouseleave', () => {
            logo.style.transform = '';
        });
    });
}

/**
 * Statistics Counter Animation
 * Animates numbers when they become visible
 */
function setupStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const observerOptions = {
        root: null,
        threshold: 0.5
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

/**
 * Animate Counter Number
 */
function animateCounter(element) {
    const text = element.textContent;
    const hasPercent = text.includes('%');
    const hasRM = text.includes('RM');
    const hasSWEC = text.includes('SWEC');

    // Skip non-numeric stats
    if (hasSWEC) return;

    // Extract number
    let target = parseFloat(text.replace(/[^0-9.]/g, ''));
    if (isNaN(target)) return;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 frames
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    element.textContent = '0';

    const counter = setInterval(() => {
        current += increment;

        if (current >= target) {
            current = target;
            clearInterval(counter);
        }

        // Format number
        let displayValue = Math.floor(current);

        if (hasPercent) {
            element.textContent = displayValue + '%';
        } else if (hasRM) {
            element.textContent = 'RM ' + displayValue + 'M';
        } else {
            element.textContent = displayValue + '+';
        }
    }, stepDuration);
}

/**
 * Add smooth transitions to all interactive elements
 */
export function enhanceInteractivity() {
    // Add ripple effect to buttons (optional enhancement)
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.width = '0';
            ripple.style.height = '0';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.animation = 'ripple 0.6s ease-out';

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple animation
    if (!document.getElementById('ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation';
        style.textContent = `
            @keyframes ripple {
                to {
                    width: 300px;
                    height: 300px;
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

console.log('✅ Components module loaded');
