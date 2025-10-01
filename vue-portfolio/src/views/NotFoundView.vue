<template>
  <div class="not-found-page">
    <div class="container">
      <div class="not-found-content glass p-xl text-center">
        <h1 class="text-gradient mb-lg">404</h1>
        <h2 class="mb-md">Page Not Found</h2>
        <p class="mb-xl">The page you're looking for doesn't exist or has been moved.</p>
        <RouterLink to="/" class="btn btn-primary">Go Home</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.not-found-page {
  min-height: 100vh;
  padding: 140px 0 var(--space-2xl);
  display: flex;
  align-items: center;
}

.not-found-content {
  max-width: 600px;
  margin: 0 auto;
}

.not-found-content h1 {
  font-family: var(--font-heading);
  font-size: var(--font-size-5xl);
  font-weight: 900;
}

.not-found-content h2 {
  font-family: var(--font-heading);
  font-size: var(--font-size-2xl);
  color: var(--text-primary);
}

.not-found-content p {
  color: var(--text-muted);
}
</style>