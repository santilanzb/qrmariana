// ===========================
// Navigation Module
// ===========================

export function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    mobileMenuBtn?.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Close mobile menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.textContent = '☰';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.textContent = '☰';
        }
    });

    // Navbar visibility and background on scroll
    let lastScroll = 0;
    
    const handleScroll = () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Always show at the top
        if (currentScroll <= 100) {
            navbar.style.transform = 'translateY(0)';
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        } 
        // Show when scrolling up
        else if (currentScroll < lastScroll) {
            navbar.style.transform = 'translateY(0)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } 
        // Hide when scrolling down
        else if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        }
        
        lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Show navbar on hover when hidden
    navbar.addEventListener('mouseenter', () => {
        navbar.style.transform = 'translateY(0)';
    });
    
    // Create a hover zone at the top of the page to trigger navbar
    let hoverZone = document.createElement('div');
    hoverZone.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; height: 80px; z-index: 999; pointer-events: all;';
    document.body.appendChild(hoverZone);
    
    hoverZone.addEventListener('mouseenter', () => {
        navbar.style.transform = 'translateY(0)';
        navbar.style.opacity = '1';
    });
    
    // Also detect when mouse is near the top of viewport
    document.addEventListener('mousemove', (e) => {
        if (e.clientY <= 80 && window.pageYOffset > 100) {
            navbar.style.transform = 'translateY(0)';
            navbar.style.opacity = '1';
        }
    });

    // Active navigation link highlighting
    highlightActiveSection();
}

function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.style.color = '#004e70';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = '#cc1c4a';
            }
        });
    });
}
