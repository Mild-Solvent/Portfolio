<template>
  <div class="privacy-page">
    <div class="container">
      <div class="privacy-content glass p-xl">
        <h1 class="text-gradient mb-lg">Privacy Policy</h1>
        <div class="privacy-text">
          <p class="mb-md">This is a static portfolio website that respects your privacy.</p>
          <p class="mb-md">We don't collect or store any personal data. No tracking, no analytics, no cookies (except essential ones for functionality).</p>
          <p>This site is hosted on GitHub Pages and built with Vue.js.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.privacy-page {
  min-height: 100vh;
  padding: 140px 0 var(--space-2xl);
}

.privacy-content {
  max-width: 800px;
  margin: 0 auto;
}

.privacy-content h1 {
  font-family: var(--font-heading);
  font-size: var(--font-size-4xl);
  font-weight: 900;
}

.privacy-text {
  color: var(--text-muted);
  line-height: var(--leading-relaxed);
}
</style>