// Inicialización del DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sistema de partículas
    const particlesContainer = document.getElementById('particles-container');
    const particleCount = 50;
    
    if (particlesContainer) {
        // Reducir en mobile
        const isMobile = window.innerWidth <= 768;
        const count = isMobile ? 20 : particleCount;

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `float-particle ${15 + Math.random() * 10}s infinite ease-in-out`;
            particle.style.animationDelay = Math.random() * 20 + 's';
            particlesContainer.appendChild(particle);
        }
    }

    // 2. Navbar Sticky & Mobile Menu
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // 3. Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const animatedElements = document.querySelectorAll('.animated-element:not(.fade-in-up):not(.scale-in):not(.fade-in-rotate)');
    
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
                
                // Si es el contador animado, inicializarlo
                const counter = entry.target.querySelector('.stat-number[data-target]');
                if (counter) animateCounter(counter, parseInt(counter.getAttribute('data-target')));
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => scrollObserver.observe(el));

    // 4. Flip cards click/tap para mobile
    const flipCards = document.querySelectorAll('.service-card-flip');
    flipCards.forEach(card => {
        card.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                // Remove flip from other cards
                flipCards.forEach(c => {
                    if (c !== card) c.classList.remove('is-flipped');
                });
                card.classList.toggle('is-flipped');
            }
        });
    });

    // 5. Animación de contadores
    function animateCounter(element, target, duration = 2000) {
        const increment = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = Math.round(target);
                clearInterval(timer);
            } else {
                element.textContent = Math.round(current);
            }
        }, 16);
    }
    
    // Observador para contadores en hero (si no tienen .animated-element por estar ya con delay)
    const heroCounters = document.querySelectorAll('.hero .stat-number[data-target]');
    heroCounters.forEach(counter => {
        setTimeout(() => {
            animateCounter(counter, parseInt(counter.getAttribute('data-target')));
        }, 1500); // Wait for intro animations
    });

    // 6. Smooth Scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Cerrar menú mobile si está abierto
                navLinks.classList.remove('active');
                if(mobileMenuToggle) {
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }

                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
