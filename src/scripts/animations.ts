import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// --- Lenis smooth scroll ---
const lenis = new Lenis({ lerp: 0.1 });

lenis.on('scroll', () => ScrollTrigger.update());

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// Smooth anchor scrolling
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -80 });
    }
  });
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  // Show all hero elements immediately
  document.querySelectorAll<HTMLElement>('.hero-word, .hero-sub, .hero-ctas, .hero-image, .hero-trust, .scroll-indicator').forEach((el) => {
    el.style.opacity = '1';
  });
} else {
  // --- Hero entry animations ---
  const heroWords = document.querySelectorAll('.hero-word');
  if (heroWords.length) {
    // Set initial states (HTML already has opacity:0 on these elements)
    gsap.set('.hero-word',  { yPercent: 115 });
    gsap.set('.hero-sub',   { y: 14 });
    gsap.set('.hero-ctas',  { y: 14 });
    gsap.set('.hero-image', { x: 32 });
    gsap.set('.hero-trust', { y: 10 });

    gsap.to('.hero-word', { yPercent: 0, duration: 1, ease: 'power3.out', stagger: 0.1 });
    gsap.to('.hero-sub',   { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.55 });
    gsap.to('.hero-ctas',  { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.75 });
    gsap.to('.hero-image', { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', delay: 0.2 });
    gsap.to('.hero-trust',       { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 1.05 });
    gsap.to('.scroll-indicator', { opacity: 1, duration: 0.8, ease: 'power2.out', delay: 1.4 });
  }

  // --- Droplet animation (loops indefinitely) ---
  document.querySelectorAll<HTMLElement>('.hero-droplet').forEach((droplet, i) => {
    const delay = i * 0.55;
    const appear = 1.2 + (i % 4) * 0.3;
    const hold = 0.8 + (i % 3) * 0.4;
    const fade = 1.8 + (i % 3) * 0.4;

    const tl = gsap.timeline({ repeat: -1, delay });
    tl.set(droplet, { opacity: 0, scale: 0.4, y: 0 })
      .to(droplet, { opacity: 0.18, scale: 1, duration: appear, ease: 'power2.out' })
      .to(droplet, { opacity: 0, scale: 0.7, y: -24, duration: fade, ease: 'power1.in', delay: hold });
  });

  // --- Scroll indicator bounce ---
  gsap.to('.scroll-indicator', {
    y: 8,
    duration: 1.1,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });

  // --- Section reveals (individual elements) ---
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 36,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });

  // --- Staggered grid reveals ---
  document.querySelectorAll('[data-reveal-group]').forEach((group) => {
    const items = group.querySelectorAll('[data-reveal-item]');
    gsap.from(items, {
      opacity: 0,
      y: 36,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.08,
      scrollTrigger: {
        trigger: group,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });

  // Product tab bar uses CSS sticky — no GSAP pin needed
}
