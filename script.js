// ========================================
// MODERN PORTFOLIO - JAVASCRIPT
// Created for Sarvgya Nath Pant
// ========================================

(function() {
  'use strict';

  // ========================================
  // LOADING SCREEN
  // ========================================
  window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
    }, 1000);
  });

  // ========================================
  // NAVBAR SCROLL EFFECT
  // ========================================
  const navbar = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();
  });

  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (navLink) {
          navLink.classList.add('active');
        }
      }
    });
  }

  // ========================================
  // SMOOTH SCROLLING
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Don't prevent default for empty hash or non-section links
      if (href === '#' || href === '') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        
        // Close mobile menu if open
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }

        // Smooth scroll to target
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ========================================
  // TYPING ANIMATION
  // ========================================
  const typingText = document.querySelector('.typing-text');
  const roles = [
    'Network Administrator',
    'System Administrator',
    'Cloud Security Specialist',
    'IT Infrastructure Expert',
    'Cybersecurity Professional'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      typingText.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingText.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at end
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500;
    }

    setTimeout(typeRole, typingSpeed);
  }

  // Start typing animation after page load
  setTimeout(typeRole, 1000);

  // ========================================
  // NUMBER COUNTER ANIMATION
  // ========================================
  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 16);
  }

  // Intersection Observer for counters
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        animateCounter(entry.target);
        entry.target.classList.add('counted');
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number').forEach(counter => {
    counterObserver.observe(counter);
  });

  // ========================================
  // PARTICLES.JS CONFIGURATION
  // ========================================
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#00d9ff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#00d9ff',
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.5
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }

  // ========================================
  // AOS (ANIMATE ON SCROLL) INITIALIZATION
  // ========================================
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }

  // ========================================
  // SCROLL TO TOP BUTTON
  // ========================================
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ========================================
  // FORM HANDLING
  // ========================================
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // FormSpree will handle the actual submission
      // This is just for visual feedback
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Sending...';
      submitBtn.disabled = true;

      // Re-enable after submission (FormSpree redirects, but just in case)
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 3000);
    });
  }

  // ========================================
  // PRELOAD CRITICAL IMAGES
  // ========================================
  function preloadImages() {
    const images = [
      'images/profile-optimized.jpg'
    ];

    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  preloadImages();

  // ========================================
  // ENHANCED HOVER EFFECTS FOR PROJECT CARDS
  // ========================================
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // ========================================
  // LAZY LOADING FOR IMAGES
  // ========================================
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // ========================================
  // KEYBOARD NAVIGATION ENHANCEMENT
  // ========================================
  document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    }
  });

  // ========================================
  // PERFORMANCE OPTIMIZATION
  // ========================================
  
  // Debounce function for scroll events
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

  // Apply debounce to scroll-heavy operations
  const debouncedScrollHandler = debounce(function() {
    updateActiveNavLink();
  }, 100);

  window.addEventListener('scroll', debouncedScrollHandler);

  // ========================================
  // CONSOLE MESSAGE
  // ========================================
  console.log('%c👋 Hello! Welcome to my portfolio', 'color: #00d9ff; font-size: 20px; font-weight: bold;');
  console.log('%cLooking to hire? Let\'s connect!', 'color: #00ffcc; font-size: 14px;');
  console.log('%c📧 savvy@sarvgya.com', 'color: #b8c5d6; font-size: 14px;');

  // ========================================
  // PREVENT CONSOLE ERRORS
  // ========================================
  
  // Check if required libraries are loaded
  if (typeof bootstrap === 'undefined') {
    console.warn('Bootstrap is not loaded. Some features may not work properly.');
  }

  if (typeof AOS === 'undefined') {
    console.warn('AOS library is not loaded. Animations may not work properly.');
  }

  if (typeof particlesJS === 'undefined') {
    console.warn('Particles.js is not loaded. Background animation will not display.');
  }

})();
