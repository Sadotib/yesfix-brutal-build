// Animation utilities for YesFix website

class AnimationController {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupFormAnimations();
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Add staggered animation for cards
                    if (entry.target.classList.contains('stagger-children')) {
                        this.staggerChildAnimations(entry.target);
                    }
                }
            });
        }, this.observerOptions);

        // Observe elements that should animate on scroll
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        animateElements.forEach(el => observer.observe(el));

        // Add animate-on-scroll class to relevant elements
        this.addAnimationClasses();
    }

    addAnimationClasses() {
        // Add animation classes to service cards
        const serviceCards = document.querySelectorAll('#services .brutalist-card');
        serviceCards.forEach((card, index) => {
            card.classList.add('animate-on-scroll');
            card.style.animationDelay = `${index * 0.1}s`;
        });

        // Add animation classes to about section cards
        const aboutCards = document.querySelectorAll('#about .brutalist-card');
        aboutCards.forEach((card, index) => {
            card.classList.add('animate-on-scroll');
            card.style.animationDelay = `${index * 0.1}s`;
        });

        // Add animation classes to testimonial cards
        const testimonialCards = document.querySelectorAll('#testimonials .brutalist-card');
        testimonialCards.forEach((card, index) => {
            card.classList.add('animate-on-scroll');
            card.style.animationDelay = `${index * 0.2}s`;
        });

        // Add animation classes to feature boxes
        const featureBoxes = document.querySelectorAll('#services .text-center');
        featureBoxes.forEach((box, index) => {
            box.classList.add('animate-on-scroll');
            box.style.animationDelay = `${index * 0.1}s`;
        });
    }

    staggerChildAnimations(parent) {
        const children = parent.querySelectorAll('.brutalist-card, .text-center');
        children.forEach((child, index) => {
            setTimeout(() => {
                child.classList.add('animate-bounce-in');
            }, index * 100);
        });
    }

    setupScrollAnimations() {
        // Parallax effect for hero background
        const heroSection = document.querySelector('section.min-h-screen');
        const heroBackground = heroSection?.querySelector('.absolute.inset-0');
        
        if (heroBackground) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                heroBackground.style.transform = `translateY(${rate}px)`;
            });
        }

        // Counter animation for stats
        this.setupCounterAnimations();
    }

    setupCounterAnimations() {
        const statNumbers = document.querySelectorAll('#testimonials .text-4xl');
        
        const animateCounter = (element, target) => {
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current);
            }, 20);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    // You can add actual numbers here when they're available
                    // animateCounter(entry.target, 500); // Example
                }
            });
        });

        statNumbers.forEach(stat => observer.observe(stat));
    }

    setupHoverEffects() {
        // Enhanced hover effects for buttons
        const buttons = document.querySelectorAll('.brutalist-button');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateX(4px) translateY(4px) scale(1.02)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateX(0) translateY(0) scale(1)';
            });
        });

        // Card tilt effect
        const cards = document.querySelectorAll('.brutalist-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(8px) translateY(8px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateX(0) translateY(0)';
            });
        });
    }

    setupFormAnimations() {
        const formInputs = document.querySelectorAll('input, textarea');
        
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.style.transform = 'scale(1.02)';
                input.style.boxShadow = '0 0 0 4px #FFFF00, 8px 8px 0px #000000';
            });
            
            input.addEventListener('blur', () => {
                input.style.transform = 'scale(1)';
                input.style.boxShadow = 'none';
            });
        });

        // Form submission animation
        const contactForm = document.querySelector('#contact form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                
                submitButton.textContent = 'SENDING...';
                submitButton.disabled = true;
                submitButton.style.opacity = '0.7';
                
                // Simulate form submission
                setTimeout(() => {
                    submitButton.textContent = 'MESSAGE SENT!';
                    submitButton.style.backgroundColor = '#00FF00';
                    
                    setTimeout(() => {
                        submitButton.textContent = originalText;
                        submitButton.disabled = false;
                        submitButton.style.opacity = '1';
                        submitButton.style.backgroundColor = '#FFFF00';
                        contactForm.reset();
                    }, 2000);
                }, 1500);
            });
        }
    }

    // Utility method to add CSS animations
    addCSSAnimations() {
        const style = document.createElement('style');
        style.textContent = `
            .animate-in {
                animation: fadeInUp 0.6s ease-out forwards;
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .animate-on-scroll {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s ease-out;
            }
            
            .animate-on-scroll.animate-in {
                opacity: 1;
                transform: translateY(0);
            }
            
            @media (prefers-reduced-motion: reduce) {
                .animate-on-scroll,
                .animate-in,
                .animate-slide-in,
                .animate-bounce-in {
                    animation: none;
                    transition: none;
                    opacity: 1;
                    transform: none;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const animationController = new AnimationController();
    animationController.addCSSAnimations();
});

// Smooth reveal animation for page load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
});

// Add initial opacity for smooth page load
document.body.style.opacity = '0';