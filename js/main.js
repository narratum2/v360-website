/*
 * Core scripts for V.360 website.
 *
 * This file currently implements a simple counter animation for the
 * hero statistics. When the stats come into view for the first time
 * they animate from 0 up to their data‑count value. If you need to
 * add more global behaviours you can organise them here or in
 * separate modules.
 */

document.addEventListener('DOMContentLoaded', function() {
  const statElements = document.querySelectorAll('.stat-number');
  if (statElements.length === 0) return;
  const animateStat = (el) => {
    const target = parseFloat(el.getAttribute('data-count'));
    let current = 0;
    const decimals = (target % 1 !== 0) ? 1 : 0;
    const duration = 2000; // animation duration in ms
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = target * progress;
      el.textContent = value.toFixed(decimals);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };
  // Use IntersectionObserver to trigger animation when stats come into view
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateStat(el);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statElements.forEach(el => observer.observe(el));
});