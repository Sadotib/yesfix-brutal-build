// Navigation functionality for YesFix website

class Navigation {
    constructor() {
        this.mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.header = document.getElementById('header');
        
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupScrollSpy();
        this.setupHeaderScroll();
    }

    setupMobileMenu() {
        if (this.mobileMenuToggle && this.mobileMenu) {
            this.mobileMenuToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });

            // Close mobile menu when clicking on nav links
            this.navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth < 768) {
                        this.closeMobileMenu();
                    }
                });
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!this.mobileMenu.contains(e.target) && 
                    !this.mobileMenuToggle.contains(e.target) && 
                    !this.mobileMenu.classList.contains('hidden')) {
                    this.closeMobileMenu();
                }
            });
        }
    }

    toggleMobileMenu() {
        const menuIcon = this.mobileMenuToggle.querySelector('[data-lucide="menu"]');
        const closeIcon = this.mobileMenuToggle.querySelector('[data-lucide="x"]');
        
        if (this.mobileMenu.classList.contains('hidden')) {
            this.openMobileMenu();
            // Change icon to X
            if (menuIcon) {
                menuIcon.style.display = 'none';
            }
            if (!closeIcon) {
                const newCloseIcon = document.createElement('i');
                newCloseIcon.setAttribute('data-lucide', 'x');
                newCloseIcon.className = 'w-6 h-6';
                this.mobileMenuToggle.appendChild(newCloseIcon);
                lucide.createIcons();
            } else {
                closeIcon.style.display = 'block';
            }
        } else {
            this.closeMobileMenu();
            // Change icon back to menu
            if (closeIcon) {
                closeIcon.style.display = 'none';
            }
            if (menuIcon) {
                menuIcon.style.display = 'block';
            }
        }
    }

    openMobileMenu() {
        this.mobileMenu.classList.remove('hidden');
        this.mobileMenu.classList.add('show');
    }

    closeMobileMenu() {
        this.mobileMenu.classList.add('hidden');
        this.mobileMenu.classList.remove('show');
        
        // Reset icons
        const menuIcon = this.mobileMenuToggle.querySelector('[data-lucide="menu"]');
        const closeIcon = this.mobileMenuToggle.querySelector('[data-lucide="x"]');
        
        if (menuIcon) menuIcon.style.display = 'block';
        if (closeIcon) closeIcon.style.display = 'none';
    }

    setupSmoothScrolling() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = this.header.offsetHeight;
                    const additionalOffset = 20;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - additionalOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupScrollSpy() {
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', () => {
            let current = '';
            const scrollPosition = window.pageYOffset + this.header.offsetHeight + 50;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            // Update active nav link
            this.navLinks.forEach(link => {
                link.classList.remove('text-brutalist-yellow');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('text-brutalist-yellow');
                }
            });
        });
    }

    setupHeaderScroll() {
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add shadow when scrolled
            if (scrollTop > 10) {
                this.header.classList.add('shadow-lg');
            } else {
                this.header.classList.remove('shadow-lg');
            }
            
            lastScrollTop = scrollTop;
        });
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
});

// Handle window resize
window.addEventListener('resize', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (window.innerWidth >= 768 && mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('show');
    }
});