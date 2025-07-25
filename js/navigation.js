/*
 * Navigation functionality for V.360 website.
 *
 * Handles sticky header behaviour, responsive menu toggling, smooth
 * scrolling and active section highlighting. All DOM manipulation is
 * contained within the DOMContentLoaded event listener to ensure
 * elements exist before we query them.
 */

document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navWrapper = document.getElementById('nav-wrapper');
  let lastScroll = 0;

  // Scroll behaviour: shrink header when scrolled and hide/reveal on scroll
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    // Add scrolled class once past threshold
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Hide on downward scroll, show on upward
    if (currentScroll > lastScroll && currentScroll > 300) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
  });

  // Mobile menu toggle
  mobileToggle.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    navWrapper.classList.toggle('mobile-active');
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      // Only handle internal anchors with IDs
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const headerHeight = header.offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      // Close mobile menu if open
      navWrapper.classList.remove('mobile-active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Active section highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
});