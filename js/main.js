// Particle System
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 10 + "s";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";

    const colors = [
      "var(--neon-blue)",
      "var(--neon-purple)",
      "var(--neon-pink)",
      "var(--neon-green)",
      "var(--neon-cyan)",
    ];
    particle.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    particlesContainer.appendChild(particle);
  }
}

// Parallax Effect
function initParallax() {
  const parallaxContainer = document.querySelector(".parallax-container");
  const gradientBg = document.querySelector(".gradient-bg");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;

    gradientBg.style.transform = `translateY(${
      scrolled * parallaxSpeed
    }px)`;

    // Add floating particles on scroll
    if (Math.random() > 0.98) {
      createScrollParticle();
    }
  });
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

// Hover particle effects for interactive elements
function addHoverParticles() {
  const interactiveElements = document.querySelectorAll(
    ".glass, .download-btn, .tech-card"
  );

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", (e) => {
      createHoverParticles(e.target);
    });
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

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  createParticles();
  initParallax();
  initImageHovers();
  initScrollReveal();
  initHeaderEffect();
  addHoverParticles();
  autoRotateCarousels();
  checkCookieConsent();

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
