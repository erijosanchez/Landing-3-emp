import { gsap } from 'gsap';
import { ScrollTrigger } from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Enhanced entry animations
    gsap.from('.hero-content', {
        opacity: 0, 
        y: 50, 
        duration: 1, 
        ease: 'power3.out'
    });

    gsap.from('.feature', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.features',
            start: 'top 80%'
        }
    });

    // Enhanced button hover effects
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, { 
                scale: 1.05, 
                duration: 0.2,
                ease: 'power1.out'
            });
        });
        button.addEventListener('mouseleave', () => {
            gsap.to(button, { 
                scale: 1, 
                duration: 0.2,
                ease: 'power1.in'
            });
        });
    });
});