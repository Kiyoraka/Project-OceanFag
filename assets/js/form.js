/**
 * Ocean FG - Form Module
 * Contact form validation and submission
 */

export function initForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        setupFormValidation(contactForm);
        setupFormSubmission(contactForm);
    }
}

/**
 * Setup Form Validation
 */
function setupFormValidation(form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');

    inputs.forEach(input => {
        // Validate on blur
        input.addEventListener('blur', () => {
            validateField(input);
        });

        // Remove error on input
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                input.classList.remove('error');
                removeFieldError(input);
            }
        });
    });
}

/**
 * Validate Individual Field
 */
function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    let isValid = true;
    let errorMessage = '';

    // Required check
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    }

    // Email validation
    if (type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }

    // Display error
    if (!isValid) {
        field.classList.add('error');
        showFieldError(field, errorMessage);
    } else {
        field.classList.remove('error');
        removeFieldError(field);
    }

    return isValid;
}

/**
 * Show Field Error Message
 */
function showFieldError(field, message) {
    // Remove existing error
    removeFieldError(field);

    // Create error element
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.color = 'var(--color-error)';
    errorElement.style.fontSize = 'var(--font-size-sm)';
    errorElement.style.marginTop = 'var(--spacing-1)';

    // Insert after field
    field.parentNode.appendChild(errorElement);
}

/**
 * Remove Field Error Message
 */
function removeFieldError(field) {
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
}

/**
 * Setup Form Submission
 */
function setupFormSubmission(form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validate all fields
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (!isValid) {
            showFormStatus('error', 'Please fix the errors above and try again.');
            return;
        }

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        try {
            // Simulate form submission (replace with actual endpoint)
            await simulateFormSubmission(data);

            // Show success message
            showFormStatus('success', 'Thank you for your message! We will get back to you soon.');

            // Reset form
            form.reset();

            // Optional: Scroll to success message
            const statusElement = document.getElementById('formStatus');
            if (statusElement) {
                statusElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }

        } catch (error) {
            // Show error message
            showFormStatus('error', 'Sorry, there was an error sending your message. Please try again or contact us directly.');
            console.error('Form submission error:', error);
        } finally {
            // Restore button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
}

/**
 * Show Form Status Message
 */
function showFormStatus(type, message) {
    const statusElement = document.getElementById('formStatus');

    if (statusElement) {
        statusElement.className = `form-status ${type}`;
        statusElement.textContent = message;
        statusElement.style.display = 'block';

        // Auto-hide after 5 seconds (for success only)
        if (type === 'success') {
            setTimeout(() => {
                statusElement.style.display = 'none';
            }, 5000);
        }
    }
}

/**
 * Simulate Form Submission
 * Replace this with actual API call to backend
 */
async function simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
        // Simulate network delay
        setTimeout(() => {
            // Log form data (for development)
            console.log('Form submitted with data:', data);

            // Simulate success
            resolve({ success: true });

            // To test error handling, uncomment:
            // reject(new Error('Submission failed'));
        }, 1500);
    });
}

/**
 * Optional: Setup real form submission with backend
 * Uncomment and configure when backend is ready
 */
export async function submitFormToBackend(data) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return await response.json();
}

console.log('✅ Form module loaded');
