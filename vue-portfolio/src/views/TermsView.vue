<template>
  <div class="terms-page">
    <div class="container">
      <div class="terms-content glass p-xl">
        <h1 class="text-gradient mb-lg">Terms of Service</h1>
        <div class="terms-text">
          <p class="mb-md">This portfolio website is provided "as is" for informational purposes.</p>
          <p class="mb-md">Feel free to view the projects and contact me for collaboration opportunities.</p>
          <p>All project rights belong to their respective owners and clients.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.terms-page {
  min-height: 100vh;
  padding: 140px 0 var(--space-2xl);
}

.terms-content {
  max-width: 800px;
  margin: 0 auto;
}

.terms-content h1 {
  font-family: var(--font-heading);
  font-size: var(--font-size-4xl);
  font-weight: 900;
}

.terms-text {
  color: var(--text-muted);
  line-height: var(--leading-relaxed);
}
</style>