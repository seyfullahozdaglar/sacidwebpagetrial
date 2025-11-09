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

// Form submission with EmailJS
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const name = this.querySelector('input[name="from_name"]').value;
        const email = this.querySelector('input[name="from_email"]').value;
        const service = this.querySelector('select[name="service"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        const phone = this.querySelector('input[name="phone"]').value;
        const submitButton = this.querySelector('button[type="submit"]');
        const formMessage = document.getElementById('formMessage');
        
        // Basic validation
        if (!name || !email || !service || !message) {
            const errorMsg = currentLanguage === 'tr' 
                ? 'Lütfen gerekli alanları doldurunuz.' 
                : 'Please fill in all required fields.';
            showFormMessage(formMessage, errorMsg, 'error');
            return;
        }
        
        // Show loading state
        submitButton.disabled = true;
        const originalText = submitButton.textContent;
        submitButton.textContent = currentLanguage === 'tr' ? 'Gönderiliyor...' : 'Sending...';
        
        try {
            // Prepare template parameters
            const templateParams = {
                from_name: name,
                from_email: email,
                phone: phone || 'Belirtilmemiş / Not provided',
                service: getServiceName(service, currentLanguage),
                message: message,
                to_email: 'sacidozdaglar@gmail.com' // Change this to your actual email
            };
            
            console.log('Sending email with params:', templateParams);
            
            // Send email using EmailJS - REPLACE THESE WITH YOUR ACTUAL IDs
            const response = await emailjs.send(
                'service_nt3oikp',    // Replace with your EmailJS service ID
                'template_gba5ddn',   // Replace with your EmailJS template ID
                templateParams
            );
            
            console.log('EmailJS response:', response);
            
            if (response.status === 200) {
                // Success message
                const successMsg = currentLanguage === 'tr'
                    ? 'Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.'
                    : 'Your message has been sent successfully! We will contact you as soon as possible.';
                showFormMessage(formMessage, successMsg, 'success');
                this.reset();
            } else {
                throw new Error('Email sending failed with status: ' + response.status);
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            // Error message
            const errorMsg = currentLanguage === 'tr'
                ? 'Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
                : 'An error occurred while sending your message. Please try again later.';
            showFormMessage(formMessage, errorMsg, 'error');
        } finally {
            // Reset button state
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });
}

// Helper function to get service name in current language
function getServiceName(serviceValue, language) {
    const serviceNames = {
        'kira-hukuku': { tr: 'Kira Hukuku', en: 'Rental Law' },
        'sirketler-hukuku': { tr: 'Şirketler Hukuku', en: 'Corporate Law' },
        'is-hukuku': { tr: 'İş Hukuku', en: 'Labor Law' },
        'ceza-hukuku': { tr: 'Ceza Hukuku', en: 'Criminal Law' },
        'tuketici-hukuku': { tr: 'Tüketici Hukuku', en: 'Consumer Law' },
        'sigorta-hukuku': { tr: 'Sigorta Hukuku', en: 'Insurance Law' },
        'aile-hukuku': { tr: 'Aile Hukuku', en: 'Family Law' },
        'icra-hukuku': { tr: 'İcra Hukuku', en: 'Enforcement Law' },
        'ticaret-hukuku': { tr: 'Ticaret Hukuku', en: 'Commercial Law' },
        'diger': { tr: 'Diğer', en: 'Other' }
    };
    
    return serviceNames[serviceValue] ? serviceNames[serviceValue][language] : serviceValue;
}

// Show form message
function showFormMessage(element, message, type) {
    element.textContent = message;
    element.className = `form-message ${type}`;
    element.style.display = 'block';
    
    // Hide message after 5 seconds
    setTimeout(() => {
        element.style.display = 'none';
    }, 5000);
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
