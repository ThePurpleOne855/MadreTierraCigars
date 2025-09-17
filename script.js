// Age Verification System
document.addEventListener('DOMContentLoaded', function() {
    const ageVerification = document.getElementById('age-verification');
    const confirmAgeBtn = document.getElementById('confirm-age');
    const denyAgeBtn = document.getElementById('deny-age');
    
    // Always show age verification modal on page load
    showAgeVerification();
    
    // Handle age confirmation
    confirmAgeBtn.addEventListener('click', function() {
        hideAgeVerification();
    });
    
    // Handle age denial
    denyAgeBtn.addEventListener('click', function() {
        // Redirect to a safe page or show message
        document.body.innerHTML = `
            <div style="
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
                background: linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #D2691E 75%, #8B4513 100%);
                color: white;
                text-align: center;
                font-family: 'Inter', sans-serif;
                padding: 2rem;
            ">
                <div>
                    <h1 style="font-size: 3rem; margin-bottom: 2rem; color: #FAD22D;">Access Denied</h1>
                    <p style="font-size: 1.5rem; margin-bottom: 1rem;">You must be 21 or older to view this website.</p>
                    <p style="font-size: 1.2rem; opacity: 0.8;">Thank you for your understanding.</p>
                </div>
            </div>
        `;
    });
    
    function showAgeVerification() {
        document.body.classList.add('age-verification-active');
        ageVerification.style.display = 'flex';
    }
    
    function hideAgeVerification() {
        document.body.classList.remove('age-verification-active');
        ageVerification.style.display = 'none';
    }
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Animate hamburger bars
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (hamburger.classList.contains('active')) {
            if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) bar.style.opacity = '0';
            if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        }
    });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    
    // Reset hamburger bars
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.style.transform = 'none';
        bar.style.opacity = '1';
    });
}));

// Enhanced smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced navbar background on scroll with smooth transitions
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY;
    
    if (scrolled > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.backdropFilter = 'blur(25px)';
        navbar.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.3)';
        navbar.style.borderBottom = '2px solid rgba(250, 210, 45, 0.4)';
        navbar.style.padding = '1rem 0';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.borderBottom = '2px solid rgba(250, 210, 45, 0.3)';
        navbar.style.padding = '1.2rem 0';
    }
});

// Enhanced scroll animations with staggered timing
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Stagger the animations
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, observerOptions);

// Observe elements for animation with enhanced selectors
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature, .product-card, .contact-item, .section-header, .about-content, .products-grid');
    animateElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
});

// Initialize EmailJS
(function() {
    emailjs.init("uTX_j0BUdVXOeggaW");
})();

// Enhanced contact form handling with better UX
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Enhanced validation with visual feedback
        const fields = { name, email, subject, message };
        let isValid = true;
        
        Object.keys(fields).forEach(field => {
            const input = this.querySelector(`[name="${field}"]`);
            if (!fields[field]) {
                input.style.borderColor = '#e74c3c';
                input.style.boxShadow = '0 0 0 3px rgba(231, 76, 60, 0.1)';
                isValid = false;
            } else {
                input.style.borderColor = 'rgba(27, 47, 27, 0.1)';
                input.style.boxShadow = 'none';
            }
        });
        
        if (!isValid) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            const emailInput = this.querySelector('[name="email"]');
            emailInput.style.borderColor = '#e74c3c';
            emailInput.style.boxShadow = '0 0 0 3px rgba(231, 76, 60, 0.1)';
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Update button state with loading animation
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        submitBtn.style.background = 'linear-gradient(135deg, #217022, #1B2F1B)';
        
        // EmailJS template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: 'jasas1357@gmail.com'
        };
        
        // Send email using EmailJS
        emailjs.send('service_vj4w36d', 'template_contact_form', templateParams)
            .then(function(response) {
                showNotification('Thank you for your message! We will get back to you soon.', 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = 'linear-gradient(135deg, #FAD22D, #f0c040)';
            }, function(error) {
                showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = 'linear-gradient(135deg, #FAD22D, #f0c040)';
            });
    });
}

// Notification system for better UX
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 350px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Enhanced product card hover effects with smooth transitions
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
        this.style.boxShadow = '0 20px 50px rgba(27, 47, 27, 0.15)';
        
        // Add subtle glow effect
        this.style.borderColor = 'rgba(250, 210, 45, 0.4)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
        this.style.borderColor = 'rgba(27, 47, 27, 0.1)';
    });
});

// Enhanced feature card animations
document.querySelectorAll('.feature').forEach(feature => {
    feature.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
        this.style.boxShadow = '0 15px 40px rgba(27, 47, 27, 0.15)';
        this.style.borderColor = 'rgba(250, 210, 45, 0.3)';
    });
    
    feature.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'none';
        this.style.borderColor = 'rgba(27, 47, 27, 0.1)';
    });
});

// Enhanced parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.3;
        hero.style.transform = `translateY(${rate}px)`;
        
        // Add subtle opacity change
        const opacity = Math.max(0.8, 1 - (scrolled * 0.0005));
        hero.style.opacity = opacity;
    }
});

// Enhanced active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Enhanced loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add entrance animation for main content
    const mainContent = document.querySelectorAll('.hero-content, .about-content, .products-grid, .contact-content');
    mainContent.forEach((content, index) => {
        content.style.opacity = '0';
        content.style.transform = 'translateY(30px)';
        content.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        
        setTimeout(() => {
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        }, 200 + (index * 200));
    });
});

// Add loading class to body
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loading');
    
    // Preload critical images
    const criticalImages = [
        'webImages/madre-tierra-cigarslogo.avif',
        'webImages/veteran-owned-business.png',
        'webImages/dominican-flag logo.webp'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Enhanced utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler with enhanced performance
const optimizedScrollHandler = debounce(() => {
    // Enhanced navbar background logic
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY;
    
    if (scrolled > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.backdropFilter = 'blur(25px)';
        navbar.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.3)';
        navbar.style.borderBottom = '2px solid rgba(250, 210, 45, 0.4)';
        navbar.style.padding = '1rem 0';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.borderBottom = '2px solid rgba(250, 210, 45, 0.3)';
        navbar.style.padding = '1.2rem 0';
    }
    
    // Enhanced parallax effect
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.3;
        hero.style.transform = `translateY(${rate}px)`;
        
        // Add subtle opacity change
        const opacity = Math.max(0.8, 1 - (scrolled * 0.0005));
        hero.style.opacity = opacity;
    }
}, 16); // 60fps optimization

window.addEventListener('scroll', optimizedScrollHandler);

// Enhanced CSS for active nav link and animations
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #FAD22D !important;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6) !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
    
    body.loading {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    body.loaded {
        opacity: 1;
    }
    
    /* Enhanced hover effects with smooth transitions */
    .product-card {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .product-card:hover .product-img {
        transform: scale(1.08);
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .feature {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Smooth transitions for all interactive elements */
    .feature, .product-card, .contact-item, .section-header, .about-content, .products-grid {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Enhanced button hover effects */
    .btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }
    
    /* Smooth image transitions */
    .logo-img, .vet-badge-img, .hero-main-image, .about-main-image, .footer-logo-img {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Enhanced form focus states */
    .form-group input:focus,
    .form-group textarea:focus {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(33, 112, 34, 0.15);
    }
    
    /* Loading spinner animation */
    .fa-spinner {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    /* Enhanced fade-in animations */
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Smooth section transitions */
    section {
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
`;
document.head.appendChild(style);

// Enhanced section reveal animation
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const windowHeight = window.innerHeight;
        
        if (window.pageYOffset >= sectionTop - windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
            
            // Add staggered animation for section content
            const animatedElements = section.querySelectorAll('.fade-in');
            animatedElements.forEach((el, elIndex) => {
                setTimeout(() => {
                    el.classList.add('visible');
                }, elIndex * 150);
            });
        }
    });
};

// Initialize enhanced section reveal
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        section.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Trigger initial reveal
    setTimeout(revealSections, 200);
    
    // Add scroll listener for reveal
    window.addEventListener('scroll', debounce(revealSections, 16));
});

// Enhanced counter animation for better performance
const animateCounters = () => {
    const counters = document.querySelectorAll('.event-date .day');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const duration = 2000; // 2 seconds
        const startTime = performance.now();
        
        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(target * easeOutQuart);
            
            counter.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        requestAnimationFrame(updateCounter);
    });
};

// Enhanced intersection observer for events section
const eventsSection = document.querySelector('#events');
if (eventsSection) {
    const eventsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                eventsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    eventsObserver.observe(eventsSection);
}

// Add smooth scroll behavior for better UX
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll-to-top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #1B2F1B, #217022);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll-to-top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add hover effect for scroll-to-top button
    scrollToTopBtn.addEventListener('mouseenter', () => {
        scrollToTopBtn.style.transform = 'translateY(-3px) scale(1.1)';
        scrollToTopBtn.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', () => {
        scrollToTopBtn.style.transform = 'translateY(0) scale(1)';
        scrollToTopBtn.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    });
}); 