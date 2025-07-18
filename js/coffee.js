// Copy address to clipboard
function copyAddress(elementId) {
  const element = document.getElementById(elementId);
  const address = element.textContent;

  navigator.clipboard
    .writeText(address)
    .then(() => {
      // Show success feedback
      const button = element.nextElementSibling.nextElementSibling;
      const originalText = button.textContent;
      button.textContent = "✅ Copied!";
      button.style.background = "var(--neon-green)";

      setTimeout(() => {
        button.textContent = originalText;
        button.style.background = "";
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = address;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      const button = element.nextElementSibling.nextElementSibling;
      const originalText = button.textContent;
      button.textContent = "✅ Copied!";
      button.style.background = "var(--neon-green)";

      setTimeout(() => {
        button.textContent = originalText;
        button.style.background = "";
      }, 2000);
    });
}

// Open Revolut (you'll need to replace with actual Revolut link)
function openRevolut() {
  // Replace with your actual Revolut payment link
  window.open("https://revolut.me/mehehe", "_blank");
}

// Open PayPal (you'll need to replace with actual PayPal link)
function openPayPal() {
  // Replace with your actual PayPal.me link
  window.open("https://www.paypal.me/DenisMatejcik367", "_blank");
}

// Add some interactive particles when hovering payment cards
document.querySelectorAll(".payment-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    createHoverParticles(this);
  });
});

function createHoverParticles(element) {
  const rect = element.getBoundingClientRect();
  const particleCount = 8;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.style.position = "fixed";
    particle.style.width = "6px";
    particle.style.height = "6px";
    particle.style.background =
      getComputedStyle(element).getPropertyValue("--card-color");
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

// Make functions globally available
window.copyAddress = copyAddress;
window.openRevolut = openRevolut;
window.openPayPal = openPayPal;
