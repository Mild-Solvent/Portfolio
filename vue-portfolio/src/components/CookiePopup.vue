<template>
  <Teleport to="body">
    <div v-if="showPopup" class="cookie-popup glass" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-description">
      <h3 id="cookie-title">🍪 Cookie Notice</h3>
      <p id="cookie-description">
        This website uses essential cookies to ensure proper functionality. We
        don't track or collect any personal data. This is a static site hosted
        on GitHub Pages.
      </p>
      <div class="cookie-popup-buttons">
        <button class="btn btn-secondary" @click="declineCookies" type="button">
          Decline
        </button>
        <button class="btn btn-primary" @click="acceptCookies" type="button">
          Accept
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showPopup = ref(false)

const acceptCookies = () => {
  localStorage.setItem('cookieConsent', 'accepted')
  showPopup.value = false
}

const declineCookies = () => {
  localStorage.setItem('cookieConsent', 'declined')
  showPopup.value = false
}

onMounted(() => {
  // Check if user has already made a choice
  const consent = localStorage.getItem('cookieConsent')
  if (!consent) {
    // Show popup after a brief delay
    setTimeout(() => {
      showPopup.value = true
    }, 2000)
  }
})
</script>

<style scoped>
.cookie-popup {
  position: fixed;
  bottom: var(--space-lg);
  right: var(--space-lg);
  max-width: 400px;
  padding: var(--space-lg);
  z-index: var(--z-modal);
  animation: slideInUp 0.5s ease-out;
}

.cookie-popup h3 {
  font-family: var(--font-heading);
  font-size: var(--font-size-lg);
  color: var(--text-primary);
  margin-bottom: var(--space-sm);
}

.cookie-popup p {
  color: var(--text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-lg);
  font-size: var(--font-size-sm);
}

.cookie-popup-buttons {
  display: flex;
  gap: var(--space-sm);
  justify-content: flex-end;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .cookie-popup {
    bottom: var(--space-sm);
    right: var(--space-sm);
    left: var(--space-sm);
    max-width: none;
  }
  
  .cookie-popup-buttons {
    flex-direction: column;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .cookie-popup {
    animation: none;
  }
}
</style>