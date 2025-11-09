// Language management
let currentLanguage = 'tr';

// Language switcher
const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedLang = button.getAttribute('data-lang');
        if (selectedLang !== currentLanguage) {
            switchLanguage(selectedLang);
        }
    });
});

// Switch language function
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update language buttons
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update page title
    const title = document.querySelector('title');
    title.textContent = title.getAttribute(`data-${lang}`);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data attributes
    updateTextContent(lang);
    updatePlaceholders(lang);
    updateSelectOptions(lang);
}

// Update text content
function updateTextContent(lang) {
    const elements = document.querySelectorAll('[data-tr]');
    elements.forEach(element => {
        const translation = element.getAttribute(`data-${lang}`);
        if (translation) {
            element.textContent = translation;
        }
    });
}

// Update form placeholders
function updatePlaceholders(lang) {
    const inputs = document.querySelectorAll('input[data-tr-placeholder], textarea[data-tr-placeholder]');
    inputs.forEach(input => {
        const placeholder = input.getAttribute(`data-${lang}-placeholder`);
        if (placeholder) {
            input.placeholder = placeholder;
        }
    });
}

// Update select options
function updateSelectOptions(lang) {
    const options = document.querySelectorAll('option[data-tr]');
    options.forEach(option => {
        const translation = option.getAttribute(`data-${lang}`);
        if (translation) {
            option.textContent = translation;
        }
    });
}

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Smooth scrolling for navigation links
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

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const service = this.querySelector('select').value;
        
        // Basic validation
        if (!name || !email || !service) {
            const errorMsg = currentLanguage === 'tr' 
                ? 'Lütfen gerekli alanları doldurunuz.' 
                : 'Please fill in all required fields.';
            alert(errorMsg);
            return;
        }
        
        // Success message
        const successMsg = currentLanguage === 'tr'
            ? 'Mesajınız gönderildi! En kısa sürede sizinle iletişime geçeceğiz.'
            : 'Your message has been sent! We will contact you as soon as possible.';
        
        alert(successMsg);
        this.reset();
    });
}

// Sticky navigation
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(248, 249, 250, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#F8F9FA';
            navbar.style.backdropFilter = 'none';
        }
    }
});

// CTA button click
document.querySelector('.cta-button')?.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Initialize page with Turkish language
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('tr');
});