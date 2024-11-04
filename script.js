// Mobile Menu Toggle with Accessibility and Animation
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isActive = navMenu.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isActive);
    menuToggle.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-link')) {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', false);
    }
});

// Accordion for FAQs with Accessibility Support
document.querySelectorAll('.faq-item').forEach(item => {
    const header = item.querySelector('h3');
    const content = item.querySelector('.faq-content');
    
    // Set aria attributes for better accessibility
    header.setAttribute('aria-expanded', false);
    content.setAttribute('aria-hidden', true);
    content.style.maxHeight = 0;

    header.addEventListener('click', () => {
        const isOpen = item.classList.toggle('open');
        header.setAttribute('aria-expanded', isOpen);
        content.setAttribute('aria-hidden', !isOpen);
        
        // Toggle height for smooth animation
        if (isOpen) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = 0;
        }
    });
});

// Contact Form Submission with Input Validation and Error Handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Form validation
    const name = contactForm.querySelector('input[name="name"]');
    const email = contactForm.querySelector('input[name="email"]');
    const message = contactForm.querySelector('textarea[name="message"]');

    if (!name.value || !email.value || !message.value) {
        alert('Please fill out all fields before submitting.');
        return;
    }

    // Simulate form submission (to backend or email API)
    const formData = new FormData(contactForm);
    console.log('Form submitted:', Object.fromEntries(formData));

    alert('Your message has been sent successfully!');
    contactForm.reset(); // Clear form fields after submission
});

// Newsletter Subscription with Email Validation
const newsletterForm = document.querySelector('.newsletter form');
newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = newsletterForm.querySelector('input[name="email"]').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate email subscription (e.g., Mailchimp API integration)
    console.log('Subscribed email:', email);
    alert('Thank you for subscribing to our newsletter!');
    newsletterForm.reset(); // Clear the email field
});

// Contact Modal with Accessibility Enhancements
const modal = document.getElementById('contact-modal');
const openModal = document.getElementById('contactBtn');
const closeModal = document.querySelector('.close');

openModal.addEventListener('click', () => {
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', false);
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', true);
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', true);
    }
});

// Smooth Scroll for Links with Hash Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Lazy Loading Images for Performance Optimization
document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
});

// Detect Mobile Browser to Adjust UI
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    document.body.classList.add('mobile');
}
function toggleBio(member) {
    const bio = member.querySelector('.bio');
    if (bio.classList.contains('hidden')) {
        bio.classList.remove('hidden');
    } else {
        bio.classList.add('hidden');
    }
}
