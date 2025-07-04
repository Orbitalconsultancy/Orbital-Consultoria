// script.js

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Close nav menu when a link is clicked (for mobile)
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburgerMenu.classList.remove('active');
            navList.classList.remove('active');
        });
    });

    // Hero section animations
    gsap.from(".hero-content h1", { opacity: 0, y: 50, duration: 1, delay: 0.5, ease: "power3.out" });
    gsap.from(".hero-content p", { opacity: 0, y: 50, duration: 1, delay: 0.8, ease: "power3.out" });
    gsap.from(".cta-button", { opacity: 0, scale: 0, duration: 1, delay: 1.2, ease: "back.out(1.7)" });

    // Animate service cards on scroll
    gsap.utils.toArray('.service-card').forEach(card => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Animate portfolio items on scroll
    gsap.utils.toArray('.portfolio-item').forEach(item => {
        gsap.from(item, {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // FAQ section toggle with GSAP animation
    const faqItems = document.querySelectorAll('.faq-item h3');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;
            if (answer.classList.contains('active')) {
                gsap.to(answer, { height: 0, opacity: 0, duration: 0.3, onComplete: () => answer.classList.remove('active') });
            } else {
                answer.classList.add('active');
                gsap.fromTo(answer, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.3 });
            }
        });
    });

    // Counter animation for "NUESTROS LOGROS"
    const counters = document.querySelectorAll('.counter-value');
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        const duration = 2; // seconds

        gsap.to(counter, {
            textContent: target, // Animate TO the target value
            duration: duration,
            ease: "power1.out",
            snap: { textContent: 1 },
            scrollTrigger: {
                trigger: counter,
                start: "top 80%",
                toggleActions: "play none none reverse",
                onEnter: () => console.log('Counter animation triggered for:', counter.dataset.target)
            }
        });
    });

    // Input focus effects for contact form
    document.querySelectorAll('.contact-form input, .contact-form textarea').forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, { borderColor: "var(--color-accent-blue)", boxShadow: "0 0 10px var(--color-accent-blue)", duration: 0.3 });
        });
        input.addEventListener('blur', () => {
            gsap.to(input, { borderColor: "var(--color-border)", boxShadow: "none", duration: 0.3 });
        });
    });

});