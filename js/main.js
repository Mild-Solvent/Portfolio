// Performance and device detection
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isLowPerformance = navigator.hardwareConcurrency <= 2;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Mouse Trail Particles - optimized for performance
function initMouseTrail() {
  // Skip mouse trail on mobile or low-performance devices
  if (isMobile || isLowPerformance || reducedMotion) return;
  
  let mouseX = 0;
  let mouseY = 0;
  let trailDelay = 0;
  let isThrottled = false;
  
  document.addEventListener('mousemove', (e) => {
    if (isThrottled) return;
    
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Create trail particles with delay - reduced frequency
    trailDelay++;
    if (trailDelay % 6 === 0) { // Create particle every 6th mouse move instead of 3rd
      createTrailParticle(mouseX, mouseY);
      
      // Throttle to prevent excessive particle creation
      isThrottled = true;
      setTimeout(() => { isThrottled = false; }, 16); // ~60fps
    }
  });
}

function createTrailParticle(x, y) {
  const particle = document.createElement('div');
  particle.style.position = 'fixed';
  particle.style.width = '4px';
  particle.style.height = '4px';
  particle.style.background = 'var(--neon-cyan)';
  particle.style.borderRadius = '50%';
  particle.style.pointerEvents = 'none';
  particle.style.zIndex = '9999';
  particle.style.left = x + 'px';
  particle.style.top = y + 'px';
  particle.style.boxShadow = '0 0 6px var(--neon-cyan)';
  particle.style.transition = 'all 1s ease-out';
  particle.style.opacity = '0.8';
  
  document.body.appendChild(particle);
  
  // Animate particle
  setTimeout(() => {
    particle.style.transform = `translate(${(Math.random() - 0.5) * 30}px, ${(Math.random() - 0.5) * 30}px) scale(0)`;
    particle.style.opacity = '0';
  }, 10);
  
  // Remove particle after animation
  setTimeout(() => particle.remove(), 1000);
}

// Enhanced Particle System - optimized
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  
  // Reduce particle count on mobile/low-performance devices
  let particleCount = isMobile || isLowPerformance ? 15 : 30;
  if (reducedMotion) particleCount = 5;

  const fragment = document.createDocumentFragment(); // Better performance
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 10 + "s";
    particle.style.animationDuration = Math.random() * 15 + 10 + "s";
    
    // Random size
    const size = Math.random() * 6 + 2;
    particle.style.width = size + "px";
    particle.style.height = size + "px";

    const colors = [
      "var(--neon-blue)",
      "var(--neon-purple)",
      "var(--neon-pink)",
      "var(--neon-green)",
      "var(--neon-cyan)",
    ];
    particle.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    particle.style.boxShadow = `0 0 ${size * 2}px ${particle.style.background}`;

    fragment.appendChild(particle);
  }
  
  particlesContainer.appendChild(fragment);
}

// Parallax Effect - optimized with throttling
function initParallax() {
  if (reducedMotion || isMobile) return; // Skip on mobile or reduced motion
  
  const gradientBg = document.querySelector(".gradient-bg");
  let ticking = false;
  let lastScrollTop = 0;

  function updateParallax() {
    const scrolled = window.pageYOffset;
    
    // Only update if scroll position changed significantly
    if (Math.abs(scrolled - lastScrollTop) > 5) {
      const parallaxSpeed = 0.5;
      gradientBg.style.transform = `translateY(${
        scrolled * parallaxSpeed
      }px)`;
      
      // Reduced particle creation frequency
      if (Math.random() > 0.995 && !isLowPerformance) {
        createScrollParticle();
      }
      
      lastScrollTop = scrolled;
    }
    
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
}

// Create particles on scroll
function createScrollParticle() {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = Math.random() * 100 + "%";
  particle.style.top = window.pageYOffset + window.innerHeight + "px";
  particle.style.animation = "particle-float 5s linear forwards";

  document.getElementById("particles").appendChild(particle);

  setTimeout(() => particle.remove(), 5000);
}

// Carousel Functionality
let carouselPositions = [0, 0, 0];

function moveCarousel(carouselIndex, direction) {
  const carousel = document.querySelector(
    `[data-carousel="${carouselIndex}"]`
  );
  const slides = carousel.children.length;

  carouselPositions[carouselIndex] += direction;

  if (carouselPositions[carouselIndex] < 0) {
    carouselPositions[carouselIndex] = slides - 1;
  } else if (carouselPositions[carouselIndex] >= slides) {
    carouselPositions[carouselIndex] = 0;
  }

  carousel.style.transform = `translateX(-${
    carouselPositions[carouselIndex] * 100
  }%)`;
}

// Auto-rotate carousels
function autoRotateCarousels() {
  setInterval(() => {
    for (let i = 0; i < carouselPositions.length; i++) {
      moveCarousel(i, 1);
    }
  }, 5000);
}

// Image Hover Effect
function initImageHovers() {
  const webCards = document.querySelectorAll(".web-card img");

  webCards.forEach((img) => {
    const originalSrc = img.src;
    const hoverSrc = img.dataset.hover;

    if (hoverSrc) {
      img.parentElement.addEventListener("mouseenter", () => {
        img.src = hoverSrc;
      });

      img.parentElement.addEventListener("mouseleave", () => {
        img.src = originalSrc;
      });
    }
  });
}

// Scroll Reveal Animation
function initScrollReveal() {
  const reveals = document.querySelectorAll(".scroll-reveal");

  function revealOnScroll() {
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Check on load
}

// Header is now always styled, no scroll effect needed
function initHeaderEffect() {
  // Header maintains consistent styling
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Hover particle effects for interactive elements - optimized
function addHoverParticles() {
  if (isMobile || reducedMotion) return; // Skip on mobile
  
  const interactiveElements = document.querySelectorAll(
    ".glass, .download-btn, .tech-card"
  );
  
  // Use Intersection Observer to only add listeners for visible elements
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.addEventListener("mouseenter", handleHover, { passive: true });
      } else {
        entry.target.removeEventListener("mouseenter", handleHover);
      }
    });
  }, { threshold: 0.1 });
  
  function handleHover(e) {
    if (!isLowPerformance) {
      createHoverParticles(e.target);
    }
  }

  interactiveElements.forEach((element) => {
    observer.observe(element);
  });
}

function createHoverParticles(element) {
  const rect = element.getBoundingClientRect();
  const particleCount = 5;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.style.position = "fixed";
    particle.style.width = "4px";
    particle.style.height = "4px";
    particle.style.background = "var(--neon-cyan)";
    particle.style.borderRadius = "50%";
    particle.style.pointerEvents = "none";
    particle.style.zIndex = "9999";
    particle.style.left = rect.left + Math.random() * rect.width + "px";
    particle.style.top = rect.top + Math.random() * rect.height + "px";
    particle.style.transition = "all 1s ease-out";
    particle.style.opacity = "1";

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.style.transform = `translate(${
        (Math.random() - 0.5) * 100
      }px, ${(Math.random() - 0.5) * 100}px)`;
      particle.style.opacity = "0";
    }, 10);

    setTimeout(() => particle.remove(), 1000);
  }
}

// Cookie Popup Functions
function showCookiePopup() {
  const popup = document.getElementById("cookiePopup");
  setTimeout(() => {
    popup.classList.add("show");
  }, 2000);
}

function acceptCookies() {
  localStorage.setItem("cookieConsent", "accepted");
  hideCookiePopup();
}

function declineCookies() {
  localStorage.setItem("cookieConsent", "declined");
  hideCookiePopup();
}

function hideCookiePopup() {
  const popup = document.getElementById("cookiePopup");
  popup.classList.remove("show");
  // Completely hide the popup after animation
  setTimeout(() => {
    popup.style.display = "none";
  }, 300);
}

function checkCookieConsent() {
  const consent = localStorage.getItem("cookieConsent");
  if (!consent) {
    showCookiePopup();
  }
}

// Create Cyberpunk Grid Background
function createCyberGrid() {
  const gridBg = document.createElement('div');
  gridBg.className = 'cyber-grid-bg';
  document.body.appendChild(gridBg);
}

// Initialize section animations
function initSectionAnimations() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('scroll-reveal');
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initMouseTrail();
  createCyberGrid();
  createParticles();
  initParallax();
  initImageHovers();
  initScrollReveal();
  initHeaderEffect();
  addHoverParticles();
  autoRotateCarousels();
  checkCookieConsent();
  initSectionAnimations();

  // Add loading animation
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 1s ease";
    document.body.style.opacity = "1";
  }, 100);
});

// Performance optimization for animations
let ticking = false;
function requestTick() {
  if (!ticking) {
    window.requestAnimationFrame(updateAnimations);
    ticking = true;
  }
}

function updateAnimations() {
  ticking = false;
}

window.addEventListener("scroll", requestTick);
window.addEventListener("resize", requestTick);

// Make functions globally available for onclick handlers
window.moveCarousel = moveCarousel;
window.acceptCookies = acceptCookies;
window.declineCookies = declineCookies;
